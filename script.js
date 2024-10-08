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
