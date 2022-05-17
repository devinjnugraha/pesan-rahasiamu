const input = document.getElementById("input");
const output = document.getElementById("output");
const cariTauBtn = document.getElementById("cariTauBtn");
const card = document.getElementById("card");
const overlay = document.getElementById("overlay");

function decode() {
    setTimeout(() => {
        let arrInput = input.value.split(/\n/);

        arrInput.forEach((element) => {
            if (element === "") {
                let breaks = document.createElement("br");
                output.appendChild(breaks);
            } else {
                let par = document.createElement("p");
                par.textContent = atob(element).replaceAll("â", "'");
                output.appendChild(par);
            }
        });
        input.style.display = "none";
        cariTauBtn.style.display = "none";
        card.style.display = "block";
        window.scrollTo(0, 0);
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
        output.innerHTML = "";
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
