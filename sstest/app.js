let currentFile = null;
let allFolders = [];

async function loadJSON(path) {
  try {
    const fullPath = CONFIG.basePath + path;
    console.log('Loading JSON:', fullPath);
    const res = await fetch(fullPath);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return res.json();
  } catch (err) {
    console.error('JSON load error:', err);
    throw err;
  }
}

async function loadMarkdown(path) {
  const res = await fetch(CONFIG.basePath + path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.text();
}

function renderContent(markdown) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = marked.parse(markdown);
}

async function loadFile(path, fileItem) {
  try {
    if (currentFile) {
      currentFile.classList.remove('active');
    }
    fileItem.classList.add('active');
    currentFile = fileItem;

    const markdown = await loadMarkdown(path);
    renderContent(markdown);
  } catch (err) {
    const defaultMessage = "empty page";
    renderContent(defaultMessage);
    console.warn('File not found:', path);
  }
}

async function buildTree(folderPath, container, level = 0) {
  try {
    const data = await loadJSON(folderPath + 'content.json');
    
    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder';
    if (level > 0) folderDiv.style.marginLeft = '0';

    const header = document.createElement('div');
    header.className = 'folder-header';

    const toggle = document.createElement('div');
    toggle.className = 'folder-toggle';
    toggle.textContent = '+';

    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = ICONS.folderClosed;

    const name = document.createElement('span');
    name.className = 'folder-name';
    name.textContent = data.title;

    header.appendChild(toggle);
    header.appendChild(iconSpan);
    header.appendChild(name);
    folderDiv.appendChild(header);

    const content = document.createElement('div');
    content.className = 'folder-content';

    const folderState = {
      header,
      content,
      toggle,
      iconSpan,
      mainFile: data.mainFile ? folderPath + data.mainFile : null
    };
    allFolders.push(folderState);

    header.addEventListener('click', async (e) => {
      e.stopPropagation();
      const isOpen = content.classList.toggle('open');
      toggle.textContent = isOpen ? '−' : '+';
      iconSpan.innerHTML = isOpen ? ICONS.folderOpen : ICONS.folderClosed;
      
      if (data.mainFile && isOpen) {
        await loadFile(folderPath + data.mainFile, header);
      }
    });

    if (data.folders) {
      for (const folder of data.folders) {
        await buildTree(folderPath + folder + '/', content, level + 1);
      }
    }

    if (data.files) {
      for (const file of data.files) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        const fileIconSpan = document.createElement('span');
        fileIconSpan.innerHTML = ICONS.file;
        
        const fileText = document.createElement('span');
        fileText.textContent = file.title;
        
        fileItem.appendChild(fileIconSpan);
        fileItem.appendChild(fileText);
        
        fileItem.addEventListener('click', (e) => {
          e.stopPropagation();
          loadFile(folderPath + file.name, fileItem);
        });
        content.appendChild(fileItem);
      }
    }

    folderDiv.appendChild(content);
    container.appendChild(folderDiv);

  } catch (err) {
    console.error('Error building tree:', err);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = `Error loading folder: ${err.message}`;
    container.appendChild(errorDiv);
  }
}

document.getElementById('openAll').addEventListener('click', () => {
  allFolders.forEach(folder => {
    folder.content.classList.add('open');
    folder.toggle.textContent = '−';
    folder.iconSpan.innerHTML = ICONS.folderOpen;
  });
});

document.getElementById('closeAll').addEventListener('click', () => {
  allFolders.forEach(folder => {
    folder.content.classList.remove('open');
    folder.toggle.textContent = '+';
    folder.iconSpan.innerHTML = ICONS.folderClosed;
  });
});

async function init() {
  const sidebar = document.getElementById('sidebar');
  await buildTree('', sidebar);
  
  // Auto-open root folder
  if (allFolders.length > 0) {
    allFolders[0].header.click();
  }
}

init();