$(function(){
    $('.hamburger-btn').click(function(){
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('active');
    })

    $(document).mouseup(function(e){
        if($('.navbar').has(e.target).length === 0 ){
            $('.navbar').removeClass('active');
            $('.hamburger-btn').removeClass('active');
            $('body').removeClass('active');
        }
    })
})