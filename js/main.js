$(document).ready(function () {
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
    //js

    // var modal = document.getElementById("modal");
    // var btn = document.getElementById("modal-btn");
    // var span = document.getElementsByClassName("close")[0];
    // btn.onclick = function () {
    //     modal.style.display = "block";
    // };
    // span.onclick = function () {
    //     modal.style.display = "none";
    // };
    // window.onclick = function (event) {
    //     if (event.target === modal) {
    //         modal.style.display = "none";
    // }
    // };
});



