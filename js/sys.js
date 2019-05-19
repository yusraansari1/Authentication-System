document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
var loginDiv = document.getElementById('login-div');
var welcomeDiv = document.getElementById('welcome-div');
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close()
        signupForm.reset()
    });
});
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        loginDiv.style.display = 'block';
        welcomeDiv.style.display = 'none';
    });
});
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
    loginForm.reset();
    welcomeDiv.style.display = 'block';
    loginDiv.style.display = 'none';
    });
});
