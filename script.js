// Correct the selectors and use proper syntax
let menuBtn = document.querySelector('#menu-btn'); // Use # for ID selector
let navbar = document.querySelector('.header .flex .navbar'); // Use . for class selector

// Ensure the button click functionality works
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times'); // Toggle icon class
    navbar.classList.toggle('active'); // Toggle navbar visibility
};


// var swiper = new Swiper(".course-slider", {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });


// var swiper = new Swiper(".teachers-slider", {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });


// var swiper = new Swiper(".reviews-slider", {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });

const courseSlider = new Swiper('.course-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,  /* Keep looping enabled if you want continuous sliding */
    autoplay: {
        delay: 2500,  /* Adjust the delay for autoplay */
        disableOnInteraction: false,  /* Autoplay does not stop on interaction */
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

const teachersSlider = new Swiper('.teachers-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

const reviewsSlider = new Swiper('.reviews-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
