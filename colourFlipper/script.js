const colorDisplay = document.getElementById('currentColor');
const button = document.getElementById('colorButton');

button.addEventListener('click', changeColor);

function changeColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
}