! function () {
    "use strict";

    function o() {
        var o = window,
            t = document;
        if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
            var l, e = o.HTMLElement || o.Element,
                r = 468,
                i = {
                    scroll: o.scroll || o.scrollTo,
                    scrollBy: o.scrollBy,
                    elementScroll: e.prototype.scroll || n,
                    scrollIntoView: e.prototype.scrollIntoView
                },
                s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
                c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
            o.scroll = o.scrollTo = function () {
                void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset))
            }, o.scrollBy = function () {
                void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)))
            }, e.prototype.scroll = e.prototype.scrollTo = function () {
                if (void 0 !== arguments[0])
                    if (!0 !== f(arguments[0])) {
                        var o = arguments[0].left,
                            t = arguments[0].top;
                        h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t)
                    } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
            }, e.prototype.scrollBy = function () {
                void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
            }, e.prototype.scrollIntoView = function () {
                if (!0 !== f(arguments[0])) {
                    var l = function (o) {
                            for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);) o = o.parentNode || o.host;
                            var l, e, r;
                            return o
                        }(this),
                        e = l.getBoundingClientRect(),
                        r = this.getBoundingClientRect();
                    l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({
                        left: e.left,
                        top: e.top,
                        behavior: "smooth"
                    })) : o.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth"
                    })
                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
            }
        }

        function n(o, t) {
            this.scrollLeft = o, this.scrollTop = t
        }

        function f(o) {
            if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0;
            if ("object" == typeof o && "smooth" === o.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.")
        }

        function p(o, t) {
            return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0
        }

        function a(t, l) {
            var e = o.getComputedStyle(t, null)["overflow" + l];
            return "auto" === e || "scroll" === e
        }

        function d(t) {
            var l, e, i, c, n = (s() - t.startTime) / r;
            c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t))
        }

        function h(l, e, r) {
            var c, f, p, a, h = s();
            l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({
                scrollable: c,
                method: a,
                startTime: h,
                startX: f,
                startY: p,
                x: e,
                y: r
            })
        }
    }
    "object" == typeof exports && "undefined" != typeof module ? module.exports = {
        polyfill: o
    } : o()
}();

document.addEventListener("DOMContentLoaded", () => {
    const allLinks = document.querySelectorAll("a");
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

    allLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (!e.target.dataset.scroll) {
                return;
            } else {
                const menu = document.querySelector(".header__menu");

                if (menu.classList.contains("header__menu--active")) {
                    document.body.style.overflow = "";
                    menu.classList.remove("header__menu--active");
                }

                e.preventDefault();
                document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior: "smooth"});
            }
        });
    });

    hamburgerMenu(".hamburger", ".header__menu", "header__menu--active", ".close");
});