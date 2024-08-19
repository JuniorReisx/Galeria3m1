document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        fetch('/postPessoa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(() => {
            form.reset(); 
        })
        .catch(error => {
            console.error('Error patient: ', error);
        });
    });
});
document.getElementById('submit').onclick = function() {
    window.location.href = './galeria.html';
};