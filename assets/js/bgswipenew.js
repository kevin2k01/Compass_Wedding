    var images = ['url(assets/img/ona1.webp)', 'url(assets/img/thirdbg2.webp)', 'url(assets/img/bgsec2.webp)', 'url(assets/img/on22.webp)'];
    var currentIndex = 0;
    var hero = document.getElementById('hero');

    function changeBackground() {
        hero.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial call
    changeBackground();

    // Auto change background every 3 seconds
    setInterval(changeBackground, 3000);
