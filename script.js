document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    const visibleSlides = 4; // Количество видимых слайдов
    const slideWidth = slides[0].offsetWidth + 10; // Учитываем отступы между слайдами
    let currentIndex = 0;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возвращаемся к началу
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - visibleSlides; // Переход к последним видимым слайдам
        }
        updateCarousel();
    });

    updateCarousel(); // Начальное обновление
});

document.addEventListener('DOMContentLoaded', () => {
    const cloud = document.querySelector('.cloud');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        cloud.style.transform = `translateX(${scrollPosition * 0.2}px)`; // Регулируй множитель для эффекта
    });
});