
let form = document.getElementById('form');
let error = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    error.textContent = '';

    if (email === '' || password === '') {
        error.style.display = 'block';
        error.textContent = 'All fields are required.';
        console.log('All fields are required.');
    } else if (!email.includes("@")) {
        error.style.display = 'block';
        error.textContent = 'Please enter a valid email address.';
        console.log('Please enter a valid email address.');
    } else {

        try {
            const res = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await res.json();
            if (data.success) {
                localStorage.setItem("username",data.username);
                window.location.href = '/dashboard.html';
            } else {
                error.style.display = 'block';
                error.textContent = data.message;
            }
        } catch (err) {
            console.log("Error in fetching data", err);
        }
    }

})

