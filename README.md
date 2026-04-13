# TCHAKALA Amdane · Site Personnel
## Guide d'utilisation complet

---

## 📁 Structure des fichiers

```
site-amdane/
│
├── index.html           → Page principale (structure HTML)
│
├── css/
│   ├── global.css       → Variables couleurs, reset, boutons
│   ├── nav.css          → Navigation fixe + menu mobile
│   ├── sections.css     → Hero, à propos, outils, contact, footer
│   └── articles.css     → Grille articles + page article complète
│
├── data/                ★ LES FICHIERS QUE TU MODIFIES
│   ├── config.js        → Ton nom, email, WhatsApp, LinkedIn, bio...
│   ├── articles.js      → Tes articles de blog
│   └── fichiers.js      → Tes outils Excel et ressources gratuites
│
└── js/
    └── app.js           → Logique du site (ne pas modifier)
```

---

## ✏️ Comment modifier ton site

### 1. Changer tes informations personnelles
→ Ouvre **`data/config.js`**
→ Modifie : nom, email, WhatsApp, LinkedIn, bio, compétences, services

### 2. Ajouter un article
→ Ouvre **`data/articles.js`**
→ Copie le bloc modèle à la fin du tableau ARTICLES
→ Remplis : titre, catégorie, date, contenu HTML
→ Pour lier un PDF à la place : remplis `pdfUrl: "URL_DU_PDF"`

### 3. Ajouter un outil Excel ou une ressource
→ Ouvre **`data/fichiers.js`**
→ Dans OUTILS_EXCEL ou RESSOURCES, copie le bloc modèle
→ Remplis le lien Chariow ou le lien de téléchargement Drive

### 4. Ajouter ta photo
→ Ouvre **`index.html`**
→ Cherche le commentaire "POUR AJOUTER TA PHOTO"
→ Retire la div `.photo-placeholder`
→ Décommente la balise `<img>` et mets le chemin de ta photo

---

## 🌐 Déploiement (mettre en ligne gratuitement)

### Option A — Netlify (recommandé, gratuit)
1. Va sur https://netlify.com → Créer un compte
2. Glisse-dépose le dossier `site-amdane/` sur la page d'accueil
3. Ton site est en ligne en 30 secondes !
4. Tu peux connecter un domaine personnalisé (ex: amdanetchakala.com)

### Option B — GitHub Pages (gratuit)
1. Crée un repo GitHub public
2. Upload tous les fichiers
3. Settings → Pages → Source: main branch
4. Ton site est à l'adresse : ton-username.github.io/ton-repo

### Option C — Vercel (gratuit, rapide)
1. Va sur https://vercel.com
2. Importe ton repo GitHub
3. Deploy automatique à chaque modification

---

## 📱 Héberger tes fichiers Excel / PDF

### Google Drive (recommandé)
1. Upload ton fichier sur Google Drive
2. Clic droit → "Partager" → "Tout le monde avec le lien"
3. Copie le lien et colle-le dans `data/fichiers.js`

**Pour un téléchargement direct (sans passer par l'interface Drive) :**
- Remplace `https://drive.google.com/file/d/ID/view?usp=sharing`
- Par `https://drive.google.com/uc?export=download&id=ID`

### Dropbox
- Remplace `?dl=0` par `?dl=1` dans le lien de partage

---

## 📝 Format du contenu des articles

Le champ `content` dans `data/articles.js` accepte du HTML :

```html
<p>Paragraphe normal</p>
<p><strong>Texte en gras</strong></p>

<h2>Titre de section</h2>
<h3>Sous-titre</h3>

<ul>
  <li>Point de liste</li>
</ul>

<blockquote>
  <p>Citation importante</p>
</blockquote>

<table>
  <tr><th>Colonne 1</th><th>Colonne 2</th></tr>
  <tr><td>Valeur</td><td>Valeur</td></tr>
</table>

<!-- Encart vert informatif -->
<div class="art-encart">
  <div class="art-encart-titre">📌 À retenir</div>
  <p>Information importante à mettre en avant.</p>
</div>

<!-- Bouton CTA en bas d'article -->
<div class="art-cta-box">
  <div class="art-cta-box-txt">Télécharge ma <strong>feuille Excel</strong> gratuite.</div>
  <a href="LIEN" target="_blank">Télécharger →</a>
</div>
```

---

## 🔒 Sécurité

- Validation de toutes les entrées formulaire (anti-XSS)
- Champ honeypot anti-spam dans le formulaire
- Clic droit désactivé sur le contenu principal
- Aucune dépendance JavaScript externe
- Headers de sécurité HTTP inclus dans index.html

---

## 📞 Contacts configurés

| Moyen | Valeur |
|-------|--------|
| Email | amdanetchakala2@gmail.com |
| WhatsApp | +228 70 18 21 09 |
| LinkedIn | linkedin.com/in/amdane-tchakala |
| Chariow | qbqtcogf.mychariow.shop |
| Drive | drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF |
