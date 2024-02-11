// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const topNav = document.getElementById("myTopnav");
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.content');

// Open or close the navigation
topNav.addEventListener('click', editNav);
function editNav(event) {
  if (this.className === "topnav") {
    this.className += " responsive";
  } else {
    this.className = "topnav";
  }
}

modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
})
closeButton.addEventListener('click', closeModal);
modalbg.addEventListener('click', closeModal)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


