/*  ハンバーガー  */
const header = document.querySelector('header');
const btn = document.querySelector('.burger-btn');
const mask = document.querySelector('#mask');

const pickUp = document.querySelector('#nav-pick-up');
const feature = document.querySelector('#nav-feature');
const contact = document.querySelector('#nav-contact');

btn.onclick = () => {
    header.classList.toggle('open');
};
mask.onclick = () => {
    header.classList.remove('open');
};
pickUp.onclick = () => {
    header.classList.remove('open');
};
feature.onclick = () => {
    header.classList.remove('open');
};
contact.onclick = () => {
    header.classList.remove('open');
};

/*  スライダー */
const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,

    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
        600: {
            spaceBetween: 60,
            slidesPerView: 3.5,
        }
    }
});

/*  フェード表示  */

const items = document.querySelectorAll('.item');
const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
};

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(callback, option);
items.forEach((item) => observer.observe(item));

/*  スムーススクロール */

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        
        let targetElement = document.getElementById(href.replace('#', '')); 
        
        const rect = targetElement.getBoundingClientRect().top;
        
        const offset = window.pageYOffset;
        const gap = 80; 
        const target = rect + offset - gap; 

        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}