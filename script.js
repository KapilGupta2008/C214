$(function(){
    $("#show_chat").click(function(){
        $(".left-window").css("display","none");
        $(".right-window").css("display","block");
        $(".header_back").css("display","block");
    })

    $(".header_back").click(function(){
        $(".right-window").css("display","none");
        $(".left-window").css("display","block");
        $(".header_back").css("display","none");
    })

})