function navigateToNewScreen() {
  window.location.href = "siri269.github.io/Calmworld/Hold-Breath.html";
}

document.getElementById("changeScreenButton").addEventListener("click", function() {
  setTimeout(navigateToNewScreen, 4000);
});

window.onload = setTimeout(navigateToNewScreen, 4000);
