//shortcuts
const aboutInfo = document.querySelector('.nav-about');
const modalAbout = document.querySelector('.about-modal');

//function
const hideAboutCard = function (e) {
  e.preventDefault();
  if (modalAbout.classList)
};

//init
modalAbout.classList.add('hidden');

//Event listeners
aboutInfo.addEventListener('click', function (e) {
  e.preventDefault();
  modalAbout.classList.toggle('hidden');

});
