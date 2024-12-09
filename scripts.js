const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;

    if (!email.includes('@')) {
        alert('Veuillez entrer une adresse email valide.');
        e.preventDefault();
    }

    if (name.trim() === '') {
        alert('Veuillez entrer votre nom.');
        e.preventDefault();
    }
});