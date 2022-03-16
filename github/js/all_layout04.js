$(function(){
////////////////////////////////
// $('선택') .on('이벤트', 할일)
// function 일() ()
//$(this) 나
//$(this) .index() 번호 



function 팝업창끄기() {
    $(this).parent().hide();
    }
    console.log($(this).parent().index());



$('.popup button').on('click', 팝업창끄기);



})