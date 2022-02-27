import './style.css';

let contentContainer = document.getElementById('content');

const heading = document.createElement('h1');
heading.innerText = 'Hello, webpack! 2.1';
heading.classList.add('hello');

contentContainer.appendChild(heading);