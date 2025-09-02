// Système de traduction multilingue
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.skills': 'Compétences',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Page d'accueil
        'home.title': 'Youssef M - Développeur Full Stack',
        'home.subtitle': 'Étudiant en Master MIAGE, passionné par le développement web et mobile',
        'home.viewProjects': 'Voir mes projets',
        'home.downloadCv': 'Télécharger CV',
        
        // Contact
        'contact.title': 'Contactez-moi',
        'contact.name': 'Nom',
        'contact.namePlaceholder': 'Votre nom',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'Votre email',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Votre message',
        'contact.send': 'Envoyer',
        
        // À propos
        'about.title': 'À propos de moi',
        'about.intro': 'Étudiant en Master MIAGE à l\'Université de Versailles Saint-Quentin, je suis passionné par le développement web et mobile.',
        'about.education': 'Formation',
        'about.experience': 'Expérience',
        'about.languages': 'Langues',
        
        // Projets
        'projects.title': 'Mes Projets',
        'projects.viewProject': 'Voir le projet',
        'projects.sourceCode': 'Code source',
        
        // Compétences
        'skills.title': 'Mes Compétences',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.database': 'Base de données',
        'skills.tools': 'Outils',
        
        // Services
        'services.title': 'Mes Services',
        'services.webDev': 'Développement Web',
        'services.mobileDev': 'Développement Mobile',
        'services.consulting': 'Consultation',
        
        // Merci
        'thanks.title': '🎉 Merci pour votre message !',
        'thanks.message': 'Votre message a été envoyé avec succès. Je vous contacterai très bientôt.',
        'thanks.backHome': 'Retour à l\'accueil',
        'thanks.viewProjects': 'Voir mes projets'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Home page
        'home.title': 'Youssef M - Full Stack Developer',
        'home.subtitle': 'Master\'s student in MIAGE, passionate about web and mobile development',
        'home.viewProjects': 'View my projects',
        'home.downloadCv': 'Download CV',
        
        // Contact
        'contact.title': 'Contact me',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Your name',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'Your email',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Your message',
        'contact.send': 'Send',
        
        // About
        'about.title': 'About me',
        'about.intro': 'Master\'s student in MIAGE at the University of Versailles Saint-Quentin, I am passionate about web and mobile development.',
        'about.education': 'Education',
        'about.experience': 'Experience',
        'about.languages': 'Languages',
        
        // Projects
        'projects.title': 'My Projects',
        'projects.viewProject': 'View project',
        'projects.sourceCode': 'Source code',
        
        // Skills
        'skills.title': 'My Skills',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.database': 'Database',
        'skills.tools': 'Tools',
        
        // Services
        'services.title': 'My Services',
        'services.webDev': 'Web Development',
        'services.mobileDev': 'Mobile Development',
        'services.consulting': 'Consulting',
        
        // Thanks
        'thanks.title': '🎉 Thank you for your message!',
        'thanks.message': 'Your message has been sent successfully. I will contact you very soon.',
        'thanks.backHome': 'Back to home',
        'thanks.viewProjects': 'View my projects'
    },
    
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.about': 'О себе',
        'nav.projects': 'Проекты',
        'nav.skills': 'Навыки',
        'nav.services': 'Услуги',
        'nav.contact': 'Контакты',
        
        // Home page
        'home.title': 'Юсеф М - Full Stack Разработчик',
        'home.subtitle': 'Студент магистратуры MIAGE, увлечённый веб и мобильной разработкой',
        'home.viewProjects': 'Посмотреть проекты',
        'home.downloadCv': 'Скачать резюме',
        
        // Contact
        'contact.title': 'Связаться со мной',
        'contact.name': 'Имя',
        'contact.namePlaceholder': 'Ваше имя',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'Ваш email',
        'contact.message': 'Сообщение',
        'contact.messagePlaceholder': 'Ваше сообщение',
        'contact.send': 'Отправить',
        
        // About
        'about.title': 'О себе',
        'about.intro': 'Студент магистратуры MIAGE в Университете Версаля Сен-Кантен, увлечён веб и мобильной разработкой.',
        'about.education': 'Образование',
        'about.experience': 'Опыт',
        'about.languages': 'Языки',
        
        // Projects
        'projects.title': 'Мои Проекты',
        'projects.viewProject': 'Посмотреть проект',
        'projects.sourceCode': 'Исходный код',
        
        // Skills
        'skills.title': 'Мои Навыки',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.database': 'База данных',
        'skills.tools': 'Инструменты',
        
        // Services
        'services.title': 'Мои Услуги',
        'services.webDev': 'Веб-разработка',
        'services.mobileDev': 'Мобильная разработка',
        'services.consulting': 'Консультации',
        
        // Thanks
        'thanks.title': '🎉 Спасибо за ваше сообщение!',
        'thanks.message': 'Ваше сообщение успешно отправлено. Я свяжусь с вами очень скоро.',
        'thanks.backHome': 'На главную',
        'thanks.viewProjects': 'Посмотреть проекты'
    },
    
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.about': 'نبذة',
        'nav.projects': 'المشاريع',
        'nav.skills': 'المهارات',
        'nav.services': 'الخدمات',
        'nav.contact': 'اتصل بي',
        
        // Home page
        'home.title': 'يوسف م - مطور Full Stack',
        'home.subtitle': 'طالب ماجستير في MIAGE، شغوف بتطوير الويب والجوال',
        'home.viewProjects': 'عرض مشاريعي',
        'home.downloadCv': 'تحميل السيرة الذاتية',
        
        // Contact
        'contact.title': 'اتصل بي',
        'contact.name': 'الاسم',
        'contact.namePlaceholder': 'اسمك',
        'contact.email': 'البريد الإلكتروني',
        'contact.emailPlaceholder': 'بريدك الإلكتروني',
        'contact.message': 'الرسالة',
        'contact.messagePlaceholder': 'رسالتك',
        'contact.send': 'إرسال',
        
        // About
        'about.title': 'نبذة عني',
        'about.intro': 'طالب ماجستير في MIAGE بجامعة فرساي سان كانتان، شغوف بتطوير الويب والجوال.',
        'about.education': 'التعليم',
        'about.experience': 'الخبرة',
        'about.languages': 'اللغات',
        
        // Projects
        'projects.title': 'مشاريعي',
        'projects.viewProject': 'عرض المشروع',
        'projects.sourceCode': 'الكود المصدري',
        
        // Skills
        'skills.title': 'مهاراتي',
        'skills.frontend': 'الواجهة الأمامية',
        'skills.backend': 'الواجهة الخلفية',
        'skills.database': 'قاعدة البيانات',
        'skills.tools': 'الأدوات',
        
        // Services
        'services.title': 'خدماتي',
        'services.webDev': 'تطوير الويب',
        'services.mobileDev': 'تطوير الجوال',
        'services.consulting': 'الاستشارات',
        
        // Thanks
        'thanks.title': '🎉 شكراً لك على رسالتك!',
        'thanks.message': 'تم إرسال رسالتك بنجاح. سأتواصل معك قريباً جداً.',
        'thanks.backHome': 'العودة للرئيسية',
        'thanks.viewProjects': 'عرض مشاريعي'
    }
};

// Gestion de la langue
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'fr';
        this.init();
    }
    
    init() {
        this.createLanguageSelector();
        this.translatePage();
        this.setupEventListeners();
    }
    
    createLanguageSelector() {
        const header = document.querySelector('header .menu-container');
        if (!header) return;
        
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        langSelector.innerHTML = `
            <button class="lang-toggle" aria-label="Select language">
                <span class="flag">${this.getFlagEmoji(this.currentLanguage)}</span>
                <span class="lang-code">${this.currentLanguage.toUpperCase()}</span>
            </button>
            <div class="lang-dropdown">
                <button class="lang-option" data-lang="fr">
                    <span class="flag">🇫🇷</span> Français
                </button>
                <button class="lang-option" data-lang="en">
                    <span class="flag">🇺🇸</span> English
                </button>
                <button class="lang-option" data-lang="ru">
                    <span class="flag">🇷🇺</span> Русский
                </button>
                <button class="lang-option" data-lang="ar">
                    <span class="flag">🇸🇦</span> العربية
                </button>
            </div>
        `;
        
        header.appendChild(langSelector);
    }
    
    getFlagEmoji(lang) {
        const flags = {
            'fr': '🇫🇷',
            'en': '🇺🇸', 
            'ru': '🇷🇺',
            'ar': '🇸🇦'
        };
        return flags[lang] || '🌐';
    }
    
    setupEventListeners() {
        const langToggle = document.querySelector('.lang-toggle');
        const langDropdown = document.querySelector('.lang-dropdown');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                langDropdown.classList.toggle('active');
            });
        }
        
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                this.changeLanguage(selectedLang);
                langDropdown.classList.remove('active');
            });
        });
        
        // Fermer le dropdown en cliquant ailleurs
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                langDropdown?.classList.remove('active');
            }
        });
    }
    
    changeLanguage(newLang) {
        this.currentLanguage = newLang;
        localStorage.setItem('selectedLanguage', newLang);
        
        // Mettre à jour le bouton de langue
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.querySelector('.flag').textContent = this.getFlagEmoji(newLang);
            langToggle.querySelector('.lang-code').textContent = newLang.toUpperCase();
        }
        
        // Mettre à jour la direction du texte pour l'arabe
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
        
        this.translatePage();
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Mettre à jour le titre de la page
        const pageTitle = document.querySelector('title');
        if (pageTitle && pageTitle.hasAttribute('data-translate')) {
            const key = pageTitle.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                pageTitle.textContent = translation;
            }
        }
    }
    
    getTranslation(key) {
        return translations[this.currentLanguage]?.[key] || translations['fr'][key] || key;
    }
}

// Initialiser le gestionnaire de langue quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});

// Exporter pour utilisation dans d'autres fichiers
window.LanguageManager = LanguageManager;
