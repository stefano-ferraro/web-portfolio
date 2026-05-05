(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-lang";

  const translations = {
    it: {
      "meta.description":
        "Stefano Ferraro — siti web moderni per brand e attività locali. Web design e sviluppo.",
      "meta.title": "Stefano Ferraro | Web Design & Sviluppo",
      "skip.content": "Vai al contenuto",
      "nav.main": "Navigazione principale",
      "nav.about": "Chi sono",
      "nav.services": "Servizi",
      "nav.process": "Processo",
      "nav.projects": "Progetti",
      "nav.contact": "Contatti",
      "nav.lang": "Seleziona lingua",
      "nav.menu.open": "Apri menu",
      "nav.menu.close": "Chiudi menu",
      "hero.eyebrow": "Web design & sviluppo",
      "hero.title":
        "Creo siti web moderni per brand e attività locali.",
      "hero.subtitle":
        "Aiuto piccoli business, locali e progetti creativi ad avere una presenza online più professionale, chiara e facile da usare.",
      "hero.cta.projects": "Guarda i progetti",
      "hero.cta.contact": "Contattami",
      "about.label": "Chi sono",
      "about.title": "Informatica, web e identità digitale",
      "about.alt": "Ritratto di Stefano Ferraro",
      "about.p1":
        "Sono Stefano Ferraro, ho 20 anni e sono uno studente di informatica. Ho studiato presso l’Istituto Torricelli di Milano, dove ho approfondito programmazione, basi di dati, reti e sviluppo software.",
      "about.p2":
        "Nel tempo ho sviluppato un forte interesse per il web design, la comunicazione digitale e la creazione di siti moderni per attività locali, brand e piccoli progetti.",
      "about.p3":
        "Mi piace unire competenze tecniche e gusto visivo: non mi interessa solo creare un sito che funzioni, ma anche costruire un’esperienza chiara, ordinata e coerente con l’identità di chi la usa.",
      "about.p4":
        "Oltre all’informatica, sono appassionato di tecnologia, design, contenuti digitali, brand emergenti e progetti creativi.",
      "skills.label": "Competenze",
      "skills.title": "Le mie competenze",
      "skills.subtitle":
        "Un mix tra competenze apprese a scuola e abilità sviluppate attraverso progetti personali, pratica e sperimentazione.",
      "skills.school.title": "Competenze apprese a scuola",
      "skills.school.aria": "Competenze apprese a scuola, scorri orizzontalmente",
      "skills.personal.title": "Competenze personali",
      "skills.personal.aria": "Competenze personali, scorri orizzontalmente",
      "skills.s1.title": "Programmazione",
      "skills.s1.desc": "Basi di programmazione, logica, algoritmi e sviluppo software.",
      "skills.s2.title": "Database",
      "skills.s2.desc": "Progettazione e gestione di basi di dati relazionali.",
      "skills.s2.badge.norm": "Normalizzazione",
      "skills.s3.title": "Networking & Linux",
      "skills.s3.desc":
        "Basi di reti informatiche, configurazioni essenziali e utilizzo di Linux da terminale.",
      "skills.p1.title": "Web Design",
      "skills.p1.desc": "Creazione di interfacce moderne, responsive e curate dal punto di vista visivo.",
      "skills.p2.title": "Workflow di sviluppo",
      "skills.p2.desc": "Organizzazione dei progetti, versionamento e pubblicazione online.",
      "skills.p3.title": "Brand e contenuti digitali",
      "skills.p3.desc": "Interesse per identità visiva, comunicazione digitale e progetti creativi.",
      "services.label": "Servizi",
      "services.title": "Cosa posso fare per te",
      "services.lead":
        "Soluzioni su misura per chi vuole comparire online in modo professionale, senza complicazioni inutili.",
      "services.1.title": "Landing page",
      "services.1.text":
        "Una pagina completa per presentare attività, servizi, contatti, orari e posizione.",
      "services.2.title": "Redesign sito",
      "services.2.text":
        "Rinnovo siti esistenti rendendoli più moderni, ordinati e adatti al mobile.",
      "services.3.title": "Siti per brand",
      "services.3.text":
        "Creo pagine con uno stile visivo forte per brand, prodotti e progetti creativi.",
      "process.label": "Come lavoro",
      "process.title": "Processo di lavoro",
      "process.s1.title": "Analisi",
      "process.s1.text":
        "Capisco obiettivo, stile, contenuti necessari e risultato che il sito deve ottenere.",
      "process.s2.title": "Struttura",
      "process.s2.text":
        "Organizzo le sezioni, il flusso della pagina e le informazioni più importanti.",
      "process.s3.title": "Design e sviluppo",
      "process.s3.text":
        "Creo una versione moderna, responsive e coerente con l’identità dell’attività.",
      "process.s4.title": "Pubblicazione",
      "process.s4.text":
        "Pubblico il sito online, controllo mobile, link, performance e dettagli finali.",
      "projects.label": "Progetti",
      "projects.title": "Lavori e demo",
      "projects.lead":
        "Esempi e progetti in corso. Ogni card riflette uno stato reale del lavoro.",
      "projects.status.done": "Demo completata",
      "projects.status.wip": "In corso",
      "projects.wip.badge": "WIP",
      "projects.1.cat": "Redesign brand streetwear",
      "projects.1.desc":
        "Redesign demo per un brand streetwear, con focus su estetica, identità visiva e presentazione dei prodotti.",
      "projects.1.cta": "Apri progetto",
      "projects.2.cat": "Sito attività locale",
      "projects.2.title": "In arrivo",
      "projects.2.desc":
        "Nuova landing page per un’attività locale. Il progetto verrà aggiunto appena completato.",
      "projects.2.btn": "In lavorazione",
      "projects.3.cat": "Sito brand creativo",
      "projects.3.title": "In arrivo",
      "projects.3.desc":
        "Nuovo sito per brand o progetto creativo. Sezione riservata ai prossimi lavori.",
      "projects.3.btn": "In lavorazione",
      "contact.label": "Contatti",
      "contact.title": "Parliamo del tuo progetto",
      "contact.lead":
        "Scrivimi per una prima call o un preventivo: rispondo in tempi ragionevoli.",
      "contact.email.hint": "Scrivimi per collaborazioni, progetti o informazioni.",
      "contact.github.hint": "Dai un’occhiata ai miei progetti e al codice.",
      "contact.linkedin.hint": "Connettiti con me per profilo, esperienze e opportunità.",
      "contact.instagram.hint": "Scrivimi anche su Instagram per un contatto più diretto.",
      "footer.tag": "Web design & sviluppo — Italia",
      "footer.top": "Torna su",
    },
    en: {
      "meta.description":
        "Stefano Ferraro — modern websites for brands and local businesses. Web design and development.",
      "meta.title": "Stefano Ferraro | Web Design & Development",
      "skip.content": "Skip to content",
      "nav.main": "Main navigation",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.lang": "Choose language",
      "nav.menu.open": "Open menu",
      "nav.menu.close": "Close menu",
      "hero.eyebrow": "Web design & development",
      "hero.title": "I build modern websites for brands and local businesses.",
      "hero.subtitle":
        "I help small businesses, local shops and creative projects get a more professional, clear and easy-to-use online presence.",
      "hero.cta.projects": "View projects",
      "hero.cta.contact": "Contact me",
      "about.label": "About",
      "about.title": "Computer science, web and digital identity",
      "about.alt": "Portrait of Stefano Ferraro",
      "about.p1":
        "I’m Stefano Ferraro, 20 years old and a computer science student. I studied at Istituto Torricelli in Milan, where I deepened programming, databases, networks and software development.",
      "about.p2":
        "Over time I developed a strong interest in web design, digital communication and building modern sites for local businesses, brands and small projects.",
      "about.p3":
        "I like combining technical skills with visual taste: I don’t only want a site that works, but a clear, tidy experience aligned with the identity of whoever uses it.",
      "about.p4":
        "Beyond computer science, I’m passionate about technology, design, digital content, emerging brands and creative projects.",
      "skills.label": "Skills",
      "skills.title": "My Skills",
      "skills.subtitle":
        "A mix of skills learned at school and abilities developed through personal projects, practice and experimentation.",
      "skills.school.title": "Skills learned at school",
      "skills.school.aria": "Skills learned at school, scroll horizontally",
      "skills.personal.title": "Personal skills",
      "skills.personal.aria": "Personal skills, scroll horizontally",
      "skills.s1.title": "Programming",
      "skills.s1.desc": "Programming fundamentals, logic, algorithms and software development.",
      "skills.s2.title": "Databases",
      "skills.s2.desc": "Designing and managing relational databases.",
      "skills.s2.badge.norm": "Normalization",
      "skills.s3.title": "Networking & Linux",
      "skills.s3.desc":
        "Networking fundamentals, essential configurations and basic Linux terminal usage.",
      "skills.p1.title": "Web Design",
      "skills.p1.desc": "Creating modern, responsive and visually polished interfaces.",
      "skills.p2.title": "Development workflow",
      "skills.p2.desc": "Project organization, version control and online publishing.",
      "skills.p3.title": "Brand & digital content",
      "skills.p3.desc": "Interest in visual identity, digital communication and creative projects.",
      "services.label": "Services",
      "services.title": "What I can do for you",
      "services.lead":
        "Tailored solutions for anyone who wants to show up online professionally, without unnecessary complexity.",
      "services.1.title": "Landing page",
      "services.1.text":
        "A full page to present your business, services, contacts, hours and location.",
      "services.2.title": "Site redesign",
      "services.2.text":
        "I refresh existing sites to make them more modern, tidy and mobile-friendly.",
      "services.3.title": "Brand websites",
      "services.3.text":
        "I craft pages with a strong visual style for brands, products and creative projects.",
      "process.label": "How I work",
      "process.title": "Work process",
      "process.s1.title": "Analysis",
      "process.s1.text":
        "I understand the goal, visual direction, required content and the result the website needs to achieve.",
      "process.s2.title": "Structure",
      "process.s2.text":
        "I organize the sections, page flow and the most important information.",
      "process.s3.title": "Design and development",
      "process.s3.text":
        "I create a modern, responsive version aligned with the identity of the business or project.",
      "process.s4.title": "Publishing",
      "process.s4.text":
        "I publish the website online and check mobile layout, links, performance and final details.",
      "projects.label": "Projects",
      "projects.title": "Work and demos",
      "projects.lead":
        "Examples and projects in progress. Each card reflects a real project status.",
      "projects.status.done": "Completed demo",
      "projects.status.wip": "Work in progress",
      "projects.wip.badge": "WIP",
      "projects.1.cat": "Streetwear brand redesign",
      "projects.1.desc":
        "Redesign demo for a streetwear brand, focused on aesthetics, visual identity and product presentation.",
      "projects.1.cta": "View project",
      "projects.2.cat": "Local business website",
      "projects.2.title": "Coming soon",
      "projects.2.desc":
        "New landing page for a local business. The project will be added as soon as it’s complete.",
      "projects.2.btn": "In progress",
      "projects.3.cat": "Creative brand website",
      "projects.3.title": "Coming soon",
      "projects.3.desc":
        "New site for a brand or creative project. Space reserved for upcoming work.",
      "projects.3.btn": "In progress",
      "contact.label": "Contact",
      "contact.title": "Let’s talk about your project",
      "contact.lead":
        "Email me for an intro call or a quote—I reply within a reasonable timeframe.",
      "contact.email.hint": "Reach out for collaborations, projects or information.",
      "contact.github.hint": "Take a look at my projects and code.",
      "contact.linkedin.hint": "Connect with me for my profile, experience and opportunities.",
      "contact.instagram.hint": "You can also message me on Instagram for a more direct contact.",
      "footer.tag": "Web design & development — Italy",
      "footer.top": "Back to top",
    },
  };

  function getStoredLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "it" || v === "en") return v;
    } catch (e) {
      /* ignore */
    }
    return "it";
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function t(lang, key) {
    const pack = translations[lang];
    return (pack && pack[key]) || translations.it[key] || key;
  }

  function applyI18n(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "it";

    const titleEl = document.querySelector("title");
    if (titleEl) titleEl.textContent = t(lang, "meta.title");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t(lang, "meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria-label");
      if (!key) return;
      el.setAttribute("aria-label", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      el.setAttribute("alt", t(lang, key));
    });

    document.querySelectorAll(".nav__lang-btn").forEach(function (btn) {
      const isLang = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isLang);
      btn.setAttribute("aria-pressed", isLang ? "true" : "false");
    });

    const navToggle = document.querySelector(".nav__toggle");
    if (navToggle) {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-label", t(lang, open ? "nav.menu.close" : "nav.menu.open"));
    }
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentLang = getStoredLang();
  applyI18n(currentLang);

  document.querySelectorAll(".nav__lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const next = btn.getAttribute("data-lang");
      if (!next || next === currentLang) return;
      currentLang = next;
      setStoredLang(next);
      applyI18n(next);
    });
  });

  /* Year in footer */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Mobile navigation */
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");

  function refreshToggleAria(open) {
    if (!navToggle) return;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute(
      "aria-label",
      t(currentLang, open ? "nav.menu.close" : "nav.menu.open")
    );
  }

  function setMenuOpen(open) {
    if (!navToggle || !navMenu) return;
    refreshToggleAria(open);
    navMenu.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  /* Initial toggle label */
  if (navToggle) {
    refreshToggleAria(false);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      setMenuOpen(open);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          setMenuOpen(false);
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      if (href === "#top") {
        if (!prefersReducedMotion) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;
      if (prefersReducedMotion) return;

      e.preventDefault();
      const header = document.querySelector(".site-header");
      const offset = header ? header.offsetHeight : 0;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset - 8);
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll("[data-reveal]");
    if (revealEls.length) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );

      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
