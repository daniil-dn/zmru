var but_narrow_tmLite = new TimelineMax();

// alert(window.innerWidth)

$(".button").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("toggled");
    if ($(this).hasClass('toggled')) {
        $('.narrow_buttons').removeClass('disp_none');
        but_narrow_tmLite.to('.but_narrow_wrap', 0.1, {
            backgroundColor: 'rgb(212, 212, 212)'
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
            $('.narrow_buttons').addClass('disp_none')
        }, 1000)
    }
});
// console.log(gsap.version)
