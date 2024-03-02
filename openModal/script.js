const openModalbtnElement = document.querySelector('#openModal');
const modalbtnElement = document.querySelector('.modal');
const contentElement = modalbtnElement.querySelector('.modal_content');

openModalbtnElement.addEventListener('click', () => {
    modalbtnElement.classList.add('open');
});

modalbtnElement.addEventListener('click', () => {
    modalbtnElement.classList.remove('open');
});