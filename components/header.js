function loadHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-header').innerHTML = html;
            initHeaderInteractions();
        });
}

function initHeaderInteractions() {
    const burger = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !expanded);
            mobileMenu.hidden = expanded;
            document.body.classList.toggle('no-scroll', !expanded);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);
