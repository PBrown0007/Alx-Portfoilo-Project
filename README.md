# ImageExplorer: Advanced Image Search Gallery

## Description
ImageExplorer is a sophisticated image search and discovery platform that leverages the Unsplash API to provide users with a rich, interactive experience. This web application allows users to search for images, explore visually similar content through reverse image search, and interact with search results in multiple view modes.

## Features
1. **Image Search**: 
   - Powerful search functionality using keywords
   - Access to millions of high-quality images from Unsplash

2. **Reverse Image Search**:
   - Upload an image from your device
   - Discover visually similar images based on your upload

3. **Dynamic Layout**:
   - Toggle between grid and list views
   - Responsive design for optimal viewing on various devices

4. **Infinite Scrolling**:
   - "Show More" button to load additional images
   - Seamless browsing experience

5. **Image Interaction**:
   - Share images directly from the gallery
   - Easy copy-to-clipboard function for image links

6. **User-Friendly Interface**:
   - Clean, intuitive design
   - Fast and responsive user experience

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Unsplash API

## Setup
1. Clone the repository to your local machine.
2. Obtain an API key from the [Unsplash Developer portal](https://unsplash.com/developers).
3. Replace the `CLIENT_ID` in the `main.js` file with your Unsplash API key.
4. Open the `index.html` file in a web browser.

## Usage
1. **Text-Based Search**:
   - Enter a search term in the input field
   - Click the "Search" button or press Enter
   - Browse through the displayed images

2. **Reverse Image Search**:
   - Click on the "Upload Image" button
   - Select an image file from your device
   - View images related to your uploaded image

3. **Exploring Results**:
   - Toggle between grid and list views using the view buttons
   - Click "Show More" to load additional images
   - Hover over images to reveal share and copy link options

4. **Interacting with Images**:
   - Click "Share" to share an image (uses native sharing on supported platforms)
   - Click "Copy Link" to copy the image URL to your clipboard

## API Reference
This project uses the [Unsplash API](https://unsplash.com/documentation) to fetch images. Please refer to their documentation for more details on API usage and limitations.


## Author
[Prince Peter Ojezua]

## Acknowledgements
- [Unsplash](https://unsplash.com) for providing the API and images

## Future Enhancements
- Implement user accounts for saving favorite images
- Add advanced filtering options (by color, orientation, etc.)
- Integrate with additional image APIs for more diverse results
