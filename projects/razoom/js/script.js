document.addEventListener("DOMContentLoaded", () => {
    $('.team-slider').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "353px",
        prevArrow: ".our-team__slider-btn--prev",
        nextArrow: ".our-team__slider-btn--next",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: "280px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "274px"
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: "165px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "144px",
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: "140px"
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerPadding: "104px"
                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerPadding: "84px"
                }
            },
            {
                breakpoint: 410,
                settings: {
                    centerPadding: "74px"
                }
            },
            {
                breakpoint: 370,
                settings: {
                    centerPadding: "30px"
                }
            }
        ]
    });

    $(".hero-slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        appendDots: ".hero__slider-wrapper",
        dotsClass: "hero-slider__pagination",
        adaptiveHeight: true
    });


    function hamburgerMenu(triggerSelector, menuSelector, menuActive, closeSelector) {
        const trigger = document.querySelector(triggerSelector);
        const menu = document.querySelector(menuSelector);
        const close = document.querySelector(closeSelector);

        trigger.addEventListener("click", () => {
            menu.classList.add(menuActive);
            document.body.style.overflow = "hidden";
        });

        close.addEventListener("click", () => {
            menu.classList.remove(menuActive);
            document.body.style.overflow = "";
        });
    }

    hamburgerMenu(".hamburger", ".header__menu", "header__menu--active", ".close");
});