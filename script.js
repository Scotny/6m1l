const root = document.documentElement;

function Dark() {
  root.style.setProperty("--body-bg", "black");
  root.style.setProperty("--text-c", "white");
  root.style.setProperty("--l-mode", "#C4B5A5");
  root.style.setProperty("--d-mode", "#FA9021");
}

function Light() {
    root.style.setProperty("--body-bg", "#C4B5A5");
    root.style.setProperty("--text-c", "black");
    root.style.setProperty("--l-mode", "#FA9021");
    root.style.setProperty("--d-mode", "black");
    }
