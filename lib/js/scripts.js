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

    function displayArticles(){
        $('.Fourth-sectionArticlesLinks .first').on('click', function(){
            $('.Fourth-sectionArticles.second-article').css('display', 'none');
            $('.Fourth-sectionArticles.third-article').css('display', 'none');
            $('.Fourth-sectionArticles.first-article').fadeIn('slow');
            $('.Fourth-sectionArticlesLinks .second').removeClass('active');
            $('.Fourth-sectionArticlesLinks .third').removeClass('active');
            $(this).addClass('active');
        });

        $('.Fourth-sectionArticlesLinks .second').on('click', function(){
            $('.Fourth-sectionArticles.first-article').css('display', 'none');
            $('.Fourth-sectionArticles.third-article').css('display', 'none');
            $('.Fourth-sectionArticles.second-article').fadeIn('slow');
            $('.Fourth-sectionArticlesLinks .first').removeClass('active');
            $('.Fourth-sectionArticlesLinks .third').removeClass('active');
            $(this).addClass('active');
        });

        $('.Fourth-sectionArticlesLinks .third').on('click', function(){
            $('.Fourth-sectionArticles.first-article').css('display', 'none');
            $('.Fourth-sectionArticles.second-article').css('display', 'none');
            $('.Fourth-sectionArticles.third-article').fadeIn('slow');
            $('.Fourth-sectionArticlesLinks .second').removeClass('active');
            $('.Fourth-sectionArticlesLinks .first').removeClass('active');
            $(this).addClass('active');
        });
    }


    modalVideo();
    scrollMove();
    displayArticles();
})();