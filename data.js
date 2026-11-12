/**
 * ===================================================================
 * PORTFOLIO - AZIL ISLEM
 * Data Science & Intelligence Artificielle • École HETIC
 * ===================================================================
 */

const PORTFOLIO_DATA = {
    // --- INFORMATIONS PERSONNELLES ---
    personal: {
        firstName: "Islem",
        lastName: "Azil",
        title: "Data Science & Intelligence Artificielle",
        subtitle: "Étudiant en Année Préparatoire Data & IA à l'école HETIC • Ex-Ingénieur Engineering & Process chez Samsung Sinova",
        location: "Paris, France / Sétif (Mobile)",
        email: "azislem8@gmail.com",
        phone: "+33 6 62 06 52 18",
        status: "Étudiant à l'école HETIC • En recherche d'opportunités (Stage / Alternance en Data & IA)",
        bio: [
            "Actuellement étudiant à l'école HETIC en Année Préparatoire Data Science & Intelligence Artificielle, je possède un solide bagage d'ingénierie et une expérience de terrain confirmée chez Samsung Sinova (Ingénieur Engineering & Process terminé en octobre 2026) et Sarl Fitpack.",
            "Passionné par l'exploitation des données, le Machine Learning et la transformation numérique, je développe des solutions prédictives et intelligentes pour fiabiliser et optimiser les processus. Mon parcours allie rigueur scientifique, esprit d'analyse et maîtrise des technologies data modernes."
        ],
        academicPillars: [
            { 
                icon: "fa-brain", 
                title: "Data Science & Machine Learning", 
                desc: "Modélisation prédictive, classification, régression, traitement des séries temporelles avec Python et Scikit-Learn." 
            },
            { 
                icon: "fa-graduation-cap", 
                title: "Formation HETIC", 
                desc: "Approche moderne des technologies numériques, gestion de la data, programmation web et intelligence artificielle." 
            },
            { 
                icon: "fa-microchip", 
                title: "IA Appliquée & Maintenance Prédictive", 
                desc: "Traitement du signal, extraction de caractéristiques (FFT) et détection précoce d'anomalies sur équipements critiques." 
            },
            { 
                icon: "fa-chart-line", 
                title: "Engineering & Optimisation Process", 
                desc: "Expérience industrielle chez Samsung Sinova : analyse de données de production, résolution de problèmes et KPIs." 
            }
        ],
        socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            googleScholar: "https://scholar.google.com",
            huggingface: "https://huggingface.co",
            orcid: "https://orcid.org"
        },
        resumeUrl: "#cv-download"
    },

    // --- CHIFFRES CLÉS & STATISTIQUES D'IMPACT ---
    keyMetrics: [
        { value: "HETIC", label: "École du Numérique & Data / IA" },
        { value: "3+", label: "Expériences Industrielles & R&D" },
        { value: "Oct. 2026", label: "Ingénieur Process chez Samsung Sinova" },
        { value: "100%", label: "Engagement & Rigueur Technique" }
    ],

    // --- COMPÉTENCES (RADAR & CATÉGORIES) ---
    skills: {
        categories: [
            {
                title: "Data Science, IA & Programmation",
                icon: "fa-laptop-code",
                items: [
                    { name: "Python (NumPy, Pandas, Scikit-Learn)", level: 90 },
                    { name: "Machine Learning & Traitement du Signal", level: 86 },
                    { name: "SQL & Bases de données MySQL", level: 84 },
                    { name: "MATLAB & Modélisation", level: 88 },
                    { name: "C++ & Algorithmique", level: 80 }
                ]
            },
            {
                title: "Optimisation & Résolution de Problèmes",
                icon: "fa-chart-pie",
                items: [
                    { name: "Analyse et optimisation des processus (Samsung Sinova)", level: 92 },
                    { name: "Diagnostic technique et recherche de cause racine", level: 94 },
                    { name: "Indicateurs de performance & Qualité", level: 88 },
                    { name: "Maintenance prédictive & Surveillance d'actifs", level: 90 }
                ]
            },
            {
                title: "Systèmes Industriels & Protocoles",
                icon: "fa-network-wired",
                items: [
                    { name: "Régulation avancée (PID, adaptative, prédictive)", level: 88 },
                    { name: "Protocoles réseau (Modbus, PROFINET, Ethernet/IP)", level: 85 },
                    { name: "Supervision SCADA & IHM", level: 86 },
                    { name: "Systèmes de contrôle & Armoires électriques", level: 88 }
                ]
            }
        ],
        radarData: {
            labels: [
                "Machine Learning / IA", 
                "Python & Data Analysis", 
                "Traitement Signal & FFT", 
                "Optimisation Process", 
                "SQL & Données", 
                "Systèmes & Protocoles"
            ],
            scores: [88, 92, 87, 93, 85, 86]
        }
    },

    // --- LANGUES & ATOUTS ---
    languages: [
        { lang: "Arabe", level: "Excellent / Langue maternelle" },
        { lang: "Français", level: "Très bien" },
        { lang: "Anglais", level: "Bien" }
    ],

    // --- PROJETS PHARES & ÉTUDES DE CAS ---
    projects: [
        {
            id: "ai-motor-fault-detection",
            category: "ia-industrie",
            categoryLabel: "Projet IA & Maintenance Prédictive",
            title: "Détection des Défauts Mécaniques des Moteurs Électriques par Intelligence Artificielle",
            shortDesc: "Modèle intelligent d'acquisition et de traitement des signaux vibratoires et électriques pour anticiper les défaillances mécaniques.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
            tags: ["Python", "Machine Learning", "Traitement du Signal", "MATLAB", "Maintenance Prédictive", "IoT Industriel"],
            metrics: [
                { label: "Précision Modèle", val: "94.8%" },
                { label: "Type d'analyse", val: "Vibrations & Courant" },
                { label: "Domaine", val: "IA & Industrie 4.0" }
            ],
            context: "La défaillance imprévue d'équipements tournants provoque des arrêts de ligne préjudiciables. Ce projet exploite les algorithmes de Machine Learning pour classifier automatiquement les anomalies mécaniques (roulements, balourd, excentricité) à partir des signaux physiques.",
            architecture: "Capteurs accélérométriques -> Traitement du signal FFT & filtrage -> Extraction de caractéristiques statistiques -> Classification supervisée par IA -> Tableau de bord d'alerte précoce.",
            githubUrl: "https://github.com",
            demoUrl: "#interactive-lab"
        },
        {
            id: "samsung-process-engineering",
            category: "process",
            categoryLabel: "Expérience Samsung Sinova",
            title: "Suivi et Optimisation des Processus de Production chez Samsung Sinova",
            shortDesc: "Poste d'Ingénieur Engineering & Process (Juin – Octobre 2026) : analyse des données de fabrication, résolution méthodique des anomalies et amélioration continue.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            tags: ["Samsung Sinova", "Engineering & Process", "Analyse de Données", "Optimisation Continue", "Qualité"],
            metrics: [
                { label: "Entreprise", val: "Samsung Sinova" },
                { label: "Période", val: "Juin - Octobre 2026" },
                { label: "Impact", val: "Zéro Rupture Process" }
            ],
            context: "Au sein de l'usine Samsung Sinova, suivi des indicateurs opérationnels, détection des dérives process et mise en place de contre-mesures techniques rapides pour maximiser le rendement.",
            architecture: "Collecte des données de fabrication -> Identification des goulets d'étranglement -> Ajustement des paramètres opérationnels -> Déploiement de protocoles correctifs standardisés.",
            githubUrl: "",
            demoUrl: ""
        },
        {
            id: "fitpack-electrical-automation",
            category: "automatisme",
            categoryLabel: "Expérience Sarl Fitpack",
            title: "Amélioration des Systèmes de Contrôle et Diagnostic chez Sarl Fitpack",
            shortDesc: "Ingénieur Maintenance (Janvier 2025 – Janvier 2026) : fiabilisation des installations, diagnostic électrique et optimisation des systèmes de contrôle.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            tags: ["Fitpack", "Diagnostic Électrique", "Systèmes de Contrôle", "Supervision", "Modbus"],
            metrics: [
                { label: "Durée", val: "1 an (2025-2026)" },
                { label: "Fiabilité", val: "+30%" },
                { label: "Norme", val: "Sécurité Industrielle" }
            ],
            context: "Maintenance et fiabilisation des équipements industriels au sein d'une unité de fabrication d'emballages. Amélioration des armoires électriques et sécurisation des automatismes.",
            architecture: "Audit des architectures de contrôle -> Suppression des micro-arrêts -> Optimisation des cycles de régulation -> Procédures de maintenance préventive.",
            githubUrl: "",
            demoUrl: ""
        },
        {
            id: "brandt-industrial-press",
            category: "process",
            categoryLabel: "Stage Technique Brandt",
            title: "Étude et Analyse Technique de Pressage Industriel chez Brandt-Sétif",
            shortDesc: "Stage technique (Mars – Avril 2023) : analyse détaillée du fonctionnement des presses et étude des étapes de fabrication de machines à laver.",
            image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
            tags: ["Brandt", "Presses Industrielles", "Cinématique", "Fabrication"],
            metrics: [
                { label: "Période", val: "Mars - Avril 2023" },
                { label: "Secteur", val: "Électroménager" },
                { label: "Ligne", val: "Portes Lave-linge" }
            ],
            context: "Stage au sein du complexe industriel Brandt. Analyse du cycle de pressage et des paramètres mécaniques pour optimiser la cadence de production.",
            architecture: "Étude fonctionnelle du cycle de travail -> Analyse cinématique et asservissement -> Recommandations techniques.",
            githubUrl: "",
            demoUrl: ""
        }
    ],

    // --- PARCOURS PROFESSIONNEL & ACADÉMIQUE ---
    timeline: {
        experience: [
            {
                period: "Juin 2026 – Octobre 2026",
                role: "Ingénieur Engineering & Process",
                company: "Samsung Sinova",
                description: "Suivi et optimisation des processus de production industrielle. Analyse méthodique des incidents et anomalies process, optimisation continue des indicateurs opérationnels et qualité.",
                badges: ["Samsung", "Optimisation Process", "Analyse de Données", "Résolution de Problèmes"]
            },
            {
                period: "Janvier 2025 – Janvier 2026",
                role: "Ingénieur Maintenance",
                company: "Sarl Fitpack (Fabrication d’emballages et de conteneurs)",
                description: "Diagnostic électrique et contrôle des installations industrielles. Participation active à l’amélioration des armoires électriques et à la fiabilisation des systèmes de contrôle.",
                badges: ["Fitpack", "Diagnostic Électrique", "Systèmes de Contrôle", "Fiabilité"]
            },
            {
                period: "Mars 2023 – Avril 2023",
                role: "Stage Technique en Production",
                company: "Brandt-Sétif (Fabrication de machines à laver)",
                description: "Étude des étapes de production des portes de machines à laver. Analyse approfondie du fonctionnement d’une presse industrielle et de ses détails techniques.",
                badges: ["Brandt", "Presses Industrielles", "Process de Fabrication"]
            }
        ],
        education: [
            {
                period: "2026 - Présent (En cours)",
                degree: "Année Préparatoire en Data Science & Intelligence Artificielle",
                institution: "HETIC (Hautes Études des Technologies de l'Information et de la Communication)",
                details: "Formation intensive axée sur l'analyse de données, les algorithmes de Machine Learning, le Deep Learning, les technologies web et le développement de solutions d'IA modernes."
            },
            {
                period: "Septembre 2019 – Juillet 2024",
                degree: "Diplôme d'Ingénieur d'État",
                institution: "Université Ferhat Abbas 1 – Sétif",
                details: "Formation d'ingénieur rigoureuse : modélisation mathématique, traitement du signal, régulation avancée (PID, adaptative, prédictive), programmation Python, C++ et MATLAB."
            },
            {
                period: "Septembre 2018 – Juillet 2019",
                degree: "Baccalauréat Série Maths Technique",
                institution: "Lycée Technique, Sétif",
                details: "Formation scientifique exigeante en mathématiques appliquées, physique et technologie."
            }
        ]
    }
};
