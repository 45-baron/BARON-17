/* ═══════════════════════════════════════════════════════════════
   data/articles.js — BASE DE DONNÉES DES ARTICLES
   ═══════════════════════════════════════════════════════════════

   COMMENT AJOUTER UN ARTICLE :
   ─────────────────────────────────────────────────────────────
   1. Copie un objet { id, titre, cat, date, ... } dans le tableau
   2. Remplis tous les champs
   3. Le contenu (content) accepte du HTML complet
   4. Pour une image de couverture : mets l'URL dans "cover"
   5. Sauvegarde → l'article apparaît automatiquement sur le site

   COMMENT METTRE UN PDF PLUTÔT QU'UN ARTICLE RÉDIGÉ :
   ─────────────────────────────────────────────────────────────
   → Dans pdfUrl, mets le lien Google Drive de ton PDF
   → Le bouton "Lire" ouvrira le PDF dans une visionneuse intégrée

   ═══════════════════════════════════════════════════════════════ */

const ARTICLES = [

  /* ════════════════════════════════════════════════════════════
     ARTICLE 1 — Écoconstruction (exemple rédigé)
     ════════════════════════════════════════════════════════════ */
  {
    id: "eco-construction-btp",
    titre: "L'écoconstruction dans le BTP : matériaux, techniques et enjeux pour l'Afrique",
    cat: "Développement Durable",
    date: "10 Avril 2025",
    temps: "8 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Découvrez comment l'écoconstruction révolutionne le secteur du BTP en Afrique — de la terre crue au béton de chanvre, des matériaux locaux aux certifications environnementales.",
    cover: "", /* URL d'une image de couverture — laisser "" pour afficher un fond dégradé */
    pdfUrl: "", /* URL du PDF si tu préfères — laisser "" pour afficher l'article rédigé */
    vedette: true, /* true = article mis en avant (grande carte) */
    tags: ["Écoconstruction", "Matériaux durables", "BTP Afrique", "Génie Civil", "Environnement"],
    content: `
      <p>Le secteur de la construction est responsable de <strong>près de 40 % des émissions mondiales de CO₂</strong>. Face à l'urgence climatique et à la croissance démographique rapide du continent africain, l'écoconstruction n'est plus un luxe réservé aux pays riches — c'est une nécessité stratégique pour les ingénieurs de demain.</p>

      <h2>Qu'est-ce que l'écoconstruction ?</h2>
      <p>L'écoconstruction (ou construction durable) désigne l'ensemble des pratiques visant à <strong>réduire l'impact environnemental d'un bâtiment</strong> sur l'ensemble de son cycle de vie : conception, construction, utilisation et démolition. Elle repose sur trois piliers fondamentaux :</p>
      <ul>
        <li><strong>L'efficacité énergétique</strong> : isolation, orientation solaire, ventilation naturelle</li>
        <li><strong>Les matériaux durables</strong> : biosourcés, géosourcés, recyclés ou locaux</li>
        <li><strong>La gestion des ressources</strong> : eau de pluie, énergie solaire, déchets chantier</li>
      </ul>

      <div class="art-encart">
        <div class="art-encart-titre">📌 Chiffre clé</div>
        <p>En Afrique subsaharienne, <strong>70 % des constructions</strong> sont réalisées en secteur informel avec des matériaux importés à haute empreinte carbone. L'adoption de matériaux locaux pourrait réduire ces émissions de 30 à 50 %.</p>
      </div>

      <h2>Les matériaux écologiques adaptés au contexte africain</h2>

      <h3>1. La terre crue (pisé, adobe, BTC)</h3>
      <p>La <strong>Brique de Terre Comprimée (BTC)</strong> est probablement le matériau éco-constructif le plus prometteur pour l'Afrique de l'Ouest. Produite localement, sans cuisson, avec des presses manuelles ou mécaniques, elle offre :</p>
      <ul>
        <li>Une excellente inertie thermique (confort en climat chaud)</li>
        <li>Un coût 30 à 50 % inférieur à la brique cuite ou au parpaing importé</li>
        <li>Une empreinte carbone quasi nulle</li>
        <li>Une résistance à la compression de 2 à 8 MPa (suffisante pour R+2)</li>
      </ul>

      <h3>2. Le béton de chanvre</h3>
      <p>Encore peu connu en Afrique mais en plein essor, le béton de chanvre (mélange de chènevotte, de chaux et d'eau) présente des propriétés remarquables : <strong>isolant, régulateur hygrométrique, capte le CO₂</strong> pendant sa durée de vie. Son principal frein reste la disponibilité de la fibre de chanvre sur le continent.</p>

      <h3>3. Le bambou structural</h3>
      <p>Le bambou est souvent surnommé <em>"l'acier végétal"</em>. Sa résistance en traction dépasse celle de l'acier doux (250 à 300 MPa), il pousse en 3 à 5 ans (contre 30 ans pour un arbre), et son empreinte carbone est négative. Des techniques de traitement (borax, chaux) permettent aujourd'hui de le rendre durable et résistant aux insectes.</p>

      <table>
        <tr>
          <th>Matériau</th><th>Résistance</th><th>Coût relatif</th><th>Empreinte CO₂</th>
        </tr>
        <tr><td>BTC (Brique Terre Comprimée)</td><td>2–8 MPa</td><td>Très faible</td><td>Quasi nulle</td></tr>
        <tr><td>Béton Portland classique</td><td>20–40 MPa</td><td>Moyen</td><td>Élevée (800 kg CO₂/t ciment)</td></tr>
        <tr><td>Bambou structural</td><td>200–300 MPa (traction)</td><td>Faible</td><td>Négative</td></tr>
        <tr><td>Béton de chanvre</td><td>0.5–2 MPa</td><td>Moyen-élevé</td><td>Négative (capte le CO₂)</td></tr>
      </table>

      <h2>Techniques d'écoconstruction en climat tropical</h2>
      <p>La conception bioclimatique est la première étape de toute démarche éco-constructive. En zone tropicale, les principes clés sont :</p>
      <ul>
        <li><strong>Orientation Est-Ouest</strong> du bâtiment pour minimiser les apports solaires directs</li>
        <li><strong>Débords de toiture</strong> généreux (80 à 120 cm) pour ombrager les façades</li>
        <li><strong>Ventilation traversante</strong> : ouvertures en façade nord et sud, placées en partie haute</li>
        <li><strong>Inertie thermique</strong> : murs épais en terre ou maçonnerie pour déphasage thermique</li>
        <li><strong>Végétalisation</strong> : toitures vertes, cours arborées, pergolas</li>
      </ul>

      <h2>L'ingénieur civil face aux enjeux de demain</h2>
      <p>Pour nous, futurs ingénieurs en génie civil, l'écoconstruction n'est pas qu'une tendance — c'est une <strong>compétence différenciante</strong>. Les maîtres d'ouvrage, les bailleurs internationaux (Banque Mondiale, AFD, PNUD) exigent de plus en plus des études d'impact environnemental et des certifications type HQE, LEED ou EDGE (spécifique aux pays émergents).</p>

      <blockquote>
        <p>"La construction durable n'est pas un coût supplémentaire. C'est un investissement sur le cycle de vie du bâtiment qui génère des économies substantielles sur 20 à 30 ans."</p>
      </blockquote>

      <p>Maîtriser les calculs thermiques, les dimensionnements en matériaux alternatifs, et les outils de simulation énergétique (EnergyPlus, OpenStudio) sera demain aussi fondamental que le calcul de structure en béton armé. C'est dans cette direction que s'orientent mes recherches et mes outils Excel — pour rendre ces calculs accessibles à tous les praticiens du BTP africain.</p>

      <div class="art-cta-box">
        <div class="art-cta-box-txt">Télécharge ma <strong>feuille Excel de calcul thermique</strong> pour murs en BTC — gratuite.</div>
        <a href="https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing" target="_blank" rel="noopener noreferrer">Accéder au Drive →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════
     ARTICLE 2
     ════════════════════════════════════════════════════════════ */
  {
    id: "5-fonctions-excel-ingenieur",
    titre: "5 fonctions Excel indispensables pour l'ingénieur civil",
    cat: "Excel BTP",
    date: "15 Mars 2025",
    temps: "5 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "RECHERCHEV, SOMME.SI, tableaux structurés, solveur... Ces fonctions transforment vos calculs de bureau d'études en outils professionnels.",
    cover: "",
    pdfUrl: "",
    vedette: false,
    tags: ["Excel", "BTP", "Productivité", "Bureau d'études"],
    content: `
      <p>Excel est l'outil numéro un du bureau d'études en génie civil. Pourtant, la plupart des ingénieurs n'utilisent que 10 % de ses capacités. Voici les 5 fonctions qui vont transformer votre pratique quotidienne.</p>

      <h2>1. RECHERCHEV / RECHERCHEX</h2>
      <p>Indispensable pour rapatrier automatiquement des données depuis vos tables de référence — caractéristiques des matériaux, valeurs normatives Eurocode, tarifs unitaires. <strong>RECHERCHEX</strong> (Excel 365) est encore plus puissante : elle cherche aussi bien à gauche qu'à droite, et gère les erreurs nativement.</p>

      <h2>2. SOMME.SI.ENS</h2>
      <p>Pour vos métrés et devis, cette fonction permet de <strong>sommer des quantités selon plusieurs critères simultanés</strong> : par lot, par ouvrage élémentaire, par période. Combinée aux tableaux croisés dynamiques, elle remplace avantageusement des logiciels de chiffrage coûteux.</p>

      <h2>3. Le Solveur (Solver)</h2>
      <p>Peu connu des étudiants, le Solveur est un outil d'optimisation qui peut résoudre des problèmes d'<strong>optimisation sous contraintes</strong> : dimensionnement optimal d'une section, minimisation du coût d'une ferraillure, etc.</p>

      <h2>4. Les Tableaux Structurés</h2>
      <p>En transformant vos plages de données en tableaux structurés (Ctrl+T), vous bénéficiez de <strong>références dynamiques</strong> qui s'adaptent automatiquement quand vous ajoutez des lignes — un gain de temps considérable pour vos bases de données de métrés.</p>

      <h2>5. Les Noms Définis + Validation de données</h2>
      <p>Nommer vos cellules (ex: <em>fc28</em>, <em>fyk</em>, <em>gammaC</em>) rend vos formules de calcul lisibles et auditables. La validation de données empêche les erreurs de saisie — essentiel pour des feuilles de calcul partagées avec des techniciens.</p>

      <div class="art-cta-box">
        <div class="art-cta-box-txt">Retrouve mes <strong>feuilles Excel professionnelles</strong> sur Chariow.</div>
        <a href="https://qbqtcogf.mychariow.shop" target="_blank" rel="noopener noreferrer">Voir la boutique →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════
     ARTICLE 3
     ════════════════════════════════════════════════════════════ */
  {
    id: "cubature-terrassement",
    titre: "Cubature : calcul de volumes de terrassement par la méthode des profils en travers",
    cat: "Terrassement",
    date: "2 Mars 2025",
    temps: "6 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Méthode complète pour calculer les volumes de déblais et remblais sur un projet linéaire — avec exemples numériques et feuille Excel téléchargeable.",
    cover: "",
    pdfUrl: "",
    vedette: false,
    tags: ["Terrassement", "Cubature", "Topographie", "VRD"],
    content: `
      <p>Le calcul des volumes de terrassement est une étape fondamentale dans tout projet de voirie, de plateforme ou de bâtiment en site naturel. La méthode des <strong>profils en travers</strong> est la plus précise et la plus utilisée en pratique.</p>

      <h2>Principe de la méthode</h2>
      <p>On découpe le projet en tranches d'épaisseur d, délimitées par des profils en travers. Pour chaque tranche, le volume est calculé par la formule des prismoïdes :</p>
      <p><strong>V = (d/6) × (S₁ + 4×Sm + S₂)</strong></p>
      <ul>
        <li>S₁ et S₂ : surfaces des profils d'extrémité (m²)</li>
        <li>Sm : surface du profil médian (m²)</li>
        <li>d : distance entre les deux profils (m)</li>
      </ul>

      <h2>Exemple numérique</h2>
      <p>Sur un tronçon de route de 50 m, on relève 3 profils en travers avec les surfaces de déblai suivantes :</p>
      <table>
        <tr><th>Profil</th><th>Distance (m)</th><th>Surface déblai (m²)</th></tr>
        <tr><td>P0</td><td>0</td><td>12.5</td></tr>
        <tr><td>P1 (médian)</td><td>25</td><td>18.3</td></tr>
        <tr><td>P2</td><td>50</td><td>15.7</td></tr>
      </table>
      <p>Application : V = (50/6) × (12.5 + 4×18.3 + 15.7) = 8.33 × (12.5 + 73.2 + 15.7) = <strong>836 m³</strong></p>

      <div class="art-cta-box">
        <div class="art-cta-box-txt">Télécharge ma <strong>feuille Excel de cubature</strong> automatique — gratuite.</div>
        <a href="https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing" target="_blank" rel="noopener noreferrer">Accéder au Drive →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════
     ARTICLE 4
     ════════════════════════════════════════════════════════════ */
  {
    id: "semelles-fondations",
    titre: "Semelle isolée vs filante : critères de choix en géotechnique",
    cat: "Fondations",
    date: "18 Fév. 2025",
    temps: "4 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Quand choisir une semelle isolée plutôt qu'une semelle filante ? Les critères géotechniques, structurels et économiques expliqués simplement.",
    cover: "",
    pdfUrl: "",
    vedette: false,
    tags: ["Fondations", "Géotechnique", "Béton armé", "Structure"],
    content: `
      <p>Le choix entre semelle isolée et semelle filante est une décision fondamentale en phase d'avant-projet. Il dépend de plusieurs critères qu'il convient d'analyser méthodiquement.</p>

      <h2>Semelle isolée</h2>
      <p>Une semelle isolée est placée sous <strong>un seul poteau</strong>. Elle est pertinente quand :</p>
      <ul>
        <li>Le sol d'assise a une contrainte admissible σ_sol ≥ 200 kPa</li>
        <li>Les charges verticales sont modérées et concentrées</li>
        <li>Les poteaux sont suffisamment espacés (> 3–4 m)</li>
      </ul>

      <h2>Semelle filante</h2>
      <p>Une semelle filante s'étend sous <strong>tout un alignement de poteaux ou un mur</strong>. Elle est préférable quand :</p>
      <ul>
        <li>Le sol est médiocre (σ_sol < 100 kPa) : on répartit la charge sur une plus grande surface</li>
        <li>Les poteaux sont proches (< 2 m)</li>
        <li>Des tassements différentiels sont à craindre</li>
      </ul>

      <div class="art-cta-box">
        <div class="art-cta-box-txt">Calcule tes semelles automatiquement avec ma <strong>feuille Excel Eurocode 7</strong>.</div>
        <a href="https://qbqtcogf.mychariow.shop" target="_blank" rel="noopener noreferrer">Voir sur Chariow →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════
     ARTICLE 5
     ════════════════════════════════════════════════════════════ */
  {
    id: "etudiant-freelance",
    titre: "Étudiant ingénieur et freelance en Excel BTP : mon retour d'expérience",
    cat: "Carrière",
    date: "5 Fév. 2025",
    temps: "5 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Comment j'ai commencé à vendre des feuilles de calcul Excel tout en étant étudiant en génie civil — organisation, premières ventes, et leçons apprises.",
    cover: "",
    pdfUrl: "",
    vedette: false,
    tags: ["Carrière", "Freelance", "Étudiants", "Entrepreneuriat"],
    content: `
      <p>Quand j'ai commencé à créer des feuilles de calcul Excel pour mes cours, je n'imaginais pas qu'elles pourraient intéresser des professionnels. Voici honnêtement comment ça s'est passé.</p>

      <h2>Le déclic</h2>
      <p>En deuxième année de génie civil, je passais des heures à recréer les mêmes calculs de dimensionnement. J'ai décidé d'automatiser ça une bonne fois pour toutes. Un conducteur de travaux a vu ma feuille de calcul de terrassement et m'a demandé si je pouvais lui en créer une personnalisée. C'était ma première commande — <strong>15 000 XOF pour 3 jours de travail</strong>.</p>

      <h2>L'organisation entre études et freelance</h2>
      <p>La règle que j'applique : <strong>les études passent en premier, toujours</strong>. Je ne prends des commandes que pendant les week-ends et les vacances. J'utilise Notion pour gérer mes projets clients et Google Calendar pour bloquer des créneaux de travail.</p>

      <h2>Ce que j'ai appris</h2>
      <ul>
        <li><strong>La qualité avant la quantité</strong> : une feuille bien documentée se revend, se recommande</li>
        <li><strong>La documentation est sous-estimée</strong> : les clients apprécient les commentaires dans les cellules</li>
        <li><strong>Chariow simplifie tout</strong> : paiement, téléchargement, pas besoin de gérer ça manuellement</li>
      </ul>

      <div class="art-cta-box">
        <div class="art-cta-box-txt">Retrouve tous mes outils Excel sur <strong>ma boutique Chariow</strong>.</div>
        <a href="https://qbqtcogf.mychariow.shop" target="_blank" rel="noopener noreferrer">Visiter la boutique →</a>
      </div>
    `
  }

  /* ════════════════════════════════════════════════════════════
     AJOUTER UN ARTICLE — Copie ce bloc et personnalise :
     ════════════════════════════════════════════════════════════
  ,{
    id: "nom-unique-de-l-article",           // identifiant URL (sans espaces, sans accents)
    titre: "Titre complet de l'article",
    cat: "Catégorie",                        // Béton armé / Excel BTP / Fondations / etc.
    date: "JJ Mois AAAA",
    temps: "X min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Résumé affiché sur la carte (2-3 lignes max).",
    cover: "",                               // URL image de couverture (optionnel)
    pdfUrl: "",                              // URL PDF si tu veux afficher un PDF au lieu de l'article
    vedette: false,                          // true = grande carte (1 seul à la fois)
    tags: ["Tag1", "Tag2"],
    content: `
      <p>Contenu de l'article en HTML...</p>
      <h2>Titre de section</h2>
      <p>...</p>
    `
  }
  ════════════════════════════════════════════════════════════ */
];
