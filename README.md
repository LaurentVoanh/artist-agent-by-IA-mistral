Afro Artist Hub
Powered by Mistral AI — Plateforme d'intelligence artificielle pour la scène artistique afro mondiale


📌 À propos du projet
Afro Artist Hub est une plateforme web innovante conçue pour soutenir les artistes, professionnels et passionnés de la scène culturelle afro (musique, cinéma, arts visuels, etc.). Elle utilise l'intelligence artificielle de Mistral pour offrir des analyses, des conseils et des outils adaptés aux enjeux spécifiques de l'industrie artistique afro.
🎯 Public cible

Artistes (musiciens, cinéastes, peintres, danseurs, etc.) de la diaspora africaine.
Professionnels (producteurs, managers, investisseurs, galeries d'art).
Collectionneurs et amateurs d'art/afro-culture.
Étudiants en arts ou en études culturelles.


✨ Fonctionnalités principales

| Outil | Description | Exemple de prompt |
| --- | --- | --- |
| biography | Génère des biographies détaillées d'artistes afro (musiciens, cinéastes, etc.). | "Rédige une biographie de Burna Boy." |
| music_analysis | Analyse le style musical, les influences, ou le potentiel commercial d'un morceau/album. | "Analyse le dernier album de Davido." |
| film_analysis | Étudie le scénario, le style visuel, ou le message d'un film afro. | "Quels sont les thèmes du film 'Atlantics' ?" |
| project_ideas | Propose des idées de collaborations ou de projets artistiques. | "Suggère un projet entre Wizkid et Aya Nakamura." |
| trend_analysis | Identifie les tendances actuelles dans la musique/le cinéma afro. | "Quelles sont les tendances 2026 en afrobeats ?" |
| networking | Donne des conseils pour élargir son réseau dans l'industrie. | "Comment contacter des producteurs à Lagos ?" |
| funding | Trouve des sources de financement pour des projets artistiques. | "Quelles subventions pour un film au Sénégal ?" |

🚀 Pourquoi ce projet ?

Manque de ressources : Peu d'outils IA sont spécialisés dans la scène artistique afro.
Accessibilité : Rendre l'analyse professionnelle gratuite et accessible à tous.
Visibilité : Aider les artistes afro à se faire connaître et à monétiser leur talent.
Innovation : Combiner afro-futurisme (design) et IA pour un outil unique.


🔑 Configuration requise
Prérequis

PHP 8.0 ou supérieur.
Serveur web (Apache, Nginx, ou le serveur PHP intégré).
Une ou plusieurs clés API Mistral (Free Tier suffisant pour démarrer).
(Optionnel) Base de données (pour stocker les requêtes/historique).

Obtenir une clé API Mistral (Free Tier)

Créer un compte sur Mistral AI.
Aller dans AI Studio → onglet "API Keys".
Générer une clé (ex : afro-artist-hub-key).
Copier la clé (elle ne sera plus visible après).
⚠️ Limites du Free Tier :

3 milliards de tokens/mois (≈ 1 million de requêtes/mois avec mistral-tiny).
32 000 tokens/requête (pour mistral-large).


⚙️ Installation
1. Cloner le dépôt
git clone https://github.com/LaurentVoanh/artist-agent-by-IA-mistral.git

cd artist-agent-by-IA-mistral
2. Configurer les clés API Mistral

Ouvrir le fichier mistral_proxy.php.
Remplacer le tableau $MISTRAL_KEYS par vos clés API :

$MISTRAL_KEYS = [

'ta_clé_api_1',

'ta_clé_api_2', // (Optionnel : pour éviter les limites de rate limiting)

];
3. Placer les fichiers sur un serveur
Copier les fichiers (index.php, mistral_proxy.php, app.js, style.css) dans le dossier racine de votre serveur (ex : /var/www/html/ pour Apache).
4. Lancer le serveur


Option 1 : Serveur PHP intégré (pour les tests locaux) :

php -S localhost:8000


Option 2 : Configurer Apache/Nginx pour pointer vers le dossier du projet.

5. Accéder au site
Ouvrir votre navigateur et aller sur :

http://localhost:8000 (ou l'URL de votre serveur).


📂 Structure du projet

| Fichier | Rôle |
| --- | --- |
| index.php | Page d'accueil avec barre de recherche, sélection d'outils, et zone de résultats. |
| mistral_proxy.php | Backend : Gère les appels à l'API Mistral, le rate limiting, et les logs. |
| app.js | Frontend : Logique JavaScript pour les interactions (requêtes AJAX, affichage dynamique). |
| style.css | Design : Thème afro-futuriste (couleurs or/terre, glassmorphism, polices personnalisées). |

🔧 Personnalisation des prompts et outils
1. Où sont définis les prompts ?
Dans mistral_proxy.php, deux tableaux clés :

$MODEL_MAP : Associe chaque outil à un modèle Mistral.
$SYSTEM_PROMPTS : Définit le contexte pour chaque outil.
2. Comment modifier un prompt ?
Éditer le fichier mistral_proxy.php :

Modifier le texte dans $SYSTEM_PROMPTS pour adapter le contexte.

Exemple pour music_analysis :

$SYSTEM_PROMPTS['music_analysis'] = "Tu es un expert en musique afro-contemporaine. Pour chaque analyse, inclue : 1. Le genre principal. 2. Les influences culturelles. 3. Une comparaison avec 2 autres artistes. 4. Un score de potentiel commercial (1-10).";
3. Ajouter un nouvel outil


Ajouter une entrée dans $MODEL_MAP :

$MODEL_MAP['nouvel_outil'] = 'mistral-small-2407';


Ajouter un prompt système dans $SYSTEM_PROMPTS :

$SYSTEM_PROMPTS['nouvel_outil'] = "Tu es un expert en [domaine]. Réponds en français.";


Mettre à jour le frontend (index.php) :

Ajouter une option dans le menu déroulant :

<option value="nouvel_outil">Nouvel Outil</option>
4. Tester les modifications

Sélectionner le nouvel outil dans l'interface.
Saisir un prompt et cliquer sur "Générer".
Vérifier que la réponse correspond à vos attentes.


🎨 Design et expérience utilisateur

Thème : Afro-futurisme de luxe avec :

Couleurs or (#C9A84C), terre cuite (#C05A2E), et vert émeraude (#1A6B45).
Polices : Playfair Display (titres), Inter (texte), DM Mono (code).
Effets : Glassmorphism, ombres dorées, grille subtile en arrière-plan.

Responsive : Adapté aux mobiles, tablettes et desktop.


🛠️ Technologies utilisées

| Catégorie | Technologies |
| --- | --- |
| Backend | PHP 8.0+ |
| Frontend | HTML5, CSS3, JavaScript (vanilla) |
| IA | Mistral AI (API chat/completions) |
| Serveur | Apache/Nginx ou serveur PHP intégré |
| Design | CSS avancé (variables, flexbox, grid) |

📜 Licence
Ce projet est sous licence MIT.

Libre d'utilisation, de modification et de distribution.
Condition : Mentionner l'auteur (Laurent Vo Anh) et le dépôt GitHub.


🤝 Contribuer
Les contributions sont les bienvenues ! Pour contribuer :

Fork ce dépôt.
Créer une branche (git checkout -b feature/ma-fonctionnalité).
Commit vos changements (git commit -m "Ajout de X").
Push vers la branche (git push origin feature/ma-fonctionnalité).
Ouvrir une Pull Request.


📧 Contact

Auteur : Laurent Vo Anh
GitHub : @LaurentVoanh
Email : (à ajouter si public)


🚀 Roadmap (Idées d'amélioration)

Base de données : Stocker les requêtes et résultats pour un historique utilisateur.
Authentification : Système de login pour sauvegarder les préférences.
Intégration d'autres APIs : Spotify (pour l'analyse musicale), TMDB (pour les films).
Mode sombre : Ajouter un thème dark pour le design.
Traduction : Supporter l'anglais et d'autres langues africaines (yoruba, swahili, etc.).
Monétisation : Version premium avec des outils avancés (ex : analyse vidéo).
Application mobile : Porter le site en app native (React Native/Flutter).


⚠️ Limitations et solutions

| Limitation | Solution actuelle | Solution future |
| --- | --- | --- |
| Rate limiting Mistral Free Tier | 1 requête/10s par IP + rotation des clés API. | Passer à un plan payant pour plus de tokens. |
| Pas de base de données | Les requêtes ne sont pas sauvegardées. | Ajouter MySQL ou Firebase. |
| Design statique | CSS vanilla. | Utiliser un framework (Tailwind, Bootstrap). |
| Pas d'authentification | Accès public. | Implémenter OAuth ou JWT. |

💡 Exemples d'utilisation
Cas 1 : Biographie d'un artiste

Outil : biography
Prompt : "Rédige une biographie détaillée de Wizkid, en mettant l'accent sur son influence en Afrique de l'Ouest."
Résultat :

Wizkid (Ayodeji Ibrahim Balogun) est un artiste nigérian né le 16 juillet 1990 à Lagos...

[Analyse détaillée avec style, carrière, et impact culturel.]
Cas 2 : Analyse musicale

Outil : music_analysis
Prompt : "Analyse le morceau 'Essence' de Wizkid ft. Tems. Quel est son style et son potentiel commercial ?"
Résultat :

Style : Afrobeats avec des influences de R&B et de pop.

Potentiel commercial : 9/10 (tubes en Afrique et en diaspora, collaborations internationales).

Comparaison : Similaire à 'Jerusalema' (Master KG) mais avec une touche plus mélodique.
Cas 3 : Idées de projets

Outil : project_ideas
Prompt : "Propose un projet collaboratif entre un artiste nigérian et un artiste français."
Résultat :

Projet : "Afro-Paris Fusion"

Concept : Un album mélangeant afrobeats et électro française, avec des featuring entre Davido et DJ Snake.

Budget estimé : 50 000 €.

Cible : Marché africain et européen.


🎉 Pourquoi ce projet est unique ?
✅ 100% dédié à la scène afro : Aucun autre outil IA ne cible spécifiquement ce public.

✅ Gratuit : Utilise le Free Tier de Mistral (pas de coût pour les utilisateurs).

✅ Design afro-futuriste : Une identité visuelle forte et moderne.

✅ Outils complets : Couvre tous les aspects (musique, cinéma, financement, etc.).

✅ Personnalisable : Les prompts peuvent être adaptés à n'importe quel besoin.


Fait avec ❤️ pour la scène artistique afro mondiale.


Laurent Vo Anh.
