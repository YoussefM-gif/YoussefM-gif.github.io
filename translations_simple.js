// Système de traduction simplifié - Français/Anglais
const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
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
            description: "Développeur Full Stack avec une passion pour les technologies modernes."
        },
        projects: {
            title: "Mes Projets",
            quickNav: "Navigation rapide :"
        },
        project1: {
            sectionTitle: "Projet 1: MauritUrgence - Application de Gestion de la Protection Civile",
            navLink: "MauritUrgence - Application de Gestion de la Protection Civile",
            title: "Projet 1: MauritUrgence - Application de Gestion de la Protection Civile",
            context: "Contexte :",
            contextDesc: "Projet de fin d'études - ISCAE Nouakchott, Mauritanie",
            team: "Équipe :",
            teamDesc: "3 développeurs (Projet collaboratif)",
            duration: "Durée :",
            durationDesc: "6 mois (2022)",
            description: "Solution complète visant à améliorer la communication entre les citoyens et les services d'urgence en Mauritanie. L'application permet de signaler les dangers avec précision et fiabilité, réduisant les délais d'intervention des services de secours.",
            featuresTitle: "Fonctionnalités principales :",
            feature1: "📱 Application mobile pour citoyens et agents (Flutter)",
            feature2: "💻 Interface web d'administration (Laravel)",
            feature3: "📸 Signalement d'urgence avec géolocalisation et photos",
            feature4: "👥 Gestion des ressources (agents, véhicules, plannings)",
            feature5: "🔔 Système de notifications en temps réel",
            feature6: "📊 Traitement et suivi des interventions",
            techTitle: "Technologies utilisées :",
            mobile: "Mobile :",
            backend: "Backend :",
            frontend: "Frontend Web :",
            database: "Base de données :",
            methodology: "Méthodologie :",
            architectureTitle: "Architecture du système :",
            mobileApp: "📱 Application Mobile",
            citizenFeatures: "Interface citoyens (signalement sans authentification)",
            agentFeatures: "Interface agents (planning, profil, notifications)",
            webPlatform: "💻 Plateforme Web",
            adminFeatures: "Administration (gestion des ressources)",
            supportFeatures: "Support technique (traitement des urgences)",
            impactTitle: "Impact et résultats :",
            impact1: "✅ Réduction significative des délais de signalement d'urgence",
            impact2: "✅ Amélioration de la précision des informations transmises",
            impact3: "✅ Centralisation efficace de la gestion des ressources",
            impact4: "✅ Solution adaptée au contexte mauritanien",
            viewDemo: "Voir la démo",
            viewCode: "Code source",
            viewDoc: "Documentation",
            technicalTitle: "Documentation technique - Diagrammes UML :",
            useCaseDiagram: "Diagramme de cas d'utilisation",
            useCaseDesc: "Présentation des différents acteurs du système et de leurs interactions avec l'application.",
            classDiagram: "Diagramme de classes",
            classDesc: "Architecture de la base de données avec les entités principales et leurs relations.",
            sequenceAuth: "Séquence - Authentification",
            sequenceAuthDesc: "Processus d'authentification des utilisateurs dans le système.",
            sequenceAgent: "Séquence - Ajout d'agent",
            sequenceAgentDesc: "Processus d'ajout d'un nouvel agent dans le système.",
            demoModalTitle: "Démonstration MauritUrgence",
            demoModalDesc: "Découvrez le fonctionnement complet de l'application MauritUrgence à travers cette démonstration vidéo.",
            demoModalFeaturesTitle: "Ce que vous allez voir :",
            demoFeature1: "📱 Interface mobile pour citoyens et agents",
            demoFeature2: "💻 Tableau de bord d'administration web", 
            demoFeature3: "🗺️ Système de géolocalisation en temps réel",
            demoFeature4: "📊 Gestion des interventions et rapports",
            viewGitHub: "Voir sur GitHub",
            closeModal: "Fermer",
            downloadVideo: "Télécharger la vidéo",
            videoNotSupported: "Votre navigateur ne supporte pas la lecture vidéo."
        },
        project2: {
            sectionTitle: "Projet 2: Service de Réservation de Coworking en Ligne",
            navLink: "Service de Réservation de Coworking en Ligne",
            title: "Projet 2: Service de Réservation de Coworking en Ligne",
            context: "Contexte :",
            contextDesc: "Projet collaboratif université-entreprise",
            university: "Université :",
            universityDesc: "Ural Federal University (Russie)",
            partner: "Partenaire :",
            partnerDesc: "BRUSNIKA OOO",
            program: "Programme :",
            programDesc: "Software Engineering - Development and Management",
            grade: "Résultat :",
            gradeDesc: "Excellent (Отлично)",
            description: "Développement d'une plateforme de réservation en ligne pour espaces de coworking en collaboration avec l'entreprise BRUSNIKA OOO. Projet d'apprentissage par projet de niveau avancé réalisé dans le cadre du programme d'ingénierie logicielle.",
            featuresTitle: "Fonctionnalités développées :",
            feature1: "🏢 Système de réservation d'espaces de coworking",
            feature2: "📅 Gestion des créneaux et disponibilités",
            feature3: "👥 Interface utilisateur intuitive",
            feature4: "💳 Système de paiement intégré",
            feature5: "📊 Tableau de bord administrateur",
            feature6: "📱 Application responsive multi-plateforme",
            collaborationTitle: "Collaboration université-entreprise :",
            universityRole: "🎓 Université (Ural Federal)",
            universityItem1: "Encadrement académique et méthodologique",
            universityItem2: "Formation aux technologies modernes",
            universityItem3: "Suivi et évaluation du projet",
            companyRole: "🏢 Entreprise (BRUSNIKA OOO)",
            companyItem1: "Besoins réels et spécifications",
            companyItem2: "Expertise métier et feedback",
            companyItem3: "Environnement professionnel",
            impactTitle: "Compétences acquises :",
            impact1: "✅ Développement en environnement professionnel",
            impact2: "✅ Collaboration université-entreprise",
            impact3: "✅ Gestion de projet avancée",
            impact4: "✅ Technologies de réservation en ligne",
            impact5: "✅ Excellence académique reconnue",
            galleryTitle: "Aperçu du design :",
            galleryNote: "Captures d'écran de l'interface utilisateur développée (voir processus complet sur Figma)",
            screenshot1: "Interface de réservation",
            screenshot2: "Tableau de bord administrateur",
            screenshot3: "Interface utilisateur",
            viewDesign: "Design & Prototypes",
            viewCertificate: "Certificat officiel",
            confidentialNote: "Code source et documentation confidentiels"
        },
        project3: {
            sectionTitle: "Projet 3: Visual Org Structure - Visualisation de Structures Organisationnelles",
            navLink: "Visual Org Structure - Visualisation de Structures Organisationnelles",
            title: "Projet 3: Visual Org Structure - Visualisation de Structures Organisationnelles",
            context: "Contexte :",
            contextDesc: "Projet d'équipe - Développement produit logiciel",
            team: "Équipe :",
            teamDesc: "5 développeurs (2 Front-End, 2 Back-End, 1 Designer/Team Leader)",
            role: "Mon rôle :",
            roleDesc: "Développeur Front-End (TypeScript/Interface utilisateur)",
            methodology: "Méthodologie :",
            methodologyDesc: "Agile - Tableau Kanban",
            description: "Développement d'un produit logiciel capable de générer des représentations visuelles des structures organisationnelles d'entreprise. Le projet visait à résoudre les limitations des systèmes existants comme 1C en offrant une gestion hiérarchique complexe (jusqu'à 5 niveaux) avec navigation intuitive.",
            featuresTitle: "Objectifs du projet :",
            feature1: "🏗️ Création de MVP (Minimum Viable Product)",
            feature2: "🗂️ Gestion de hiérarchies complexes (5 niveaux)",
            feature3: "💾 Sauvegarde en base de données",
            feature4: "🔍 Navigation aisée dans les structures changeantes",
            feature5: "📊 Visualisations interactives d'organigrammes",
            feature6: "⚡ Résolution des limitations des systèmes existants",
            responsibilitiesTitle: "Mes responsabilités Front-End :",
            init: "🚀 Initialisation :",
            initItem1: "Configuration du projet front-end",
            initItem2: "Analyse des solutions open-source",
            development: "💻 Développement :",
            devItem1: "Preuve de concept (PoC) du module front-end",
            devItem2: "Code TypeScript pour contenu dynamique",
            devItem3: "Module d'appel au serveur",
            interface: "🎨 Interface :",
            interfaceItem1: "Implémentation de l'interface utilisateur",
            interfaceItem2: "Intégration API",
            interfaceItem3: "Tests et couverture du module",
            techTitle: "Technologies utilisées :",
            frontend: "Front-End :",
            design: "Design :",
            management: "Gestion :",
            teamTitle: "Composition de l'équipe :",
            frontendTeam: "👨‍💻 Front-End",
            backendTeam: "⚙️ Back-End",
            designTeam: "🎨 Design & Leadership",
            resultsTitle: "Résultats obtenus :",
            result1: "✅ Prototype d'interface utilisateur créé dans Figma",
            result2: "✅ Pages principales du site web opérationnelles",
            result3: "✅ Affichage de la structure de l'équipe de développement",
            result4: "✅ Système de témoignages d'utilisateurs",
            result5: "✅ MVP fonctionnel avec base de données",
            impactTitle: "Compétences développées :",
            impact1: "✅ Développement front-end en TypeScript avancé",
            impact2: "✅ Travail en équipe agile (Kanban)",
            impact3: "✅ Intégration API et communication serveur",
            impact4: "✅ Tests et qualité logicielle",
            impact5: "✅ Collaboration internationale multiculturelle",
            viewCode: "Code source GitHub"
        },
        skills: {
            title: "Mes Compétences"
        },
        services: {
            title: "Mes Services"
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
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects", 
            skills: "Skills",
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
            description: "Full Stack Developer with a passion for modern technologies."
        },
        projects: {
            title: "My Projects",
            quickNav: "Quick navigation:"
        },
        project1: {
            sectionTitle: "Project 1: MauritUrgence - Civil Protection Management Application",
            navLink: "MauritUrgence - Civil Protection Management Application",
            title: "Project 1: MauritUrgence - Civil Protection Management Application",
            context: "Context:",
            contextDesc: "Final year project - ISCAE Nouakchott, Mauritania",
            team: "Team:",
            teamDesc: "3 developers (Collaborative project)",
            duration: "Duration:",
            durationDesc: "6 months (2022)",
            description: "Complete solution aimed at improving communication between citizens and emergency services in Mauritania. The application allows reporting dangers with precision and reliability, reducing emergency response delays.",
            featuresTitle: "Key features:",
            feature1: "📱 Mobile application for citizens and agents (Flutter)",
            feature2: "💻 Web administration interface (Laravel)",
            feature3: "📸 Emergency reporting with geolocation and photos",
            feature4: "👥 Resource management (agents, vehicles, schedules)",
            feature5: "🔔 Real-time notification system",
            feature6: "📊 Intervention processing and tracking",
            techTitle: "Technologies used:",
            mobile: "Mobile:",
            backend: "Backend:",
            frontend: "Web Frontend:",
            database: "Database:",
            methodology: "Methodology:",
            architectureTitle: "System architecture:",
            mobileApp: "📱 Mobile Application",
            citizenFeatures: "Citizen interface (reporting without authentication)",
            agentFeatures: "Agent interface (schedule, profile, notifications)",
            webPlatform: "💻 Web Platform",
            adminFeatures: "Administration (resource management)",
            supportFeatures: "Technical support (emergency processing)",
            impactTitle: "Impact and results:",
            impact1: "✅ Significant reduction in emergency reporting delays",
            impact2: "✅ Improved accuracy of transmitted information",
            impact3: "✅ Efficient centralization of resource management",
            impact4: "✅ Solution adapted to the Mauritanian context",
            viewDemo: "View demo",
            viewCode: "Source code",
            viewDoc: "Documentation",
            technicalTitle: "Technical Documentation - UML Diagrams:",
            useCaseDiagram: "Use Case Diagram",
            useCaseDesc: "Presentation of the different system actors and their interactions with the application.",
            classDiagram: "Class Diagram",
            classDesc: "Database architecture with main entities and their relationships.",
            sequenceAuth: "Sequence - Authentication",
            sequenceAuthDesc: "User authentication process in the system.",
            sequenceAgent: "Sequence - Agent Addition",
            sequenceAgentDesc: "Process for adding a new agent to the system.",
            demoModalTitle: "MauritUrgence Demonstration",
            demoModalDesc: "Discover the complete functionality of the MauritUrgence application through this video demonstration.",
            demoModalFeaturesTitle: "What you will see:",
            demoFeature1: "📱 Mobile interface for citizens and agents",
            demoFeature2: "💻 Web administration dashboard",
            demoFeature3: "🗺️ Real-time geolocation system", 
            demoFeature4: "📊 Intervention management and reports",
            viewGitHub: "View on GitHub",
            closeModal: "Close",
            downloadVideo: "Download video",
            videoNotSupported: "Your browser does not support video playback."
        },
        project2: {
            sectionTitle: "Project 2: Online Coworking Space Booking Service",
            navLink: "Online Coworking Space Booking Service",
            title: "Project 2: Online Coworking Space Booking Service",
            context: "Context:",
            contextDesc: "University-company collaborative project",
            university: "University:",
            universityDesc: "Ural Federal University (Russia)",
            partner: "Partner:",
            partnerDesc: "BRUSNIKA OOO",
            program: "Program:",
            programDesc: "Software Engineering - Development and Management",
            grade: "Result:",
            gradeDesc: "Excellent (Отлично)",
            description: "Development of an online booking platform for coworking spaces in collaboration with BRUSNIKA OOO company. Advanced level project-based learning project carried out as part of the software engineering program.",
            featuresTitle: "Developed features:",
            feature1: "🏢 Coworking space booking system",
            feature2: "📅 Time slot and availability management",
            feature3: "👥 Intuitive user interface",
            feature4: "💳 Integrated payment system",
            feature5: "📊 Administrator dashboard",
            feature6: "📱 Responsive multi-platform application",
            collaborationTitle: "University-company collaboration:",
            universityRole: "🎓 University (Ural Federal)",
            universityItem1: "Academic and methodological supervision",
            universityItem2: "Modern technology training",
            universityItem3: "Project monitoring and evaluation",
            companyRole: "🏢 Company (BRUSNIKA OOO)",
            companyItem1: "Real needs and specifications",
            companyItem2: "Business expertise and feedback",
            companyItem3: "Professional environment",
            impactTitle: "Skills acquired:",
            impact1: "✅ Development in professional environment",
            impact2: "✅ University-company collaboration",
            impact3: "✅ Advanced project management",
            impact4: "✅ Online booking technologies",
            impact5: "✅ Recognized academic excellence",
            galleryTitle: "Design overview:",
            galleryNote: "Screenshots of the developed user interface (see complete process on Figma)",
            screenshot1: "Booking interface",
            screenshot2: "Administrator dashboard",
            screenshot3: "User interface",
            viewDesign: "Design & Prototypes",
            viewCertificate: "Official certificate",
            confidentialNote: "Source code and documentation confidential"
        },
        project3: {
            sectionTitle: "Project 3: Visual Org Structure - Organizational Structure Visualization",
            navLink: "Visual Org Structure - Organizational Structure Visualization",
            title: "Project 3: Visual Org Structure - Organizational Structure Visualization",
            context: "Context:",
            contextDesc: "Team project - Software product development",
            team: "Team:",
            teamDesc: "5 developers (2 Front-End, 2 Back-End, 1 Designer/Team Leader)",
            role: "My role:",
            roleDesc: "Front-End Developer (TypeScript/User Interface)",
            methodology: "Methodology:",
            methodologyDesc: "Agile - Kanban Board",
            description: "Development of a software product capable of generating visual representations of company organizational structures. The project aimed to solve limitations of existing systems like 1C by offering complex hierarchical management (up to 5 levels) with intuitive navigation.",
            featuresTitle: "Project objectives:",
            feature1: "🏗️ MVP (Minimum Viable Product) creation",
            feature2: "🗂️ Complex hierarchy management (5 levels)",
            feature3: "💾 Database storage",
            feature4: "🔍 Easy navigation through changing structures",
            feature5: "📊 Interactive organizational chart visualizations",
            feature6: "⚡ Resolution of existing system limitations",
            responsibilitiesTitle: "My Front-End responsibilities:",
            init: "🚀 Initialization:",
            initItem1: "Front-end project configuration",
            initItem2: "Open-source solutions analysis",
            development: "💻 Development:",
            devItem1: "Proof of concept (PoC) of front-end module",
            devItem2: "TypeScript code for dynamic content",
            devItem3: "Server call module",
            interface: "🎨 Interface:",
            interfaceItem1: "User interface implementation",
            interfaceItem2: "API integration",
            interfaceItem3: "Module testing and coverage",
            techTitle: "Technologies used:",
            frontend: "Front-End:",
            design: "Design:",
            management: "Management:",
            teamTitle: "Team composition:",
            frontendTeam: "👨‍💻 Front-End",
            backendTeam: "⚙️ Back-End",
            designTeam: "🎨 Design & Leadership",
            resultsTitle: "Results achieved:",
            result1: "✅ User interface prototype created in Figma",
            result2: "✅ Main website pages operational",
            result3: "✅ Development team structure display",
            result4: "✅ User testimonials system",
            result5: "✅ Functional MVP with database",
            impactTitle: "Skills developed:",
            impact1: "✅ Advanced TypeScript front-end development",
            impact2: "✅ Agile team work (Kanban)",
            impact3: "✅ API integration and server communication",
            impact4: "✅ Testing and software quality",
            impact5: "✅ International multicultural collaboration",
            viewCode: "GitHub Source Code"
        },
        skills: {
            title: "My Skills"
        },
        services: {
            title: "My Services"
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
        }
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
