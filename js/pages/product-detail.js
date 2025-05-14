document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1';

    const products = {
        '1': {
            name: 'Midnight Chrono',
            category: 'Watches',
            price: '$12,500',
            description: 'The Midnight Chrono is the epitome of luxury timekeeping. Crafted with meticulous attention to detail, this exceptional timepiece features a 42mm 18K rose gold case, Swiss automatic movement with chronograph function, and a sapphire crystal case back revealing the intricate mechanism within. The deep midnight blue dial with luminous hands ensures perfect legibility in any lighting condition, while the hand-stitched alligator leather strap provides unparalleled comfort.',
            mainImage: 'assets/products/MidnightChrono.png',
            features: [
                '42mm 18K rose gold case',
                'Swiss automatic movement',
                'Chronograph function',
                'Sapphire crystal case back',
                'Water resistant to 100 meters',
                'Hand-stitched alligator leather strap'
            ]
        },
        '2': {
            name: 'Royal Cufflinks',
            category: 'Accessories',
            price: '$3,850',
            description: 'Elevate your formal attire with our Royal Cufflinks, meticulously crafted from 18K white gold and adorned with brilliant-cut diamonds. These exquisite accessories feature our signature geometric design, symbolizing precision and elegance. Perfect for special occasions or as a distinguished gift, these cufflinks embody timeless sophistication and unparalleled craftsmanship.',
            mainImage: 'assets/products/RoyalCufflink.png',
            features: [
                '18K white gold construction',
                'VS clarity brilliant-cut diamonds',
                'Secure toggle closure',
                'Hand-polished finish',
                'Presented in a luxury gift box',
                'Certificate of authenticity included'
            ]
        },
        '3': {
            name: 'Executive Wallet',
            category: 'Leather Goods',
            price: '$1,200',
            description: 'The Executive Wallet combines refined aesthetics with practical functionality. Handcrafted from premium Italian calfskin leather, this sophisticated accessory features multiple card slots, bill compartments, and a dedicated coin pocket. The interior is lined with our signature silk fabric, while the exterior showcases our subtle embossed logo. Slim yet spacious, this wallet is designed for the modern gentleman who values both style and substance.',
            mainImage: 'assets/products/ExecutiveWallet.png',
            features: [
                'Italian full-grain calfskin leather',
                '8 card slots',
                '2 bill compartments',
                'Coin pocket with snap closure',
                'Silk interior lining',
                'Embossed logo detail'
            ]
        },
        '4': {
            name: 'Golden Era',
            category: 'Watches',
            price: '$18,750',
            description: 'The Golden Era timepiece pays homage to the golden age of watchmaking with its refined design and exceptional mechanics. Featuring an 18K yellow gold case with a champagne-colored guilloché dial, this watch combines traditional craftsmanship with modern precision. The self-winding movement with small seconds and date display offers functionality without compromising the elegant aesthetic.',
            mainImage: 'assets/GoldenEra.jpg',
            features: [
                '40mm 18K yellow gold case',
                'Champagne-colored guilloché dial',
                'Self-winding mechanical movement',
                'Small seconds and date display',
                'Sapphire crystal glass',
                'Brown alligator leather strap'
            ]
        },
        '5': {
            name: 'Diamond Cascade Necklace',
            category: 'Jewelry',
            price: '$24,000',
            description: 'The Diamond Cascade Necklace is a breathtaking statement piece that epitomizes luxury. This exquisite creation features over 5 carats of brilliant-cut diamonds set in 18K white gold, arranged in a graceful cascade design that draws the eye and captures the light from every angle. Each diamond is hand-selected for exceptional clarity and brilliance, ensuring a piece that will be treasured for generations.',
            mainImage: 'assets/DiamondNecklace.webp',
            features: [
                'Over 5 carats of VS clarity diamonds',
                '18K white gold setting',
                'Secure lobster clasp closure',
                'Adjustable length',
                'Handcrafted by master jewelers',
                'Includes certificate of authenticity'
            ]
        },
        '6': {
            name: 'Business Briefcase',
            category: 'Leather Goods',
            price: '$4,500',
            description: 'The Business Briefcase is the ultimate executive accessory, combining timeless design with contemporary functionality. Crafted from the finest full-grain leather, this sophisticated briefcase features a spacious interior with dedicated compartments for your laptop, documents, and personal items. The hand-stitched details and solid brass hardware reflect our commitment to exceptional quality, while the adjustable shoulder strap offers versatile carrying options.',
            mainImage: 'assets/BusinessBriefcase.jpg',
            features: [
                'Premium full-grain leather',
                'Hand-stitched construction',
                'Solid brass hardware with lock',
                'Padded laptop compartment (fits up to 15")',
                'Multiple interior organizer pockets',
                'Detachable, adjustable shoulder strap'
            ]
        },
        '7': {
            name: 'Italian Silk Tie',
            category: 'Accessories',
            price: '$450',
            description: 'Our Italian Silk Tie exemplifies refined elegance for the discerning gentleman. Handcrafted in Italy from the finest mulberry silk, this tie features our exclusive pattern created by our in-house designers. The meticulous seven-fold construction technique requires no lining, resulting in a tie with exceptional drape and a substantial feel. Each tie is finished with hand-rolled edges and our subtle signature emblem.',
            mainImage: 'assets/SilkTie.jpg',
            features: [
                'Pure mulberry silk from Como, Italy',
                'Traditional seven-fold construction',
                'Hand-rolled edges',
                'Exclusive pattern design',
                'Standard 8.5 cm width',
                'Presented in a signature gift box'
            ]
        },
        '8': {
            name: 'Platinum Signet Ring',
            category: 'Jewelry',
            price: '$5,800',
            description: 'The Platinum Signet Ring is a contemporary interpretation of a classic gentleman\'s accessory. Crafted from solid 950 platinum, this substantial ring features a flat oval face that can be personalized with an engraved monogram or family crest. The clean lines and substantial weight create a bold statement piece that balances tradition with modern sophistication, making it the perfect heirloom to pass down through generations.',
            mainImage: 'assets/PlatinumRing.avif',
            features: [
                'Solid 950 platinum construction',
                'Hand-polished to a mirror finish',
                'Customizable engraving option',
                'Substantial weight and presence',
                'Available in sizes 7-13',
                'Includes luxury presentation case'
            ]
        },
        '9': {
            name: 'Classic Tourbillon',
            category: 'Watches',
            price: '$32,000',
            description: 'The Classic Tourbillon represents the pinnacle of horological achievement. This masterpiece features a visible tourbillon mechanism at 6 o\'clock, showcasing the rotating balance wheel that counteracts the effects of gravity. Housed in a 41mm platinum case with a grand feu enamel dial, this timepiece combines traditional craftsmanship with technical innovation for the discerning collector.',
            mainImage: 'assets/tourbillon.webp',
            features: [
                '41mm platinum case',
                'Grand feu enamel dial',
                'Visible tourbillon at 6 o\'clock',
                'Manual-winding movement',
                '72-hour power reserve',
                'Black alligator leather strap with platinum folding clasp'
            ]
        },
        '10': {
            name: 'Alligator Leather Belt',
            category: 'Accessories',
            price: '$1,850',
            description: 'Our Alligator Leather Belt exemplifies luxury in its most refined form. Meticulously crafted from genuine American alligator skin, each belt is hand-selected for its exceptional scale pattern and texture. The belt is finished with our signature 18K gold-plated buckle, which can be easily interchanged with other buckles from our collection. The interior is lined with supple calfskin for added comfort and durability.',
            mainImage: 'assets/alligatorbelt.webp',
            features: [
                'Genuine American alligator leather',
                '18K gold-plated signature buckle',
                'Calfskin lining',
                'Hand-painted edges',
                'Interchangeable buckle system',
                'Available in black, brown, and cognac'
            ]
        },
        '11': {
            name: 'Leather Handbag',
            category: 'Leather Goods',
            price: '$3,750',
            description: 'The Leather Handbag is the epitome of sophisticated elegance. Handcrafted by our master artisans from the finest calfskin leather, this timeless accessory features a structured silhouette with our signature hardware accents. The spacious interior includes multiple compartments and a detachable pouch, while the adjustable strap offers versatile carrying options. Each bag undergoes extensive quality control to ensure exceptional craftsmanship and longevity.',
            mainImage: 'assets/leatherhandbag.jpg',
            features: [
                'Premium calfskin leather',
                'Signature gold-tone hardware',
                'Suede interior lining',
                'Multiple interior compartments',
                'Detachable leather pouch',
                'Adjustable and removable shoulder strap'
            ]
        },
        '12': {
            name: 'Emerald Elegy',
            category: 'Jewelry',
            price: '$10,000',
            description: 'The Emerald Elegy ring showcases a magnificent 2.5-carat Colombian emerald, celebrated for its exceptional clarity and vibrant green hue. The emerald is set in 18K white gold and surrounded by a halo of brilliant-cut diamonds that enhance its natural beauty. The band features additional diamonds in a pavé setting, creating a piece that captures light from every angle. This extraordinary ring represents the perfect balance of classic elegance and contemporary design.',
            mainImage: 'assets/emeraldring.jpg',
            features: [
                '2.5-carat Colombian emerald center stone',
                '18K white gold setting',
                'Diamond halo and pavé band (1.2 total carat weight)',
                'VS clarity diamonds',
                'Handcrafted by master jewelers',
                'Includes certificate of authenticity and appraisal'
            ]
        }
    };

    const defaultProduct = {
        name: 'Luxury Product',
        category: 'Premium Collection',
        price: 'Price upon request',
        description: 'This exclusive item represents the pinnacle of luxury craftsmanship. Each piece is meticulously created by our master artisans using only the finest materials. Please contact our concierge service for detailed information and purchasing options.',
        mainImage: 'assets/default-product.jpg',
        features: [
            'Premium materials',
            'Expert craftsmanship',
            'Exclusive design',
            'Limited availability',
            'Certificate of authenticity',
            'Luxury presentation box'
        ]
    };

    const product = products[productId] || defaultProduct;

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-category').textContent = product.category;
    document.getElementById('detail-product-price').textContent = product.price;
    document.getElementById('detail-product-description').textContent = product.description;
    document.getElementById('main-product-image').src = product.mainImage;
    document.getElementById('main-product-image').alt = product.name;

    const featuresList = document.querySelector('.product-detail__features-list');
    featuresList.innerHTML = '';

    product.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.className = 'product-detail__feature';
        featureItem.textContent = feature;
        featuresList.appendChild(featureItem);
    });

    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityError = document.getElementById('quantity-error');

    function validateQuantity() {
        let value = parseInt(quantityInput.value);
        let isValid = true;

        quantityError.textContent = '';

        if (isNaN(value)) {
            quantityError.textContent = 'Please enter a valid number';
            isValid = false;
        }
        else if (value < 1) {
            quantityError.textContent = 'Minimum quantity is 1';
            quantityInput.value = 1;
            isValid = false;
        }
        else if (value > 10) {
            quantityError.textContent = 'Maximum quantity is 10';
            quantityInput.value = 10;
            isValid = false;
        }

        return isValid;
    }

    decreaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            validateQuantity();
        }
    });

    increaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
            validateQuantity();
        }
    });

    quantityInput.addEventListener('change', validateQuantity);
    quantityInput.addEventListener('input', validateQuantity);

    const accordionItems = document.querySelectorAll('.product-detail__accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.product-detail__accordion-header');

        header.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const cartNotification = document.getElementById('cart-notification');

    addToCartBtn.addEventListener('click', function () {
        if (validateQuantity()) {
            const quantity = parseInt(quantityInput.value);

            console.log(`Added ${quantity} ${product.name} to cart`);

            cartNotification.classList.add('show');

            setTimeout(() => {
                cartNotification.classList.remove('show');
            }, 3000);
        }
    });

    const orderNowBtn = document.getElementById('order-now-btn');

    orderNowBtn.addEventListener('click', function () {
        if (validateQuantity()) {
            const quantity = parseInt(quantityInput.value);
            alert(`Proceeding to checkout with ${quantity} ${product.name}`);
        }
    });
});
