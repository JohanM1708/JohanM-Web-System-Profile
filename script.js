/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */

const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Estoy aprendiendo a desarrollar aplicaciones y páginas web utilizando diferentes lenguajes y herramientas de programación, fortaleciendo mis habilidades para crear soluciones funcionales y resolver problemas tecnológicos.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "El Espinal, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (básico)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Estoy aprendiendo a desarrollar aplicaciones y páginas web utilizando diferentes lenguajes y herramientas de programación, fortaleciendo mis habilidades para crear soluciones funcionales y resolver problemas tecnológicos.",

  "edu.2.title": "Bachiller Académico",
  "edu.2.text":  "Durante mi formación adquirí conocimientos fundamentales y fortalecí habilidades como el trabajo en equipo, la responsabilidad y la resolución de problemas.",

  "exp.1.title": "Desarrollo de Página Web",
  "exp.1.text":  "Desarrollé una página web utilizando HTML, CSS y JavaScript, aplicando diseño responsivo, navegación entre secciones y funcionalidades interactivas.",

  "exp.2.title": "Aplicación Web de Matrices",
  "exp.2.text":  "Desarrollé una aplicación web para realizar operaciones con matrices, utilizando HTML, CSS y JavaScript para implementar su interfaz y funcionamiento.",

  "portfolio.title": "Proyectos",

  "project.1.title": "Perfil Web Profesional",
  "project.1.text":  "HTML · CSS · JavaScript",

  "project.2.title": "Aplicación Web de Matrices",
  "project.2.text":  "HTML · CSS · JavaScript",

  "project.3.title": "Sistema de Registro de Usuarios",
  "project.3.text":  "Laravel · PHP · MySQL · Bootstrap",

  "contact.title":      "Contacto",
  "contact.intro":      "¿Tienes un proyecto, una oportunidad de práctica o deseas contactarme? Puedes escribirme a través de los siguientes medios.",
  "contact.emailLabel": "Correo",
  "contact.linkedinValue": "Mi perfil profesional",

  "footer.note": "Johan Melo · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */

const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am learning to develop web applications and websites using different programming languages and development tools. I am strengthening my skills to build functional solutions and solve technology-related problems.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "El Espinal, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (basic)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "I am learning to develop web applications and websites using different programming languages and tools, strengthening my ability to build functional solutions and solve technology-related problems.",

  "edu.2.title": "High School Diploma",
  "edu.2.text":  "During my academic education, I developed fundamental knowledge and strengthened skills such as teamwork, responsibility, learning and problem solving.",

  "exp.1.title": "Website Development",
  "exp.1.text":  "Developed a website using HTML, CSS and JavaScript, implementing responsive design, section navigation and interactive features.",

  "exp.2.title": "Web Matrix Application",
  "exp.2.text":  "Developed a web application for matrix operations using HTML, CSS and JavaScript to implement its interface and functionality.",

  "portfolio.title": "Projects",

  "project.1.title": "Professional Web Profile",
  "project.1.text":  "HTML · CSS · JavaScript",

  "project.2.title": "Web Matrix Application",
  "project.2.text":  "HTML · CSS · JavaScript",

  "project.3.title": "User Registration System",
  "project.3.text":  "Laravel · PHP · MySQL · Bootstrap",

  "contact.title":      "Contact",
  "contact.intro":      "Do you have a project, an internship opportunity or would you like to contact me? You can reach me through the following channels.",
  "contact.emailLabel": "Email",
  "contact.linkedinValue": "My professional profile",

  "footer.note": "Johan Melo · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];

  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");

  if (boton) {
    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' +
      idioma.toUpperCase() +
      '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' +
      otro.toUpperCase() +
      '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es"
        ? "Switch to English"
        : "Cambiar a español"
    );
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");

  menuVisible = !menuVisible;

  nav.className = menuVisible
    ? "responsive"
    : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje =
      barra.getAttribute("data-percent") || "0";

    barra.style.width = porcentaje + "%";

    const etiqueta = barra.querySelector("span");

    if (etiqueta) {
      etiqueta.textContent = porcentaje + "%";
    }
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador =
    new IntersectionObserver((entradas, obs) => {

      entradas.forEach(entrada => {

        if (entrada.isIntersecting) {
          mostrar(entrada.target);
          obs.unobserve(entrada.target);
        }

      });

    }, { threshold: 0.4 });

  barras.forEach(
    barra => observador.observe(barra)
  );
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
