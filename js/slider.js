$('#problems-solve-slider').slick({
    autoplay: true,
    speed: 300,
    arrows: true,
    nextArrow: "<svg xmlns='http://www.w3.org/2000/svg' class='slick-next' height='30' viewBox='5 5 15 15' width='30'><path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'/><path d='M0-.25h24v24H0z' fill='none'/></svg>",
    prevArrow: "<svg xmlns='http://www.w3.org/2000/svg' class='slick-prev' height='30' viewBox='5 5 15 15' width='30'><path d='M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z'/><path d='M0-.5h24v24H0z' fill='none'/></svg>",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: "unslick"
        },
        {
            breakpoint: 640,
            settings: "unslick"
        }
    ]
});