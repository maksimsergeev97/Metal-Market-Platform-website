'use strict'


$(document).ready(function(){ 

    $('.get-offer').on('click', function(){
        $('.overlay, #offer').fadeIn('slow');
        $('#trading, #logistic, #freight').fadeOut();
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #offer, #thanks, #trading, #logistic, #freight').fadeOut('slow');
    });

    $('#trading__btn').on('click', function(){
        $('.overlay, #trading').fadeIn('slow');
    });

    $('#logistic__btn').on('click', function(){
        $('.overlay, #logistic').fadeIn('slow');
    });

    $('#freight__btn').on('click', function(){
        $('.overlay, #freight').fadeIn('slow');
    });

    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('hamburger_active')
        $('.header__menu').toggleClass('header__menu_active');
        
    });

    $('.header__menu__link a').on('click', function(){
        $('.hamburger').toggleClass('hamburger_active')
        $('.header__menu').toggleClass('header__menu_active');
    });



    //validate forms
    function validateFormEn (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },             
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("Enter the minimum {0} symbols")
                },
                phone: "Please enter your phone number",
                email: {
                    required: "Please enter your email",
                    email: "Email address entered incorrectly"
                },
                message: "Please enter a message"
            } 
        });
    }

    function validateFormRu (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },             
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                name: {
                    required: "????????????????????, ?????????????? ???????? ??????",
                    minlength: jQuery.validator.format("?????????????? ?????????????? {0} ????????????????")
                },
                phone: "????????????????????, ?????????????? ?????????? ????????????????",
                email: {
                    required: "????????????????????, ?????????????? ??????????",
                    email: "???????????????? ?????????? ???????????? ??????????????????????"
                },
                message: "????????????????????, ?????????????? ??????????????????"
            } 
        });
    }

    function validateFormCz (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },             
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                name: {
                    required: "Zadejte pros??m sv?? jm??no",
                    minlength: jQuery.validator.format("Zadejte minimum {0} znaky")
                },
                phone: "Zadejte pros??m telefonn?? ????slo",
                email: {
                    required: "Zadejte pros??m sv??j email",
                    email: "Nespr??vn?? zadan?? po??tovn?? adresa"
                },
                message: "Zadejte zpr??vu"
            } 
        });
    }

    validateFormEn('.contacts__item form:lang(en)')
    validateFormEn('#offer form:lang(en)')

    validateFormRu('.contacts__item form:lang(ru)')
    validateFormRu('#offer form:lang(ru)')

    validateFormCz('.contacts__item form:lang(cz)')
    validateFormCz('#offer form:lang(cz)')


    $('form').submit(function(e){
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }


        // php-mailer 

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#get-offer').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


            $("form").trigger('reset');
        });
        return false;
    });

    // smooth scrol and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) { //???????????????????????? ???????????????? ???????? ???? 800px
          $('.scroll-top').fadeIn(); //???????????????? ??????????????
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('a[href^="#"]').click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
});