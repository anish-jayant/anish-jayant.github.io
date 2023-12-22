document.addEventListener("DOMContentLoaded", function() {
    const toggleElements = document.querySelectorAll(".toggle");
    
    toggleElements.forEach(function(element) {
      element.addEventListener("click", function() {
        const target = this.nextElementSibling;
        target.style.display = target.style.display === "none" ? "block" : "none";
      });
    });
  });
  