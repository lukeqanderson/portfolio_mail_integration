/* Adds responsive class to drop down navbar items */
const navDropDown = () => {
  const topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav sticky") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav sticky";
  }
}

/* Adds responsive class condense navbar after a selection is made*/
const navUp = () => {
  const topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav sticky responsive" ) {
    topnav.className = "topnav sticky";
  } else {
    topnav.className = "topnav sticky responsive";
  }
}

// to display slides on click
const showSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("projectSlide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// for slide show 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
const minusSlides = () => {
  showSlides(slideIndex += -1);
}
const plusSlides = () => {
  showSlides(slideIndex += 1);
}

// for storing data from submitted contact form
const submitForm = (e) => {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // resets the form
  document.getElementsByClassName("form")[0].reset();
}

// add event listeners for openining navbar dropdown
const navIcon = document.getElementById('smallNavIcon');
navIcon.addEventListener("click", navDropDown);

// add event lisetner for closing navbar on item selection
const navBarItems =  document.getElementsByClassName("navlink navitem");
for (let i = 0; i < navBarItems.length; i++) {
  console.log(navBarItems);
  navBarItems[i].addEventListener("click", navUp);
}

// add event listener for slideshow next and previous buttons
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click",minusSlides);
nextButton.addEventListener("click",plusSlides);

// add event listener for form submit
const submit = document.getElementsByClassName("contact-button");
submit[0].addEventListener("submit", submitForm);
