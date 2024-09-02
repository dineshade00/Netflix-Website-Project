const sliders = document.querySelectorAll('.slider-track');
sliders.forEach(slider => {
    let currentSlide = 0;
    const items = slider.querySelectorAll('.slider-item');

    slider.parentNode.querySelector('.next').addEventListener('click', function() {
        if (currentSlide < items.length - 1) {
            currentSlide++;
            slider.style.transform = `translateX(-${currentSlide * (items[0].offsetWidth + 20)}px)`;
        }
    });

    slider.parentNode.querySelector('.prev').addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            slider.style.transform = `translateX(-${currentSlide * (items[0].offsetWidth + 20)}px)`;
        }
    });
});