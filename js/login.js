const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');


const valInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'

}

input.addEventListener('input', valInput);
form.addEventListener('submit', handleSubmit);