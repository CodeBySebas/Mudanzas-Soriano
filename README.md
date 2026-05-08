# Mudanzas Soriano — Landing Page

Landing page profesional para empresa de mudanzas en Chile.
Desarrollada por **DevSebas** desde cero con HTML, CSS y JavaScript puro.

---

##  Tecnologías utilizadas

- **HTML5** — estructura semántica
- **CSS3** — estilos, variables, grid, flexbox y animaciones
- **JavaScript vanilla** — interacciones sin frameworks
- **Google Fonts** — tipografía Barlow Condensed + Barlow
- **Tabler Icons** — iconografía via CDN

---

##  Estructura del proyecto

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura completa de la página |
| `css/style.css` | Todos los estilos |
| `js/main.js` | Interacciones y animaciones |
| `img/` | Carpeta para imágenes |
| `README.md` | Documentación |

---

##  Secciones de la landing

1. **Navbar** — sticky, con links de navegación y botón CTA. En móvil colapsa en menú hamburger
2. **Hero** — título impactante con fondo navy oscuro y stats de credibilidad
3. **Servicios** — 4 tarjetas en grid con iconos e información de cada servicio
4. **Contador animado** — números que se animan al hacer scroll usando IntersectionObserver
5. **Cómo funciona** — 4 pasos del proceso en grid
6. **Reseñas** — 3 tarjetas con testimonios de clientes
7. **CTA Strip** — franja de llamada a la acción intermedia
8. **Contacto** — formulario que envía a WhatsApp + info de contacto
9. **Footer** — links, logo y copyright
10. **WhatsApp flotante** — botón fijo con animación de pulso

---

##  Funcionalidades JavaScript

- **Menú hamburger** — abre y cierra el nav en móvil
- **Navbar shadow** — sombra dinámica al hacer scroll
- **Scroll reveal** — elementos aparecen con animación al entrar al viewport
- **Contador animado** — números cuentan desde 0 hasta el valor objetivo
- **Formulario WhatsApp** — al enviar arma el mensaje con los datos y abre WhatsApp

---

##  Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--blue` | #1A56DB | Color principal |
| `--blue-dark` | #1040B0 | Hover de botones |
| `--blue-deeper` | #0B2A6B | CTA strip |
| `--blue-light` | #EBF2FF | Fondos de iconos |
| `--navy` | #0A1628 | Hero y footer |

---

##  Responsive

Diseñada **mobile-first** con 3 breakpoints:

- **Mobile** — `< 480px` — 1 columna
- **Tablet** — `< 768px` — 2 columnas
- **Desktop** — `> 768px` — diseño completo

---

## 🚀 Cómo correr el proyecto

1. Clona el repositorio
```bash
git clone https://github.com/TU-USUARIO/mudanzas-soriano.git
```
2. Abre la carpeta en VS Code
```bash
cd mudanzas-soriano
code .
```
3. Click derecho en `index.html` → **Open with Live Server**

---

## 📦 Próximos pasos

- [ ] Agregar fotos reales en la carpeta `img/`
- [ ] Subir a Hostinger en staging
- [ ] Conectar dominio `mudanzassoriano.cl`
- [ ] Implementar en WordPress

---

*Desarrollado por **DevSebas** — 2026*

