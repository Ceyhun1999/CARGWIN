const swiper = new Swiper(".swiper-calculator", {
    // Optional parameters

    // Autoplay every 3 seconds
    autoplay: {
        delay: 3000, // 3000 milliseconds =3 seconds
    },

    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 1.2,

    // Navigation arrows
    navigation: {
        nextEl: ".price-section .button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 7,
        },

        1200: {
            slidesPerView: 6,
        },
    },
});

const swiper2 = new Swiper(".swiper-review", {
    // Optional parameters
    loop: true,
    simulateTouch: true,
    grabCursor: true,

    // Autoplay every 3 seconds
    // Autoplay every 3 seconds
    autoplay: {
        delay: 3000, // 3000 milliseconds =3 seconds
        disableOnInteraction: false, // Автоплей не будет останавливаться при взаимодействии
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    spaceBetween: 24,

    // Navigation arrows
    navigation: {
        nextEl: ".review-section .btn-next",
        prevEl: ".review-section .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.1,
        },

        768: {
            slidesPerView: 2.1,
        },

        992: {
            slidesPerView: 2.2,
        },

        1200: {
            slidesPerView: 4.2,
        },
    },
});

const swiper3 = new Swiper(".news-swiper", {
    // Optional parameters
    loop: true,
    simulateTouch: true,
    grabCursor: true,

    // Autoplay every 3 seconds
    // Autoplay every 3 seconds
    autoplay: {
        delay: 3000, // 3000 milliseconds =3 seconds
        disableOnInteraction: false, // Автоплей не будет останавливаться при взаимодействии
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    spaceBetween: 24,

    // Navigation arrows
    navigation: {
        nextEl: ".news-section .btn-next",
        prevEl: ".news-section .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },

        768: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },
    },
});

const swiper4 = new Swiper(".swiper-banner", {
    // Optional parameters
    loop: true,
    simulateTouch: true,
    grabCursor: true,

    // Autoplay every 3 seconds
    // Autoplay every 3 seconds
    autoplay: {
        delay: 3000, // 3000 milliseconds =3 seconds
        disableOnInteraction: false, // Автоплей не будет останавливаться при взаимодействии
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".banner-section .btn-next",
        prevEl: ".banner-section .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    slidesPerView: 1,
});


const swiper5 = new Swiper(".swiper-best-cars", {
    // Optional parameters
    loop: true,
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 24,

    // Autoplay every 3 seconds
    // Autoplay every 3 seconds
    autoplay: {
        delay: 3000, // 3000 milliseconds =3 seconds
        disableOnInteraction: false, // Автоплей не будет останавливаться при взаимодействии
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".best-cars .btn-next",
        prevEl: ".best-cars .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },

        768: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 4,
        },
    },
});

//HEADER ADD ACTIVE CLASS (during scrolling)
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) header.classList.add("active");
    else header.classList.remove("active");
});

document.querySelectorAll(".questions-content__item h3").forEach(function (header) {
    header.addEventListener("click", function () {
        const parentItem = this.parentElement;
        parentItem.classList.toggle("active");
    });
});

////////QUESTION BLOCK/////////
function accordion() {
    if ($(".accrodion-grp").length) {
        $(".accrodion-grp").each(function () {
            var accordionName = $(this).data("grp-name");
            var Self = $(this);
            Self.addClass(accordionName);
            Self.find(".accrodion .accrodion-content").hide();
            Self.find(".accrodion.active").find(".accrodion-content").show();
            Self.find(".accrodion").each(function () {
                $(this)
                    .find(".accrodion-title")
                    .on("click", function () {
                        var accrodionItem = $(this).parent();
                        var accrodionContent = accrodionItem.find(".accrodion-content");

                        if (accrodionItem.hasClass("active")) {
                            accrodionItem.removeClass("active");
                            accrodionContent.slideUp();
                        } else {
                            accrodionItem.addClass("active");
                            accrodionContent.slideDown();
                        }
                    });
            });
        });
    }
}



$(document).ready(function () {
    accordion();
});

const customSelects = document.querySelectorAll(".custom-label");

customSelects.forEach((select) => {
    const dropContent = select.querySelector(".custom-select-drop-content");

    select.addEventListener("click", function (event) {
        if (dropContent) {
            dropContent.classList.toggle("active");
        }

        // Останавливаем распространение события клика
        event.stopPropagation();
    });
});

// Обработчик клика на документе для удаления класса active
document.addEventListener("click", function (event) {
    customSelects.forEach((select) => {
        const dropContent = select.querySelector(".custom-select-drop-content");

        // Удаляем класс active, если клик был вне custom-select
        if (dropContent && !select.contains(event.target)) {
            dropContent.classList.remove("active");
        }
    });
});


document.querySelector('.menu__btn').addEventListener('click', function() {
    document.querySelector('.offcanvas').classList.add('active');
    document.body.classList.add('active')
});

document.querySelector('.btn-close-menu')?.addEventListener('click', function() {
    document.querySelector('.offcanvas').classList.remove('active');
    document.body.classList.remove('active')
});


