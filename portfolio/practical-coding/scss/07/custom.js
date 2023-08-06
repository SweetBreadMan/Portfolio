$(function(){
    // Sign Tab
    $('.signin-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings('span').removeClass('active');
        $('.signin-inner').removeClass('active');
        $('.signup-inner').removeClass('active');
    })
    $('.signup-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings('span').removeClass('active');
        $('.signin-inner').addClass('active');
        $('.signup-inner').addClass('active');
    })


    $('input').on('input',function(){
        if($('input').val() == ''){
            $(this).siblings('label').removeClass('input-fill');
        } else {
            $(this).siblings('label').addClass('input-fill');
        }
    })
})