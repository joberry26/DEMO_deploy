// let img1 = document.querySelector("#1");
// let img2 = document.querySelector("#2");
// let img3 = document.querySelector("#3");
// let img4 = document.querySelector("#4");
// let img5 = document.querySelector("#5");

var textIndex = 1;
var slideIndex = 1;
showSlides(slideIndex);
slideText(textIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  slideText(textIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    slideText(textIndex = n)
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";

}

function slideText(n) {

    var i;
    let text = document.getElementsByClassName("mySlideText")

    if (n > text.length) {textIndex = 1}
    if (n < 1) {textIndex = text.length}

    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none"
    }

    text[textIndex-1].style.display = "block";

}



