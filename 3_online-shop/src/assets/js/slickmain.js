
$('.rightpage__body').slick({
	arrows: true,
	dots: false,
	speed: 800,
	autoplay: false,
	autoplaySpeed: 80500,
	appendArrows: $('.rightpage__arrows')
});
$('.leftpage__body').slick({
	arrows: false,
	dots: true,
	speed: 800,
	autoplay: false,
	autoplaySpeed: 80100,
	appendDots: $('.leftpage__dots')
});



// $('.products-slider__item.__details').slick({
// 	arrows: false,
// 	dots: true,
// 	speed: 1000,
// 	autoplay: false,
// 	autoplaySpeed: 4500,
// 	appendDots: $('.products-slider__dots')
// });


$('.blog-page__slider').slick({
	arrows: false,
	dots: true,
	speed: 1700,
	autoplay: false,
	autoplaySpeed: 3500,
	appendDots: $('.blog-page__dots')
});


$('.feedback-page__slider').slick({
	arrows: false,
	dots: true,
	speed: 1300,
	autoplay: false,
	autoplaySpeed: 3500,
	appendDots: $('.feedback-page__dots')
});


$('.images-product__mainslider').slick({
	arrows: false,
	dots: false,
	speed: 1000,
	autoplay: false,
	autoplaySpeed: 3300,
	asNavFor: ".images-product__subslider"
});

$('.images-product__subslider').slick({
	arrows: true,
	dots: false,
	speed: 1000,
	autoplay: false,
	autoplaySpeed: 3300,
	slidesToShow: 4,
	asNavFor: ".images-product__mainslider"
});


$('.images-gallery__mainslider').slick({
	arrows: false,
	dots: false,
	speed: 1500,
	autoplay: false,
   pauseOnHover: true,
	autoplaySpeed: 7500,
	asNavFor: ".images-gallery__subslider",
});


$('.images-gallery__subslider').slick({
	arrows: true,
	dots: false,
	speed: 2000,
	slidesToShow: 6,
	autoplay: false,
   pauseOnHover: true,
	autoplaySpeed: 7500,
	waitForAnimate: false,
	asNavFor: ".images-gallery__mainslider",
	responsive: [
		{
			breakpoint: 1170,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 6
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 415,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 340,
			settings: {
				slidesToShow: 2
			}
		},

	]
});



$('.brands-page__slider').slick({
	arrows: true,
	dots: false,
	speed: 800,
	autoplay: false,
	autoplaySpeed: 3100,
	slidesToShow: 6,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 430,
			settings: {
				slidesToShow: 1
			}
		},

	]
});
