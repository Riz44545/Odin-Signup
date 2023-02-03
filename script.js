const btn = document.querySelector('#create-account');
const pass = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password');
const message = document.querySelector('.error-message');

btn.addEventListener('click', (evt) => {
    message.style.display = 'block';
    message.textContent = ''

    if(pass.value == '' || confirm.value == '') {
        evt.preventDefault();
        message.textContent = 'Don\'t leave any empty fields'
    }
    else if(pass.value !== confirm.value) {
        evt.preventDefault()
        message.textContent = 'Passwords do not match.'
    }
    else {
        location.reload();
    }
})