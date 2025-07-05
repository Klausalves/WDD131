// 1. Populates the current year in the footer
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// 2. Populates the document's last modified date in the footer
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}