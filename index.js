// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Elements for interactivity
    const randomCoffeeBtn = document.querySelector('.btn.turquoise-bg');
    const jsonCoffeeBtn = document.querySelector('.btn.amethyst-bg');
    const coffeeMachineMsg = document.createElement('div');

    // Create a section for the coffee machine message
    coffeeMachineMsg.classList.add('teapot-message');
    coffeeMachineMsg.innerHTML = `
        <h1>I'm a coffee machine</h1>
        <p>This server is a coffee machine, not a teapot.</p>
    `;
    document.body.appendChild(coffeeMachineMsg);

    // Event listener for random coffee image
    randomCoffeeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        fetchRandomCoffee();
    });

    // Event listener for random coffee JSON
    jsonCoffeeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        fetchRandomCoffeeJSON();
    });

    // Function to fetch a random coffee image
