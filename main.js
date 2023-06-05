// DOM Elements

const boxes = document.querySelectorAll(".box"),
image = document.querySelector(".image");



// loop masing2 element box

boxes.forEach(box => {
    box.addEventListener("dragover", e => {
        e.preventDefault();
        box.classList.add("hover");
    });

    box.addEventListener("dragleave", () => {
        box.classList.remove("hover");
     });

     box.addEventListener("drop", () => {
        box.appendChild(image);
        box.classList.remove("hover");
     })
    });