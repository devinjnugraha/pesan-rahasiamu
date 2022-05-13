const input = document.getElementById("input");
const output = document.getElementById("output");
const cariTauBtn = document.getElementById("cariTauBtn");
const card = document.getElementById("card");
const overlay = document.getElementById("overlay");

function decode() {
  setTimeout(() => {
    let inputValue = atob(input.value);
    output.textContent = inputValue;
    input.style.display = "none";
    cariTauBtn.style.display = "none";
    card.style.display = "block";
  }, 300);
  showOverlay();
}

function kembali() {
  setTimeout(() => {
    input.style.display = "block";
    cariTauBtn.style.display = "inline-block";
    input.value = "";
    input.placeholder = "Your message";
    card.style.display = "none";
  }, 300);
  showOverlay();
}

function showOverlay() {
  overlay.classList.toggle("invisible");
  overlay.classList.toggle("opacity-100");
  setTimeout(function () {
    overlay.classList.toggle("opacity-100");
    setTimeout(() => {
      overlay.classList.toggle("invisible");
    }, 300);
  }, 1700);
}
