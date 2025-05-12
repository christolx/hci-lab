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
            burger.setAttribute('aria-expanded', String(!expanded));
            burger.classList.toggle('active', !expanded);
            // Toggle .active class for animation and visibility
            mobileMenu.classList.toggle('active', !expanded);

            // Toggle hidden attribute for a11y
            if (!expanded) {
                mobileMenu.hidden = false;
            } else {
                mobileMenu.hidden = true;
            }

            document.body.classList.toggle('no-scroll', !expanded);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);
