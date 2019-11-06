function scrollTo(clickElem, goToElem, timeToScroll) {
    $(clickElem).click(function (e) {
        e.preventDefault();
        $("html , body").animate({
            scrollTop: $(goToElem).offset().top
        }, timeToScroll);
    });
}
scrollTo()

var scrollLink = document.querySelector(".scrollLink");

scrollLink.addEventListener("click", function(e){
    e.preventDefault();
   scrollTo(".scrollLink",".section-2", 1000);
})


