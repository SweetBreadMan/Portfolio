$(function(){
    // Id Login Tab & Form
    $('.id-login-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        $('.id-login-form').show();
        $('.id-login-form').siblings('form').hide();
    })
    $('.switch').click(function(){
        $(this).toggleClass('toggle');
    })

    // Ones Number Tab & Form
    $('.ones-number-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        $('.ones-number-form').show();
        $('.ones-number-form').siblings('form').hide();
    })

    // QR Tab & Form
    $('.qr-login-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        $('.qr-form').show();
        $('.qr-form').siblings('form').hide();
    })
})