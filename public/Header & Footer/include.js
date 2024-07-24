function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(async (element) => {
      const file = element.getAttribute('data-include');
      const response = await fetch(file);
      const text = await response.text();
      element.innerHTML = text;
    });
  }
  
  document.addEventListener('DOMContentLoaded', includeHTML);