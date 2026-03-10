let randomSize = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

let button = document.getElementById('button');
let heading = document.getElementById('heading');

button.addEventListener('click', () => {
    heading.style.fontSize = `${randomSize}px`;
})