// Favorites management
let favorites = [];

function loadFavorites() {
  const saved = localStorage.getItem('trpg-favorites');
  if (saved) {
    try {
      favorites = JSON.parse(saved);
    } catch (err) {
      favorites = [];
    }
  }
}

function saveFavorites() {
  localStorage.setItem('trpg-favorites', JSON.stringify(favorites));
}

function addFavorite(path, title) {
  const existing = favorites.find(f => f.path === path);
  if (!existing) {
    favorites.push({ path, title, timestamp: Date.now() });
    saveFavorites();
    updateFavoritesUI();
  }
}

function removeFavorite(path) {
  favorites = favorites.filter(f => f.path !== path);
  saveFavorites();
  updateFavoritesUI();
}

function isFavorite(path) {
  return favorites.some(f => f.path === path);
}

function toggleFavorite(path, title) {
  if (isFavorite(path)) {
    removeFavorite(path);
  } else {
    addFavorite(path, title);
  }
}

function updateFavoritesUI() {
  // Update star buttons if they exist
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const path = btn.dataset.path;
    btn.textContent = isFavorite(path) ? '★' : '☆';
    btn.style.color = isFavorite(path) ? '#ffd700' : '#999';
  });
}

function showFavoritesList() {
  let html = '<h1>Favorites</h1>';
  
  if (favorites.length === 0) {
    html += '<p>No favorites yet. Click the star icon on any page to add it to favorites.</p>';
  } else {
    html += '<div style="margin-top: 16px;">';
    favorites.forEach(fav => {
      html += `
        <div class="favorite-item" style="padding: 8px; margin-bottom: 8px; border: 1px solid #ddd; background: #f9f9f9; display: flex; justify-content: space-between; align-items: center;">
          <span class="fav-link" data-path="${fav.path}" style="cursor: pointer; color: #0066cc;">${fav.title}</span>
          <button class="remove-fav-btn" data-path="${fav.path}" style="background: #fff; border: 1px solid #999; padding: 2px 8px; cursor: pointer;">Remove</button>
        </div>
      `;
    });
    html += '</div>';
  }
  
  document.getElementById('content').innerHTML = html;
  
  // Add click handlers
  document.querySelectorAll('.fav-link').forEach(link => {
    link.addEventListener('click', async () => {
      const path = link.dataset.path;
      await loadFile(path, link);
      addFavoriteButton(path);
    });
  });
  
  document.querySelectorAll('.remove-fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFavorite(btn.dataset.path);
      showFavoritesList();
    });
  });
}

function addFavoriteButton(filePath, fileTitle = 'Current Page') {
  // Remove existing favorite button if any
  const existingBtn = document.querySelector('.favorite-btn');
  if (existingBtn) existingBtn.remove();
  
  // Create favorite button and add to header
  const favBtn = document.createElement('button');
  favBtn.className = 'favorite-btn header-btn';
  favBtn.dataset.path = filePath;
  favBtn.textContent = isFavorite(filePath) ? '★' : '☆';
  favBtn.style.color = isFavorite(filePath) ? '#ffd700' : '#999';
  favBtn.title = isFavorite(filePath) ? 'Remove from favorites' : 'Add to favorites';
  
  favBtn.addEventListener('click', () => {
    toggleFavorite(filePath, fileTitle);
  });
  
  // Add to header
  const header = document.getElementById('header');
  header.appendChild(favBtn);
}

// Initialize favorites on page load
loadFavorites();