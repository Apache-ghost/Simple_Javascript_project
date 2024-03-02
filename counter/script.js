const counterDisplay = document.getElementById('counterDisplay');
const counterAddButton = document.getElementById('counterAdd');
const counterSubButton = document.getElementById('counterSub');

let counter = 0;

counterAddButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

counterSubButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterDisplay.textContent = counter;
    }
});