document.addEventListener('DOMContentLoaded', function() {
    let witheTopbar = document.querySelector('.witheTopbar');
    let greenTopbar = document.querySelector('.greenTopbar');
    let overHero = document.getElementById('news'); // 確保這是你想要的元素

    if (!witheTopbar || !greenTopbar || !overHero) {
        console.error('未能找到所需的元素');
        return;
    }

    window.addEventListener('scroll', function() {
        let overHeroTop = overHero.getBoundingClientRect().top + window.scrollY;

        console.log('scrollY:', window.scrollY, 'overHeroTop:', overHeroTop);

        if (window.scrollY >= overHeroTop) {
            witheTopbar.classList.add('hidden');
            greenTopbar.classList.remove('hidden');
        } else {
            witheTopbar.classList.remove('hidden');
            greenTopbar.classList.add('hidden');
        }
    });
});