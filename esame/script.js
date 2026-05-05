(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-lang";

  const translations = {
    it: {
      "meta.description":
        "Stefano Ferraro — studente di informatica. Qui raccolgo i siti che sto costruendo per attività locali, brand e progetti creativi.",
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
      "hero.eyebrow": "Siti web per attività locali",
      "hero.title":
        "Vorrei costruire siti web per attività locali e piccoli brand.",
      "hero.subtitle":
        "Sto costruendo questo percorso perché vedo troppi siti tutti uguali: lenti, confusi, dimenticati. L’idea è creare pagine utili, che raccontino bene un progetto e funzionino davvero su telefono.",
      "hero.cta.projects": "Guarda i progetti",
      "hero.cta.contact": "Contattami",
      "about.label": "Chi sono",
      "about.title": "Da dove parto",
      "about.alt": "Ritratto di Stefano Ferraro",
      "about.p1":
        "Sono Stefano Ferraro, ho 20 anni e studio informatica. Ho frequentato l’Istituto Torricelli di Milano, dove ho messo basi su programmazione, database, reti e sviluppo software.",
      "about.p2":
        "Da lì ho iniziato a fissarmi col web: mi interessa prendere informazioni sparse e trasformarle in una pagina che una persona capisce in pochi secondi.",
      "about.p3":
        "Questo sito è anche parte del mio percorso verso la maturità. Non è la vetrina di uno studio avviato: è il punto da cui voglio partire, con lavori veri e progressi visibili.",
      "about.p4":
        "Nel tempo libero seguo tecnologia, design e brand emergenti. E sì, a volte passo più tempo a sistemare due spaziature che a scegliere cosa mangiare.",
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
        "Queste sono le cose che oggi so fare e che vorrei offrire in progetti reali.",
      "services.1.title": "Landing page",
      "services.1.text":
        "Una landing page con le informazioni essenziali: cosa fai, contatti, orari, dove trovarti.",
      "services.2.title": "Redesign sito",
      "services.2.text":
        "Un rifacimento di siti vecchi: testo leggibile, struttura sensata, uso semplice da mobile.",
      "services.3.title": "Siti per brand",
      "services.3.text":
        "Pagine per brand o progetti creativi che non sembrino template copiati: tono visivo riconoscibile e contenuti messi bene in evidenza.",
      "process.label": "Come imposterei un progetto",
      "process.title": "Metodo di lavoro",
      "process.s1.title": "Analisi",
      "process.s1.text":
        "Partirei dagli obiettivi: cosa deve ottenere il sito e quali informazioni devono comparire subito.",
      "process.s2.title": "Struttura",
      "process.s2.text":
        "Poi metterei in ordine i contenuti: sezioni, priorità e percorso della pagina.",
      "process.s3.title": "Design e sviluppo",
      "process.s3.text":
        "A quel punto passerei a design e sviluppo, con test pratici su desktop e telefono.",
      "process.s4.title": "Pubblicazione",
      "process.s4.text":
        "Infine pubblicherei il sito e farei un controllo finale su link, velocità e dettagli.",
      "projects.label": "Progetti",
      "projects.title": "Lavori e demo",
      "projects.lead":
        "Questa sezione è una fotografia onesta di dove sono adesso: una demo pubblicata e lavori in corso.",
      "projects.status.done": "Demo completata",
      "projects.status.wip": "In corso",
      "projects.wip.badge": "WIP",
      "projects.1.cat": "Redesign brand streetwear",
      "projects.1.desc":
        "Demo di redesign per un brand streetwear. Mi è servita per allenare struttura homepage, gerarchia visiva e presentazione prodotti.",
      "projects.1.cta": "Apri progetto",
      "projects.2.cat": "Sito attività locale",
      "projects.2.title": "In arrivo",
      "projects.2.desc":
        "Progetto in sviluppo per attività locale. Prossimo passo: chiudere contenuti e test mobile.",
      "projects.2.btn": "In lavorazione",
      "projects.3.cat": "Sito brand creativo",
      "projects.3.title": "In arrivo",
      "projects.3.desc":
        "Spazio riservato al prossimo caso studio. L’idea è pubblicare qui i progressi, non solo il risultato finale.",
      "projects.3.btn": "In lavorazione",
      "contact.label": "Contatti",
      "contact.title": "Se ti ritrovi in questa idea, scrivimi",
      "contact.lead":
        "Se quello che hai letto ti torna, mandami una mail. Anche solo per confrontarci su un’idea.",
      "contact.email.hint": "Scrivimi per collaborazioni, progetti o informazioni.",
      "contact.github.hint": "Dai un’occhiata ai miei progetti e al codice.",
      "contact.linkedin.hint": "Connettiti con me per profilo, esperienze e opportunità.",
      "contact.instagram.hint": "Scrivimi anche su Instagram per un contatto più diretto.",
      "footer.tag": "Studente di informatica — Milano, Italia",
      "footer.top": "Torna su",
    },
    en: {
      "meta.description":
        "Stefano Ferraro — computer science student. This is where I share the websites I’m building for local businesses, brands, and creative projects.",
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
      "hero.eyebrow": "Websites for local businesses",
      "hero.title": "I want to build websites for local businesses and small brands.",
      "hero.subtitle":
        "I’m building this path because I see too many sites that feel generic and hard to use on phones. My goal is to make pages that explain a project quickly and actually work for real people.",
      "hero.cta.projects": "View projects",
      "hero.cta.contact": "Contact me",
      "about.label": "About",
      "about.title": "Where I’m starting from",
      "about.alt": "Portrait of Stefano Ferraro",
      "about.p1":
        "I’m Stefano Ferraro, I’m 20, and I study computer science. I attended Istituto Torricelli in Milan, where I worked on programming, databases, networks, and software development.",
      "about.p2":
        "That led me to web work. I like taking scattered information and turning it into a page someone can understand in a few seconds.",
      "about.p3":
        "This site is also part of my final exam path in Italy. It’s not the website of an established studio — it’s the starting point of what I’m aiming to build.",
      "about.p4":
        "Outside school, I follow tech, design, and emerging brands. Also, I can spend 20 minutes adjusting spacing and call it a “quick fix.”",
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
        "These are the things I can build now, and what I want to keep improving through real projects.",
      "services.1.title": "Landing page",
      "services.1.text":
        "A landing page with the essentials: what you do, how to contact you, opening hours, and location.",
      "services.2.title": "Site redesign",
      "services.2.text":
        "A redesign for older websites: better reading flow, cleaner structure, and easier mobile use.",
      "services.3.title": "Brand websites",
      "services.3.text":
        "Pages for brands or creative ideas that don’t look like copy-paste templates, with a distinct visual direction.",
      "process.label": "How I’d approach a project",
      "process.title": "Working method",
      "process.s1.title": "Analysis",
      "process.s1.text":
        "I’d start with the goal: what the site needs to achieve and what information must be visible first.",
      "process.s2.title": "Structure",
      "process.s2.text":
        "Then I’d map the structure: sections, priorities, and reading flow.",
      "process.s3.title": "Design and development",
      "process.s3.text":
        "Next I’d move to design and development, then test it on desktop and phone.",
      "process.s4.title": "Publishing",
      "process.s4.text":
        "Finally I’d publish it and run a last check on links, speed, and small details.",
      "projects.label": "Projects",
      "projects.title": "Work and demos",
      "projects.lead":
        "This section is an honest snapshot of where I am now: one published demo and ongoing work.",
      "projects.status.done": "Completed demo",
      "projects.status.wip": "Work in progress",
      "projects.wip.badge": "WIP",
      "projects.1.cat": "Streetwear brand redesign",
      "projects.1.desc":
        "Streetwear redesign demo. I used it to practice homepage structure, visual hierarchy, and product presentation.",
      "projects.1.cta": "View project",
      "projects.2.cat": "Local business website",
      "projects.2.title": "Coming soon",
      "projects.2.desc":
        "Local business project in progress. Next step: finalize content and complete mobile checks.",
      "projects.2.btn": "In progress",
      "projects.3.cat": "Creative brand website",
      "projects.3.title": "Coming soon",
      "projects.3.desc":
        "Reserved for the next case study. I want to show progress here, not just polished final outcomes.",
      "projects.3.btn": "In progress",
      "contact.label": "Contact",
      "contact.title": "If this resonates with you, reach out",
      "contact.lead":
        "If what you read makes sense to you, send me a message. Even if it’s just to discuss an idea.",
      "contact.email.hint": "Reach out for collaborations, projects or information.",
      "contact.github.hint": "Take a look at my projects and code.",
      "contact.linkedin.hint": "Connect with me for my profile, experience and opportunities.",
      "contact.instagram.hint": "You can also message me on Instagram for a more direct contact.",
      "footer.tag": "Computer science student — Milan, Italy",
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
