document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsSlider();
    initNewsletterForm();
    setTimeout(function() {
        document.querySelector('.hero').classList.add('loaded');
    }, 100);
});

function initTestimonialsSlider() {
    const slides = document.querySelectorAll('.testimonials__slide');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentSlide = 0;

    slides[currentSlide].classList.add('active');

    let slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    nextBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    const sliderContainer = document.getElementById('testimonials-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });

        sliderContainer.addEventListener('mouseleave', function() {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const messageEl = document.getElementById('newsletter-message');

    if (!form || !messageEl) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        showMessage('Subscribing...', '');

        setTimeout(function() {
            showMessage('Thank you for subscribing to our newsletter!', 'success');
            form.reset();
        }, 1500);
    });

    function showMessage(message, type) {
        messageEl.textContent = message;
        messageEl.className = 'newsletter__message';
        if (type) {
            messageEl.classList.add(type);
        }
    }

    function isValidEmail(email) {
        return email.includes('@') && email.includes('.');
    }
}
