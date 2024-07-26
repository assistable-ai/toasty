// script.js
document.getElementById('notification-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const message = document.getElementById('message').value;
    const icon = document.getElementById('icon').value;
    const position = document.getElementById('position').value;
    const duration = document.getElementById('duration').value;

    showToast(message, icon, position, duration);

    // Clear form
    document.getElementById('message').value = '';
    document.getElementById('icon').value = '';
    document.getElementById('position').value = 'top-right';
    document.getElementById('duration').value = '';
});

function showToast(message, icon, position, duration) {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${position}`;
    toast.style.animationDuration = `${duration}s`;

    if (icon) {
        const img = document.createElement('img');
        img.src = icon;
        img.className = 'toast-icon';
        toast.appendChild(img);
    }

    const text = document.createElement('p');
    text.innerText = message;
    toast.appendChild(text);

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration * 1000);
}