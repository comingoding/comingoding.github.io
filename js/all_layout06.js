$(function(){
    //////////////////////////////////
    
    // topBannner : oh 2022.03.17 수정
    function topBannerHandler() {
        // $('.topBannner').hide(); //display:none;
        $('.topBannner').slideUp();
    }
    $('.topBannner .container i').on('click', topBannerHandler);
    
    
    $('.visualSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //////////////////////////////////
    })