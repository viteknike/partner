$(document).ready(function(){
    $('.carousel-partner-page').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:2,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            600:{
                items:2
            }
        }
    });

    $('.image-carousel').on('click', function() {
        let img_src = $(this).find('img').attr('src');
        $('.main-image-block img').attr('src', img_src);

        let text_title = $(this).data('title');
        $('.main-image-block h4').html(text_title);
        let text_p = $(this).data('text');
        $('.main-image-block p').html(text_p);
        //alert(img_src);
        //console.log(text_title);
        //console.log($(this));
        // p .text()
        // p .html()
        // p .text(text)
        // p .html(text)
        return false;
    });


});