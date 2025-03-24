let activeSection = null;

function toggleSection(sectionId) {
    if (activeSection) {
        activeSection.classList.add("hidden"); 
    }
    let section = document.getElementById(sectionId);
    if (section !== activeSection) {
        section.classList.remove("hidden");
        activeSection = section;
    } else {
        activeSection = null;
    }
}