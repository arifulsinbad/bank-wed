

document.getElementById('btn-login').addEventListener('click', function(){
const emailField = document.getElementById('email-check');
const email = emailField.value;


const passwordField = document.getElementById('password-check');
const password = passwordField.value;

if(email === 'sinbad@hossan.com' && password === 'sinbad'){
 window.location.href = 'bank.html';
}
else{
 alert('please valid email or password')
}
})