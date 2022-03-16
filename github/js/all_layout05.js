$(function(){

////////////////////////////////
// $('선택') .on('이벤트', 할일)
// function 일() ()
//$(this) 나
//$(this) .index() 번호 
function tabHandler(){
    var idx = $(this).index();
    $('.tabLink li').removeClass('active');
    $(this). addClass('active');
    $('.tabContent>div').removeClass('active'); 
    $('.tabContent>div').eq(idx); addClass('active');
}




$('.tabLink li').on('click' , tabHandler);
$('.xi-close').on('click', function(){
    $('.headerWrap').slideToggle();
})

////////////////
})


