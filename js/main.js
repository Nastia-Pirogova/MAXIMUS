$(function () {
    $('.menu__btn-media').on('click', function () {
        $('.header-menu__list-media').toggleClass('active');
    });


    $('.training-inner__sliders-media').not('.slick-initialized').slick({
        slidesToShow: 3,

        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                infinite: true,
                speed: 1000,
                fade: false,
                arrows: false,
                cssEase: 'linear'
            }
        }]

    })


    $('.our-club__slider').not('.slick-initialized').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    })


    var clickElem = document.getElementById('click');
    var noneBlock = document.getElementById('ordering');
    clickElem.addEventListener('click', function (e) {
        document.getElementById('main').style.display = 'block';
        noneBlock.style.display = 'none';
    })

    new WOW().init();
});

