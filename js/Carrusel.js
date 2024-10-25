const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel a');
let currentIndex = 0;

function changeImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Mover la imagen con transición
    carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Cambia de imagen cada 3 segundos (3000 milisegundos)
setInterval(changeImage, 5000);
