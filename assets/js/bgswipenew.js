    var images = ['url(assets/img/ona.jpg)', 'url(assets/img/thirdbg.jpg)', 'url(assets/img/bgsec.jpg)', 'url(assets/img/on2.jpg)'];
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
