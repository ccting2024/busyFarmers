document.addEventListener('DOMContentLoaded', function () {
    let witheTopbar = document.querySelector('.witheTopbar');
    let greenTopbar = document.querySelector('.greenTopbar');
    let anchor = document.getElementById('anchor');

    window.addEventListener('scroll', function () {
        let AnchorTop = anchor.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= AnchorTop) {
            witheTopbar.classList.add('hidden');
            greenTopbar.classList.remove('hidden');
        } else {
            witheTopbar.classList.remove('hidden');
            greenTopbar.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newsBtn = document.querySelector('.newsBtn');
    const img = newsBtn.querySelector('.btn-w');

    newsBtn.addEventListener('mouseover', () => {
        img.src = '../images/1/arrow-br.svg'; 
    });

    newsBtn.addEventListener('mouseout', () => {
        img.src = './images/1/arrow-w.svg'; 
    });
});


