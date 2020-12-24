function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';

    heart.style.animationDuration = Math.random() * 2 + 3 + 's';  

    heart.innerText = 'Be Good 2021💜';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);