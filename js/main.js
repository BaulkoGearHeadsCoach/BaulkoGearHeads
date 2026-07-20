// Baulko Gearheads · shared client-side behaviour
// No build step — plain browser JavaScript.

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMobile");

  if (toggle && menu) {
    const close = () => {
      menu.classList.remove("open");
      toggle.textContent = "Menu";
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.textContent = isOpen ? "Close" : "Menu";
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after choosing a link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    // Close the menu if the viewport grows back to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) close();
    });
  }

  // Keep the footer copyright year current
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
