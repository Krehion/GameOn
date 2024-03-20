function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// open modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalBg.addEventListener("click", (event) => {
  if (event.target === modalBg) {
    hideModal()
  }
})

modalClose.addEventListener("click", (event) => {
  if (event.target === modalClose) {
    hideModal()
  }
})

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// hide modal form
function hideModal() {
  modalBg.style.display = "none"
}

// ajouter : vider formulaire à l'envoi