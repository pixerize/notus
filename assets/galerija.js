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