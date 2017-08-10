(function(){
    function modalVideo(){
        $('.js-modal-btn').on('click', function(e){
            e.preventDefault();
        });
        $(".js-modal-btn").modalVideo();
    }

    function scrollMove(){
        $(document).on('click', 'a', function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });
    }

    modalVideo();
    scrollMove();
})();