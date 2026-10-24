/* =========================================================
   Rishabh Garg – Portfolio
   1. Mobile menu
   2. Highlight the current section in the nav
   3. Contact form submission
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveNavLink();
  initContactForm();
});

/* ---------- 1. Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.classList.toggle("active", open);
    menu.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("active"));
  });

  // close after choosing a link
  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // close when clicking outside the header
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setOpen(false);
  });

  // close with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  // reset when the window grows back to desktop size
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setOpen(false);
  });
}

/* ---------- 2. Active nav link while scrolling ---------- */
function initActiveNavLink() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");
  if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  // a section counts as "current" when it crosses the middle of the screen
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------- 3. Contact form ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const button = form.querySelector('button[type="submit"]');

  const showStatus = (message, type) => {
    status.textContent = message;
    status.className = `form-status ${type}`;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const endpoint = form.getAttribute("action");

    // the form isn't connected to an email service yet
    if (!endpoint || endpoint === "#") {
      showStatus("The form isn't connected to an email service yet.", "error");
      return;
    }

    const originalLabel = button.textContent;
    button.disabled = true;
    button.textContent = "Sending...";
    showStatus("", "");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      form.reset();
      showStatus("Message sent. I'll get back to you soon.", "success");
    } catch (error) {
      console.error(error);
      showStatus("Couldn't send your message. Please try again in a moment.", "error");
    } finally {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  });
}