// Resources folder special features
let resourcesData = [];

async function initResourcesSearch(folderPath) {
  // Load all files in Resources folder
  try {
    const data = await loadJSON(folderPath + 'content.json');
    
    // Create search interface
    const searchContainer = document.createElement('div');
    searchContainer.className = 'resources-search';
    searchContainer.innerHTML = `
      <div style="margin-bottom: 12px;">
        <input type="text" id="resourceSearch" placeholder="Search resources..." style="width: 100%; padding: 6px; border: 1px solid #999; font-size: 13px;">
      </div>
      <div id="searchResults"></div>
    `;
    
    // Load all resource files into memory
    resourcesData = [];
    if (data.files) {
      for (const file of data.files) {
        try {
          const content = await loadMarkdown(folderPath + file.name);
          resourcesData.push({
            title: file.title,
            name: file.name,
            path: folderPath + file.name,
            content: content
          });
        } catch (err) {
          console.warn('Could not load resource:', file.name);
        }
      }
    }
    
    // Recursively load from subfolders
    if (data.folders) {
      for (const folder of data.folders) {
        await loadResourcesFromFolder(folderPath + folder + '/');
      }
    }
    
    return searchContainer;
  } catch (err) {
    console.error('Error initializing resources search:', err);
    return null;
  }
}

async function loadResourcesFromFolder(folderPath) {
  try {
    const data = await loadJSON(folderPath + 'content.json');
    
    if (data.files) {
      for (const file of data.files) {
        try {
          const content = await loadMarkdown(folderPath + file.name);
          resourcesData.push({
            title: file.title,
            name: file.name,
            path: folderPath + file.name,
            content: content
          });
        } catch (err) {
          console.warn('Could not load resource:', file.name);
        }
      }
    }
    
    if (data.folders) {
      for (const folder of data.folders) {
        await loadResourcesFromFolder(folderPath + folder + '/');
      }
    }
  } catch (err) {
    console.warn('Error loading folder:', folderPath);
  }
}

function searchResources(query) {
  if (!query.trim()) {
    return [];
  }
  
  const lowerQuery = query.toLowerCase();
  const results = [];
  
  for (const resource of resourcesData) {
    const titleMatch = resource.title.toLowerCase().includes(lowerQuery);
    const contentMatch = resource.content.toLowerCase().includes(lowerQuery);
    
    if (titleMatch || contentMatch) {
      // Find context around match
      let snippet = '';
      if (contentMatch) {
        const index = resource.content.toLowerCase().indexOf(lowerQuery);
        const start = Math.max(0, index - 50);
        const end = Math.min(resource.content.length, index + 100);
        snippet = '...' + resource.content.substring(start, end) + '...';
      }
      
      results.push({
        ...resource,
        snippet: snippet
      });
    }
  }
  
  return results;
}

function displaySearchResults(results) {
  const resultsDiv = document.getElementById('searchResults');
  
  if (results.length === 0) {
    resultsDiv.innerHTML = '<div style="color: #666; padding: 8px;">No results found</div>';
    return;
  }
  
  let html = '<div style="margin-top: 12px;">';
  for (const result of results) {
    html += `
      <div class="search-result-item" data-path="${result.path}" style="padding: 8px; margin-bottom: 8px; border: 1px solid #ddd; cursor: pointer; background: #fff;">
        <div style="font-weight: bold; margin-bottom: 4px;">${result.title}</div>
        ${result.snippet ? `<div style="font-size: 12px; color: #666;">${result.snippet}</div>` : ''}
      </div>
    `;
  }
  html += '</div>';
  
  resultsDiv.innerHTML = html;
  
  // Add click handlers
  document.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', async () => {
      const path = item.dataset.path;
      const markdown = await loadMarkdown(path.replace(CONFIG.basePath, ''));
      renderContent(markdown);
    });
  });
}