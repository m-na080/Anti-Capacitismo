console.log("Hello World no JS!");

function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").style.display = "block";
    history.pushState({ sidebar: true }, "");
}
function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    if (history.state && history.state.sidebar) {
      history.back();
    }
}
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar();
  });
  window.addEventListener("popstate", function (e) {
    closeSidebar();
  });