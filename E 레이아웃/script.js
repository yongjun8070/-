$(function(){
    $(".menu>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    })
    $(".menu>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    })
    
})
setInterval(function(){
    $(".slidewrap").delay(2000);
    $(".slidewrap").animate({marginLeft:-795})
    $(".slidewrap").delay(2000);
    $(".slidewrap").animate({marginLeft:-1590})
    $(".slidewrap").delay(2000);
    $(".slidewrap").animate({marginLeft:0})
})