// Système de traduction simplifié - Français/Anglais
const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            experience: "Expérience",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title: "Salut, je suis Youssef M",
            subtitle: "Développeur Full Stack passionné par la création d'applications web modernes et innovantes.",
            viewProjects: "Voir mes projets",
            downloadCV: "Télécharger CV"
        },
        about: {
            title: "À propos de moi",
            description: "Je suis Meissa Youssef, un développeur Full Stack passionné par la création d'applications intuitives et innovantes. Actuellement étudiant en master à l'Ural Federal University, je cherche à mettre en pratique mes compétences dans des projets ambitieux et collaboratifs.",
            personalInfo: "Informations personnelles",
            name: "Nom :",
            email: "Email :",
            phone: "Téléphone :",
            githubPro: "GitHub Pro :",
            github: "GitHub :",
            professionalSummary: "Résumé professionnel",
            professionalDesc: "En tant que développeur Full Stack, je maîtrise des technologies frontend et backend, incluant React, Node.js, et Python. Mon objectif est de contribuer à des projets innovants en utilisant mes compétences pour résoudre des problèmes réels.",
            education: "Parcours académique",
            masterDegree: "Master en Développement et Gestion de Projets Logiciels",
            bachelorDegree: "Licence en Génie Logiciel",
            technicalSkills: "Compétences techniques",
            languages: "Langages :",
            frameworks: "Frameworks :",
            tools: "Outils :",
            interests: "Centres d'intérêt",
            interest1: "Technologies émergentes et développement durable",
            interest2: "Intelligence artificielle et expérience utilisateur (UX/UI)"
        },
        contact: {
            title: "Contactez-moi",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer",
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email",
            messagePlaceholder: "Votre message"
        },
        thanks: {
            title: "Merci pour votre message !",
            message: "Votre message a été envoyé avec succès. Je vous contacterai très bientôt.",
            home: "Retour à l'accueil",
            projects: "Voir mes projets"
        },
        // Traductions pour la page d'expérience
        experience_title: "Expérience Professionnelle",
        experience_subtitle: "Mon parcours professionnel et mes réalisations",
        exp1_title: "Développeur Full-Stack - Coccinelle s.a.r.l",
        exp1_period: "Décembre 2021 - Juin 2023",
        exp1_description: "Développement d'applications mobiles et web complètes, gestion de projets techniques et collaboration avec les équipes multidisciplinaires.",
        exp1_task1: "Développement d'applications mobiles avec Flutter/Dart",
        exp1_task2: "Création d'APIs REST avec Laravel/PHP",
        exp1_task3: "Gestion de bases de données MySQL",
        exp1_task4: "Interface utilisateur responsive avec HTML/CSS/JavaScript",
        exp1_task5: "Collaboration en équipe et méthodologies agiles",
        exp1_certificate: "📄 Voir l'attestation de travail",
        exp2_title: "Stagiaire Développeur - Ministère",
        exp2_period: "Juillet 2022 - Septembre 2022",
        exp2_description: "Stage enrichissant dans l'administration publique, développement de solutions numériques pour optimiser les processus administratifs.",
        exp2_task1: "Analyse des besoins et conception de solutions",
        exp2_task2: "Développement web avec technologies modernes",
        exp2_task3: "Documentation technique et formation des utilisateurs",
        exp2_task4: "Intégration avec systèmes existants",
        exp3_title: "Projet de Fin d'Études - MauritUrgence",
        exp3_period: "2022",
        exp3_description: "Développement d'une application mobile innovante pour la gestion des urgences médicales en Mauritanie, combinant géolocalisation et coordination des secours.",
        exp3_task1: "Architecture complète d'application mobile",
        exp3_task2: "Système de géolocalisation et cartographie",
        exp3_task3: "Interface intuitive pour situations d'urgence",
        exp3_task4: "Base de données des services d'urgence",
        exp3_task5: "Tests utilisateurs et optimisation"
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects", 
            skills: "Skills",
            experience: "Experience",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title: "Hi, I'm Youssef M",
            subtitle: "Full Stack Developer passionate about creating modern and innovative web applications.",
            viewProjects: "View my projects",
            downloadCV: "Download CV"
        },
        about: {
            title: "About me",
            description: "I am Meissa Youssef, a Full Stack developer passionate about creating intuitive and innovative applications. Currently a master's student at Ural Federal University, I seek to put my skills into practice in ambitious and collaborative projects.",
            personalInfo: "Personal Information",
            name: "Name:",
            email: "Email:",
            phone: "Phone:",
            githubPro: "GitHub Pro:",
            github: "GitHub:",
            professionalSummary: "Professional Summary",
            professionalDesc: "As a Full Stack developer, I master frontend and backend technologies, including React, Node.js, and Python. My goal is to contribute to innovative projects using my skills to solve real problems.",
            education: "Academic Background",
            masterDegree: "Master's in Software Development and Project Management",
            bachelorDegree: "Bachelor's in Software Engineering",
            technicalSkills: "Technical Skills",
            languages: "Languages:",
            frameworks: "Frameworks:",
            tools: "Tools:",
            interests: "Interests",
            interest1: "Emerging technologies and sustainable development",
            interest2: "Artificial intelligence and user experience (UX/UI)"
        },
        contact: {
            title: "Contact me",
            name: "Name",
            email: "Email", 
            message: "Message",
            send: "Send",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            messagePlaceholder: "Your message"
        },
        thanks: {
            title: "Thank you for your message!",
            message: "Your message has been sent successfully. I will contact you very soon.",
            home: "Back to home",
            projects: "View my projects"
        },
        // English translations for experience page
        experience_title: "Professional Experience",
        experience_subtitle: "My professional journey and achievements",
        exp1_title: "Full-Stack Developer - Coccinelle s.a.r.l",
        exp1_period: "December 2021 - June 2023",
        exp1_description: "Development of complete mobile and web applications, technical project management and collaboration with multidisciplinary teams.",
        exp1_task1: "Mobile application development with Flutter/Dart",
        exp1_task2: "REST API creation with Laravel/PHP",
        exp1_task3: "MySQL database management",
        exp1_task4: "Responsive user interface with HTML/CSS/JavaScript",
        exp1_task5: "Team collaboration and agile methodologies",
        exp1_certificate: "📄 View Work Attestation",
        exp2_title: "Developer Intern - Ministry",
        exp2_period: "July 2022 - September 2022",
        exp2_description: "Enriching internship in public administration, developing digital solutions to optimize administrative processes.",
        exp2_task1: "Needs analysis and solution design",
        exp2_task2: "Web development with modern technologies",
        exp2_task3: "Technical documentation and user training",
        exp2_task4: "Integration with existing systems",
        exp3_title: "Final Project - MauritUrgence",
        exp3_period: "2022",
        exp3_description: "Development of an innovative mobile application for managing medical emergencies in Mauritania, combining geolocation and emergency coordination.",
        exp3_task1: "Complete mobile application architecture",
        exp3_task2: "Geolocation and mapping system",
        exp3_task3: "Intuitive interface for emergency situations",
        exp3_task4: "Emergency services database",
        exp3_task5: "User testing and optimization"
    }
};

let currentLanguage = 'fr';

function translatePage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Traduire tous les éléments avec data-translate
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Traduire les placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Sauvegarder la langue choisie
    localStorage.setItem('selectedLanguage', lang);
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}

// Initialiser la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer la langue sauvegardée ou utiliser français par défaut
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    
    // Mettre à jour le sélecteur de langue
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = savedLanguage;
        languageSelector.addEventListener('change', function() {
            translatePage(this.value);
        });
    }
    
    // Appliquer la traduction
    translatePage(savedLanguage);
});
