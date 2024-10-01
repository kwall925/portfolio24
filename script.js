
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId).parentElement;
    
    // Add or remove the "open" class to the section to expand/collapse
    section.classList.toggle("open");

    // Ensure dynamic height adjustment
    var content = document.getElementById(sectionId);
    if (section.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";  // Expand the section
    } else {
        content.style.maxHeight = null;  // Collapse the section
    }
}
