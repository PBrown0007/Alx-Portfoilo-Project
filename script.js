const API_URL = 'https://api.unsplash.com/search/photos';
const CLIENT_ID = 'D49H1fKKxpe0FamnUM2bs7SACemocCCl9w0XJ_UXI9E';

let currentPage;
let maxPages;
let query;
const images = document.querySelector('.images');
const showMore = document.querySelector('.show-more');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const imageUpload = document.getElementById('image-upload');

showMore.addEventListener('click', () => {
    currentPage++;
    processImages(query, currentPage);
});

document.forms['image-search'].addEventListener('submit', (e) => {
    e.preventDefault();
    query = document.querySelector('#query').value.trim();
    if (!query) return;
    searchImages(query);
});

gridViewBtn.addEventListener('click', () => {
    images.classList.remove('list-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
});

listViewBtn.addEventListener('click', () => {
    images.classList.add('list-view');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
});

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        // For a true reverse image search, you'd need to implement server-side logic
        // This is just a placeholder using the filename
        const relatedTerm = file.name.split('.')[0];
        searchImages(relatedTerm);
    }
});

function searchImages(query) {
    currentPage = 1;
    images.innerHTML = '';
    processImages(query, currentPage);
}

async function processImages(query, page) {
    try {
        const response = await callApi(query, page);
        maxPages = response.total_pages;
        const results = response.results;

        for (const result of results) {
            const src = result.urls.small;
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            
            const img = document.createElement('img');
            img.src = src;
            img.alt = result.alt_description || 'Image';
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            
            const shareBtn = document.createElement('button');
            shareBtn.textContent = 'Share';
            shareBtn.addEventListener('click', () => shareImage(result.links.html));
            
            const copyLinkBtn = document.createElement('button');
            copyLinkBtn.textContent = 'Copy Link';
            copyLinkBtn.addEventListener('click', () => copyImageLink(result.links.html));
            
            overlay.appendChild(shareBtn);
            overlay.appendChild(copyLinkBtn);
            
            imageContainer.appendChild(img);
            imageContainer.appendChild(overlay);
            images.appendChild(imageContainer);
        }

        showMore.hidden = currentPage >= maxPages;
    } catch (error) {
        console.error('Error fetching images:', error);
        images.innerHTML = '<p>An error occurred while fetching images. Please try again later.</p>';
    }
}

async function callApi(query, page) {
    const url = new URL(API_URL);
    url.searchParams.append('client_id', CLIENT_ID);
    url.searchParams.append('query', query);
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', 12);
    url.searchParams.append('orientation', 'landscape');

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

function shareImage(url) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this image!',
            url: url
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        window.open(`https://twitter.com/intent/tweet?text=Check%20out%20this%20image!&url=${encodeURIComponent(url)}`, '_blank');
    }
}

function copyImageLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Image link copied to clipboard!');
    }).catch(console.error);
}
