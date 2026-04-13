/* ═══════════════════════════════════════════════════════════════
   js/app.js — Application principale
   Lit config.js + articles.js + fichiers.js et construit le site
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ── Sécurité : désactiver l'inspection des variables globales ── */
(function() {

/* ══════════════════════════════════════════════════════════════
   UTILITAIRES SÉCURISÉS
══════════════════════════════════════════════════════════════ */

/** Échappe les caractères HTML — protection XSS */
function esc(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#x27;');
}

/** Nettoie les entrées utilisateur */
function strip(str) {
  return (str || '').replace(/<[^>]*>/g, '').trim();
}

/** Valide un email */
function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
}

/** Construit un lien WhatsApp sécurisé */
function buildWhatsApp(numero, msg) {
  const n = numero.replace(/\D/g, '');
  return `https://wa.me/${n}?text=${encodeURIComponent(msg)}`;
}

/** Formate le numéro WhatsApp pour l'affichage */
function formatTel(numero) {
  return numero.replace(/(\+\d{3})(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4');
}


/* ══════════════════════════════════════════════════════════════
   INITIALISATION DU DOM
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  // Injection SEO
  document.title = CONFIG.seoTitre;
  document.querySelector('meta[name="description"]').setAttribute('content', CONFIG.seoDescription);

  // Rendu de toutes les sections
  rendreNav();
  rendreHero();
  rendreAPropos();
  rendreOutils();
  rendreServices();
  rendreArticles();
  rendreRessources();
  rendreContact();
  rendreFooter();

  // Interactivité
  initCurseur();
  initNav();
  initProgressBar();
  initScrollAnimations();
  initCompteurs();
  initSmooth();
  initSecurity();
});


/* ══════════════════════════════════════════════════════════════
   RENDU NAVIGATION
══════════════════════════════════════════════════════════════ */
function rendreNav() {
  const logo = document.getElementById('logo-txt');
  if (logo) logo.textContent = CONFIG.prenom + ' ' + CONFIG.nom.charAt(0) + '.';

  const logoFull = document.getElementById('logo-full');
  if (logoFull) logoFull.textContent = CONFIG.prenom + ' ' + CONFIG.nom.charAt(0) + '.';

  /* Lien Chariow nav */
  document.querySelectorAll('[data-chariow-link]').forEach(el => {
    el.href = CONFIG.chariow;
  });

  /* Menu mobile */
  document.getElementById('burger').addEventListener('click', toggleMenu);
  document.querySelector('.m-close-btn')?.addEventListener('click', closeMenu);
}


/* ══════════════════════════════════════════════════════════════
   RENDU HERO
══════════════════════════════════════════════════════════════ */
function rendreHero() {
  /* Statut */
  if (!CONFIG.disponible) {
    document.querySelector('.badge-statut')?.remove();
  } else {
    const bs = document.querySelector('.badge-statut-txt');
    if (bs) bs.textContent = CONFIG.statut;
  }

  /* Nom */
  const prenom = document.getElementById('hero-prenom');
  const nom    = document.getElementById('hero-nom-famille');
  if (prenom) prenom.textContent = CONFIG.prenom;
  if (nom)    nom.textContent    = CONFIG.nom.toUpperCase();

  /* Accroche */
  const accroche = document.getElementById('hero-accroche');
  if (accroche) {
    accroche.innerHTML = `<strong>${esc(CONFIG.titre)}</strong> — ${esc(CONFIG.slogan)}`;
  }

  /* Stats */
  const statsEl = document.getElementById('hero-stats');
  if (statsEl && CONFIG.stats) {
    statsEl.innerHTML = CONFIG.stats.map((s, i) => `
      ${i > 0 ? '<div class="hs-sep" aria-hidden="true"></div>' : ''}
      <div>
        <div class="hs-n" data-cible="${s.chiffre}">${s.chiffre}${s.suffixe}</div>
        <div class="hs-l">${esc(s.label)}</div>
      </div>
    `).join('');
  }
}


/* ══════════════════════════════════════════════════════════════
   RENDU À PROPOS
══════════════════════════════════════════════════════════════ */
function rendreAPropos() {
  /* Badge années */
  const annees = document.querySelector('.pb-n');
  if (annees) annees.textContent = CONFIG.anneesFormation;

  /* Bio */
  const bioEl = document.getElementById('bio');
  if (bioEl) {
    bioEl.innerHTML = CONFIG.bio.map(p => `<p class="ap-txt">${p}</p>`).join('');
  }

  /* Compétences */
  const chips = document.getElementById('chips');
  if (chips) {
    chips.innerHTML = CONFIG.competences.map(c =>
      `<span class="chip">${esc(c)}</span>`
    ).join('');
  }
}


/* ══════════════════════════════════════════════════════════════
   RENDU OUTILS EXCEL
══════════════════════════════════════════════════════════════ */
function rendreOutils() {
  const grille = document.getElementById('grille-outils');
  if (!grille) return;

  grille.innerHTML = OUTILS_EXCEL.map(o => {
    const estPremium = o.type === 'premium';
    const badge = estPremium
      ? `<span class="o-badge b-p">⭐ Premium</span>`
      : `<span class="o-badge b-g">⬇ Gratuit</span>`;

    const action = estPremium
      ? `<a href="${esc(o.lien)}" target="_blank" rel="noopener noreferrer" class="o-action">Acheter → Chariow</a>`
      : `<a href="${esc(o.lien)}" target="_blank" rel="noopener noreferrer" class="btn-dl">⬇ Télécharger</a>`;

    const prix = estPremium
      ? `<span class="o-prix px-p">${esc(o.prix)}</span>`
      : `<span class="o-prix px-g">Téléchargement gratuit</span>`;

    return `
      <article class="outil" role="listitem">
        <div class="o-bg" aria-hidden="true">XLS</div>
        ${badge}
        <h3 class="o-titre">${esc(o.titre)}</h3>
        <p class="o-desc">${esc(o.desc)}</p>
        <div class="o-pied">
          ${prix}
          ${action}
        </div>
      </article>
    `;
  }).join('');

  /* Lien boutique */
  document.querySelectorAll('[data-chariow-link]').forEach(el => {
    el.href = CONFIG.chariow;
  });
}


/* ══════════════════════════════════════════════════════════════
   RENDU SERVICES NEO
══════════════════════════════════════════════════════════════ */
function rendreServices() {
  const grille = document.getElementById('grille-srv');
  if (!grille) return;

  grille.innerHTML = CONFIG.services.map(s => `
    <article class="srv" role="listitem">
      <div class="srv-n">${esc(s.numero)}</div>
      <h3 class="srv-t">${esc(s.titre)}</h3>
      <p class="srv-d">${esc(s.desc)}</p>
      <div class="srv-g" aria-hidden="true"></div>
    </article>
  `).join('');
}


/* ══════════════════════════════════════════════════════════════
   RENDU ARTICLES
══════════════════════════════════════════════════════════════ */
function rendreArticles() {
  const grille = document.getElementById('grille-art');
  if (!grille) return;

  grille.innerHTML = ARTICLES.map(a => {
    const isVedette = a.vedette;
    return `
      <article class="art-card ${isVedette ? 'art-vedette' : ''}"
               role="listitem"
               tabindex="0"
               data-article-id="${esc(a.id)}"
               onclick="ouvrirArticle('${esc(a.id)}')"
               onkeydown="if(event.key==='Enter'||event.key===' ')ouvrirArticle('${esc(a.id)}')"
               aria-label="Lire l'article : ${esc(a.titre)}">
        <span class="a-cat">${esc(a.cat)}</span>
        <div class="a-date">${esc(a.date)}</div>
        <h3 class="a-titre">${esc(a.titre)}</h3>
        <p class="a-ext">${esc(a.extrait)}</p>
        <div class="a-lire" aria-hidden="true">Lire l'article →</div>
      </article>
    `;
  }).join('');
}


/* ══════════════════════════════════════════════════════════════
   PAGE ARTICLE COMPLÈTE
══════════════════════════════════════════════════════════════ */
function ouvrirArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  /* Si PDF défini : ouvrir le PDF dans un nouvel onglet */
  if (article.pdfUrl && article.pdfUrl.trim() !== '') {
    window.open(article.pdfUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  /* Sinon : afficher la page article */
  const page = document.getElementById('article-page');
  if (!page) return;

  /* Couverture */
  let coverHTML = '';
  if (article.cover && article.cover.trim() !== '') {
    coverHTML = `<img src="${esc(article.cover)}" alt="Couverture : ${esc(article.titre)}" class="art-cover" loading="lazy">`;
  } else {
    coverHTML = `<div class="art-cover-placeholder" aria-hidden="true">✦ ${esc(article.cat)}</div>`;
  }

  /* Tags */
  const tagsHTML = (article.tags || []).map(t =>
    `<span class="art-tag">${esc(t)}</span>`
  ).join('');

  /* Injection du contenu — article.content est du HTML trusté (venant de articles.js) */
  page.querySelector('.art-page-cat-txt').textContent  = article.cat;
  page.querySelector('.art-page-titre').textContent    = article.titre;
  page.querySelector('.art-page-date').textContent     = article.date;
  page.querySelector('.art-page-temps').textContent    = article.temps;
  page.querySelector('.art-page-auteur').textContent   = article.auteur;
  page.querySelector('.art-page-cover').innerHTML      = coverHTML;
  /* Note sécurité : article.content vient de articles.js (fichier local contrôlé par l'auteur),
     pas de données utilisateur — innerHTML est donc acceptable ici */
  page.querySelector('.art-content').innerHTML         = article.content;
  page.querySelector('.art-tags').innerHTML            = tagsHTML;

  /* Affichage */
  page.classList.add('on');
  document.body.style.overflow = 'hidden';
  page.scrollTop = 0;

  /* Focus pour accessibilité */
  setTimeout(() => page.querySelector('.art-back-btn')?.focus(), 100);

  /* Barre de progression de lecture de l'article */
  initArticleProgress(page);
}

function fermerArticle() {
  const page = document.getElementById('article-page');
  if (!page) return;
  page.classList.remove('on');
  document.body.style.overflow = '';
}

function initArticleProgress(page) {
  const bar = page.querySelector('.art-page-prog');
  if (!bar) return;
  page.addEventListener('scroll', function() {
    const max = page.scrollHeight - page.clientHeight;
    const pct = max > 0 ? (page.scrollTop / max) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* Exposer globalement */
window.ouvrirArticle  = ouvrirArticle;
window.fermerArticle  = fermerArticle;


/* ══════════════════════════════════════════════════════════════
   RENDU RESSOURCES
══════════════════════════════════════════════════════════════ */
function rendreRessources() {
  const grille = document.getElementById('grille-res');
  if (!grille) return;

  const icones = { pdf: '📄', excel: '📊', word: '📝' };
  const classes = { pdf: 'ic-pdf', excel: 'ic-xl', word: 'ic-doc' };
  const labels  = { pdf: 'PDF', excel: 'Excel · .xlsx', word: 'Word · .docx' };

  grille.innerHTML = RESSOURCES.map(r => `
    <div class="res" role="listitem">
      <div class="res-ico ${classes[r.format] || 'ic-xl'}" aria-hidden="true">
        ${icones[r.format] || '📎'}
      </div>
      <h3 class="res-t">${esc(r.titre)}</h3>
      <p class="res-s">${esc(r.sousTitre)}</p>
      <div class="res-f">
        <span class="res-fmt">${labels[r.format] || r.format}</span>
        <a href="${esc(r.lien)}" target="_blank" rel="noopener noreferrer"
           class="btn-dl" aria-label="Télécharger : ${esc(r.titre)}">
          ⬇ Télécharger
        </a>
      </div>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════════════════════════
   RENDU CONTACT
══════════════════════════════════════════════════════════════ */
function rendreContact() {
  /* Liens de contact */
  const emailEl = document.getElementById('c-email');
  if (emailEl) {
    emailEl.href = `mailto:${CONFIG.email}`;
    emailEl.querySelector('.c-lv').textContent = CONFIG.email;
  }

  const waEl = document.getElementById('c-whatsapp');
  if (waEl) {
    waEl.href = buildWhatsApp(CONFIG.whatsapp, CONFIG.whatsappMsg);
    waEl.querySelector('.c-lv').textContent = formatTel(CONFIG.whatsapp);
  }

  const liEl = document.getElementById('c-linkedin');
  if (liEl) {
    liEl.href = CONFIG.linkedin;
    liEl.querySelector('.c-lv').textContent = CONFIG.linkedin.replace('https://', '');
  }

  const chEl = document.getElementById('c-chariow');
  if (chEl) {
    chEl.href = CONFIG.chariow;
    chEl.querySelector('.c-lv').textContent = CONFIG.chariow.replace('https://', '');
  }

  /* Options sujet formulaire */
  const select = document.getElementById('f-sujet');
  if (select) {
    select.innerHTML = '<option value="" disabled selected>Sujet de votre message</option>' +
      CONFIG.sujetsContact.map(s =>
        `<option value="${esc(s.valeur)}">${esc(s.label)}</option>`
      ).join('');
  }
}


/* ══════════════════════════════════════════════════════════════
   RENDU FOOTER
══════════════════════════════════════════════════════════════ */
function rendreFooter() {
  const logoEl = document.querySelector('.f-logo');
  if (logoEl) logoEl.innerHTML = `${esc(CONFIG.prenom)}<span>.</span>`;

  const copyEl = document.querySelector('.f-copy');
  if (copyEl) copyEl.textContent = `© ${CONFIG.anneeCreation} ${esc(CONFIG.nomComplet)} · Tous droits réservés`;

  /* Liens footer */
  const liEl = document.getElementById('f-linkedin');
  if (liEl) liEl.href = CONFIG.linkedin;

  const chEl = document.getElementById('f-chariow');
  if (chEl) chEl.href = CONFIG.chariow;
}


/* ══════════════════════════════════════════════════════════════
   FORMULAIRE CONTACT
══════════════════════════════════════════════════════════════ */
window.sendForm = function() {
  /* Anti-spam honeypot */
  const hp = document.getElementById('f-hp');
  if (hp && hp.value !== '') return;

  const nom   = strip(document.getElementById('f-nom')?.value);
  const email = strip(document.getElementById('f-email')?.value);
  const sujet = strip(document.getElementById('f-sujet')?.value);
  const msg   = strip(document.getElementById('f-msg')?.value);
  const btn   = document.getElementById('btn-send');

  /* Validation */
  if (!nom || nom.length < 2)       { showMsg('Merci de renseigner votre nom.', '#c0392b'); return; }
  if (!validEmail(email))            { showMsg('Adresse email invalide.', '#c0392b'); return; }
  if (!sujet)                        { showMsg('Merci de choisir un sujet.', '#c0392b'); return; }
  if (!msg || msg.length < 10)       { showMsg('Votre message doit contenir au moins 10 caractères.', '#c0392b'); return; }

  if (btn) { btn.disabled = true; btn.textContent = 'Envoi en cours...'; }

  /* Envoi via mailto */
  const body = encodeURIComponent(
    `Nom : ${nom}\nEmail : ${email}\nSujet : ${sujet}\n\n${msg}`
  );
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('[Site] ' + sujet)}&body=${body}`;

  setTimeout(function() {
    showMsg('✓ Client mail ouvert. À très bientôt !', '#1FD17A');
    if (btn) { btn.disabled = false; btn.textContent = 'Envoyer le message →'; }
    clearForm();
  }, 400);
};

function showMsg(txt, color) {
  const el = document.getElementById('f-msg-ret');
  if (!el) return;
  el.style.display = 'block';
  el.style.color   = color;
  el.textContent   = txt;
}
function clearForm() {
  ['f-nom','f-email','f-sujet','f-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}


/* ══════════════════════════════════════════════════════════════
   MENU MOBILE
══════════════════════════════════════════════════════════════ */
let menuOn = false;

function toggleMenu() {
  menuOn = !menuOn;
  document.getElementById('burger').classList.toggle('on', menuOn);
  document.getElementById('m-menu').classList.toggle('on', menuOn);
  document.getElementById('burger').setAttribute('aria-expanded', menuOn);
  document.body.style.overflow = menuOn ? 'hidden' : '';
}
function closeMenu() {
  menuOn = false;
  document.getElementById('burger').classList.remove('on');
  document.getElementById('m-menu').classList.remove('on');
  document.getElementById('burger').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
/* Lier les liens du menu mobile */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#m-menu a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
});

window.closeMenu = closeMenu;


/* ══════════════════════════════════════════════════════════════
   CURSEUR PERSONNALISÉ
══════════════════════════════════════════════════════════════ */
function initCurseur() {
  const pt   = document.getElementById('cur-pt');
  const ring = document.getElementById('cur-ring');
  if (!pt || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    pt.style.left = mx + 'px'; pt.style.top = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  /* Agrandissement sur éléments interactifs */
  document.querySelectorAll('a, button, .outil, .art-card, .srv, .res, .c-lien, .chip').forEach(el => {
    el.addEventListener('mouseenter', () => {
      pt.style.transform   = 'translate(-50%,-50%) scale(2.5)';
      ring.style.opacity   = '.3';
      ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
    });
    el.addEventListener('mouseleave', () => {
      pt.style.transform   = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity   = '.6';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}


/* ══════════════════════════════════════════════════════════════
   NAVIGATION SCROLL
══════════════════════════════════════════════════════════════ */
function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('sc', window.scrollY > 50);
  }, { passive: true });
}


/* ══════════════════════════════════════════════════════════════
   BARRE DE PROGRESSION (page principale)
══════════════════════════════════════════════════════════════ */
function initProgressBar() {
  const bar = document.getElementById('prog');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const pct = d.scrollHeight - d.clientHeight;
    bar.style.width = (pct > 0 ? Math.min(window.scrollY / pct * 100, 100) : 0) + '%';
  }, { passive: true });
}


/* ══════════════════════════════════════════════════════════════
   ANIMATIONS AU SCROLL
══════════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('v'); obs.unobserve(e.target); }
    });
  }, { threshold: .1, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.ap').forEach(el => obs.observe(el));
}


/* ══════════════════════════════════════════════════════════════
   COMPTEURS ANIMÉS (hero stats)
══════════════════════════════════════════════════════════════ */
function initCompteurs() {
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    document.querySelectorAll('.hs-n[data-cible]').forEach(el => {
      const cible   = parseInt(el.getAttribute('data-cible'), 10);
      const suffixe = el.textContent.replace(/\d/g, '');
      let t0 = null;
      (function go(ts) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / 1100, 1);
        el.textContent = Math.round(p * p * (3 - 2 * p) * cible) + suffixe;
        if (p < 1) requestAnimationFrame(go);
      })(performance.now());
    });
  }, { threshold: .7 });

  const hs = document.getElementById('hero-stats');
  if (hs) obs.observe(hs);
}


/* ══════════════════════════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════════════════════════ */
function initSmooth() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
      }
    });
  });
}


/* ══════════════════════════════════════════════════════════════
   SÉCURITÉ
══════════════════════════════════════════════════════════════ */
function initSecurity() {
  /* Désactiver clic droit sur le contenu principal */
  document.addEventListener('contextmenu', function(e) {
    const allowed = e.target.closest('a, input, textarea, select, button[type="submit"]');
    if (!allowed) e.preventDefault();
  });

  /* Bloquer l'injection de devtools via console (basique) */
  /* Note : protection côté client uniquement — ne remplace pas une sécurité serveur */
  const threshold = 160;
  setInterval(function() {
    if (window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold) {
      /* DevTools détectés — on peut logger ou alerter si nécessaire */
    }
  }, 2000);

  /* Fermeture page article avec Échap */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const artPage = document.getElementById('article-page');
      if (artPage?.classList.contains('on')) { fermerArticle(); return; }
      closeMenu();
    }
  });
}

})(); /* Fin IIFE */
