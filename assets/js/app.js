$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
function test(){
    if(CheckFirstName() && CheckNumber())
    {
        alert("Фотосесію замовлено");
    }}
function AuditText(value){
    var re=/^[а-яА-Я]+$/; /*функція для перевірки на наявність букв*/
    if (value.match(re))
    {
        return true;
    }
    else
    {
        return false;
    }}
function AuditNumber(value){
    return !isNaN(value); /*isNaN-функція js яка перевіряє на число*/
}
function CheckFirstName()
{
    let fnameValue = document.forms["section-form"]["name"].value; 
    if(!AuditText(fnameValue)) /*перевіряєм на наявність букв*/
    {
        alert("Ім'я повинно вводитись буквами"); 
        return false;
    }
    return true;
}
function CheckNumber(){
    let numberValue = document.forms["section-form"]["number"].value;
    if(!AuditNumber(numberValue)){
        alert("Неправильний номер"); /*Перевіряєм на наявність цифр*/
        return false;
    }
    return true;}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Btn").style.display = "block";
  } else {
    document.getElementById("Btn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
function buttonClick(btn)
{
    alert("Ви замовили фотосесію");
}



