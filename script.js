//shortcuts
const navAboutLink = document.querySelector('.nav-about');
const modalAbout = document.querySelector('.about-modal');
const navContact = document.querySelector('.nav-contact');
const backgroundSection1 = document.querySelector('.background-section-1');

//function
const showModalAbout = function () {
  modalAbout.classList.remove('close-modal');
};

const hideModalAbout = function () {
  modalAbout.classList.add('close-modal');
};

//init
hideModalAbout();
////////////////////////////////////////////////

//color nav items
navAboutLink.addEventListener('mouseover', function (e) {
  e.preventDefault();
  navAboutLink.style.textShadow = '2px 2px rgba(232, 45, 32, 0.692)';
});
navAboutLink.addEventListener('mouseleave', function (e) {
  e.preventDefault();
  navAboutLink.style.textShadow = '0px 0px rgba(0,0,0,0) ';
});

navContact.addEventListener('mouseover', function (e) {
  e.preventDefault();
  navContact.style.textShadow = '2px 2px rgba(232, 45, 32, 0.692)';
});
navContact.addEventListener('mouseleave', function (e) {
  e.preventDefault();
  navContact.style.textShadow = '0px 0px rgba(0,0,0,0) ';
});

///////////////////////////////////////////////////////////////
//event listeners
//Nav-about
navAboutLink.addEventListener('click', function (e) {
  e.preventDefault();

  if (modalAbout.classList.contains('close-modal')) {
    showModalAbout();
  } else {
    hideModalAbout();
  }
});
