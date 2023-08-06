$(function(){
    $('input').focus(function(){
        $(this).parent('label').addClass('focus');
    })
    $('input').blur(function(){
        $(this).parent('label').removeClass('focus');
    })
})