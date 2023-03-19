document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu').addEventListener('click', () => {
        document.querySelector('header').classList.toggle('open');
    });

    const dropDownLink = document.getElementById('drop-down__link');
    const dropDownContent = document.getElementById('drop-down__content');
    dropDownLink.addEventListener('click', () => {
        dropDownLink.classList.toggle('active');
        dropDownContent.classList.toggle('active');
    });

});
