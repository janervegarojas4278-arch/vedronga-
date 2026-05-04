document.addEventListener("DOMContentLoaded", () => {
  async function loadComponent(id, file) {
    try {
      const response = await fetch(`./components/${file}`);
      if (!response.ok) {
        throw new Error(`No se pudo cargar ${file}: ${response.status}`);
      }
      const html = await response.text();
      document.getElementById(id).innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }

  loadComponent("navbar", "navbar.html");
  loadComponent("hero", "hero.html");
  loadComponent("servicios", "servicios.html");
  loadComponent("portafolio", "portafolio.html");
  loadComponent("documentos", "documentos.html");
  loadComponent("contacto", "contacto.html");
  loadComponent("footer", "footer.html");
});
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Cargar componentes
loadComponent("navbar", "components/navbar.html");
loadComponent("gallery", "components/gallery.html");
loadComponent("footer", "components/footer.html");

// Para documentos.html
loadComponent("pdf-buttons", "components/pdf-buttons.html");

