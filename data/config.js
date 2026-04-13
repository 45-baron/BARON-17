/* ═══════════════════════════════════════════════════════════════
   data/config.js — CONFIGURATION PERSONNELLE DU SITE
   ═══════════════════════════════════════════════════════════════
   Modifie CE FICHIER pour changer toutes les infos personnelles
   du site en une seule fois.
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ─── IDENTITÉ ─────────────────────────────────────────────── */
  prenom:     "Amdane",
  nom:        "Tchakala",
  nomComplet: "TCHAKALA Amdane",
  titre:      "Étudiant Ingénieur en Génie Civil",
  slogan:     "Je conçois des feuilles de calcul Excel sur mesure pour les professionnels du BTP, et je partage mes connaissances à travers des articles techniques concrets.",
  statut:     "Disponible pour missions · Génie Civil",
  disponible: true, /* false → masque le badge de disponibilité */

  /* ─── STATISTIQUES HERO ────────────────────────────────────── */
  stats: [
    { chiffre: 24, suffixe: "+", label: "Outils Excel" },
    { chiffre: 12, suffixe: "",  label: "Ressources gratuites" },
    { chiffre: 5,  suffixe: "",  label: "Articles publiés" }
  ],

  /* ─── CONTACTS ─────────────────────────────────────────────── */
  email:     "amdanetchakala2@gmail.com",
  whatsapp:  "+22870182109",           /* format international avec + */
  whatsappMsg: "Bonjour Amdane, je vous contacte depuis votre site.",
  linkedin:  "https://www.linkedin.com/in/amdane-tchakala",
  drive:     "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
  chariow:   "https://qbqtcogf.mychariow.shop",

  /* ─── À PROPOS ─────────────────────────────────────────────── */
  anneesFormation: "3+",
  bio: [
    "Je suis étudiant en <strong>génie civil</strong>, passionné par le calcul de structure, la mécanique des sols et l'automatisation des tâches répétitives en bureau d'études. Ma conviction : un bon ingénieur doit aussi maîtriser ses outils numériques.",
    "C'est pourquoi je conçois des <strong>feuilles de calcul Excel professionnelles</strong> — claires, robustes, documentées — pour les ingénieurs, conducteurs de travaux et étudiants du BTP. Certaines sont gratuites, d'autres disponibles sur <strong>Chariow</strong>."
  ],
  competences: [
    "Béton armé", "Terrassement", "Excel avancé / VBA",
    "AutoCAD", "Mécanique des sols", "Dimensionnement",
    "Devis & Métrés", "Eurocode 2 / 7"
  ],

  /* ─── SERVICES ─────────────────────────────────────────────── */
  services: [
    {
      numero: "01",
      titre: "Feuille Excel Sur Mesure",
      desc: "Vous décrivez votre besoin de calcul, je conçois une feuille Excel professionnelle adaptée — avec documentation et support inclus."
    },
    {
      numero: "02",
      titre: "Conseil Technique BTP",
      desc: "Révision de calculs, aide au dimensionnement, vérification de métrés. Un regard technique rigoureux sur vos dossiers."
    },
    {
      numero: "03",
      titre: "Formation Excel BTP",
      desc: "Cours personnalisés pour automatiser vos calculs de structure, terrassement et devis. Niveau débutant à avancé."
    }
  ],

  /* ─── OPTIONS FORMULAIRE CONTACT ──────────────────────────── */
  sujetsContact: [
    { valeur: "commande-excel", label: "Commande Excel sur mesure" },
    { valeur: "conseil-btp",    label: "Conseil technique BTP" },
    { valeur: "formation",      label: "Formation Excel BTP" },
    { valeur: "partenariat",    label: "Partenariat / Collaboration" },
    { valeur: "autre",          label: "Autre demande" }
  ],

  /* ─── SEO ──────────────────────────────────────────────────── */
  seoTitre:       "Amdane Tchakala · Ingénieur Génie Civil & Outils BTP",
  seoDescription: "Étudiant ingénieur en génie civil au Togo. Feuilles de calcul Excel BTP sur mesure, articles techniques, ressources gratuites téléchargeables.",

  /* ─── FOOTER ───────────────────────────────────────────────── */
  anneeCreation: 2025,
};
