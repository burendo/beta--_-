'use strict';

{
    const images = [
        'assets/story2/64.png',
        'assets/story2/65.png',
        'assets/story2/66.png',
        'assets/story2/67.png',
    ];
    let currentIndex2 = 0;

    const mainzImage = document.getElementById('mainz');
    mainzImage.src = images[currentIndex2];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex2) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainzImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex2].classList.remove('current');
            currentIndex2 = index;
            thumbnails[currentIndex2].classList.add('current');
        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next1 = document.getElementById('next1');
    next1.addEventListener('click', () => {
        let target = currentIndex2 + 1;
        if (target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });
    
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex2 - 1;
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
        },5000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', ()=> {
        if (isPlaying === false) {
            playSlideshow();
            play.textContent = '止まる';
        } else{
            clearTimeout(timeoutId);
            play.textContent = '動く';
        }
        isPlaying = !isPlaying;
    });
}