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
    // spaceBetween: 60,
    // slidesPerView: 3.5,
    centeredSlides: true,

    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
        600: {
            spaceBetween: 60,
            slidesPerView: 3.5,
        }
    }
    // initialSlide: 1,
    // breakpoints: {
    //     600: {
    //     },
    // }
});

/*  intersectionObserver */

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
        
        // 3. ターゲットの位置を取得
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        console.log(href)
        // 各a要素のリンク先を取得
        let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得
        console.log(targetElement)
        
        const rect = targetElement.getBoundingClientRect().top;
        console.log(rect)
         // ブラウザからの高さを取得
        const offset = window.pageYOffset;
        console.log(offset)
         // 現在のスクロール量を取得
        const gap = 80; // 固定ヘッダー分の高さ
        const target = rect + offset - gap; 
        //最終的な位置を割り出す

        // // 4. スムースにスクロール
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });

    });

}