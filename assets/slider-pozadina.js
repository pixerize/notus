//slider

var slideIndex = 1;
notuSlider(slideIndex);

function sljedeciSlide(n) {
    notuSlider(slideIndex += n);
}

function predhodniSlide(n) {
    notuSlider(slideIndex += n);
}

function notuSlider(n) {
    var slides = 3; //broj slika u slideru
    var pozadina = document.getElementsByClassName("notus-main")[0];
    var trenutni = document.getElementsByClassName("trenutni")[0];
    var ukupno = document.getElementsByClassName("ukupno")[0];
    if (n > slides) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides;
    }
    trenutni.textContent = slideIndex;
    ukupno.textContent = slides;
    pozadina.style.background = "url(assets/images/notus-task1-img" + slideIndex + ".jpg";
}