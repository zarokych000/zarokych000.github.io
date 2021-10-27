let init = false;
let swiper;
let spinner = false;
let userPrefernce = {
    size: "1000 x 1000",
    option: "standart",
    assembly: true,
    price: "100000"
};

function initSlider() {
    const breakPoint = window.matchMedia("(max-width: 1280px)");

    if (breakPoint.matches && !init) {
        swiper = new Swiper(".sauna-hero__slider", {
            loop: true,
            speed: 700,
            autoplay: {
                delay: 5000,
            }
        });
        init = true;
    }

    if (init && !breakPoint.matches) {
        init = false;
        swiper.destroy();
    }
}

function chosePreference(value, key) {
    userPrefernce[key] = value;
    updateInput(userPrefernce);
}

function tabs(tabsControlsSelectors, tabsContentsSelectors, bound, preferenced, disabled) {
    const tabsControls = document.querySelectorAll(tabsControlsSelectors);
    const tabsContents = document.querySelectorAll(tabsContentsSelectors);

    tabsControls.forEach((control, i) => {
        control.addEventListener("click", () => {
            if (control.classList.contains(disabled)) {
                return;
            }

            cleanFromActive();
    
            control.classList.add("active");
            if (preferenced) {
                const option = control.getAttribute("data-sauna-option");
                chosePreference(option, "option");
            }

            if (!bound) {
                tabsContents[i].classList.add("active");
            } else {
                bountTabs(i);
            }
        });
    });

    function cleanFromActive() {
        tabsControls.forEach(item => {
            item.classList.remove("active");
        });

        tabsContents.forEach(item => {
            item.classList.remove("active");
        });
    }

    function bountTabs(i) {
        const boundFirstControls = document.querySelectorAll(".sauna-promo__tabs .sauna-tabs__control");
        const boundFirstContents = document.querySelectorAll(".sauna-promo__tabs .sauna-tabs__gallery-item");
        const boundedControls = document.querySelectorAll(".sauna-estimate__tabs .sauna-tabs__control");
        const boundedContents = document.querySelectorAll(".sauna-estimate__tabs .sauna-tabs__item");

        clean(boundFirstControls);
        clean(boundFirstContents);
        clean(boundedControls);
        clean(boundedContents);

        boundFirstControls[i].classList.add("active"); 
        boundFirstContents[i].classList.add("active"); 
        boundedControls[i].classList.add("active"); 
        boundedContents[i].classList.add("active");

        function clean(items) {
            items.forEach(item => {
                item.classList.remove("active");
            })
        }
    }
}

function initTabSliders(mainsliderSelectors, thumbsliderSelectors, thumbBtnPrev, thumbBtnNext) {
    const galleryThumbs = new Swiper(mainsliderSelectors, {
        spaceBetween: 17,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: thumbBtnPrev,
            nextEl: thumbBtnNext
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 8,
            }
        }
    });

    const standartSliderTop = new Swiper(thumbsliderSelectors, {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs,
        }
    });
}

function toggleAllEstim(allshowTriggers) {
    const allTriggers = document.querySelectorAll(allshowTriggers);

    allTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const togglableElements = document.querySelectorAll("[data-sauna-togglable]");

            if (trigger.classList.contains("estimate__show-estim--disable")) {
                togglableElements.forEach(item => item.classList.add("estimate__service--hide"));
                togglableElements.forEach(item => {
                    if (!item.dataset.lastMaterial) {
                        console.log("hiden ?");
                        item.classList.add("estimate__service--hide");
                    }
                });

                allTriggers.forEach(item => item.classList.remove("estimate__show-estim--disable"))
            } else {
                togglableElements.forEach(item => item.classList.remove("estimate__service--hide"));
                allTriggers.forEach(item => item.classList.add("estimate__show-estim--disable"))
                togglableElements.forEach(item => {
                    if (!item.dataset.lastMaterial) {
                        item.classList.remove("estimate__service--hide");
                    }
                });
            }
        });
    });
}

function scrollTo(element) {
    const cords = element.getBoundingClientRect().top + window.pageYOffset - 40;
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: cords
    });
}

function showNeededData() {
    const allRadio = document.querySelectorAll(".sauna-chose__radio");
    const scrollAnchor = document.querySelector(".sauna-estimate__tabs");

    function retrieveData(data, key) {
        const found = data.find(elem => elem.name === key);
        return found;
    }

    function changePrices(data, option) {
        const priceWrapper = document.querySelector(`[data-option="${option}"]`);
        const priceItem = priceWrapper.querySelectorAll(".sauna-option__price > span");

        priceItem.forEach((price, i) => {
            price.textContent = data[i];
        });
    }

    function changeSizes(size, model) {
        const sizesElems = document.querySelectorAll(".estimate__sauna-size");
        const modelElems = document.querySelectorAll(".estimate__sauna-model");

        sizesElems.forEach(item => {
            item.textContent = size;
        });

        modelElems.forEach(item => {
            item.textContent = "x " + model;
        });
    }

    function changeOptions(data, option) {
        let parentEl;
        if (option === "stdSaunas") {
            parentEl = document.querySelector(".sauna-tabs__item--std");
        } else if (option === "cmfSaunas") {
            parentEl = document.querySelector(".sauna-tabs__item--cmf");
        } else if (option === "prmSaunas") {
            parentEl = document.querySelector(".sauna-tabs__item--prm");
        }
        
        data.forEach((item, i) => {
            const tabContent = parentEl.querySelectorAll(".estimate__tab-content");
            const newItem = document.createElement("div");
            newItem.classList.add("estimate__service");

            newItem.innerHTML = `
                <div class="estimate__key">
                    ${item.key}
                </div>
                <div class="estimate__hyphens"></div>
                <div class="estimate__value">
                    ${item.value}
                </div>
            `;

            if (item.type === "materials") {
                // materialCount++;

                // if (materialCount > 6) {
                //     newItem.classList.add("estimate__service--hide");
                //     newItem.dataset.saunaTogglable = "true";
                // }

                tabContent[0].append(newItem);
            } else {
                // assemblyCount++;

                // if (assemblyCount > 5) {
                //     newItem.classList.add("estimate__service--hide");
                //     newItem.dataset.saunaTogglable = "true";
                // }

                tabContent[1].append(newItem);
            }
        });
    }

    function toggleSpinner(toggler) {
        const spinner = document.querySelector(".sauna-tabs__loader");
        if (toggler) {
            spinner.classList.add("active");
        } else {
            spinner.classList.remove("active");
        }
    }

    function changeData(data) {
        const tabContent = document.querySelectorAll(".estimate__tab-content");
        tabContent.forEach(item => {
            item.innerHTML = "";
        });

        for (const key of Object.keys(data)) {
            if (key === "stdPrice" || key === "cmfPrice" || key === "prmPrice") {
                changePrices(data[key], key);
            } else if (key === "stdSaunas" || key === "cmfSaunas" || key === "prmSaunas") {
                changeOptions(data[key], key);
            }
        }
    }

    allRadio.forEach(item => {
        item.addEventListener("change", () => {
            const data = retrieveData(saunaData, item.id);

            if (data && data.length !== 0) {
                toggleSpinner(true);
                scrollTo(scrollAnchor);
                setTimeout(() => {
                    changeData(data);
                }, 100)

                setTimeout(() => {
                    const prom = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            ifNotExtra();
                            resolve();
                        });
                    }).then(() => {
                        hideExtraOptions();
                        markAllLastMaterial();
                    });
                }, 400);

                setTimeout(() => {
                    ifNotExtra();
                    changeSizes(data.sizes, data.model);
                    chosePreference(data.sizes, "size");
                    toggleSpinner(false);
                }, 1000);
            }
        });
    });
}

function choseAssembly() {
    function toggleAssemblyTab(flag) {
        const allTabTriggers = document.querySelectorAll(".estimate__control--assembly");
        const allLastMaterial = document.querySelectorAll("[data-last-material]");

        allTabTriggers.forEach(item => {
            if (flag) {
                item.classList.remove("estimate__control--hide");

                allLastMaterial.forEach(item => {
                    item.classList.remove("estimate__service--hide");
                    item.removeAttribute("[data-last-material]");
                });
            } else {
                item.classList.add("estimate__control--hide");

                allLastMaterial.forEach(item => {
                    if (!item.classList.contains("estimate__service--hide")) {
                        item.classList.add("estimate__service--hide");
                        item.setAttribute("data-last-material", "true");
                    }
                });
            }
        });
    }

    const allItems = document.querySelectorAll("[data-assembly]");

    const withAssembly = Array.from(allItems).filter(item => {
        return item.getAttribute("data-assembly") === "true";
    });

    const withoutAssembly = Array.from(allItems).filter(item => {
        return item.getAttribute("data-assembly") === "false";
    });

    allItems.forEach(item => {
        item.addEventListener("change", () => {
            const price = item.nextElementSibling.querySelector(".sauna-option__price span");
            if (item.getAttribute("data-assembly") === "true") {
                withAssembly.map(item => item.checked = true);
                withoutAssembly.map(item => item.checked = false);
                toggleAssemblyTab(true);
                chosePreference(true, "assembly");
                chosePreference(price.textContent, "price");
            } else {
                withAssembly.map(item => item.checked = false);
                withoutAssembly.map(item => item.checked = true);
                toggleAssemblyTab(false);
                chosePreference(false, "assembly");
                chosePreference(price.textContent, "price");
            }
        });
    });
}

const hideExtraOptions = () => {
    const optionsWrapper = document.querySelectorAll(".estimate__tab-content");
    optionsWrapper.forEach(item => {
        const optionsInWrapper = item.querySelectorAll(".estimate__service");
        optionsInWrapper.forEach((item, i) => {
            if (i >= 6) {
                item.classList.add("estimate__service--hide");
                item.dataset.saunaTogglable = true;
            }
        });
    });
}

function ifNotExtra() {
    const optionsWrapper = document.querySelectorAll(".estimate__tab-content");
    optionsWrapper.forEach(item => {
        const parentOfWrapper = item.parentElement;
        const trigger = parentOfWrapper.parentElement.querySelector(".estimate__show-estim");

        if (parentOfWrapper.firstElementChild.children.length < 5 && parentOfWrapper.lastElementChild.children.length < 5) {
            trigger.classList.add("estimate__show-estim--hide");
        } else {
            trigger.classList.remove("estimate__show-estim--hide");
        }
    });
}

function markAllLastMaterial() {
    const allWrappers = document.querySelectorAll(".estimate__right");

    allWrappers.forEach(item => {
        let notHided = Array.from(item.firstElementChild.children);
        notHided = notHided.filter(item => !item.classList.contains("estimate__service--hide"));
        notHided[notHided.length - 1].dataset.lastMaterial = true;
    });
}

function initiateScrollBtns() {
    const allItems = document.querySelectorAll("[data-sauna-link]");

    allItems.forEach(item => {
        item.addEventListener("click", () => {
            const scrollAnchor = document.querySelector(item.dataset.saunaLink);
            scrollTo(scrollAnchor);
        });
    });
}

function addInputToForm () {
    const input = document.createElement("input");
    const form = document.querySelector(".sauna-form");

    input.setAttribute("type", "text");
    input.setAttribute("name", "user-prefernce");
    input.classList.add("sauna-form__hidden-input")

    form.append(input);
}

function updateInput({size, option, assembly, price}) {
    const input = document.querySelector(".sauna-form__hidden-input");
    input.setAttribute("value",  `${size}/${option}/${assembly}/${price}`);
}

document.addEventListener("DOMContentLoaded", () => {
    // slider
    initSlider();

    markAllLastMaterial();

    ifNotExtra();

    tabs(
        ".sauna-promo__tabs .sauna-tabs__control",
     ".sauna-promo__tabs .sauna-tabs__gallery-item",
     true,
     true
    );

    tabs(
        ".sauna-estimate__tabs .sauna-tabs__control",
     ".sauna-estimate__tabs .sauna-tabs__item",
     true,
     true
    );

    tabs(
        ".sauna-tabs__item--std .estimate__control",
        ".sauna-tabs__item--std .estimate__tab-content",
        false,
        false,
        "estimate__control--hide"
    );

    tabs(
        ".sauna-tabs__item--cmf .estimate__control",
        ".sauna-tabs__item--cmf .estimate__tab-content",
        false,
        false,
        "estimate__control--hide"
    );

    tabs(
        ".sauna-tabs__item--prm .estimate__control",
        ".sauna-tabs__item--prm .estimate__tab-content",
        false,
        false,
        "estimate__control--hide"
    );

    initTabSliders(
        ".sauna-tabs__gallery-item--std .sauna-gallery__thumbs .swiper-container",
        ".sauna-tabs__gallery-item--std .sauna-gallery__preview",
        ".sauna-tabs__gallery-item--std .sauna-gallery__arrow--prev",
        ".sauna-tabs__gallery-item--std .sauna-gallery__arrow--next"
    );
    initTabSliders(
        ".sauna-tabs__gallery-item--cmf .sauna-gallery__thumbs .swiper-container",
        ".sauna-tabs__gallery-item--cmf .sauna-gallery__preview",
        ".sauna-tabs__gallery-item--cmf .sauna-gallery__arrow--prev",
        ".sauna-tabs__gallery-item--cmf .sauna-gallery__arrow--next"
    );
    initTabSliders(
        ".sauna-tabs__gallery-item--prem .sauna-gallery__thumbs .swiper-container",
        ".sauna-tabs__gallery-item--prem .sauna-gallery__preview",
        ".sauna-tabs__gallery-item--prem .sauna-gallery__arrow--prev",
        ".sauna-tabs__gallery-item--prem .sauna-gallery__arrow--next"
    );

    const choseSaunaSlider = new Swiper(".sauna-chose__slider", {
        slidesPerView: 5,
        spaceBetween: 22,
        navigation: {
            prevEl: ".sauna-chose__arrow--prev",
            nextEl: ".sauna-chose__arrow--next"
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1315: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5
            }
        }
    });

    toggleAllEstim(".estimate__show-estim");
    showNeededData();

    const spaSlider = new Swiper(".sauna-our-works__slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
            el: ".sauna-our-works__pagination",
            type: "progressbar",
            modifierClass: "",
            progressbarFillClass: "sauna-our-works__paginaton-fill"
        },
        breakpoints: {
            800: {
                slidesPerView: 1
            },
            1300: {
                slidesPerView: 2,
            }
        }
    });

    choseAssembly();

    hideExtraOptions();
    initiateScrollBtns();
    addInputToForm();
    updateInput(userPrefernce);
});



window.addEventListener("resize", () => {
    initSlider();
});
//# sourceMappingURL=script.js.map
