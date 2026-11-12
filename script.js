/**
 * ===================================================================
 * LOGIQUE INTERACTIVE DU PORTFOLIO - AZIL ISLEM
 * Ingénieur en Automatique & Data Science / IA
 * ===================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderHeroAndMetrics();
    renderSkills();
    renderProjects("all");
    renderTimeline();
    initProjectFilters();
    initInteractiveAiLab();
    initContactForm();
    initMobileNav();
});

// --- GESTION DU THÈME (CORPORATE NAVY / ACADÉMIQUE IVOIRE) ---
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("portfolio-theme") || "dark";
    
    applyTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = document.documentElement.classList.contains("dark");
            const newTheme = isDark ? "light" : "dark";
            applyTheme(newTheme);
            localStorage.setItem("portfolio-theme", newTheme);
        });
    }
}

function applyTheme(theme) {
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
        if (themeIcon) themeIcon.className = "fa-solid fa-sun text-amber-400";
        if (themeText) themeText.textContent = "Mode Clair";
    } else {
        document.documentElement.classList.remove("dark");
        if (themeIcon) themeIcon.className = "fa-solid fa-moon text-slate-700";
        if (themeText) themeText.textContent = "Mode Sombre";
    }
}

// --- HERO, STATISTIQUES & LIENS SOCIAUX ---
function renderHeroAndMetrics() {
    const { personal, keyMetrics } = PORTFOLIO_DATA;

    const fullNameEl = document.getElementById("hero-name");
    const titleEl = document.getElementById("hero-title");
    const subtitleEl = document.getElementById("hero-subtitle");
    const locationEl = document.getElementById("hero-location");
    const statusEl = document.getElementById("hero-status");
    const bioContainer = document.getElementById("bio-text-container");
    const pillarsContainer = document.getElementById("academic-pillars-container");

    if (fullNameEl) fullNameEl.textContent = `${personal.firstName} ${personal.lastName}`;
    if (titleEl) titleEl.textContent = personal.title;
    if (subtitleEl) subtitleEl.textContent = personal.subtitle;
    if (locationEl) locationEl.innerHTML = `<i class="fa-solid fa-location-dot text-indigo-400 mr-2"></i>${personal.location} <span class="mx-2 text-slate-600">•</span> <i class="fa-solid fa-envelope text-indigo-400 mr-1.5"></i>${personal.email}`;
    if (statusEl) statusEl.textContent = personal.status;

    // Bio paragraphes
    if (bioContainer) {
        bioContainer.innerHTML = personal.bio.map(p => `<p class="leading-relaxed text-slate-300 dark:text-slate-300 text-slate-700 mb-4 font-light text-base lg:text-lg">${p}</p>`).join("");
    }

    // Piliers d'expertise
    if (pillarsContainer) {
        pillarsContainer.innerHTML = personal.academicPillars.map(pillar => `
            <div class="p-5 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800/80 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg">
                <div class="w-12 h-12 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 text-xl">
                    <i class="fa-solid ${pillar.icon}"></i>
                </div>
                <h4 class="font-serif font-semibold text-lg text-white mb-2">${pillar.title}</h4>
                <p class="text-sm text-slate-400 leading-snug">${pillar.desc}</p>
            </div>
        `).join("");
    }

    // Chiffres Clés (KPIs)
    const metricsContainer = document.getElementById("key-metrics-container");
    if (metricsContainer) {
        metricsContainer.innerHTML = keyMetrics.map(m => `
            <div class="px-6 py-5 rounded-xl bg-slate-900/60 border border-slate-800 shadow-sm hover:border-indigo-500/40 transition">
                <div class="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300 mb-1">${m.value}</div>
                <div class="text-xs uppercase tracking-wider text-slate-400 font-medium">${m.label}</div>
            </div>
        `).join("");
    }
}

// --- COMPÉTENCES TECHNIQUES & RADAR CHART ---
function renderSkills() {
    const { categories, radarData } = PORTFOLIO_DATA.skills;
    const skillsListContainer = document.getElementById("skills-categories-container");

    if (skillsListContainer) {
        skillsListContainer.innerHTML = categories.map(cat => `
            <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition">
                <div class="flex items-center space-x-3 mb-6">
                    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <i class="fa-solid ${cat.icon}"></i>
                    </div>
                    <h3 class="text-xl font-serif font-bold text-white">${cat.title}</h3>
                </div>
                <div class="space-y-4">
                    ${cat.items.map(item => `
                        <div>
                            <div class="flex justify-between text-sm mb-1.5 font-medium">
                                <span class="text-slate-300">${item.name}</span>
                                <span class="text-indigo-400 font-mono text-xs">${item.level}%</span>
                            </div>
                            <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                <div class="bg-gradient-to-r from-indigo-500 to-sky-400 h-2 rounded-full transition-all duration-1000" style="width: ${item.level}%"></div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join("");
    }

    // Chart.js Radar Chart
    const ctx = document.getElementById("skillsRadarChart");
    if (ctx && typeof Chart !== "undefined") {
        new Chart(ctx, {
            type: "radar",
            data: {
                labels: radarData.labels,
                datasets: [{
                    label: "Niveau d'expertise opérationnelle & théorique",
                    data: radarData.scores,
                    backgroundColor: "rgba(99, 102, 241, 0.25)",
                    borderColor: "rgba(129, 140, 248, 1)",
                    borderWidth: 2,
                    pointBackgroundColor: "rgba(56, 189, 248, 1)",
                    pointBorderColor: "#fff",
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: "rgba(148, 163, 184, 0.15)" },
                        grid: { color: "rgba(148, 163, 184, 0.15)" },
                        pointLabels: {
                            color: "#cbd5e1",
                            font: { size: 12, family: "Inter, sans-serif", weight: "500" }
                        },
                        ticks: {
                            display: false,
                            stepSize: 20,
                            min: 0,
                            max: 100
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

// --- PROJETS & ÉTUDES DE CAS ---
function renderProjects(filterCategory = "all") {
    const projectsContainer = document.getElementById("projects-grid");
    if (!projectsContainer) return;

    const filtered = filterCategory === "all"
        ? PORTFOLIO_DATA.projects
        : PORTFOLIO_DATA.projects.filter(p => p.category === filterCategory);

    projectsContainer.innerHTML = filtered.map(p => `
        <article class="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-indigo-500/10">
            <div class="relative h-48 overflow-hidden bg-slate-800">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                <span class="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-indigo-300 text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                    ${p.categoryLabel}
                </span>
            </div>
            
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-serif font-bold text-white mb-2.5 group-hover:text-indigo-300 transition">
                        ${p.title}
                    </h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-4">
                        ${p.shortDesc}
                    </p>

                    <!-- Métriques Clés -->
                    <div class="grid grid-cols-3 gap-2 py-3 px-3.5 mb-4 rounded-xl bg-slate-800/40 border border-slate-800">
                        ${p.metrics.map(m => `
                            <div class="text-center">
                                <div class="text-sm font-bold text-sky-400 font-mono">${m.val}</div>
                                <div class="text-[10px] text-slate-400 truncate">${m.label}</div>
                            </div>
                        `).join("")}
                    </div>

                    <!-- Tags / Stack -->
                    <div class="flex flex-wrap gap-1.5 mb-6">
                        ${p.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded-md bg-indigo-950/40 text-indigo-300 border border-indigo-900/60 font-mono">${t}</span>`).join("")}
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <button onclick="openProjectModal('${p.id}')" class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1.5 transition">
                        <span>Fiche technique détaillée</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                    ${p.category === 'ia-industrie' ? `
                        <a href="#interactive-lab" class="text-xs font-mono px-2.5 py-1 rounded bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white transition">
                            <i class="fa-solid fa-play mr-1"></i>Démo
                        </a>
                    ` : ''}
                </div>
            </div>
        </article>
    `).join("");
}

function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".project-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => {
                b.classList.remove("active", "bg-indigo-600", "text-white");
                b.classList.add("bg-slate-800/70", "text-slate-300");
            });
            btn.classList.add("active", "bg-indigo-600", "text-white");
            btn.classList.remove("bg-slate-800/70", "text-slate-300");

            const filter = btn.getAttribute("data-filter");
            renderProjects(filter);
        });
    });
}

// --- MODALE ÉTUDE DE CAS ---
function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const modalContent = document.getElementById("project-modal-body");

    modalContent.innerHTML = `
        <div class="flex justify-between items-start mb-6 pb-4 border-b border-slate-800">
            <div>
                <span class="text-xs uppercase tracking-wider text-indigo-400 font-mono font-semibold">${project.categoryLabel}</span>
                <h2 class="text-2xl lg:text-3xl font-serif font-bold text-white mt-1">${project.title}</h2>
            </div>
            <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-2 text-xl transition">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <div class="space-y-6 text-slate-300 text-sm lg:text-base leading-relaxed">
            <div>
                <h4 class="font-serif font-semibold text-white text-lg mb-2 flex items-center">
                    <i class="fa-solid fa-bullseye text-indigo-400 mr-2"></i> Contexte Industriel & Objectif
                </h4>
                <p class="text-slate-400">${project.context}</p>
            </div>

            <div>
                <h4 class="font-serif font-semibold text-white text-lg mb-2 flex items-center">
                    <i class="fa-solid fa-diagram-project text-indigo-400 mr-2"></i> Architecture Technique & Méthode de Résolution
                </h4>
                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-mono text-sm leading-relaxed">
                    ${project.architecture}
                </div>
            </div>

            <div>
                <h4 class="font-serif font-semibold text-white text-lg mb-3 flex items-center">
                    <i class="fa-solid fa-chart-line text-indigo-400 mr-2"></i> Indicateurs & Métriques
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    ${project.metrics.map(m => `
                        <div class="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-center">
                            <div class="text-xl font-bold font-mono text-sky-400">${m.val}</div>
                            <div class="text-xs text-slate-400 mt-1">${m.label}</div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <div>
                <h4 class="font-serif font-semibold text-white text-lg mb-2">Technologies & Outils Mobilisés</h4>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(t => `<span class="px-3 py-1 rounded bg-indigo-900/30 text-indigo-300 border border-indigo-700/40 text-xs font-mono">${t}</span>`).join("")}
                </div>
            </div>

            <div class="pt-6 border-t border-slate-800 flex justify-end space-x-4">
                <button onclick="closeProjectModal()" class="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition">
                    Fermer
                </button>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
}

// --- TIMELINE EXPÉRIENCE & FORMATION ---
function renderTimeline() {
    const expContainer = document.getElementById("timeline-experience");
    const eduContainer = document.getElementById("timeline-education");

    if (expContainer) {
        expContainer.innerHTML = PORTFOLIO_DATA.timeline.experience.map(item => `
            <div class="relative pl-6 pb-8 border-l-2 border-indigo-500/30 last:border-0 last:pb-0">
                <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-900"></div>
                <div class="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider mb-1">${item.period}</div>
                <h4 class="text-lg font-serif font-bold text-white">${item.role}</h4>
                <div class="text-sm font-medium text-slate-400 mb-2">${item.company}</div>
                <p class="text-sm text-slate-400 mb-3 leading-relaxed">${item.description}</p>
                <div class="flex flex-wrap gap-1.5">
                    ${item.badges.map(b => `<span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">${b}</span>`).join("")}
                </div>
            </div>
        `).join("");
    }

    if (eduContainer) {
        eduContainer.innerHTML = PORTFOLIO_DATA.timeline.education.map(item => `
            <div class="relative pl-6 pb-8 border-l-2 border-sky-500/30 last:border-0 last:pb-0">
                <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-slate-900"></div>
                <div class="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-1">${item.period}</div>
                <h4 class="text-lg font-serif font-bold text-white">${item.degree}</h4>
                <div class="text-sm font-medium text-slate-400 mb-2">${item.institution}</div>
                <p class="text-sm text-slate-400 leading-relaxed">${item.details}</p>
            </div>
        `).join("");
    }
}

// --- DÉMONSTRATION INTERACTIVE (LAB IA / MAINTENANCE PRÉDICTIVE INDUSTRIELLE) ---
// Simulateur de diagnostic de défaut moteur par IA (Maintenance Prédictive)
function initInteractiveAiLab() {
    const vibSlider = document.getElementById("slider-vib");
    const tempSlider = document.getElementById("slider-temp");
    const currentSlider = document.getElementById("slider-current");
    const rpmSelect = document.getElementById("select-rpm");

    if (!vibSlider || !tempSlider || !currentSlider || !rpmSelect) return;

    function recalculate() {
        const vibration = parseFloat(vibSlider.value); // mm/s RMS (Norme ISO 10816)
        const temperature = parseInt(tempSlider.value); // °C
        const current = parseFloat(currentSlider.value); // A
        const rpm = parseInt(rpmSelect.value); // tr/min

        // Mise à jour des valeurs affichées
        document.getElementById("val-vib").textContent = `${vibration.toFixed(1)} mm/s RMS`;
        document.getElementById("val-temp").textContent = `${temperature} °C`;
        document.getElementById("val-current").textContent = `${current.toFixed(1)} A`;

        // Modèle physique & statistique de score d'anomalie (0% = nominal, 100% = panne critique)
        // Norme ISO 10816 : sain < 2.3, tolérable 2.3-4.5, non admissible > 7.1
        let anomalyScore = 5;

        // Facteur vibration (principal marqueur mécanique)
        const vibFactor = Math.pow(vibration / 2.3, 1.8) * 18;
        // Facteur thermique (au delà de 75°C, accélération thermique)
        const tempFactor = (temperature > 70) ? (temperature - 70) * 1.2 : 0;
        // Facteur surintensité
        const currentFactor = (current > 15) ? (current - 15) * 2.2 : 0;

        anomalyScore += (vibFactor + tempFactor + currentFactor);
        const finalScore = Math.min(Math.max(Math.round(anomalyScore), 3), 99);

        // Actualisation du widget visuel
        const riskBar = document.getElementById("sim-risk-bar");
        const riskValue = document.getElementById("sim-risk-value");
        const riskBadge = document.getElementById("sim-risk-badge");
        const recommendation = document.getElementById("sim-recommendation");

        if (riskValue) riskValue.textContent = `${finalScore}%`;
        if (riskBar) {
            riskBar.style.width = `${finalScore}%`;
            if (finalScore < 35) {
                riskBar.className = "h-full bg-emerald-500 transition-all duration-300";
            } else if (finalScore < 70) {
                riskBar.className = "h-full bg-amber-500 transition-all duration-300";
            } else {
                riskBar.className = "h-full bg-rose-500 transition-all duration-300";
            }
        }

        if (riskBadge) {
            if (finalScore < 35) {
                riskBadge.textContent = "État Nominal (Conforme ISO 10816)";
                riskBadge.className = "px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
            } else if (finalScore < 70) {
                riskBadge.textContent = "Alerte Précoce : Usure Palier / Balourd";
                riskBadge.className = "px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30";
            } else {
                riskBadge.textContent = "DANGER CRITIQUE : Risque de Grippage Imminent";
                riskBadge.className = "px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30";
            }
        }

        // Recommandation prescriptive pour ingénieur de maintenance
        if (recommendation) {
            if (finalScore >= 70) {
                recommendation.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-rose-400 mr-2 text-base"></i><strong>Procédure d'Urgence :</strong> Vibration anormale (> ${vibration.toFixed(1)} mm/s) avec échauffement moteur à ${temperature}°C. Planifier un arrêt immédiat sur la ligne pour inspection des roulements et alignement de l'arbre.`;
            } else if (finalScore >= 35) {
                recommendation.innerHTML = `<i class="fa-solid fa-screwdriver-wrench text-amber-400 mr-2 text-base"></i><strong>Maintenance Préventive Conditionnelle :</strong> Début de dégradation harmonique détecté. Programmer une opération de lubrification des paliers sous 48h sans interruption du cycle de production.`;
            } else {
                recommendation.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 mr-2 text-base"></i><strong>Fonctionnement Optimal :</strong> Les spectres vibratoires et thermiques sont stables à ${rpm} tr/min. Aucun défaut mécanique ou électrique détecté.`;
            }
        }

        // Waterfall des contributions capteurs (Explicabilité du diagnostic)
        renderSensorsWaterfall({
            "Vibration Spectrale RMS": vibFactor,
            "Échauffement Thermique": tempFactor,
            "Dérive Courant Statorique": currentFactor,
            "Régime Harmonique Moteur": 6.5
        });
    }

    function renderSensorsWaterfall(contributions) {
        const container = document.getElementById("shap-waterfall");
        if (!container) return;

        const maxVal = Math.max(...Object.values(contributions), 10);

        container.innerHTML = Object.entries(contributions).map(([sensor, val]) => {
            const widthPct = Math.min((val / maxVal) * 100, 100);
            const isHigh = val > 20;
            return `
                <div class="text-xs">
                    <div class="flex justify-between text-slate-400 mb-1">
                        <span>${sensor}</span>
                        <span class="font-mono ${isHigh ? 'text-rose-400 font-bold' : 'text-sky-400'}">${val.toFixed(1)} pts</span>
                    </div>
                    <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div class="${isHigh ? 'bg-rose-500' : 'bg-indigo-500'} h-1.5 rounded-full transition-all duration-300" style="width: ${widthPct}%"></div>
                    </div>
                </div>
            `;
        }).join("");
    }

    [vibSlider, tempSlider, currentSlider].forEach(slider => slider.addEventListener("input", recalculate));
    rpmSelect.addEventListener("change", recalculate);

    // Calcul initial
    recalculate();
}

// --- FORMULAIRE DE CONTACT & FEEDBACK ---
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector("button[type='submit']");
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Envoi en cours...`;
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = `<i class="fa-solid fa-check mr-2"></i> Message envoyé !`;
            showToast("Merci pour votre message ! Je vous répondrai dans les meilleurs délais.");
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 3000);
        }, 900);
    });
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
    let toast = document.getElementById("global-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "global-toast";
        toast.className = "fixed bottom-5 right-5 z-50 px-5 py-3 rounded-xl bg-slate-900 border border-indigo-500/50 text-white shadow-2xl flex items-center space-x-3 transition-opacity duration-300 opacity-0 pointer-events-none";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-indigo-400 text-lg"></i><span class="text-sm font-medium">${message}</span>`;
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");

    setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0", "pointer-events-none");
    }, 3500);
}

// --- MENU MOBILE ---
function initMobileNav() {
    const toggleBtn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
        });
    });
}
