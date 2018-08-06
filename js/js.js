$(document).ready(function() {
    $('.table__rating').DataTable( {
        "paging":         true,
        "lengthChange": false,
        "info": false,
        "language": {
            "search": "",
            "processing": "Подождите...",
            "loadingRecords": "Загрузка записей...",
            "zeroRecords": "Записи отсутствуют",
            "emptyTable": "В таблице отсутствуют данные"
        }
    } );
    $('#table-rating_filter input[type="search"]').attr("placeholder","Поиск брокера").addClass('search-input');

    $('.section__articles_row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn btn-text slick-prev slick-prev-article"><i class="arrow-icon icon-slick-left fal fa-angle-left"></i><span>Пред</span></button>',
        nextArrow: '<button type="button" class="slick-btn btn-text slick-next slick-next-article"><i class="arrow-icon icon-slick-right fal fa-angle-right"></i><span>След</span></button>',
        responsive: [{
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
   /* $('.banner-sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:true
    });*/

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var $header = $("#header");

        if (scroll >= 10) {
            $header.addClass("header_scrolled");
        } else {
            $header.removeClass("header_scrolled");
        }
    });

    $(document).on('click', '.js-link', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 73
        }, 500);
    });

    $("#btn-toggle").on('click',function(){
        $("#header").toggleClass("menu-opened");
        $("#header-nav").slideToggle(400);
    });

} );


