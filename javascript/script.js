
$(".button").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("toggled");
    if ($(this).hasClass('toggled')) {
        $(".but_narrow_wrap").css({"border-radius": ' 10px 10px 0 0 ', 'background': '#d6d6d6'});
        $('.narrow_buttons').removeClass('disp_none')
    } else {

        $(".but_narrow_wrap").css({"border-radius": ' 10px', 'background': 'none'});
        $('.narrow_buttons').addClass('disp_none')


    }

});
console.log(gsap.version)
import validate_form from './form_validator.mjs'
validate_form({
    formId: 'profile',
    formValidClass: 'form_valid',
    formInvalidClass: 'form_invalid',

    inputErrorClass: 'input_error'
});