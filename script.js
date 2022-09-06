//shortcuts
const navAboutLink = document.querySelector('.nav-about');
const modalAbout = document.querySelector('.about-modal');
const navContact = document.querySelector('.nav-contact');
const modalContact = document.querySelector('.contact-modal');
const backgroundSection1 = document.querySelector('.background-section-1');
const introContainerCard = document.querySelector('.intro-container-card');
// const introParagraph = document.querySelector('.intro-paragraph');

// function
// const displayToNone = function () {
//   modalAbout.style.display = 'none';
//   modalContact.style.display = 'none';
// };

// const addBlur = function () {
//   introContainerCard.classList.add('blur');
//   // introParagraph.classList.add('blur');
// };

// const removeBlur = function () {
//   introContainerCard.classList.remove('blur');
// };
// // addBlur();
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

//attempting to fix modal conflicts [done]
navAboutLink.addEventListener('click', function (e) {
  e.preventDefault();

  if (!modalContact.classList.contains('hidden')) {
    modalContact.classList.add('hidden');
  }
  modalAbout.classList.toggle('hidden');
});

navContact.addEventListener('click', function (e) {
  e.preventDefault();

  if (!modalAbout.classList.contains('hidden')) {
    modalAbout.classList.add('hidden');
  }
  modalContact.classList.toggle('hidden');
});

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    !modalContact.classList.contains('hidden') |
      !modalAbout.classList.contains('hidden')
  ) {
    modalContact.classList.add('hidden');
    modalAbout.classList.add('hidden');
  }
});
/////////////////////////////////////////////
