'use strict';

{
    const images = [
        'assets/story/1.png',
        'assets/story/2.png',
        'assets/story/3.png',
        'assets/story/4.png',
        'assets/story/5.png',
        'assets/story/6.png',
        'assets/story/7.png',
        'assets/story/8.png',
        'assets/story/9.png',
        'assets/story/10.png',
        'assets/story/11.png',
        'assets/story/12.png',
        'assets/story/13.png',
        'assets/story/14.png',
        'assets/story/15.png',
        'assets/story/16.png',
        'assets/story/17.png',
        'assets/story/18.png',
        'assets/story/19.png',
        'assets/story/20.png',
        'assets/story/21.png',
        'assets/story/22.png',
        'assets/story/23.png',
        'assets/story/24.png',
        'assets/story/25.png',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentIndex + 1;
        if (target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });
    
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId; 

    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        },1000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', ()=> {
        if (isPlaying === false) {
            playSlideshow();
            play.textContent = 'Pause';
        } else{
            clearTimeout(timeoutId);
            play.textContent = 'Play';
        }
        isPlaying = !isPlaying;
    });
}