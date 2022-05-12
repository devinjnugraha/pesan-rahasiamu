const input = document.getElementById("input");
const output = document.getElementById("output");
const cariTauBtn = document.getElementById("cariTauBtn");
const card = document.getElementById("card");

function decrypt() {
  let inputValue = atob(input.value);
  output.innerHTML = inputValue;
  input.style.display = "none";
  cariTauBtn.style.display = "none";
  card.style.display = "block";
}

function kembali() {
  input.style.display = "block";
  cariTauBtn.style.display = "inline-block";
  input.value = "";
  input.placeholder = "Your message";
  card.style.display = "none";
}
