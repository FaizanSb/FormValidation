// alert('Hello, World!');
let form = document.getElementById('form');
let success = document.getElementById('success');
let error = document.getElementById('error');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm-password').value.trim();

    success.textContent = '';
    error.textContent = '';

    if(username === '' || email === '' || password === '' || confirmPassword === ''){
        error.textContent = 'All fields are required.';
        console.log('All fields are required.');
    }else if(password !== confirmPassword){
        error.textContent = 'Passwords do not match.';
        console.log('Passwords do not match.');
    }else if(!email.includes("@")){
        error.textContent = 'Please enter a valid email address.';
        console.log('Please enter a valid email address.');
    }else{
        success.textContent = 'Form submitted successfully!';
        console.log('Form submitted successfully!');
    }

})