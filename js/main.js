/* Show Menu */
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close');

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    })
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu');
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu');
    // When we click each nav__link, we remove the show__menu class
    navMenu.classList.remove('show__menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* CHANGE BACKGROUND HEADER */
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/* SWIPER POPULAR */
const popularSwiper = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
})

/* CHOOSE FAQ */
const faqItems = document.querySelectorAll('.choose__faq-item');

// 1.Select each item
faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose__faq-header');

    // 2.Select each button click
    faqHeader.addEventListener('click', () => {
        // 7. Select the current faq-open class
        const openItem = document.querySelector('.faq-open');

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the faq-open class from other items
        if(openItem && openItem != item) {
            toggleItem(openItem);
        }
    })
})

// 3. Create function to display the content
const toggleItem = (item) => {
    // 3.1 Select each faq content
    const faqContent = item.querySelector('.choose__faq-content');

    // 6. If the same item contains the faq-open class, remove
    if(item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        // 4. Add max-height to the content and add the faq-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }  
}