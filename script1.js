let slides = document.getElementsByClassName("slide");

let next = document.getElementById('next');
let previous = document.getElementById('previous');
let pause = document.getElementById('pause');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let playing = true;

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

function pauseSlideshow() {
    document.getElementById("pause").textContent = "PLAY";
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    document.getElementById("pause").textContent = "PAUSE";
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pause.addEventListener("click", xx);

function xx() {

    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function () {
    pauseSlideshow();
    nextSlide();
};

previous.onclick = function () {
    pauseSlideshow();
    previousSlide();
};