document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('icon');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');

    hamburgerIcon.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('show-menu');
    });

    closeMenu.addEventListener('click', function() {
        hamburgerMenu.classList.remove('show-menu');
    });
});
