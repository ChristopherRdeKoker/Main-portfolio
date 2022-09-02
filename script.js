//shortcuts
const navAboutLink = document.querySelector('.nav-about');
const modalAbout = document.querySelector('.about-modal');

//function
const initShowModalAbout = function () {
  if (modalAbout.classList.contains('close-modal')) {
    modalAbout.classList.remove('close-modal');
  }
};

const hideModalAbout = function () {
  if (!modalAbout.classList.contains('close-modal')) {
    modalAbout.classList.add('close-modal');
  }
};

//init
initShowModalAbout();
////////////////////////////////////////////////

//event listeners
