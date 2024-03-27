// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const btnClose = document.getElementById("btnThanks");

// open modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalBg.addEventListener("click", (event) => {
  if (event.target === modalBg) {
    hideModal();
  }
});

modalClose.addEventListener("click", (event) => {
  if (event.target === modalClose) {
    hideModal();
  }
});

btnClose.addEventListener("click", (event) => {
  if (event.target === btnClose) {
    hideModal();
  }
});

// launch modal function
function launchModal() {
  modalBg.style.display = "block";
}

// hide modal function
function hideModal() {
  modalBg.style.display = "none";
}
