const username = localStorage.getItem('username');
if (username) {
    window.location.href = '/dashboard.html';
}