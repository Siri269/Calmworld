function navigateToNewScreen() {
  window.location.href = "siri269.github.io/Calmworld/Hold-Breath.html";
}

document.getElementById("changeScreenButton").addEventListener("click", function() {
  setTimeout(navigateToNewScreen, 500);
});

function change(){
  setTimeout(navigateToNewScreen, 500);
}

window.onload = change;
