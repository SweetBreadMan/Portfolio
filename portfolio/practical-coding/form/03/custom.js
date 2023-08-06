$(function(){
    var colorPick = $('.colors > span');

    $(colorPick).click(function(){
        var bgc = $(this).css('background-color');

        $(this).addClass('active');
        $(this).siblings(colorPick).removeClass('active');
        $('body').css('background-color',bgc);
        $('h2').css('border-color', bgc);
        $('#login-button').css('background-color', bgc);
    })

})