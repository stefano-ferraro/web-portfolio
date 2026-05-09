(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-lang";

  const translations = {
    it: {
      "meta.description":
        "Stefano Ferraro — studente di informatica appassionato di sviluppo, networking, 3D e tecnologia creativa.",
      "meta.title": "Stefano Ferraro | Studente & Developer",
      "skip.content": "Vai al contenuto",
      "nav.main": "Navigazione principale",
      "nav.about": "Chi sono",
      "nav.skills": "Competenze",
      "nav.projects": "Progetti",
      "nav.contact": "Contatti",
      "nav.lang": "Seleziona lingua",
      "nav.menu.open": "Apri menu",
      "nav.menu.close": "Chiudi menu",
      "hero.eyebrow": "Studente di Informatica · Milano",
      "hero.title": "Codice, reti, 3D e progetti che nascono per curiosità.",
      "hero.subtitle":
        "Sono Stefano Ferraro — studio informatica e costruisco cose tra programmazione, networking, web e strumenti creativi come Blender e Unity.",
      "hero.cta.projects": "Guarda i progetti",
      "hero.cta.github": "GitHub",
      "about.label": "Chi sono",
      "about.title": "Studio, codice e curiosità creativa",
      "about.alt": "Ritratto di Stefano Ferraro",
      "about.p1":
        "Sono Stefano Ferraro, studente di informatica all’Istituto Torricelli di Milano. In questi anni ho esplorato programmazione, basi di dati, reti informatiche e sviluppo software.",
      "about.p2":
        "Quello che mi piace di più di questo campo è che permette di mescolare lati molto diversi: la logica dei sistemi, la creatività del design, la curiosità per come funziona tutto.",
      "about.p3":
        "Nel tempo libero ho iniziato a esplorare anche strumenti creativi come Blender per la grafica 3D e Unity per lo sviluppo di esperienze interattive — due mondi che si collegano bene con la programmazione.",
      "about.p4":
        "Mi interessa costruire cose reali, sperimentare e continuare a imparare. Che sia un progetto web, un database, una rete o una scena 3D.",
      "skills.label": "Competenze",
      "skills.title": "Tecnologie e strumenti",
      "skills.subtitle":
        "Quello che ho imparato tra scuola, progetti personali e sperimentazione.",
      "skills.school.title": "A scuola",
      "skills.school.aria": "Competenze apprese a scuola, scorri orizzontalmente",
      "skills.personal.title": "Sviluppo web e workflow",
      "skills.personal.aria": "Sviluppo web e workflow, scorri orizzontalmente",
      "skills.s1.title": "Programmazione",
      "skills.s1.desc": "Basi di programmazione, logica, algoritmi e sviluppo software.",
      "skills.s2.title": "Database",
      "skills.s2.desc": "Progettazione e gestione di basi di dati relazionali.",
      "skills.s2.badge.norm": "Normalizzazione",
      "skills.s3.title": "Networking & Linux",
      "skills.s3.desc":
        "Basi di reti informatiche, configurazioni Cisco e utilizzo di Linux da terminale.",
      "skills.p1.title": "Web Development",
      "skills.p1.desc": "Creazione di siti e interfacce web moderne, responsive e curate dal lato visivo.",
      "skills.p2.title": "Workflow di sviluppo",
      "skills.p2.desc": "Organizzazione dei progetti, versionamento e pubblicazione online.",
      "skills.p3.title": "Design e prototipazione",
      "skills.p3.desc": "Strumenti per progettare interfacce, layout e identità visive.",
      "skills.creative.title": "3D e strumenti creativi",
      "skills.creative.aria": "Strumenti creativi e 3D, scorri orizzontalmente",
      "skills.c1.title": "Blender",
      "skills.c1.desc": "Modellazione 3D, rendering e sperimentazione con materiali e luci.",
      "skills.c1.badge.modeling": "Modellazione",
      "skills.c2.title": "Unity",
      "skills.c2.desc": "Sviluppo di esperienze interattive e sperimentazione con il game engine Unity.",
      "skills.c2.badge.gamedev": "Game dev",
      "skills.c2.badge.physics": "Fisica 2D/3D",
      "skills.c3.title": "Arduino & Tinkercad",
      "skills.c3.desc": "Prototipi hardware e simulazioni elettroniche con Arduino e Tinkercad.",
      "skills.c3.badge.electronics": "Elettronica",
      "skills.c3.badge.proto": "Prototipazione",
      "projects.label": "Progetti",
      "projects.title": "Quello che ho costruito",
      "projects.lead":
        "Esperimenti personali, progetti scolastici e prototipi. Ogni lavoro riflette qualcosa che ho esplorato e imparato.",
      "projects.status.done": "Completato",
      "projects.status.wip": "In corso",
      "projects.wip.badge": "WIP",
      "projects.1.cat": "Esperimento web design",
      "projects.1.desc":
        "Concept e redesign di un brand streetwear immaginario. Progetto personale per esplorare UI, identità visiva e sviluppo frontend con HTML, CSS e JS.",
      "projects.1.cta": "Apri progetto",
      "projects.2.cat": "Portfolio personale",
      "projects.2.title": "Questo sito",
      "projects.2.desc":
        "Portfolio personale costruito da zero con HTML, CSS e JavaScript vanilla. Design dark con animazioni scroll, glassmorphism e supporto multilingua IT/EN.",
      "projects.2.cta": "Codice su GitHub",
      "projects.3.cat": "Progetti scolastici",
      "projects.3.title": "Java & Database",
      "projects.3.desc":
        "Algoritmi e programmi sviluppati a scuola in Java, gestione di database MySQL con query SQL, modellazione E/R e normalizzazione delle tabelle.",
      "projects.3.btn": "Presto su GitHub",
      "projects.4.cat": "3D & Creatività",
      "projects.4.title": "Render Blender",
      "projects.4.desc":
        "Esperimenti di modellazione 3D e rendering in Blender. Oggetti, scene e materiali realizzati nel tempo libero per esplorare la grafica 3D.",
      "projects.4.btn": "Presto online",
      "contact.label": "Contatti",
      "contact.title": "Trovami qui",
      "contact.lead":
        "Se vuoi vedere i miei lavori, scrivermi o semplicemente connetterti — ecco dove mi trovo.",
      "contact.email.hint": "Scrivimi direttamente per qualsiasi cosa.",
      "contact.github.hint": "Tutti i miei progetti e il codice sorgente.",
      "contact.linkedin.hint": "Il mio profilo professionale e percorso formativo.",
      "contact.instagram.hint": "Per un contatto più diretto e informale.",
      "footer.tag": "Studente di informatica — Milano, Italia",
      "footer.top": "Torna su",
    },
    en: {
      "meta.description":
        "Stefano Ferraro — informatics student passionate about development, networking, 3D and creative technology.",
      "meta.title": "Stefano Ferraro | Student & Developer",
      "skip.content": "Skip to content",
      "nav.main": "Main navigation",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.lang": "Choose language",
      "nav.menu.open": "Open menu",
      "nav.menu.close": "Close menu",
      "hero.eyebrow": "Informatics Student · Milan",
      "hero.title": "Code, networks, 3D and projects born out of curiosity.",
      "hero.subtitle":
        "I’m Stefano Ferraro — I study computer science and build things across programming, networking, web and creative tools like Blender and Unity.",
      "hero.cta.projects": "View projects",
      "hero.cta.github": "GitHub",
      "about.label": "About",
      "about.title": "Study, code and creative curiosity",
      "about.alt": "Portrait of Stefano Ferraro",
      "about.p1":
        "I’m Stefano Ferraro, an informatics student at Istituto Torricelli in Milan. Over these years I’ve explored programming, databases, networking and software development.",
      "about.p2":
        "What I enjoy most about this field is that it lets you mix very different sides: the logic of systems, the creativity of design, the curiosity for how everything works.",
      "about.p3":
        "In my free time I’ve also started exploring creative tools like Blender for 3D graphics and Unity for interactive experiences — two worlds that connect naturally with programming.",
      "about.p4":
        "I’m interested in building real things, experimenting and keep learning. Whether it’s a web project, a database, a network or a 3D scene.",
      "skills.label": "Skills",
      "skills.title": "Technologies & Tools",
      "skills.subtitle":
        "What I’ve learned between school, personal projects and experimentation.",
      "skills.school.title": "At school",
      "skills.school.aria": "Skills learned at school, scroll horizontally",
      "skills.personal.title": "Web development & workflow",
      "skills.personal.aria": "Web development and workflow, scroll horizontally",
      "skills.s1.title": "Programming",
      "skills.s1.desc": "Programming fundamentals, logic, algorithms and software development.",
      "skills.s2.title": "Databases",
      "skills.s2.desc": "Designing and managing relational databases.",
      "skills.s2.badge.norm": "Normalization",
      "skills.s3.title": "Networking & Linux",
      "skills.s3.desc":
        "Networking fundamentals, Cisco configurations and Linux terminal usage.",
      "skills.p1.title": "Web Development",
      "skills.p1.desc": "Building modern, responsive and visually polished websites and interfaces.",
      "skills.p2.title": "Development workflow",
      "skills.p2.desc": "Project organization, version control and online publishing.",
      "skills.p3.title": "Design & prototyping",
      "skills.p3.desc": "Tools for designing interfaces, layouts and visual identities.",
      "skills.creative.title": "3D & creative tools",
      "skills.creative.aria": "Creative tools and 3D, scroll horizontally",
      "skills.c1.title": "Blender",
      "skills.c1.desc": "3D modelling, rendering and experimenting with materials and lighting.",
      "skills.c1.badge.modeling": "Modelling",
      "skills.c2.title": "Unity",
      "skills.c2.desc": "Building interactive experiences and experimenting with the Unity game engine.",
      "skills.c2.badge.gamedev": "Game dev",
      "skills.c2.badge.physics": "2D/3D physics",
      "skills.c3.title": "Arduino & Tinkercad",
      "skills.c3.desc": "Hardware prototypes and electronics simulations with Arduino and Tinkercad.",
      "skills.c3.badge.electronics": "Electronics",
      "skills.c3.badge.proto": "Prototyping",
      "projects.label": "Projects",
      "projects.title": "What I’ve built",
      "projects.lead":
        "Personal experiments, school projects and prototypes. Each one reflects something I explored and learned.",
      "projects.status.done": "Completed",
      "projects.status.wip": "In progress",
      "projects.wip.badge": "WIP",
      "projects.1.cat": "Web design experiment",
      "projects.1.desc":
        "Concept and redesign of an imaginary streetwear brand. Personal project to explore UI, visual identity and frontend development with HTML, CSS and JS.",
      "projects.1.cta": "View project",
      "projects.2.cat": "Personal portfolio",
      "projects.2.title": "This site",
      "projects.2.desc":
        "Personal portfolio built from scratch with vanilla HTML, CSS and JavaScript. Dark design with scroll animations, glassmorphism and IT/EN multilanguage support.",
      "projects.2.cta": "Code on GitHub",
      "projects.3.cat": "School projects",
      "projects.3.title": "Java & Databases",
      "projects.3.desc":
        "Algorithms and programs developed at school in Java, MySQL database management with SQL queries, E/R modelling and table normalization.",
      "projects.3.btn": "Coming to GitHub",
      "projects.4.cat": "3D & Creativity",
      "projects.4.title": "Blender renders",
      "projects.4.desc":
        "3D modelling and rendering experiments in Blender. Objects, scenes and materials made in my free time while exploring 3D graphics.",
      "projects.4.btn": "Coming soon",
      "contact.label": "Contact",
      "contact.title": "Find me here",
      "contact.lead":
        "If you want to see my work, reach out or simply connect — here’s where I am.",
      "contact.email.hint": "Write to me directly for anything.",
      "contact.github.hint": "All my projects and source code.",
      "contact.linkedin.hint": "My professional profile and academic background.",
      "contact.instagram.hint": "For a more direct and informal contact.",
      "footer.tag": "Informatics student — Milan, Italy",
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
