

// Google Translate integrimi

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,sq,fr,es,de,pl,hr,el,sv,hu,uk',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');

    
    setTimeout(function() {
        var lang = localStorage.getItem('selected_lang');
        if (lang && lang !== 'en') {
            var selectField = document.querySelector('.goog-te-combo');
            if (selectField) {
                selectField.value = lang;
                selectField.dispatchEvent(new Event('change'));
            }
        }
    }, 1000);
}



document.addEventListener('DOMContentLoaded', function() {
    if (typeof navSlide === 'function') navSlide();
    if (typeof smoothScroll === 'function') smoothScroll();

   
    document.body.addEventListener('change', function(e) {
        if (e.target.className === 'goog-te-combo') {
            localStorage.setItem('selected_lang', e.target.value);
        }
    });
});

// Nav responsiv
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    if (!burger || !nav || !navLinks.length) return;
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

// Smooth scroll
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
}