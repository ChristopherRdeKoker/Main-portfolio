//shortcuts
const navAboutLink = document.querySelector('.nav-about');
const modalAbout = document.querySelector('.about-modal');
const navContact = document.querySelector('.nav-contact');
const backgroundSection1 = document.querySelector('.background-section-1');

//function
// const displayToNone = function () {
//   modalAbout.style.display = 'none';
// };

// displayToNone();
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

navAboutLink.addEventListener('click', function (e) {
  e.preventDefault();
  modalAbout.classList.toggle('hidden');
});
