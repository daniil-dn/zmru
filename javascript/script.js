$(".button").on("click", function (event) {
    event.preventDefault();
   $(this).toggleClass("toggled");
});