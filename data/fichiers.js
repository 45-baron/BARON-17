/* ═══════════════════════════════════════════════════════════════
   data/fichiers.js — BASE DE DONNÉES DES OUTILS & RESSOURCES
   ═══════════════════════════════════════════════════════════════

   COMMENT AJOUTER UN OUTIL EXCEL :
   ─────────────────────────────────────────────────────────────
   1. Ajoute un objet dans OUTILS_EXCEL
   2. type: "premium" → vendu sur Chariow
      type: "gratuit"  → téléchargement direct (Drive ou autre)
   3. lien: URL Chariow pour premium, URL téléchargement pour gratuit

   COMMENT AJOUTER UNE RESSOURCE GRATUITE :
   ─────────────────────────────────────────────────────────────
   1. Ajoute un objet dans RESSOURCES
   2. format: "excel" | "pdf" | "word"
   3. lien: URL directe de téléchargement
      Pour Google Drive : Partage → "Tout le monde avec le lien"
      Lien direct : https://drive.google.com/uc?export=download&id=TON_ID

   ═══════════════════════════════════════════════════════════════ */

/* ─── OUTILS EXCEL PREMIUM & GRATUITS ─────────────────────────
   Affiché dans la section "Outils Excel"
────────────────────────────────────────────────────────────── */
const OUTILS_EXCEL = [

  {
    id: "semelle-filante-ec7",
    titre: "Dimensionnement Semelle Filante",
    desc: "Calcul automatique selon Eurocode 7 — charge admissible, tassement, contrainte de sol. Vérifications ELU/ELS intégrées.",
    type: "premium",
    prix: "3 500 XOF",
    /* EDIT: Remplace par le lien exact de ce produit sur Chariow */
    lien: "https://qbqtcogf.mychariow.shop",
    icone: "📐"
  },

  {
    id: "poutre-ba-simple",
    titre: "Calcul Poutre BA Simple",
    desc: "Moment fléchissant, armatures longitudinales et transversales selon Eurocode 2. Commentaires pédagogiques inclus.",
    type: "gratuit",
    /* EDIT: Remplace par le lien Google Drive direct de ce fichier */
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
    icone: "🏗️"
  },

  {
    id: "devis-quantitatif",
    titre: "Devis Quantitatif & Estimatif",
    desc: "Template complet pour le chiffrage BTP : fouilles, maçonnerie, charpente, finitions. Totaux automatiques par lot.",
    type: "premium",
    prix: "5 000 XOF",
    lien: "https://qbqtcogf.mychariow.shop",
    icone: "📊"
  },

  {
    id: "terrassement-volumes",
    titre: "Calcul Volume Terrassement",
    desc: "Cubature par profils en travers — déblais/remblais. Résultats en m³ avec récapitulatif par lot et tableau de masse.",
    type: "gratuit",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
    icone: "🧱"
  },

  {
    id: "planning-gantt",
    titre: "Planning Chantier — Gantt",
    desc: "Planning travaux interactif avec jalons, ressources, chemin critique et alertes automatiques de retard.",
    type: "premium",
    prix: "4 200 XOF",
    lien: "https://qbqtcogf.mychariow.shop",
    icone: "📅"
  },

  {
    id: "dosages-beton",
    titre: "Fiche Dosages Béton",
    desc: "Compositions béton courant, armé et de propreté selon résistance cible fc28. Vérification du rapport E/C incluse.",
    type: "gratuit",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
    icone: "🔩"
  }

  /* ─── AJOUTER UN OUTIL — Copie ce bloc ──────────────────────
  ,{
    id: "identifiant-unique",
    titre: "Nom de l'outil",
    desc: "Description en 2-3 lignes.",
    type: "premium",          // ou "gratuit"
    prix: "XXXX XOF",         // seulement si premium
    lien: "URL_CHARIOW_OU_DRIVE",
    icone: "📐"               // emoji au choix
  }
  ─────────────────────────────────────────────────────────── */
];


/* ─── RESSOURCES GRATUITES (PDFs, Excel, Word) ────────────────
   Affiché dans la section "Ressources gratuites"
────────────────────────────────────────────────────────────── */
const RESSOURCES = [

  {
    id: "feuille-poutre-ba",
    titre: "Feuille Calcul Poutre BA",
    sousTitre: "Calcul des armatures selon Eurocode 2 — adapté aux cours et projets BTP.",
    format: "excel",
    /* EDIT: Remplace par le lien direct de téléchargement */
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },

  {
    id: "guide-metres",
    titre: "Guide Métrés & Devis BTP",
    sousTitre: "20 pages — méthodes, unités, astuces de chiffrage pour les étudiants en BTP.",
    format: "pdf",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },

  {
    id: "terrassement-xl",
    titre: "Calcul Volume Terrassement",
    sousTitre: "Déblais/remblais automatiques avec profils en travers — résultats en m³.",
    format: "excel",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },

  {
    id: "fiche-beton",
    titre: "Fiches Béton — Dosages",
    sousTitre: "Compositions courantes — béton armé, de propreté, haute résistance. Pratique et concis.",
    format: "pdf",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },

  {
    id: "rapport-chantier",
    titre: "Modèle Rapport de Chantier",
    sousTitre: "Template Word professionnel pour vos rapports journaliers ou hebdomadaires.",
    format: "word",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },

  {
    id: "dosages-beton-xl",
    titre: "Fiche Dosages Béton Excel",
    sousTitre: "Calcul automatique du dosage selon fc28 — avec vérification du rapport E/C.",
    format: "excel",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  }

  /* ─── AJOUTER UNE RESSOURCE — Copie ce bloc ─────────────────
  ,{
    id: "identifiant-unique",
    titre: "Nom du fichier",
    sousTitre: "Description courte du contenu.",
    format: "excel",    // "excel" | "pdf" | "word"
    lien: "URL_DIRECTE_TELECHARGEMENT"
  }
  ─────────────────────────────────────────────────────────── */
];


/* ─── CONFIGURATION CHARIOW ───────────────────────────────────
   Lien global vers ta boutique
────────────────────────────────────────────────────────────── */
const CONFIG_CHARIOW = {
  /* EDIT: Ton lien Chariow */
  url: "https://qbqtcogf.mychariow.shop",
  label: "qbqtcogf.mychariow.shop"
};
