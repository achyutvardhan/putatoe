let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeCarousel", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeCarousel";
}

// auto play
var counter = 1;
setInterval(function() {
    let slides = document.getElementsByClassName("mySlides");
    counter++;
    if (counter > slides.length) {
        counter = 1;
    } else {
        plusSlides(1);
    }
}, 10000);