let overlay = document.getElementsByTagName("body")[0];
let sekunde = 2; //postavio sam timeout funkciju, jer se slider prebrzo load-a, pa da se moze bolje vidjeti

window.addEventListener('load', function() {
    setTimeout(function() { overlay.classList.add("loaded"); }, sekunde * 1000);
});

// main menu

function openNav() {
    document.getElementById("main-menu").style.height = "100%";
}

function closeNav() {
    document.getElementById("main-menu").style.height = "0%";
}

const links = document.querySelectorAll(".menu-items a");

for (const link of links) {
  link.addEventListener("click", closeNav);
}

function klikniMe() {
    alert('Jesam rekao ne klikaj? No dobro, zelim ti ugodan ostatak dana :D');
}

// slider pozadina

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

// galerija

var modalBox = document.querySelector('.galerija-modal-box'),
    modalBoxImg = modalBox.querySelector('.galerija-modal-box--image'),
    galerijaOverlay  = document.querySelector('.galerija-overlay'),
    imageBox = document.querySelectorAll('.notus-img-box'),
    modalImgBox = modalBoxImg.querySelector('img');


for (let i = 0; i < imageBox.length; i++) {
    imageBox[i].onclick = function () {
        modalBox.classList.remove('invisible');
        var imgSrc = this.querySelector('.notus-img-box img').src;
        modalImgBox.src = imgSrc;
    }
}

galerijaOverlay.onclick = function () {
    modalBox.classList.add('invisible');
}

//slider galerija

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("prikazi-slide");
    if (n > slides.length) {
        slide_index = 1
    }
    if (n < 1) {
        slide_index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}