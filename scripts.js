document.addEventListener('DOMContentLoaded', () => {
    // Current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Language Switcher Logic
    const langSwitch = document.getElementById('lang-switch');
    
    // Set default language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';
    langSwitch.value = currentLang;
    updateLanguage(currentLang);

    langSwitch.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('portfolio-lang', currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        const t = window.translations[lang];
        if (!t) return;

        // Simple text elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(t, key);
            if (translation) {
                if (el.tagName === 'INPUT' && el.type === 'submit') {
                    el.value = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // List elements
        const listElements = document.querySelectorAll('[data-i18n-list]');
        listElements.forEach(cl => {
            const key = cl.getAttribute('data-i18n-list');
            const listArr = getNestedValue(t, key);
            if (listArr && Array.isArray(listArr)) {
                cl.innerHTML = '';
                listArr.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    cl.appendChild(li);
                });
            }
        });
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[path] ? acc[path] : (acc ? acc[part] : undefined), obj);
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileBtn.querySelector('i').classList.remove('fa-times');
                mobileBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.98)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        }
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});