function toggleSection(sectionId) {
    var section = document.getElementById(sectionId).parentElement;
    
    // Add or remove the "open" class to the section to expand/collapse
    section.classList.toggle("open");

    // Get the h2 element and the arrow span inside the section
    var heading = section.querySelector('h2');
    var arrow = heading.querySelector('.arrow');
    
    // Ensure dynamic height adjustment
    var content = document.getElementById(sectionId);
    if (section.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";  // Expand the section
        arrow.innerHTML = '&#x21e7;';  // Change arrow to up (⇧)
    } else {
        content.style.maxHeight = null;  // Collapse the section
        arrow.innerHTML = '&#x21e9;';  // Change arrow to down (⇩)
    }
}

window.addEventListener('load', function() {
    // Select all h2 elements and the profile image
    const headings = document.querySelectorAll('h2');
    const profilePic = document.querySelector('.profpic');

    // Apply fade-in class to h2 elements
    headings.forEach(heading => {
        heading.classList.add('fade-in');
    });

    // Apply fade-in class to the profile picture
    if (profilePic) {
        profilePic.classList.add('fade-in');
    }
});

// Replace with your personal access token
const figmaToken = 'figd_v3tRWHBHqAjkmGsvLtLB9hWTL7Ug2-gSmhSlpY2V';

// Replace with your Figma project ID
const projectId = 'YOUR_PROJECT_ID';

// Function to fetch files from a Figma project
async function getFigmaFiles() {
    const response = await fetch(`https://api.figma.com/v1/projects/${projectId}/files`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${figmaToken}`
        }
    });
    
    const data = await response.json();
    return data.files;
}

// Function to display Figma project links and thumbnails on the page
async function displayFigmaThumbnails() {
    const figmaFiles = await getFigmaFiles();
    const figmaLinksContainer = document.getElementById('figma-links');
    
    // Create links dynamically for each Figma file
    figmaFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = `https://www.figma.com/file/${file.key}`;
        link.textContent = file.name;
        link.target = '_blank'; // Open in new tab

        // Create an image element for the thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.src = file.thumbnail_url;  // Use the thumbnail URL from the API
        thumbnail.alt = `${file.name} thumbnail`;
        thumbnail.style.width = '150px';  // Set a default size for the thumbnail

        // Append the thumbnail and link to the container
        figmaLinksContainer.appendChild(thumbnail);
        figmaLinksContainer.appendChild(link);
    });
}

// Call the function to display the thumbnails and links on page load
window.onload = displayFigmaThumbnails;

