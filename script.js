function showSection(sectionId) {
    // hide all sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(sec => sec.classList.remove("active"));
  
    // show clicked one
    document.getElementById(sectionId).classList.add("active");
  }
  
  