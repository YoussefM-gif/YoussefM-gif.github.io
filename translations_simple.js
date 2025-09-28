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
            backHome: "Retour à l'accueil",
            viewProjects: "Voir mes projets"
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
        exp2_certificate: "📄 Voir l'attestation de stage",
        exp3_title: "Projet de Fin d'Études - MauritUrgence",
        exp3_period: "2022",
        exp3_description: "Développement d'une application mobile innovante pour la gestion des urgences médicales en Mauritanie, combinant géolocalisation et coordination des secours.",
        exp3_task1: "Architecture complète d'application mobile",
        exp3_task2: "Système de géolocalisation et cartographie",
        exp3_task3: "Interface intuitive pour situations d'urgence",
        exp3_task4: "Base de données des services d'urgence",
        exp3_task5: "Tests utilisateurs et optimisation",
        
        // Skills page translations
        skills: {
            title: "Mes Compétences",
            description: "Voici un aperçu de mes compétences techniques, outils utilisés et domaines d'expertise que j'ai développés au fil de mes expériences professionnelles et académiques.",
            webDevelopment: "Développement Web",
            webDevelopmentDesc: "HTML, CSS, JavaScript, React, Vue.js, Laravel, Node.js",
            uiuxDesign: "Design UI/UX",
            uiuxDesignDesc: "Figma, Adobe XD, Prototypage, Wireframing, Tests d'utilisabilité",
            toolsManagement: "Outils et Gestion",
            toolsManagementDesc: "Git/GitHub, Docker, MySQL, MongoDB, Gestion de projets (Scrum, Kanban)",
            languagesFrameworks: "Langages et Frameworks",
            tools: "Outils",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            react: "React",
            python: "Python",
            php: "PHP",
            docker: "Docker",
            github: "GitHub",
            mysql: "MySQL",
            mongodb: "MongoDB",
            figma: "Figma",
            adobeXD: "Adobe XD"
        },
        
        // Projects page translations
        projects: {
            title: "Mes Projets"
        },
        
        // Project 1: MauritUrgence
        project1: {
            navLink: "Projet 1: MauritUrgence - Application de Gestion de la Protection Civile",
            sectionTitle: "Projet 1: MauritUrgence - Application de Gestion de la Protection Civile",
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
            technicalTitle: "Documentation technique - Diagrammes UML :",
            useCaseDiagram: "Diagramme de cas d'utilisation",
            useCaseDesc: "Présentation des différents acteurs du système et de leurs interactions avec l'application.",
            classDiagram: "Diagramme de classes",
            classDesc: "Architecture de la base de données avec les entités principales et leurs relations.",
            sequenceAuth: "Séquence - Authentification",
            sequenceAuthDesc: "Processus d'authentification des utilisateurs dans le système.",
            sequenceAgent: "Séquence - Ajout d'agent",
            sequenceAgentDesc: "Processus d'ajout d'un nouvel agent dans le système.",
            impactTitle: "Impact et résultats :",
            impact1: "✅ Réduction significative des délais de signalement d'urgence",
            impact2: "✅ Amélioration de la précision des informations transmises",
            impact3: "✅ Centralisation efficace de la gestion des ressources",
            impact4: "✅ Solution adaptée au contexte mauritanien",
            viewDemo: "Voir la démo",
            viewCode: "Code source",
            viewDoc: "Documentation",
            demoModalTitle: "Démonstration MauritUrgence",
            demoModalDesc: "Découvrez le fonctionnement complet de l'application MauritUrgence à travers cette démonstration vidéo.",
            videoNotSupported: "Votre navigateur ne supporte pas la lecture vidéo. <a href='videos/videoMauriUrgence.mp4' download>Télécharger la vidéo</a>",
            demoModalFeaturesTitle: "Ce que vous allez voir :",
            demoFeature1: "📱 Interface mobile pour citoyens et agents",
            demoFeature2: "💻 Tableau de bord d'administration web",
            demoFeature3: "🗺️ Système de géolocalisation en temps réel",
            demoFeature4: "📊 Gestion des interventions et rapports",
            viewGitHub: "Voir sur GitHub",
            downloadVideo: "Télécharger la vidéo",
            closeModal: "Fermer"
        },
        
        // Project 2: Coworking
        project2: {
            navLink: "Projet 2: Service de Réservation de Coworking en Ligne",
            sectionTitle: "Projet 2: Service de Réservation de Coworking en Ligne",
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
            galleryTitle: "Aperçu du design :",
            galleryNote: "Captures d'écran de l'interface utilisateur développée",
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
            viewDesign: "Design & Prototypes",
            viewCertificate: "Certificat officiel"
        },
        
        // Project 3: Visual Org Structure
        project3: {
            navLink: "Projet 3: Visual Org Structure - Visualisation de Structures Organisationnelles",
            sectionTitle: "Projet 3: Visual Org Structure - Visualisation de Structures Organisationnelles",
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
        }
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
            backHome: "Back to home",
            viewProjects: "View my projects"
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
        exp2_certificate: "📄 View Internship Attestation",
        exp3_title: "Final Project - MauritUrgence",
        exp3_period: "2022",
        exp3_description: "Development of an innovative mobile application for managing medical emergencies in Mauritania, combining geolocation and emergency coordination.",
        exp3_task1: "Complete mobile application architecture",
        exp3_task2: "Geolocation and mapping system",
        exp3_task3: "Intuitive interface for emergency situations",
        exp3_task4: "Emergency services database",
        exp3_task5: "User testing and optimization",
        
        // Skills page translations
        skills: {
            title: "My Skills",
            description: "Here's an overview of my technical skills, tools used and areas of expertise that I've developed through my professional and academic experiences.",
            webDevelopment: "Web Development",
            webDevelopmentDesc: "HTML, CSS, JavaScript, React, Vue.js, Laravel, Node.js",
            uiuxDesign: "UI/UX Design",
            uiuxDesignDesc: "Figma, Adobe XD, Prototyping, Wireframing, Usability Testing",
            toolsManagement: "Tools and Management",
            toolsManagementDesc: "Git/GitHub, Docker, MySQL, MongoDB, Project Management (Scrum, Kanban)",
            languagesFrameworks: "Languages and Frameworks",
            tools: "Tools",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            react: "React",
            python: "Python",
            php: "PHP",
            docker: "Docker",
            github: "GitHub",
            mysql: "MySQL",
            mongodb: "MongoDB",
            figma: "Figma",
            adobeXD: "Adobe XD"
        },
        
        // Projects page translations
        projects: {
            title: "My Projects"
        },
        
        // Project 1: MauritUrgence
        project1: {
            navLink: "Project 1: MauritUrgence - Civil Protection Management Application",
            sectionTitle: "Project 1: MauritUrgence - Civil Protection Management Application",
            context: "Context:",
            contextDesc: "Final project - ISCAE Nouakchott, Mauritania",
            team: "Team:",
            teamDesc: "3 developers (Collaborative project)",
            duration: "Duration:",
            durationDesc: "6 months (2022)",
            description: "Complete solution aimed at improving communication between citizens and emergency services in Mauritania. The application allows reporting dangers with precision and reliability, reducing emergency response times.",
            featuresTitle: "Main features:",
            feature1: "📱 Mobile application for citizens and agents (Flutter)",
            feature2: "💻 Web administration interface (Laravel)",
            feature3: "📸 Emergency reporting with geolocation and photos",
            feature4: "👥 Resource management (agents, vehicles, schedules)",
            feature5: "🔔 Real-time notification system",
            feature6: "📊 Intervention processing and tracking",
            techTitle: "Technologies used:",
            mobile: "Mobile:",
            backend: "Backend:",
            frontend: "Frontend Web:",
            database: "Database:",
            methodology: "Methodology:",
            architectureTitle: "System architecture:",
            mobileApp: "📱 Mobile Application",
            citizenFeatures: "Citizen interface (reporting without authentication)",
            agentFeatures: "Agent interface (planning, profile, notifications)",
            webPlatform: "💻 Web Platform",
            adminFeatures: "Administration (resource management)",
            supportFeatures: "Technical support (emergency processing)",
            technicalTitle: "Technical documentation - UML Diagrams:",
            useCaseDiagram: "Use case diagram",
            useCaseDesc: "Presentation of different system actors and their interactions with the application.",
            classDiagram: "Class diagram",
            classDesc: "Database architecture with main entities and their relationships.",
            sequenceAuth: "Sequence - Authentication",
            sequenceAuthDesc: "User authentication process in the system.",
            sequenceAgent: "Sequence - Agent addition",
            sequenceAgentDesc: "Process of adding a new agent to the system.",
            impactTitle: "Impact and results:",
            impact1: "✅ Significant reduction in emergency reporting delays",
            impact2: "✅ Improved accuracy of transmitted information",
            impact3: "✅ Efficient centralization of resource management",
            impact4: "✅ Solution adapted to the Mauritanian context",
            viewDemo: "View demo",
            viewCode: "Source code",
            viewDoc: "Documentation",
            demoModalTitle: "MauritUrgence Demonstration",
            demoModalDesc: "Discover the complete functioning of the MauritUrgence application through this video demonstration.",
            videoNotSupported: "Your browser does not support video playback. <a href='videos/videoMauriUrgence.mp4' download>Download the video</a>",
            demoModalFeaturesTitle: "What you will see:",
            demoFeature1: "📱 Mobile interface for citizens and agents",
            demoFeature2: "💻 Web administration dashboard",
            demoFeature3: "🗺️ Real-time geolocation system",
            demoFeature4: "📊 Intervention management and reports",
            viewGitHub: "View on GitHub",
            downloadVideo: "Download video",
            closeModal: "Close"
        },
        
        // Project 2: Coworking
        project2: {
            navLink: "Project 2: Online Coworking Reservation Service",
            sectionTitle: "Project 2: Online Coworking Reservation Service",
            context: "Context:",
            contextDesc: "University-enterprise collaborative project",
            university: "University:",
            universityDesc: "Ural Federal University (Russia)",
            partner: "Partner:",
            partnerDesc: "BRUSNIKA OOO",
            program: "Program:",
            programDesc: "Software Engineering - Development and Management",
            grade: "Result:",
            gradeDesc: "Excellent (Отлично)",
            description: "Development of an online reservation platform for coworking spaces in collaboration with BRUSNIKA OOO. Advanced project-based learning project carried out as part of the software engineering program.",
            featuresTitle: "Developed features:",
            feature1: "🏢 Coworking space reservation system",
            feature2: "📅 Time slot and availability management",
            feature3: "👥 Intuitive user interface",
            feature4: "💳 Integrated payment system",
            feature5: "📊 Administrator dashboard",
            feature6: "📱 Multi-platform responsive application",
            galleryTitle: "Design overview:",
            galleryNote: "Screenshots of the developed user interface",
            collaborationTitle: "University-enterprise collaboration:",
            universityRole: "🎓 University (Ural Federal)",
            universityItem1: "Academic and methodological supervision",
            universityItem2: "Training in modern technologies",
            universityItem3: "Project monitoring and evaluation",
            companyRole: "🏢 Company (BRUSNIKA OOO)",
            companyItem1: "Real needs and specifications",
            companyItem2: "Business expertise and feedback",
            companyItem3: "Professional environment",
            impactTitle: "Skills acquired:",
            impact1: "✅ Development in professional environment",
            impact2: "✅ University-enterprise collaboration",
            impact3: "✅ Advanced project management",
            impact4: "✅ Online reservation technologies",
            impact5: "✅ Recognized academic excellence",
            viewDesign: "Design & Prototypes",
            viewCertificate: "Official Certificate"
        },
        
        // Project 3: Visual Org Structure
        project3: {
            navLink: "Project 3: Visual Org Structure - Organizational Structure Visualization",
            sectionTitle: "Project 3: Visual Org Structure - Organizational Structure Visualization",
            context: "Context:",
            contextDesc: "Team project - Software product development",
            team: "Team:",
            teamDesc: "5 developers (2 Front-End, 2 Back-End, 1 Designer/Team Leader)",
            role: "My role:",
            roleDesc: "Front-End Developer (TypeScript/User Interface)",
            methodology: "Methodology:",
            methodologyDesc: "Agile - Kanban Board",
            description: "Development of software product capable of generating visual representations of company organizational structures. The project aimed to solve the limitations of existing systems like 1C by offering complex hierarchical management (up to 5 levels) with intuitive navigation.",
            featuresTitle: "Project objectives:",
            feature1: "🏗️ MVP creation (Minimum Viable Product)",
            feature2: "🗂️ Complex hierarchy management (5 levels)",
            feature3: "💾 Database saving",
            feature4: "🔍 Easy navigation in changing structures",
            feature5: "📊 Interactive organizational chart visualizations",
            feature6: "⚡ Resolution of existing system limitations",
            responsibilitiesTitle: "My Front-End responsibilities:",
            init: "🚀 Initialization:",
            initItem1: "Front-end project configuration",
            initItem2: "Open-source solution analysis",
            development: "💻 Development:",
            devItem1: "Front-end module proof of concept (PoC)",
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
            result4: "✅ User testimonial system",
            result5: "✅ Functional MVP with database",
            impactTitle: "Skills developed:",
            impact1: "✅ Advanced TypeScript front-end development",
            impact2: "✅ Agile team work (Kanban)",
            impact3: "✅ API integration and server communication",
            impact4: "✅ Testing and software quality",
            impact5: "✅ International multicultural collaboration",
            viewCode: "GitHub source code"
        }
    }
};

// Protection contre les conflits et multiples initialisations
(function() {
    'use strict';
    
    // Vérifier si déjà initialisé pour éviter les doublons
    if (window.translationSystemInitialized) {
        return;
    }
    window.translationSystemInitialized = true;

    let currentLanguage = 'fr';

    // Fonction simple pour appliquer les traductions
    function translatePage(lang) {
        if (!translations[lang]) {
            return;
        }
        
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

    // Fonction d'initialisation protégée
    function initTranslations() {
        // Récupérer la langue sauvegardée
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
        
        // Attendre que le DOM soit prêt
        const languageSelector = document.getElementById('languageSelector');
        if (!languageSelector) {
            // Si le sélecteur n'existe pas encore, réessayer plus tard
            setTimeout(initTranslations, 100);
            return;
        }
        
        // Configurer le sélecteur une seule fois
        if (!languageSelector.hasAttribute('data-translation-configured')) {
            languageSelector.value = savedLanguage;
            languageSelector.setAttribute('data-translation-configured', 'true');
            
            // Ajouter l'événement de changement
            languageSelector.addEventListener('change', function() {
                translatePage(this.value);
            });
        }
        
        // Appliquer la traduction
        translatePage(savedLanguage);
    }

    // Initialisation sécurisée
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTranslations);
    } else {
        initTranslations();
    }

})();
