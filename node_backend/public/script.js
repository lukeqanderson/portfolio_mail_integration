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

// add event listeners for openining navbar dropdown
const navIcon = document.getElementById('smallNavIcon');
navIcon.addEventListener("click", navDropDown);

// add event lisetner for closing navbar on item selection
const navBarItems =  document.getElementsByClassName("navlink navitem");
for (let i = 0; i < navBarItems.length; i++) {
  navBarItems[i].addEventListener("click", navUp);
}

// add event listener for slideshow next and previous buttons
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click",minusSlides);
nextButton.addEventListener("click",plusSlides);

// variable to store the contact form
const form = document.querySelector("form");

// adds event lister for submit button click
form.addEventListener("submit", (e) => {
  // to prevent the page refreshing
  e.preventDefault;

  // to select input elements from form 
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  // creates an object with the input elements
  let contactData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value
  }

  // to send form data to the backend using AJAX
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.responseText);
    if (xhr.responseText === 'success') {
      alert("Message sent. Thank you!");
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      message.value = '';
    }
    else {
      alert("Message failed to send. Please email me at lukeqanderson@gmail.com");
    }
  }

  xhr.send(JSON.stringify(contactData));
})
