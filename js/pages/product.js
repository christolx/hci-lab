document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.filters__category');
    const productItems = document.querySelectorAll('.products__item');
    const sortSelect = document.getElementById('sort-select');
    const videoPlayer = document.getElementById('brand-trailer');
    const playButton = document.getElementById('video-play-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            if (category === 'all') {
                productItems.forEach(item => {
                    item.style.display = 'block';
                });
            } else {
                productItems.forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const productsGrid = document.getElementById('products-grid');
        const productsArray = Array.from(productItems);

        switch(sortValue) {
            case 'price-asc':
                productsArray.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector('.products__price').textContent.replace('$', '').replace(',', ''));
                    const priceB = parseFloat(b.querySelector('.products__price').textContent.replace('$', '').replace(',', ''));
                    return priceA - priceB;
                });
                break;
            case 'price-desc':
                productsArray.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector('.products__price').textContent.replace('$', '').replace(',', ''));
                    const priceB = parseFloat(b.querySelector('.products__price').textContent.replace('$', '').replace(',', ''));
                    return priceB - priceA;
                });
                break;
            case 'name-asc':
                productsArray.sort((a, b) => {
                    const nameA = a.querySelector('.products__name').textContent;
                    const nameB = b.querySelector('.products__name').textContent;
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'name-desc':
                productsArray.sort((a, b) => {
                    const nameA = a.querySelector('.products__name').textContent;
                    const nameB = b.querySelector('.products__name').textContent;
                    return nameB.localeCompare(nameA);
                });
                break;
            default:
                productsArray.sort((a, b) => {
                    return Array.from(productItems).indexOf(a) - Array.from(productItems).indexOf(b);
                });
        }

        productsGrid.innerHTML = '';
        productsArray.forEach(product => {
            productsGrid.appendChild(product);
        });
    });

    if (playButton && videoPlayer) {
        playButton.addEventListener('click', () => {
            videoPlayer.play();
            playButton.classList.add('hidden');
        });

        videoPlayer.addEventListener('pause', () => {
            playButton.classList.remove('hidden');
        });

        videoPlayer.addEventListener('play', () => {
            playButton.classList.add('hidden');
        });

        videoPlayer.addEventListener('ended', () => {
            playButton.classList.remove('hidden');
        });
    }

    const animateOnScroll = () => {
        const productItems = document.querySelectorAll('.products__item');
        productItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    productItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

const consultButton = document.getElementsByClassName("consultation__cta");
consultButton[0].addEventListener('click', () => {
    alert("Successfully booked a consultation.");
})
