$(document).ready(function () {
    //-----------mobile menu
    $('#btn-m-menu-open').on('click', function () {
        $('#mobile-menu').toggleClass('active-mobile-menu');
        $('#btn-m-menu-open').toggleClass('active-btn-m-m-open');
        $('#btn-m-menu-close').toggleClass('active-btn-m-m-close');
    });
    $('#btn-m-menu-close').on('click', function () {
       $('#btn-m-menu-close').toggleClass('active-btn-m-m-close');
       $('#btn-m-menu-open').toggleClass('active-btn-m-m-open');
       $('#mobile-menu').toggleClass('active-mobile-menu');
    });
    //-----------mobile header
    $(window).scroll(function () {
        let header = 'header';
        let mobileMenu = '#mobile-menu';
        let btnMobileMenuOpen = '#btn-m-menu-open';
        let btnMobileMenuCloce = '#btn-m-menu-close';
        if ( $(window).scrollTop() >= 1){
           $(header).addClass('mobile-header-on-scroll');
           $(mobileMenu).addClass('mobile-menu-on-scroll');
           $(btnMobileMenuOpen).addClass('btn-m-menu-on-scroll');
            $(btnMobileMenuCloce).addClass('btn-m-menu-on-scroll');
       }
       else{
            $(header).removeClass('mobile-header-on-scroll');
            $(mobileMenu).removeClass('mobile-menu-on-scroll');
            $(btnMobileMenuOpen).removeClass('btn-m-menu-on-scroll');
            $(btnMobileMenuCloce).removeClass('btn-m-menu-on-scroll');
        }
    });
    //-----------scroll-btn
    $('#scroll-top').on('click', function () {
        $('html,body').animate({scrollTop : 0}, 1000);
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 300){
            $('#scroll-top').show()
        }
        else
            $('#scroll-top').hide()
    });
    //------------modal
    $modal = $('#modal');
    $('#modal-btn').on('click', function () {
        $modal.css('display', "block")
    });
    $('.close').on('click', function () {
        $modal.css('display', "none")
    });
    $(window).on('click', function (event) {
        if (event.target === $modal[0]) {
            $modal.css('display', "none");
        }
    });
    //-----------------ajax
    $('#main-menu').on('click', 'li a', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        target = target.replace('#', '');
        $.ajax({
            method: "GET",
            url: target + ".html",
            dataType: "html",
            success: function (html) {
                $('#content').html(html);
            }

        });
        console.log(target);

    });
    // $(window).on('scroll', function(){
    //   if($(window).scrollTop() > 0){
    //       $('header').css('position', 'fixed');
    //       $('header').css('top', 0);
    //   }else{
    //       $('header').css('position', 'static');
    //   }
    // })
});



