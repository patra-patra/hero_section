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
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left; // Позиция мыши внутри контейнера
        const centerX = rect.width / 2; // Центр контейнера

        const moveAmountX = (mouseX - centerX) * 0.04; // Уменьшил коэффициент в 2 раза

        const x = (e.clientX / window.innerWidth - 0.5) * 2; 
        const y = (e.clientY / window.innerHeight - 0.5) * 1;

        // Ограничиваем движение облака в пределах контейнера
        const maxMoveX = (rect.width - cloud.clientWidth) / 6;
        const limitedMoveX = Math.max(-maxMoveX, Math.min(maxMoveX, moveAmountX));

        cloud.style.transform = `translate(${limitedMoveX + x}px, ${y}px)`;
    });
});
