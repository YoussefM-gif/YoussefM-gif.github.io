const translations = {
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            education: "Education",
            experience: "Experience",
            achievements: "Achievements",
            contact: "Contact"
        },
        hero: {
            greeting: "Hello, I'm",
            title: "Software Engineer<br>& Full-Stack Developer",
            award: "🏆 Selected among the best graduates of UrFU — Class of 2026",
            subtitle: "I design web applications and distributed systems,<br>with a particular focus on blockchain, IoT,<br>and digital traceability.",
            viewProjects: "View Projects",
            downloadCv: "Download CV",
            contactMe: "Contact Me →",
            stats: {
                note: "91.46/100",
                gpa: "Final Weighted Average",
                publications: "Research Contributions",
                awards: "Distinctions & Scholarships",
                languages: "Languages"
            }
        },
        about: {
            title: "About Me",
            p1: "I am a Software Engineer and Full-Stack Developer with a strong academic background and practical experience in building modern applications. I completed my Master's degree in Software Engineering at Ural Federal University, with a focus on software architecture, distributed systems, and real-world problem-solving.",
            p2: "My recent work focuses on the design of blockchain-enabled traceability systems integrating IoT, smart contracts, and formal verification. My Master's thesis explored a conceptual architecture for transparent and verifiable waste lifecycle management.",
            highlight1: {
                title: "Full-Stack Development",
                desc: "End-to-end solutions using React, Vue, Laravel, Node.js, and Python."
            },
            highlight2: {
                title: "Distributed Systems",
                desc: "Building resilient and scalable microservices and APIs."
            },
            highlight3: {
                title: "Blockchain & Traceability",
                desc: "Leveraging decentralized technologies for verifiable supply chains."
            }
        },
        projects: {
            title: "Featured Projects",
            p1: {
                type: "Master's Thesis . Research Project",
                title: "Blockchain-Based Waste Lifecycle Traceability System",
                desc: "Master’s research project focused on the design and analytical evaluation of a blockchain-enabled architecture for waste lifecycle traceability. The proposed framework integrates IoT data, smart contracts, digital traceability, and formal verification concepts to improve transparency, accountability, and data integrity in circular-economy systems."
            },
            p2: {
                title: "MauriUrgence",
                desc: "An innovative mobile and web application for managing medical emergencies in Mauritania. Features precise geolocation for incident reporting, an administration dashboard, and dispatch coordination to reduce emergency response times.",
                report: "View Report",
                video: "Watch Demo"
            },
            p3: {
                title: "Online Coworking Reservation Service",
                desc: "A collaborative university-enterprise project with BRUSNIKA OOO in Russia. An online reservation platform for coworking spaces offering intuitive slot management, user interfaces, and integrated payment system mockups.",
                report: "View Certificate"},
            p4: {
                title: "Visual Org Structure",
                desc: "A software product for generating and managing complex corporate organizational structures (up to 5 levels) to overcome limitations in existing ERP systems. Includes interactive visualizations and intuitive navigation.",
                report: "View Certificate"},
            p5: {
                title: "TargetFin Grant Platform",
                desc: "University partner project developed with Donetsk State University. Designed modules for an MVP analytical platform supporting the management and moderation of regional funding applications. Contributed to decision-support architecture, expert selection, and a machine-learning component based on fuzzy clustering. Final evaluation: Excellent.",
                report: "View Certificate"
            }
        },
        skills: {
            title: "Technical Skills",
            languages: "Programming Languages",
            web: "Web & Mobile Development",
            databases: "Databases & Infrastructure",
            tools: "Tools & Methodologies",
            special: "Blockchain, IoT & Modeling",
            systemsanalysis: "Systems Analysis"
        },
        education: {
            title: "Education",
            master: {
                title: "Master's in Software Engineering",
                school: "Ural Federal University — Yekaterinburg, Russia",
                desc: "Educational program: Development and Management in Software Projects. Final weighted average: 91.46/100. Excellent academic standing. Selected among the best graduates of UrFU in 2026."
            },
            bachelor: {
                title: "Studies in Computer Development",
                school: "ISCAE — Nouakchott, Mauritania",
                desc: "Overall average across validated semesters: 14.69/20. Training in algorithms, databases, software modeling, and application development."
            }
        },
        experience: {
            title: "Professional Experience",
            job1: {
                title: "Full-Stack Developer",
                company: "Coccinelle s.a.r.l | Nouakchott, Mauritania",
                tasks: [
                    "Developed and deployed complete mobile applications using Flutter and Dart.",
                    "Architected and implemented robust REST API using Laravel and PHP.",
                    "Managed and optimized MySQL databases.",
                    "Collaborated in agile, multidisciplinary teams."
                ],
                date: "Dec 2021 – Jun 2023"
            },
            job2: {
                title: "Software Developer Intern",
                company: "Ministry of Digital Transformation, Innovation and Modernization of Administration (MTNIMA) | Nouakchott, Mauritania",
                tasks: [
                    "Contributed to digitizing public administration processes through web development.",
                    "Analyzed user requirements and designed digital solutions.",
                    "Drafted technical documentation and assisted in user training."
                ], 
                date: "Jul 2022 – Sep 2022"
            }
        },
        research: {
            title: "Research & Publications",
            summary: "My research focuses on blockchain-based traceability systems, IoT integration, distributed architectures, and formal verification. I have contributed to more than 10 scientific publications and conference papers.",
            scholar: "View Google Scholar",
            orcid: "View ORCID →"
        },
        achievements: {
            title: "Achievements",
            bestGraduate: {
               title: "Best Graduate of UrFU 2026",
               desc: "Selected among the best graduates of Ural Federal University for academic excellence and research activity. Ranked 57th among 43,155 students in the university-wide annual ranking."
             },
            pumpyansky: {
                title: "D. A. Pumpyansky Named Scholarship",
                desc: "Awarded the D. A. Pumpyansky Named Scholarship in Spring 2026 for academic excellence and strong university performance."
            },
            scientificScholarship: {
                title: "Increased Scholarship for Scientific Activity",
                desc: "Awarded an increased UrFU scholarship in 2026 for research activity and scientific achievements."
            },
            excellenceBadge: {
                title: "Excellent Student Badge",
                desc: "Awarded the official « Отличник учёбы » badge by IRIT-RTF for consistently outstanding academic results."
            }
        },
        contact: {
            title: "Get In Touch",
            desc: "I’m open to research, engineering, and international collaboration opportunities. Whether you have a question, a proposal, or just want to say hi, feel free to reach out!"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            education: "Formation",
            experience: "Expérience",
            achievements: "Réalisations",
            contact: "Contact"
        },
        hero: {
            greeting: "Bonjour, je suis",
            title: "Ingénieur Logiciel<br>& Développeur Full-Stack",
            award: "🏆 Sélectionné parmi les meilleurs diplômés de l’UrFU — Promotion 2026",
            subtitle: "Je conçois des applications web et des systèmes distribués,<br>avec un intérêt particulier pour la blockchain, l’IoT<br>et la traçabilité numérique.",
            viewProjects: "Voir mes projets",
            downloadCv: "Télécharger mon CV",
            contactMe: "Me contacter →",
            stats: {
                note: "91,46/100",
                gpa: "Moyenne finale du Master",
                publications: "Contributions scientifiques",
                awards: "Distinctions académiques",
                languages: "Langues"
            }
        },
        about: {
            title: "À Propos de Moi",
            p1: "Je suis ingénieur logiciel et développeur full-stack, avec un solide parcours académique et une expérience pratique dans la création d’applications modernes. J’ai terminé mon Master en génie logiciel à l’Université fédérale de l’Oural, avec un intérêt particulier pour l’architecture logicielle, les systèmes distribués et la résolution de problèmes concrets.",
            p2: "Mes travaux récents portent sur la conception de systèmes de traçabilité fondés sur la blockchain, intégrant l’IoT, les smart contracts et la vérification formelle. Mon mémoire de Master a exploré une architecture conceptuelle destinée à rendre la gestion du cycle de vie des déchets plus transparente et vérifiable.",
            highlight1: {
                title: "Développement Full-Stack",
                desc: "Solutions complètes utilisant React, Vue, Laravel, Node.js et Python."
            },
            highlight2: {
                title: "Systèmes Distribués",
                desc: "Création de microservices et d'APIs résilients et évolutifs."
            },
            highlight3: {
                title: "Blockchain & Traçabilité",
                desc: "Utilisation de technologies décentralisées pour des chaînes d'approvisionnement vérifiables."
            }
        },
        projects: {
            title: "Projets Phares",
            p1: {
                type: "Mémoire de Master . Projet de Recherche",
                title: "Système de Traçabilité du Cycle de Vie des Déchets basé sur la Blockchain",
                desc: "Projet de recherche de Master consacré à la conception et à l’évaluation analytique d’une architecture de traçabilité du cycle de vie des déchets fondée sur la blockchain. Le cadre proposé intègre des données IoT, des smart contracts, la traçabilité numérique et des concepts de vérification formelle afin d’améliorer la transparence, la responsabilité et l’intégrité des données dans les systèmes d’économie circulaire."
            },
            p2: {
                title: "MauriUrgence",
                desc: "Application mobile et web innovante pour la gestion des urgences médicales en Mauritanie. Offre une géolocalisation précise pour le signalement des incidents, un tableau de bord d'administration et la coordination des interventions.",
                report: "Voir le mémoire",
                video: "Voir la Démo"
            },
            p3: {
                title: "Service de Réservation de Coworking en Ligne",
                desc: "Projet collaboratif université-entreprise avec BRUSNIKA OOO en Russie. Plateforme de réservation d'espaces de coworking offrant une gestion intuitive des créneaux, des interfaces utilisateur soignées et des maquettes de système de paiement.",
                report: "Voir le certificat"
            },
            p4: {
                title: "Visual Org Structure",
                desc: "Produit logiciel pour générer et gérer des structures organisationnelles d'entreprise complexes (jusqu'à 5 niveaux) pour pallier les limites des systèmes ERP existants. Comprend des visualisations interactives et une navigation intuitive.",
                report: "Voir le certificat"
            },
            p5: {
                title: "Plateforme TargetFin Grant",
                desc: "Projet partenaire universitaire réalisé avec Donetsk State University. Conception de modules pour une plateforme analytique MVP destinée à la gestion et à la modération des demandes de financement régional. Contribution à l’architecture d’un système d’aide à la décision, à la sélection des experts et à un composant d’apprentissage automatique fondé sur le clustering flou. Évaluation finale : Excellent.",
                report: "Voir le certificat"
            }
        },
        skills: {
            title: "Compétences Techniques",
            languages: "Langages de Programmation",
            web: "Développement Web & Mobile",
            databases: "Bases de Données & Infrastructure",
            tools: "Outils & Méthodologies",
            special: "Blockchain, IoT & Modélisation",
            systemsanalysis: "Analyse des Systèmes"
        },
        education: {
            title: "Formation",
            master: {
                title: "Master en génie logiciel",
                school: "Université fédérale de l’Oural — Ekaterinbourg, Russie",
                desc: "Programme : Développement et gestion de projets logiciels. Moyenne finale pondérée : 91,46/100. Excellent niveau académique. Sélectionné parmi les meilleurs diplômés de l’UrFU en 2026."
            },
            bachelor: {
                title: "Études en développement informatique",
                school: "ISCAE — Nouakchott, Mauritanie",
                desc: "Moyenne générale des semestres validés : 14,69/20. Formation en algorithmique, bases de données, modélisation logicielle et développement d’applications."
            }
        },
        experience: {
            title: "Expérience Professionnelle",
            job1: {
                title: "Développeur Full-Stack",
                company: "Coccinelle s.a.r.l | Nouakchott, Mauritanie",
                tasks: [
                    "Développement et déploiement d'applications mobiles complètes avec Flutter et Dart.",
                    "Architecture et implémentation d'API REST avec Laravel et PHP.",
                    "Gestion et optimisation de bases de données MySQL.",
                    "Collaboration au sein d'équipes agiles et multidisciplinaires."
                ],
                date: "Déc 2021 – Juin 2023"
            },
            job2: {
                title: "Stagiaire Développeur Logiciel",
                company: "Ministère de la Transformation numérique, de l’Innovation et de la Modernisation de l’Administration (MTNIMA) | Nouakchott, Mauritania",
                tasks: [
                    "Contribution à la numérisation des processus de l'administration publique par le développement web.",
                    "Analyse des besoins utilisateurs et conception de solutions numériques associées.",
                    "Rédaction de la documentation technique et assistance à la formation des utilisateurs."
                ],
                date: "Juil 2022 – Sep 2022"
            }
        },
        research: {
            title: "Recherche & Publications",
            summary: "Mes travaux portent sur les systèmes de traçabilité fondés sur la blockchain, l’intégration de l’IoT, les architectures distribuées et la vérification formelle. J’ai contribué à plus de 10 publications scientifiques et communications de conférence.",
            scholar: "Voir Google Scholar",
            orcid: "Voir ORCID →"
        },
        achievements: {
            title: "Réalisations",
            bestGraduate: {
                title: "Meilleur diplômé de l’UrFU 2026",
                desc: "Sélectionné parmi les meilleurs diplômés de l’Université fédérale de l’Oural pour l’excellence académique et l’activité scientifique. Classé 57e parmi 43 155 étudiants dans le classement annuel général de l’université."
            },
            pumpyansky: {
                title: "Bourse nominative D. A. Pumpyansky",
                desc: "Lauréat de la bourse nominative D. A. Pumpyansky au printemps 2026 pour l’excellence académique et la qualité des résultats universitaires."
            },
            scientificScholarship: {
                title: "Bourse majorée pour activité scientifique",
                desc: "Bénéficiaire de la bourse majorée de l’UrFU en 2026 pour les activités de recherche et les réalisations scientifiques."
            },
            excellenceBadge: {
                title: "Badge d’excellence académique",
                desc: "Titulaire du badge officiel « Отличник учёбы » décerné par l’IRIT-RTF pour la constance des résultats académiques."
            }
        },
        contact: {
            title: "Contactez-moi",
            desc: "Je suis ouvert aux opportunités de recherche, d’ingénierie et de collaboration internationale. Si vous avez une question, une proposition, ou simplement envie d’échanger, n’hésitez pas à me contacter!"
        },
        footer: {
            rights: "Tous droits réservés."
        }
    }
};

// Export or make globally available
window.translations = translations;