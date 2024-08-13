document.addEventListener('DOMContentLoaded', function () {
    let witheTopbar = document.querySelector('.witheTopbar');
    let greenTopbar = document.querySelector('.greenTopbar');
    let overHero = document.getElementById('news');

    window.addEventListener('scroll', function () {
        let overHeroTop = overHero.getBoundingClientRect().top + window.scrollY;
        console.log('scrollY:', window.scrollY, 'overHeroTop:', overHeroTop);

        if (this.window.scrollY == 0) {
            witheTopbar.classList.add('hidden');
            greenTopbar.classList.remove('hidden');
        }

        // if (window.scrollY >= overHeroTop) {

        //     console.log('加入');
        //     witheTopbar.classList.add('hidden');
        //     greenTopbar.classList.remove('hidden');
        // } else {

        //     console.log('移出');
        //     witheTopbar.classList.remove('hidden');
        //     greenTopbar.classList.add('hidden');
        // }
    });
});