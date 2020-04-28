import validateForm from "./form_validator.js";


$(document).ready(function () {
    $(".main__gallery").cycle({
        fx: 'scrollRight',
        sync: true
    })
})
// var kd='gg'
// console.log('dsff' + `${kd}`)
var but_narrow_tmLite = new TimelineMax();

// alert(window.innerWidth)

$(".nav__button").on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass("toggled");
    if ($(this).hasClass('toggled')) {
        $('.nav__narrow-buttons').removeClass('disp_none ');
        but_narrow_tmLite.to('.but_narrow_wrap', 0.1, {
            backgroundColor: 'rgb(231,231,231)'
        }).to('.but_narrow_wrap', 0.2, {borderRadius: '10px 10px 0 0'},)
            .to('.narrow_buttons', 0.2, {height: 'auto'}, '+=0.2')
            .to('.narrow_buttons div', 0.2, {transform: 'translateY(0)'})
            .to('.narrow_buttons div', 0.2, {opacity: 1}, "-=0.3")
        ;


        if (but_narrow_tmLite.progress() != 1) {
            //carl just changed this again
            but_narrow_tmLite.play();
        } else {
            but_narrow_tmLite.restart();
        }

    } else {
        but_narrow_tmLite.reverse(1);
        setTimeout(() => {
            $('.nav__narrow-buttons').addClass('disp_none')
        }, 1000)
    }
});
$('.main__gallery img').on('mousemove', function (event) {
    let yCoor = event.clientY /15
    console.log(yCoor)
    let proc50OfElem = $('.main__gallery img').height() /4.1
    let parallax = (parseInt(proc50OfElem) + parseInt(yCoor)) * -1
    parallax = (parallax) + 'px'

    $('.main__gallery img').css({transform: 'translate(0, ' + parallax + ')'})
})
// console.log(gsap.version)



// Вызов валидатора формы
validateForm({
    formId: 'profile',
    formValidClass: 'form_valid',
    formInvalidClass: 'form_invalid',

    inputErrorClass: 'input_error'
});




