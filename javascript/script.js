$(".button").on("click", function (event) {
    event.preventDefault();
   $(this).toggleClass("toggled");
   if ($(this).hasClass('toggled')){
       $(".but_narrow_wrap").css({"border-radius": ' 10px 10px 0 0 ',});
       $('.narrow_buttons').removeClass('disp_none')
   }else{
       $(".but_narrow_wrap").css({"border-radius": ' 10px',});

       $('.narrow_buttons').addClass('disp_none')
   }

});

