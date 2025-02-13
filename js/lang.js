
//crear carpeta con idiomas, y a cada archivo ponerle el idioma.js (en.js / es.js), a cada elemento en el body a cambiar idioma añadirle data-i18n, y el nombre de clase para ubicar en la carpeta idioma
//la carpeta idioma, solo acepta archivos json, y en formato diccionario --> 
/* {
"nombre":"descripcion",
"nombre":"descripcion"
} */

// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`../js/lang/${lang}.json`);
    return response.json();
  }
  
  // Function to set the language preference
  function setLanguagePreference(lang) {
    localStorage.setItem("language", lang);
    //location.reload();
  }
  
  // Function to update content based on selected language -
  function updateContent(langData) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = langData[key];
    });
  }
  
  // Function to change language
  async function changeLanguage(lang) {
    //await setLanguagePreference(lang);
    setLanguagePreference(lang);
  
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
  }
  
  // Call updateContent() on page load
  window.addEventListener("DOMContentLoaded", async () => {
    const userPreferredLanguage = localStorage.getItem("language") || "es";
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
  });
