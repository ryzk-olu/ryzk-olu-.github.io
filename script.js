const themeBtn = document.getElementById("theme-btn");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeBtn.textContent = "☀️";
} else if (savedTheme === "dark") {
  body.classList.add("dark");
  themeBtn.textContent = "🌙";
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark");
    themeBtn.textContent = "🌙";
  } else {
    body.classList.add("light");
    themeBtn.textContent = "☀️";
  }
}

themeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
