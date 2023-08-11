const form = document.querySelector('form');
const formwrapper = document.querySelector('.form-wrapper');
const tycard_wrapper = document.querySelector('.hidden');
const userRatingChosen = document.querySelector('.userRatingChosen');
const radioLabels = document.querySelectorAll('.num');

form.addEventListener('submit', e => {
    e.preventDefault();
    formwrapper.classList.add('hidden');
    tycard_wrapper.classList.remove('hidden'); 
    userRatingChosen.textContent = e.target.rating.value;// alternatively this would also work: document.querySelector('input[name="rating"]:checked').value;
});
