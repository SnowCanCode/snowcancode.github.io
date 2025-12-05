const toggle = document.getElementById("themeToggle");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Toggle click
toggle.addEventListener("click", () => {
  let current = document.documentElement.getAttribute("data-theme");

  if (current === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
