// Open Menu
function openMenu() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").style.animation = "fadeIn 0.5s";
  return;
}

// Close Menu
function closeMenu() {
  document.getElementById("menu").style.animation = "fadeOut 0.5s";
  document.getElementById("menu").style.visibility = "hidden";
  document.getElementById("menu").style.display = "none";
  return;
}
