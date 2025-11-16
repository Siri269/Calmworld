function navigateToNewScreen() {
  window.location.href = "Hold-Breath.html";
}

document.getElementById("changeScreenButton").addEventListener("click", function() {
  setTimeout(navigateToNewScreen, 4000);
});
