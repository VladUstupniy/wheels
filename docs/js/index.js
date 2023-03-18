document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open');
    });
});