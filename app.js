/**
 * app.js — AFRO ARTIST HUB
 * 60 Outils IA pour Artistes & Agents Afro dans le Monde
 * Design 2Advanced Light Mode · Afro-Futurisme de Luxe
 */

'use strict';

// ─── 60 Outils IA ───────────────────────────────────────────────────────────
const OUTILS = [

  // ══ AGENT & MANAGEMENT (15) ═══════════════════════════════════════════════
  {
    id: 'contract_generator', categorie: 'agent', emoji: '📜',
    titre: 'Contrat IA',
    sous_titre: 'Rédige des contrats blindés sur-mesure (Cession, Management…)',
    champs: [
      { id: 'type_contrat', label: 'Type de contrat', type: 'select',
        options: ['Contrat de cession', 'Contrat de production', 'Contrat de management', 'Contrat d\'édition', 'Contrat de booking', 'Partenariat commercial'] },
      { id: 'artiste', label: 'Nom de l\'artiste / Projet', type: 'text', placeholder: 'Ex : Aminata Diallo' },
      { id: 'partie_adverse', label: 'Nom de l\'autre partie', type: 'text', placeholder: 'Ex : Label Baobab Records' },
      { id: 'territoire', label: 'Territoire(s)', type: 'text', placeholder: 'Ex : France, Afrique de l\'Ouest, Monde entier' },
      { id: 'duree', label: 'Durée du contrat', type: 'text', placeholder: 'Ex : 2 ans, durée de l\'album' },
      { id: 'remuneration', label: 'Rémunération / Avance', type: 'text', placeholder: 'Ex : 15% de royalties, avance 5000€' },
      { id: 'specifics', label: 'Clauses spécifiques souhaitées', type: 'textarea', placeholder: 'Ex : clause de sortie anticipée, option sur 2 albums...' },
    ],
    prompt_builder: (f) => `Génère un contrat professionnel de type "${f.type_contrat}" entre l'artiste "${f.artiste}" et "${f.partie_adverse}". Territoire : ${f.territoire}. Durée : ${f.duree}. Rémunération : ${f.remuneration}. Clauses spécifiques : ${f.specifics}. Rédige un contrat complet, numéroté, avec toutes les clauses essentielles, protecteur pour l'artiste.`
  },
  {
    id: 'clause_analyser', categorie: 'agent', emoji: '🔍',
    titre: 'Analyseur de Clauses',
    sous_titre: 'Détecte les pièges dans les contrats qu\'on te propose',
    champs: [
      { id: 'clauses', label: 'Colle ici les clauses à analyser', type: 'textarea', placeholder: 'Colle le texte du contrat ou des clauses spécifiques...' },
      { id: 'contexte', label: 'Contexte', type: 'text', placeholder: 'Ex : contrat avec un label UK, tournée européenne' },
    ],
    prompt_builder: (f) => `Analyse ces clauses contractuelles dans le contexte suivant : "${f.contexte}". CLAUSES : \n${f.clauses}\n\nIdentifie les clauses problématiques, abusives ou ambiguës. Pour chacune, donne : le risque, une contre-proposition concrète, et un niveau d'urgence (rouge/orange/vert).`
  },
  {
    id: 'negotiation', categorie: 'agent', emoji: '🤝',
    titre: 'Coach Négociation',
    sous_titre: 'Simule une négo pour obtenir de meilleures avances',
    champs: [
      { id: 'objet', label: 'Objet de la négociation', type: 'text', placeholder: 'Ex : cachet pour festival, avance label, split publishing' },
      { id: 'position_actuelle', label: 'Offre actuelle reçue', type: 'textarea', placeholder: 'Décris ce que l\'autre partie propose...' },
      { id: 'objectif', label: 'Ce que tu veux obtenir', type: 'textarea', placeholder: 'Tes objectifs idéaux et minimaux...' },
      { id: 'levier', label: 'Tes leviers de négociation', type: 'text', placeholder: 'Ex : plusieurs offres concurrentes, streaming en hausse' },
    ],
    prompt_builder: (f) => `Je dois négocier : "${f.objet}". L'offre actuelle est : ${f.position_actuelle}. Mon objectif : ${f.objectif}. Mes leviers : ${f.levier}. Génère une stratégie de négociation complète : argumentaires puissants, concessions stratégiques, lignes rouges, BATNA, formulations types à utiliser en réunion.`
  },
  {
    id: 'technical_rider', categorie: 'agent', emoji: '🎛️',
    titre: 'Rider Technique',
    sous_titre: 'Génère ta fiche technique scène irréprochable',
    champs: [
      { id: 'artiste', label: 'Artiste / Groupe', type: 'text', placeholder: 'Ex : DJ Kumasi & Band (7 musiciens)' },
      { id: 'genre', label: 'Genre musical', type: 'text', placeholder: 'Ex : Afrobeats / Live band' },
      { id: 'type_show', label: 'Type de show', type: 'select',
        options: ['Festival (grande scène)', 'Festival (petite scène)', 'Salle de concert', 'Club / Soirée privée', 'Corporate Event', 'Showcase label'] },
      { id: 'duree_set', label: 'Durée du set', type: 'text', placeholder: 'Ex : 45 minutes' },
      { id: 'specifics', label: 'Besoins spécifiques', type: 'textarea', placeholder: 'Ex : backline particulier, retours in-ear, DJ set en plus du live...' },
    ],
    prompt_builder: (f) => `Génère un rider technique complet et professionnel pour ${f.artiste} (${f.genre}). Type de show : ${f.type_show}. Durée du set : ${f.duree_set}. Besoins spécifiques : ${f.specifics}. Inclus : scène (dimensions, plancher), sono (console, micro, DI), lumières, loge (nombre, équipement), catering (quantités pour les musiciens), transport et hébergement.`
  },
  {
    id: 'press_kit', categorie: 'agent', emoji: '📰',
    titre: 'Dossier de Presse',
    sous_titre: 'Crée ton press kit complet et percutant',
    champs: [
      { id: 'artiste', label: 'Nom de l\'artiste', type: 'text', placeholder: 'Ex : Zara Mbeki' },
      { id: 'genre', label: 'Genre / Style', type: 'text', placeholder: 'Ex : Afropop / Soul / Trap FR' },
      { id: 'parcours', label: 'Éléments clés du parcours', type: 'textarea', placeholder: 'Ex : né à Dakar, formé à Paris, 1er album 2022, 50k streams...' },
      { id: 'sortie', label: 'Projet actuel à promouvoir', type: 'text', placeholder: 'Ex : EP "Soleil Noir" — sortie mars 2025' },
    ],
    prompt_builder: (f) => `Génère un dossier de presse complet pour ${f.artiste}, artiste ${f.genre}. Parcours : ${f.parcours}. Projet à promouvoir : ${f.sortie}. Structure : biographie courte (150 mots), biographie longue (500 mots), points clés de carrière, chiffres clés, citation de l'artiste, angle presse principal, contact booking/presse.`
  },
  {
    id: 'fee_estimator', categorie: 'agent', emoji: '💰',
    titre: 'Estimateur de Cachets',
    sous_titre: 'Calcule ta valeur réelle selon le marché mondial',
    champs: [
      { id: 'artiste_niveau', label: 'Niveau de notoriété', type: 'select',
        options: ['Émergent (0-10k followers)', 'Montant (10k-100k)', 'Confirmé (100k-500k)', 'Établi (500k-2M)', 'Star (2M+)'] },
      { id: 'type_event', label: 'Type d\'événement', type: 'select',
        options: ['Festival international', 'Festival local/national', 'Salle de concert', 'Corporate / Privatif', 'Club / Soirée', 'Showcase', 'Streaming live payant'] },
      { id: 'territoire', label: 'Territoire', type: 'select',
        options: ['France / Europe occidentale', 'Afrique de l\'Ouest', 'Afrique centrale / Est / Sud', 'USA / Canada', 'Caraïbes / Antilles', 'UK / Londres'] },
      { id: 'conditions', label: 'Conditions spéciales', type: 'text', placeholder: 'Ex : exclusivité, tête d\'affiche, back-to-back' },
    ],
    prompt_builder: (f) => `Estime les fourchettes de cachets pour un artiste de niveau "${f.artiste_niveau}" pour un "${f.type_event}" sur le territoire "${f.territoire}". Conditions spéciales : ${f.conditions}. Donne : fourchette basse/haute, conditions pour négocier vers le haut, éléments de comparaison marché, conseils de positionnement tarifaire.`
  },
  {
    id: 'career_roadmap', categorie: 'agent', emoji: '🗺️',
    titre: 'Plan de Carrière',
    sous_titre: 'Stratégie sur 5 ans pour passer d\'indé à Major',
    champs: [
      { id: 'artiste', label: 'Artiste / Profil', type: 'text', placeholder: 'Ex : Rappeur afro 24 ans, 8k followers, 2 EPs' },
      { id: 'objectif', label: 'Objectif à 5 ans', type: 'text', placeholder: 'Ex : Signer sur un label international, tourner en Afrique et Europe' },
      { id: 'forces', label: 'Tes forces actuelles', type: 'textarea', placeholder: 'Ex : live exceptionnel, fanbase loyale diaspora, réseau Abidjan' },
      { id: 'obstacles', label: 'Tes obstacles actuels', type: 'textarea', placeholder: 'Ex : budget limité, peu de contacts labels, distribution faible' },
    ],
    prompt_builder: (f) => `Crée un plan de carrière sur 5 ans pour : ${f.artiste}. Objectif : ${f.objectif}. Forces : ${f.forces}. Obstacles : ${f.obstacles}. Structure : phase 1 (0-18 mois), phase 2 (18-36 mois), phase 3 (36-60 mois). Pour chaque phase : objectifs précis, actions concrètes, KPIs, budget estimatif, réseau à développer.`
  },
  {
    id: 'crisis_management', categorie: 'agent', emoji: '🚨',
    titre: 'Gestion de Crise',
    sous_titre: 'Rédige tes communiqués en cas de bad buzz',
    champs: [
      { id: 'situation', label: 'Description de la crise', type: 'textarea', placeholder: 'Ex : accusation sur réseaux sociaux, annulation de concert, litige public...' },
      { id: 'publics', label: 'Publics concernés', type: 'text', placeholder: 'Ex : fans, presse, partenaires, promoteurs' },
      { id: 'position', label: 'Ta position / Ta vérité', type: 'textarea', placeholder: 'Ce que tu peux dire, ce que tu ne peux pas révéler...' },
    ],
    prompt_builder: (f) => `Gère cette crise de communication : ${f.situation}. Publics concernés : ${f.publics}. Position de l'artiste : ${f.position}. Génère : communiqué officiel (ton calme et factuel), post réseaux sociaux (engageant, humain), réponses types aux questions presse, plan de sortie de crise étape par étape, ce qu'il ne faut surtout pas dire.`
  },
  {
    id: 'scouting_report', categorie: 'agent', emoji: '📈',
    titre: 'Rapport de Potentiel',
    sous_titre: 'Analyse ton positionnement face à la concurrence',
    champs: [
      { id: 'artiste', label: 'Artiste à analyser', type: 'text', placeholder: 'Ex : Amira Soul, afropop, 45k Instagram' },
      { id: 'marche', label: 'Marché cible', type: 'text', placeholder: 'Ex : France, Royaume-Uni, Côte d\'Ivoire' },
      { id: 'concurrents', label: 'Artistes comparables / concurrents', type: 'text', placeholder: 'Ex : Aya Nakamura, Tiakola, Tayc' },
    ],
    prompt_builder: (f) => `Rédige un rapport de potentiel artistique et commercial pour : ${f.artiste}. Marché cible : ${f.marche}. Artistes comparables : ${f.concurrents}. Analyse : positionnement différenciant, opportunités de marché non exploitées, benchmarking avec les artistes comparables (stratégies, prix, distribution), recommandations stratégiques prioritaires.`
  },
  {
    id: 'visa_checklist', categorie: 'agent', emoji: '✈️',
    titre: 'Assistant Visa Tournée',
    sous_titre: 'Check-list complète pour tes tournées internationales',
    champs: [
      { id: 'nationalite', label: 'Nationalité du passeport', type: 'text', placeholder: 'Ex : Camerounais, Sénégalais, Français' },
      { id: 'pays_tournee', label: 'Pays de tournée', type: 'textarea', placeholder: 'Ex : France, Belgique, UK, USA, Canada' },
      { id: 'type_visa', label: 'Contexte de la visite', type: 'select',
        options: ['Concert / Festival', 'Showcase / Industrie', 'Recording / Studio', 'Promo media', 'Résidence artistique'] },
      { id: 'duree_sejour', label: 'Durée du séjour prévu', type: 'text', placeholder: 'Ex : 3 semaines' },
    ],
    prompt_builder: (f) => `Génère une check-list visa complète pour un artiste de nationalité ${f.nationalite} souhaitant effectuer une tournée dans : ${f.pays_tournee}. Type de visite : ${f.type_visa}. Durée : ${f.duree_sejour}. Pour chaque pays : type de visa requis, documents artistiques nécessaires (contrats, invitation, preuve de revenu), délais à respecter, conseils pratiques, erreurs à éviter.`
  },
  {
    id: 'brand_pitch', categorie: 'agent', emoji: '💎',
    titre: 'Pitch Sponsoring',
    sous_titre: 'Convaincs les marques de luxe ou tech de te sponsoriser',
    champs: [
      { id: 'artiste', label: 'Artiste / Projet', type: 'text', placeholder: 'Ex : Festival Afro Diaspora Paris' },
      { id: 'valeurs', label: 'Valeurs & univers de l\'artiste', type: 'text', placeholder: 'Ex : fierté africaine, innovation, mode afro, jeunesse diaspora' },
      { id: 'audience', label: 'Audience principale', type: 'text', placeholder: 'Ex : 20-35 ans, diaspora africaine Europe, CSP+ urban' },
      { id: 'type_partenariat', label: 'Type de partenariat recherché', type: 'select',
        options: ['Sponsor financier', 'Partenaire en nature', 'Co-branding', 'Mécène culturel', 'Partenariat institutionnel'] },
    ],
    prompt_builder: (f) => `Identifie des sponsors et partenaires stratégiques pour ${f.artiste}. Valeurs : ${f.valeurs}. Audience : ${f.audience}. Type de partenariat : ${f.type_partenariat}. Pour chaque proposition : nom du partenaire potentiel, pourquoi c'est un match, angle de pitch personnalisé, contact / département à cibler. Couvre : marques afro/diaspora, entreprises internationales avec ancrage africain, fondations culturelles, institutions.`
  },
  {
    id: 'networking_elite', categorie: 'agent', emoji: '🌐',
    titre: 'Réseautage Élite',
    sous_titre: 'Liste de contacts clés par territoire et secteur',
    champs: [
      { id: 'objectif_reseau', label: 'Objectif de réseau', type: 'select',
        options: ['Trouver un label', 'Développer le booking', 'Obtenir des syncs', 'Accéder à des festivals', 'Nouer des partenariats marques'] },
      { id: 'territoire_reseau', label: 'Territoire(s) à développer', type: 'text', placeholder: 'Ex : France, UK, Nigeria, Sénégal' },
      { id: 'genre_reseau', label: 'Genre musical', type: 'text', placeholder: 'Ex : Afrobeats, Amapiano, Afro-house' },
    ],
    prompt_builder: (f) => `Dresse une liste de contacts et structures clés pour un artiste cherchant à ${f.objectif_reseau} sur les territoires : ${f.territoire_reseau}. Genre : ${f.genre_reseau}. Pour chaque contact / structure : nom, rôle, pourquoi pertinent, comment approcher (cold email, LinkedIn, événements), erreurs à éviter dans l'approche.`
  },
  {
    id: 'planning_imperial', categorie: 'agent', emoji: '🗓️',
    titre: 'Planning Impérial',
    sous_titre: 'Gestion du temps et des priorités d\'un artiste A-List',
    champs: [
      { id: 'projets_actuels', label: 'Projets en cours', type: 'textarea', placeholder: 'Ex : enregistrement album, tournée été, collaboration avec artiste X...' },
      { id: 'horizon', label: 'Horizon à planifier', type: 'select',
        options: ['Les 30 prochains jours', 'Le prochain trimestre', 'Les 6 prochains mois', 'L\'année entière'] },
      { id: 'contraintes', label: 'Contraintes / Jalons fixes', type: 'textarea', placeholder: 'Ex : sortie album le 15 mars, festival confirmé en juillet...' },
    ],
    prompt_builder: (f) => `Crée un planning stratégique pour un artiste avec ces projets : ${f.projets_actuels}. Horizon : ${f.horizon}. Contraintes : ${f.contraintes}. Structure en semaines / mois avec : tâches créatives, tâches business/admin, fenêtres de communication publique, temps de repos créatif, indicateurs de progression.`
  },
  {
    id: 'legacy_builder', categorie: 'agent', emoji: '🏛️',
    titre: 'Legacy Builder',
    sous_titre: 'Plan de gestion de patrimoine artistique à long terme',
    champs: [
      { id: 'catalogue', label: 'Catalogue actuel', type: 'textarea', placeholder: 'Ex : 2 albums, 1 EP, 45 titres dont 12 coécrits avec des tiers' },
      { id: 'objectif_legacy', label: 'Vision long terme (10-20 ans)', type: 'textarea', placeholder: 'Ex : devenir un actif générationnel, créer une fondation, céder à des héritiers' },
    ],
    prompt_builder: (f) => `Élabore un plan de gestion de patrimoine artistique et de legacy building pour un artiste avec ce catalogue : ${f.catalogue}. Vision : ${f.objectif_legacy}. Couvre : protection et valorisation du catalogue, stratégie de licences et syncs long terme, création d'une structure patrimoniale (holding, label propre), transmission et héritage, fondation ou mécénat culturel afro.`
  },
  {
    id: 'tech_watch', categorie: 'agent', emoji: '🤖',
    titre: 'Veille Technologique',
    sous_titre: 'Les derniers outils IA et Web3 pour ta musique',
    champs: [
      { id: 'usage', label: 'Pour quoi tu veux utiliser la techno ?', type: 'select',
        options: ['Production musicale IA', 'Distribution et monétisation', 'NFT et Web3 musique', 'Marketing et analyse data', 'Live et performance tech', 'Gestion contrats blockchain'] },
      { id: 'niveau_tech', label: 'Ton niveau tech actuel', type: 'select',
        options: ['Débutant complet', 'Utilisateur basique', 'Intermédiaire', 'Avancé / Développeur'] },
    ],
    prompt_builder: (f) => `Rédige une veille technologique complète sur les outils IA et Web3 pour l'usage suivant : ${f.usage}. Niveau de l'utilisateur : ${f.niveau_tech}. Pour chaque outil/tendance : présentation, cas d'usage concret pour un artiste afro, coût, courbe d'apprentissage, recommandation pratique (commencer par, éviter pour l'instant).`
  },

  // ══ CRÉATION & STORYTELLING (15) ═══════════════════════════════════════════
  {
    id: 'biography', categorie: 'creation', emoji: '✍️',
    titre: 'Biographie Impériale',
    sous_titre: 'Récit de vie percutant pour la presse internationale',
    champs: [
      { id: 'artiste', label: 'Nom de l\'artiste', type: 'text', placeholder: 'Ex : Kofi Mensah' },
      { id: 'origine', label: 'Origines / Racines', type: 'text', placeholder: 'Ex : Ghana / France / Brooklyn' },
      { id: 'genre', label: 'Genre(s) musical(aux)', type: 'text', placeholder: 'Ex : Highlife moderne, Afrobeats, R&B soul' },
      { id: 'parcours', label: 'Éléments biographiques clés', type: 'textarea', placeholder: 'Formation, dates importantes, sorties, live marquants...' },
      { id: 'vision', label: 'Vision artistique / Message', type: 'textarea', placeholder: 'Ce qui t\'anime, ton univers, ce que tu veux transmettre...' },
      { id: 'format', label: 'Format souhaité', type: 'select',
        options: ['Courte (150 mots - réseaux)', 'Standard (300 mots - EPK)', 'Longue (600 mots - presse)', 'Les 3 formats'] },
    ],
    prompt_builder: (f) => `Écris une biographie artistique pour ${f.artiste}, artiste ${f.genre} aux origines ${f.origine}. Parcours : ${f.parcours}. Vision : ${f.vision}. Format demandé : ${f.format}. Ton : évocateur, singulier, afro-diasporique, valorisant sans être complaisant. Évite les clichés.`
  },
  {
    id: 'pitch_label', categorie: 'creation', emoji: '🎯',
    titre: 'Pitch Label',
    sous_titre: 'Convaincs labels et distributeurs en 30 secondes',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Amira Touré' },
      { id: 'projet', label: 'Projet à pitcher', type: 'text', placeholder: 'Ex : Album "Diaspora" — 12 titres Afropop/Soul' },
      { id: 'marche_cible', label: 'Marché cible', type: 'text', placeholder: 'Ex : Labels afro UK, distributeurs numériques africains' },
      { id: 'chiffres', label: 'Chiffres clés actuels', type: 'text', placeholder: 'Ex : 80k streams, 5k abonnés, playlist Afrobeats Apple Music' },
      { id: 'differenciateur', label: 'Ce qui te différencie', type: 'textarea', placeholder: 'Ton identité unique, pourquoi toi maintenant...' },
    ],
    prompt_builder: (f) => `Rédige un pitch percutant pour ${f.artiste} à destination de "${f.marche_cible}". Projet : ${f.projet}. Chiffres actuels : ${f.chiffres}. Différenciateur : ${f.differenciateur}. Structure : accroche puissante (2 lignes), identité artistique, opportunité de marché, preuves de traction, proposition de valeur pour le label, call to action.`
  },
  {
    id: 'album_strategy', categorie: 'creation', emoji: '🚀',
    titre: 'Stratégie Album',
    sous_titre: 'Plan de sortie complet J-90 à J+30',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Nene Kouyaté' },
      { id: 'album', label: 'Titre & concept de l\'album', type: 'text', placeholder: 'Ex : "Mère Continent" — afrofolk / jazz africain' },
      { id: 'date_sortie', label: 'Date de sortie prévue', type: 'text', placeholder: 'Ex : Mars 2025' },
      { id: 'budget', label: 'Budget promo approximatif', type: 'select',
        options: ['< 1 000€ (DIY)', '1 000€ - 5 000€', '5 000€ - 20 000€', '20 000€+'] },
      { id: 'cible', label: 'Public cible principal', type: 'text', placeholder: 'Ex : diaspora africaine Europe, jeunes africains urbains 20-35 ans' },
    ],
    prompt_builder: (f) => `Élabore une stratégie de sortie d'album complète pour ${f.artiste}. Album : "${f.album}". Date de sortie : ${f.date_sortie}. Budget : ${f.budget}. Cible : ${f.cible}. Inclus : planning détaillé (J-90 à J+30), singles stratégiques, campagne digitale par plateforme, playlists à cibler, médias africains & diaspora prioritaires, synergies live, KPIs à suivre.`
  },
  {
    id: 'clip_concept', categorie: 'creation', emoji: '🎬',
    titre: 'Scénario de Clip',
    sous_titre: 'Storyboards textuels pour clips Afro-futuristes',
    champs: [
      { id: 'titre_morceau', label: 'Titre du morceau', type: 'text', placeholder: 'Ex : "Lagos by Night"' },
      { id: 'genre', label: 'Genre & ambiance sonore', type: 'text', placeholder: 'Ex : Afrobeats uptempo, festif, mélancolique' },
      { id: 'message', label: 'Message / Thème du morceau', type: 'textarea', placeholder: 'De quoi parle le morceau ?' },
      { id: 'budget_clip', label: 'Budget clip estimé', type: 'select',
        options: ['< 500€ (DIY)', '500€ - 3 000€', '3 000€ - 15 000€', '15 000€+'] },
      { id: 'references', label: 'Références visuelles', type: 'text', placeholder: 'Ex : afrofuturisme, clips Burna Boy, esthétique Nollywood' },
    ],
    prompt_builder: (f) => `Développe un concept complet de clip pour "${f.titre_morceau}" (${f.genre}). Message du morceau : ${f.message}. Budget : ${f.budget_clip}. Références : ${f.references}. Inclus : synopsis narratif, direction artistique (couleurs, lumières, décors), liste des lieux de tournage, costumes & styling, plan de tournage simplifié.`
  },
  {
    id: 'lyrics_coach', categorie: 'creation', emoji: '🎵',
    titre: 'Lyrics Doctor',
    sous_titre: 'Améliore tes textes en gardant ton argot et ton âme',
    champs: [
      { id: 'style', label: 'Style / Langue(s)', type: 'text', placeholder: 'Ex : Afrobeats en français / yoruba, rap FR mélangé lingala' },
      { id: 'theme', label: 'Thème du morceau', type: 'text', placeholder: 'Ex : amour longue distance diaspora, fierté africaine' },
      { id: 'texte_existant', label: 'Texte existant à améliorer (optionnel)', type: 'textarea', placeholder: 'Colle ici un couplet ou refrain existant, ou laisse vide pour générer...' },
      { id: 'structure', label: 'Structure souhaitée', type: 'text', placeholder: 'Ex : 2 couplets + refrain + pont' },
    ],
    prompt_builder: (f) => `Je veux développer un texte en style "${f.style}" sur le thème : "${f.theme}". Structure : ${f.structure}. Texte existant : "${f.texte_existant || 'À créer from scratch'}". ${f.texte_existant ? 'Améliore les faiblesses, propose une version retravaillée.' : 'Génère un texte original avec des images fortes, des références culturelles afro pertinentes.'}`
  },
  {
    id: 'epk_generator', categorie: 'creation', emoji: '📦',
    titre: 'Générateur d\'EPK',
    sous_titre: 'Structure complète pour ton Electronic Press Kit',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Banda Soul' },
      { id: 'genre', label: 'Genre musical', type: 'text', placeholder: 'Ex : Afrosoul / Neo-Soul / Highlife' },
      { id: 'actualite', label: 'Actualité (sorties, shows)', type: 'textarea', placeholder: 'EP récent, dates de tournée, collaborations...' },
      { id: 'stats', label: 'Statistiques & accomplissements', type: 'textarea', placeholder: 'Streams, articles presse, festivals joués...' },
      { id: 'cible_epk', label: 'À qui est destiné cet EPK', type: 'select',
        options: ['Bookers / Programmateurs', 'Labels & distributeurs', 'Médias & presse', 'Sponsors & partenaires', 'Tous publics'] },
    ],
    prompt_builder: (f) => `Génère un EPK complet pour ${f.artiste} (${f.genre}) destiné à : "${f.cible_epk}". Actualité : ${f.actualite}. Stats : ${f.stats}. Inclus : accroche percutante, biographie courte (150 mots) et longue (350 mots), discographie/projets, accomplissements majeurs, citations presse simulées, offre de booking, contacts.`
  },
  {
    id: 'social_content', categorie: 'creation', emoji: '📱',
    titre: 'Calendrier Social Media',
    sous_titre: '30 jours de posts TikTok/Insta pour ton lancement',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : DJ Sahara' },
      { id: 'evenement', label: 'Événement / Projet à promouvoir', type: 'text', placeholder: 'Ex : Sortie single "Accra Nights" le 15 mars' },
      { id: 'plateformes', label: 'Plateformes cibles', type: 'text', placeholder: 'Ex : Instagram, TikTok, Twitter/X, YouTube Shorts' },
      { id: 'ton_brand', label: 'Ton de ta marque', type: 'text', placeholder: 'Ex : inspirant, festif, authentique, luxueux' },
    ],
    prompt_builder: (f) => `Crée un calendrier de contenu social media sur 30 jours pour ${f.artiste} autour de : "${f.evenement}". Plateformes : ${f.plateformes}. Ton : ${f.ton_brand}. Structure semaine par semaine avec pour chaque post : date, plateforme, format (reel/story/post/live), caption complète, hashtags afro pertinents, idée visuelle ou concept vidéo.`
  },
  {
    id: 'storytelling_heritage', categorie: 'creation', emoji: '🌍',
    titre: 'Heritage Story',
    sous_titre: 'Incorpore tes racines culturelles dans ton marketing',
    champs: [
      { id: 'origines', label: 'Origines culturelles', type: 'text', placeholder: 'Ex : Peul du Fouta Djallon, immigré 2e génération à Lyon' },
      { id: 'elements_culturels', label: 'Éléments culturels à valoriser', type: 'textarea', placeholder: 'Ex : langue, instruments traditionnels, vêtements, mythologie, cuisine...' },
      { id: 'support', label: 'Support visé', type: 'select',
        options: ['Biographie artistique', 'Pitch label', 'Contenu réseaux sociaux', 'Dossier de presse', 'Interview média'] },
    ],
    prompt_builder: (f) => `Aide à intégrer l'héritage culturel suivant dans le marketing artistique : Origines : ${f.origines}. Éléments culturels : ${f.elements_culturels}. Support visé : ${f.support}. Génère un récit authentique, évitant les clichés, valorisant la richesse culturelle afro avec un regard contemporain et universel.`
  },
  {
    id: 'collab_finder', categorie: 'creation', emoji: '🤝',
    titre: 'Idées de Collabs',
    sous_titre: 'Matchmaking artistique intelligent selon ton style',
    champs: [
      { id: 'artiste', label: 'Ton profil artistique', type: 'text', placeholder: 'Ex : Chanteuse afropop soul, influences Wizkid, Sade, Aya Nakamura' },
      { id: 'objectif_collab', label: 'Objectif de la collab', type: 'select',
        options: ['Percer sur un nouveau marché', 'Créer un hit crossover', 'Renforcer ma crédibilité', 'Explorer un nouveau style', 'Visibilité réseaux sociaux'] },
      { id: 'budget_collab', label: 'Budget pour la collaboration', type: 'select',
        options: ['Gratuit (échange de visibilité)', '< 1 000€', '1 000€ - 10 000€', 'Cachet ouvert (artiste établi)'] },
    ],
    prompt_builder: (f) => `Suggère des idées de collaborations stratégiques pour : ${f.artiste}. Objectif : ${f.objectif_collab}. Budget : ${f.budget_collab}. Pour chaque suggestion : artiste ou créatif recommandé (niveau comparable), pourquoi c'est une synergie parfaite, concept artistique proposé, comment initier le contact, ce que ça apporte aux deux parties.`
  },
  {
    id: 'interview_prep', categorie: 'creation', emoji: '🎤',
    titre: 'Prépa Interview',
    sous_titre: 'Questions/Réponses pour ne jamais être pris de court',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Aminata Kouyaté' },
      { id: 'media', label: 'Type de média', type: 'select',
        options: ['Radio africaine / diaspora', 'TV nationale française', 'Magazine musical international', 'Podcast culture / musique', 'Interview YouTube / Web', 'Festival / Keynote'] },
      { id: 'sujets_sensibles', label: 'Sujets sensibles à préparer (optionnel)', type: 'textarea', placeholder: 'Ex : controverse passée, question sur tes origines, politique...' },
    ],
    prompt_builder: (f) => `Prépare une session d'interview complète pour ${f.artiste} pour un(e) ${f.media}. Sujets sensibles : ${f.sujets_sensibles || 'aucun particulier'}. Génère : 15 questions probables (du général au spécifique), pour chacune une réponse modèle (sincère, percutante, mémorable), questions pièges et comment les déjouer avec élégance, 3 anecdotes clés à placer naturellement.`
  },
  {
    id: 'naming_tool', categorie: 'creation', emoji: '🏷️',
    titre: 'Générateur de Noms',
    sous_titre: 'Trouve ton nom de scène ou titre d\'album parfait',
    champs: [
      { id: 'contexte_nom', label: 'Quel nom cherches-tu ?', type: 'select',
        options: ['Nom de scène artiste', 'Titre d\'album', 'Titre de single', 'Nom de label / collectif', 'Nom de tournée'] },
      { id: 'identite_nom', label: 'Ton identité / Univers', type: 'textarea', placeholder: 'Ex : artiste originaire du Mali, R&B afro, thème de l\'exil et du retour aux racines...' },
      { id: 'contraintes_nom', label: 'Contraintes (optionnel)', type: 'text', placeholder: 'Ex : doit sonner international, max 2 mots, pas de noms existants connus' },
    ],
    prompt_builder: (f) => `Génère des propositions créatives pour : ${f.contexte_nom}. Univers : ${f.identite_nom}. Contraintes : ${f.contraintes_nom || 'aucune'}. Propose 15 options avec pour chacune : le nom, son étymologie / signification culturelle, pourquoi il fonctionne artistiquement, comment il sonne à l'international, disponibilité potentielle (domaines, réseaux sociaux).`
  },
  {
    id: 'concept_album', categorie: 'creation', emoji: '🎨',
    titre: 'Concept d\'Album',
    sous_titre: 'Crée un univers narratif complet autour de ton projet',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Seun Kuti' },
      { id: 'theme_album', label: 'Thème / Idée centrale', type: 'textarea', placeholder: 'Ex : le voyage de retour en Afrique, la double identité, l\'amour à l\'époque numérique...' },
      { id: 'genre_album', label: 'Genre musical', type: 'text', placeholder: 'Ex : Afrojazz / Electronic / Highlife progressif' },
      { id: 'nb_titres', label: 'Nombre de titres prévu', type: 'text', placeholder: 'Ex : 12 titres' },
    ],
    prompt_builder: (f) => `Développe un concept d'album complet pour ${f.artiste}. Thème : ${f.theme_album}. Genre : ${f.genre_album}. ${f.nb_titres} titres. Génère : titre de l'album et justification, arc narratif de l'album (intro, développement, climax, résolution), proposition de tracklist avec titres et synopsis de chaque titre, direction artistique visuelle globale, 3 singles potentiels avec leur argumentaire, collaborations idéales.`
  },
  {
    id: 'playlist_pitch', categorie: 'creation', emoji: '🎧',
    titre: 'Pitch Éditorial Streaming',
    sous_titre: 'Convaincs les curateurs Spotify, Apple et Deezer',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Soro Solo' },
      { id: 'titre_track', label: 'Titre du morceau à pitcher', type: 'text', placeholder: 'Ex : "Abidjan Forever" — single afrobeats dancefloor' },
      { id: 'plateforme', label: 'Plateforme cible', type: 'select',
        options: ['Spotify', 'Apple Music', 'Deezer', 'Audiomack', 'Boomplay', 'Toutes les plateformes'] },
      { id: 'playlists_cibles', label: 'Playlists cibles', type: 'text', placeholder: 'Ex : Afrobeats Hits, African Heat, Amapiano Nation...' },
    ],
    prompt_builder: (f) => `Rédige un pitch éditorial complet pour ${f.artiste} pour placer "${f.titre_track}" sur ${f.plateforme}. Playlists cibles : ${f.playlists_cibles}. Génère : description courte (sous 150 caractères pour l'outil éditorial), pitch long (200 mots max), pourquoi ce titre correspond à chaque playlist ciblée, contexte éditorial afro de la plateforme, données à mettre en avant (mood, BPM, danceability), timing idéal de soumission.`
  },
  {
    id: 'video_script', categorie: 'creation', emoji: '📹',
    titre: 'Script Contenu Vidéo',
    sous_titre: 'Rédige tes scripts YouTube, Docs, mini-séries',
    champs: [
      { id: 'type_video', label: 'Type de contenu', type: 'select',
        options: ['Vlog coulisses tournée', 'Mini-documentaire artiste', 'Série tuto (beats, business)', 'Interview format long', 'Court métrage artistique', 'Capsule réseaux sociaux'] },
      { id: 'sujet_video', label: 'Sujet / Concept', type: 'textarea', placeholder: 'Ex : mon parcours de Dakar à Paris, comment j\'ai signé mon premier contrat...' },
      { id: 'duree_video', label: 'Durée cible', type: 'select',
        options: ['60-90 secondes (réseaux)', '5-10 minutes (YouTube court)', '15-30 minutes (YouTube long)', '45+ minutes (documentaire)'] },
    ],
    prompt_builder: (f) => `Écris un script complet pour : ${f.type_video} sur le sujet "${f.sujet_video}". Durée : ${f.duree_video}. Génère : accroche d'ouverture (15 premières secondes), structure scène par scène avec durées, dialogues / textes voix-off, didascalies (B-roll, musique d'ambiance), call to action final.`
  },
  {
    id: 'ads_copywriter', categorie: 'creation', emoji: '📣',
    titre: 'Copywriter Pub',
    sous_titre: 'Textes d\'impact pour tes publicités Instagram et YouTube',
    champs: [
      { id: 'produit_pub', label: 'Quoi promouvoir ?', type: 'select',
        options: ['Single / Clip', 'Album / EP', 'Concert / Tournée', 'Merch', 'Service (cours, coaching)', 'Événement'] },
      { id: 'plateforme_pub', label: 'Plateforme publicitaire', type: 'select',
        options: ['Meta Ads (Instagram/Facebook)', 'YouTube Ads', 'TikTok Ads', 'Spotify Ads', 'Google Ads'] },
      { id: 'cible_pub', label: 'Audience cible', type: 'text', placeholder: 'Ex : femmes 25-35 ans, diaspora africaine France, fans de Wizkid' },
      { id: 'budget_pub', label: 'Budget pub mensuel', type: 'select',
        options: ['< 100€', '100-500€', '500-2000€', '2000€+'] },
    ],
    prompt_builder: (f) => `Rédige une campagne publicitaire complète pour promouvoir : ${f.produit_pub} sur ${f.plateforme_pub}. Cible : ${f.cible_pub}. Budget : ${f.budget_pub}. Génère : 3 versions de texte d'accroche (hook), 3 descriptions courtes (< 125 caractères), 2 CTAs puissants, recommandations de ciblage précis, calendrier et répartition du budget, KPIs à surveiller.`
  },

  // ══ BUSINESS & MONÉTISATION (15) ══════════════════════════════════════════
  {
    id: 'tour_plan', categorie: 'business', emoji: '🗺️',
    titre: 'Optimiseur de Tournée',
    sous_titre: 'Logistique et routing entre Afrique et Europe',
    champs: [
      { id: 'artiste', label: 'Artiste / Groupe', type: 'text', placeholder: 'Ex : Trio Bantou' },
      { id: 'genres_marches', label: 'Genre & marchés cibles', type: 'text', placeholder: 'Ex : Jazz afro — Europe, Afrique de l\'Ouest, diaspora USA' },
      { id: 'periode', label: 'Période de tournée', type: 'text', placeholder: 'Ex : Printemps-Été 2025 (mai à août)' },
      { id: 'budget_tournee', label: 'Budget global estimé', type: 'select',
        options: ['< 5 000€ (micro-tournée)', '5 000€ - 20 000€', '20 000€ - 100 000€', '100 000€+'] },
      { id: 'objectif_tournee', label: 'Objectif principal', type: 'select',
        options: ['Développement de marché', 'Soutien d\'album', 'Rentabilité maximale', 'Visibilité médiatique'] },
    ],
    prompt_builder: (f) => `Élabore un plan de tournée stratégique pour ${f.artiste} (${f.genres_marches}). Période : ${f.periode}. Budget : ${f.budget_tournee}. Objectif : ${f.objectif_tournee}. Inclus : sélection de marchés prioritaires, types de salles et festivals à cibler par pays, estimation revenus/dépenses, stratégie de routing optimisée.`
  },
  {
    id: 'budget_forecast', categorie: 'business', emoji: '📊',
    titre: 'Budget Prévisionnel',
    sous_titre: 'Estime les coûts et revenus de ton prochain EP ou album',
    champs: [
      { id: 'projet', label: 'Projet à budgétiser', type: 'select',
        options: ['Album studio', 'EP (4-6 titres)', 'Single + Clip', 'Tournée', 'Campagne promo digitale', 'Showcase / Release party'] },
      { id: 'artiste', label: 'Contexte artiste', type: 'text', placeholder: 'Ex : artiste indépendant, label indie, gestion en propre' },
      { id: 'ambition', label: 'Niveau d\'ambition', type: 'select',
        options: ['DIY / Débrouille', 'Semi-professionnel', 'Professionnel', 'Major-grade'] },
      { id: 'revenus_estimes', label: 'Revenus attendus (si connus)', type: 'text', placeholder: 'Ex : avance label 8000€, cachets tournée estimés 15000€' },
    ],
    prompt_builder: (f) => `Génère un budget prévisionnel détaillé pour un "${f.projet}" dans un contexte "${f.artiste}", niveau : ${f.ambition}. Revenus estimés : ${f.revenus_estimes}. Structure : tous les postes de dépenses avec fourchettes réalistes, sources de revenus potentielles, calcul du point mort, recommandations d'optimisation.`
  },
  {
    id: 'fiscal_diaspora', categorie: 'business', emoji: '🧾',
    titre: 'Boussole Fiscale Diaspora',
    sous_titre: 'Optimise ton statut et tes revenus multi-pays',
    champs: [
      { id: 'pays_residence', label: 'Pays de résidence', type: 'text', placeholder: 'Ex : France' },
      { id: 'pays_revenus', label: 'Pays(s) source(s) de revenus', type: 'text', placeholder: 'Ex : Côte d\'Ivoire, UK, Sénégal, USA' },
      { id: 'statut_actuel', label: 'Statut actuel', type: 'select',
        options: ['Aucun statut (non déclaré)', 'Auto-entrepreneur', 'SARL / SAS', 'Intermittent du spectacle', 'Salarié en parallèle'] },
      { id: 'type_revenus', label: 'Type de revenus artistiques', type: 'text', placeholder: 'Ex : droits SACEM, cachets live, reversements Spotify, sync' },
    ],
    prompt_builder: (f) => `Conseils fiscaux pour un artiste de la diaspora afro résidant en ${f.pays_residence}, revenus de : ${f.pays_revenus}. Statut actuel : ${f.statut_actuel}. Types de revenus : ${f.type_revenus}. Couvre : optimisation du statut juridique, gestion des droits étrangers, conventions fiscales, aides et dispositifs (SACEM, CNM, FONPEPS...).`
  },
  {
    id: 'merchandising', categorie: 'business', emoji: '👕',
    titre: 'Architecte de Merch',
    sous_titre: 'Concepts de produits dérivés culturels et rentables',
    champs: [
      { id: 'artiste', label: 'Artiste / Marque', type: 'text', placeholder: 'Ex : Afrowave Collective' },
      { id: 'identite', label: 'Identité visuelle & culturelle', type: 'textarea', placeholder: 'Ex : inspiré kente ghanéen, couleurs terre, typographie afro-futuriste...' },
      { id: 'budget_merch', label: 'Budget initial', type: 'select',
        options: ['< 500€ (POD / Print on Demand)', '500€ - 2000€', '2000€ - 10 000€', '10 000€+'] },
      { id: 'canaux', label: 'Canaux de vente cibles', type: 'text', placeholder: 'Ex : concerts, e-shop, pop-up stores diaspora, partenaires afro' },
    ],
    prompt_builder: (f) => `Développe une stratégie de merchandising complète pour ${f.artiste}. Identité : ${f.identite}. Budget initial : ${f.budget_merch}. Canaux : ${f.canaux}. Inclus : gamme de produits recommandés avec justification culturelle afro, fournisseurs spécialisés, stratégie de prix, calendrier de lancement, projection de revenus sur 12 mois.`
  },
  {
    id: 'album_launch', categorie: 'business', emoji: '🛸',
    titre: 'Stratège Empire (J-90)',
    sous_titre: 'Check-list complète avant ton lancement mondial',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Fatoumata Diawara' },
      { id: 'projet_launch', label: 'Projet à lancer', type: 'text', placeholder: 'Ex : Album "Terra" — 14 titres World Afro' },
      { id: 'date_launch', label: 'Date de lancement', type: 'text', placeholder: 'Ex : 15 novembre 2025' },
      { id: 'ressources', label: 'Ressources disponibles', type: 'textarea', placeholder: 'Ex : budget 5000€, attaché de presse, booking agent, pas de label' },
    ],
    prompt_builder: (f) => `Génère un plan de lancement J-90 complet pour ${f.artiste}. Projet : "${f.projet_launch}". Date : ${f.date_launch}. Ressources : ${f.ressources}. Structure semaine par semaine de J-90 à J+30 avec : tâches production (masters, covers, ISRC), distribution (plateformes, dates), promo (presse, radio, réseaux, influence), live (dates, booking), admin (droits, contrats, comptabilité).`
  },
  {
    id: 'crowdfunding_pro', categorie: 'business', emoji: '🎁',
    titre: 'Campagne de Financement',
    sous_titre: 'Rédige ta page Kickstarter, Ulule ou KissKissBankBank',
    champs: [
      { id: 'artiste', label: 'Artiste / Collectif', type: 'text', placeholder: 'Ex : Orchestre Mandingue' },
      { id: 'projet_cf', label: 'Projet à financer', type: 'textarea', placeholder: 'Ex : enregistrement d\'un album live à Dakar avec 30 musiciens' },
      { id: 'objectif_cf', label: 'Montant à lever', type: 'text', placeholder: 'Ex : 12 000€' },
      { id: 'plateforme_cf', label: 'Plateforme', type: 'select',
        options: ['Ulule', 'KissKissBankBank', 'Kickstarter', 'Indiegogo', 'Patreon'] },
    ],
    prompt_builder: (f) => `Rédige une page de crowdfunding complète pour ${f.artiste} sur ${f.plateforme_cf}. Projet : ${f.projet_cf}. Objectif : ${f.objectif_cf}. Génère : titre accrocheur, pitch vidéo (script 2 minutes), description du projet (storytelling + impact), paliers de récompenses créatifs (5 niveaux), FAQ prévisible, stratégie de partage communauté diaspora.`
  },
  {
    id: 'publishing_rights', categorie: 'business', emoji: '🪙',
    titre: 'Audit d\'Édition Musicale',
    sous_titre: 'Vérifie si tu touches bien toutes tes royalties',
    champs: [
      { id: 'catalogue_ed', label: 'Ton catalogue', type: 'textarea', placeholder: 'Ex : 3 albums, 45 titres, co-écrits avec 3 auteurs différents' },
      { id: 'pays_activite', label: 'Pays d\'activité principale', type: 'text', placeholder: 'Ex : France, avec des placements UK et USA' },
      { id: 'structure_ed', label: 'Structure éditoriale actuelle', type: 'select',
        options: ['Aucune structure (droits non gérés)', 'SACEM / auteur direct', 'Accord d\'édition avec un éditeur', 'Éditeur propre', 'Distribution publishing'] },
    ],
    prompt_builder: (f) => `Réalise un audit d'édition musicale pour un artiste avec ce catalogue : ${f.catalogue_ed}. Pays : ${f.pays_activite}. Structure actuelle : ${f.structure_ed}. Identifie : royalties potentiellement non collectées (droits mécaniques, sync non déclarés, droits étrangers), lacunes dans la structure éditoriale, actions prioritaires pour récupérer des droits, recommandation de structure éditoriale optimale.`
  },
  {
    id: 'investor_deck', categorie: 'business', emoji: '🏦',
    titre: 'Pitch Investisseurs',
    sous_titre: 'Pour lever des fonds auprès de Business Angels afro',
    champs: [
      { id: 'artiste_inv', label: 'Artiste / Projet artistique', type: 'text', placeholder: 'Ex : Label indé "Kora Records", Lagos/Paris' },
      { id: 'montant_leve', label: 'Montant à lever', type: 'text', placeholder: 'Ex : 150 000€' },
      { id: 'modele_eco', label: 'Modèle économique', type: 'textarea', placeholder: 'Ex : label + publishing + events + brand deals' },
      { id: 'traction', label: 'Traction actuelle', type: 'textarea', placeholder: 'Ex : 3 artistes signés, 2M streams cumulés, 1 accord de distribution' },
    ],
    prompt_builder: (f) => `Génère un pitch deck complet pour des investisseurs pour : ${f.artiste_inv}. Montant : ${f.montant_leve}. Modèle économique : ${f.modele_eco}. Traction : ${f.traction}. Structure : executive summary, opportunité de marché (industrie musicale afro en chiffres), proposition de valeur, modèle de revenus détaillé, projections financières sur 3 ans, utilisation des fonds, équipe, exit strategy.`
  },
  {
    id: 'sync_licensing', categorie: 'business', emoji: '📺',
    titre: 'Stratégie Synchro',
    sous_titre: 'Quelles séries, films et pubs correspondent à ta musique ?',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Afrotrap Collective' },
      { id: 'style_musique', label: 'Style / Mood de ta musique', type: 'textarea', placeholder: 'Ex : Afrobeats festif, BPM 105, vocals féminins, textes en français/yoruba' },
      { id: 'catalogue_sync', label: 'Titres disponibles pour sync', type: 'text', placeholder: 'Ex : 20 titres instrumentaux et 30 avec paroles' },
    ],
    prompt_builder: (f) => `Développe une stratégie de licensing et synchronisation pour ${f.artiste}. Style : ${f.style_musique}. Catalogue : ${f.catalogue_sync}. Identifie : types de productions visuelles les plus adaptées (séries Netflix Africa, publicités beauté/mode, documentaires diaspora, jeux vidéo), superviseurs musicaux clés à contacter, comment préparer son catalogue pour la sync (clearances, instrumentals, stems), tarification recommandée, agences de sync spécialisées afro.`
  },
  {
    id: 'magnat_live', categorie: 'business', emoji: '🎪',
    titre: 'Magnat du Live',
    sous_titre: 'Stratégie de booking haute rentabilité pour le live',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Baloji' },
      { id: 'format_live', label: 'Format de show actuel', type: 'select',
        options: ['DJ set solo', 'Live band complet', 'Duo / Trio', 'Performance solo acoustique', 'Show hybride DJ + musiciens'] },
      { id: 'objectif_live', label: 'Objectif pour le live', type: 'select',
        options: ['Maximiser les revenus', 'Développer de nouveaux marchés', 'Accéder aux grands festivals', 'Créer une expérience signature', 'Mixer live et digi (streaming)'] },
    ],
    prompt_builder: (f) => `Développe une stratégie live haute performance pour ${f.artiste} avec un format ${f.format_live}. Objectif : ${f.objectif_live}. Couvre : positionnement tarifaire par type d'événement, festivals et salles stratégiques à cibler (Afrique, Europe, diaspora), comment augmenter sa valeur live (production scénique, expérience unique), agences de booking spécialisées afro, stratégie de visibilité entre deux tournées.`
  },
  {
    id: 'analyse_royalties', categorie: 'business', emoji: '🔬',
    titre: 'Analyste de Royalties',
    sous_titre: 'Traque chaque centime de tes droits de streaming',
    champs: [
      { id: 'distributeur', label: 'Distributeur actuel', type: 'select',
        options: ['DistroKid', 'TuneCore', 'CD Baby', 'Believe / Musicast', 'Warner / Sony / Universal', 'Label indé', 'Pas de distribution encore'] },
      { id: 'volumes', label: 'Volumes de streaming approximatifs', type: 'text', placeholder: 'Ex : 500k streams Spotify, 200k Apple, 100k Deezer' },
      { id: 'probleme_royalties', label: 'Problème spécifique', type: 'textarea', placeholder: 'Ex : revenus très inférieurs aux streams, droits non reversés par mon label, sync non déclarée...' },
    ],
    prompt_builder: (f) => `Analyse les royalties d'un artiste avec le distributeur "${f.distributeur}". Volumes : ${f.volumes}. Problème : ${f.probleme_royalties}. Explique : comment sont calculés les revenus par plateforme (Spotify, Apple, etc.), ce qui manque potentiellement (droits publique, performances, publishing), comment vérifier et réclamer des droits non perçus, outils de tracking recommandés, red flags dans les relevés de compte.`
  },
  {
    id: 'partenariat_marques', categorie: 'business', emoji: '🤲',
    titre: 'Radar à Sponsors',
    sous_titre: 'Identifie des marques et construis ton dossier de partenariat',
    champs: [
      { id: 'artiste', label: 'Artiste / Projet', type: 'text', placeholder: 'Ex : Afropunk collective Lyon' },
      { id: 'valeurs_artiste', label: 'Valeurs & positionnement', type: 'textarea', placeholder: 'Ex : authenticité, empowerment féminin afro, luxe accessible, tech' },
      { id: 'audience_artiste', label: 'Audience chiffrée', type: 'text', placeholder: 'Ex : 80k Instagram, 25k TikTok, 35-65% femmes, 22-34 ans' },
    ],
    prompt_builder: (f) => `Identifie les partenaires marques idéaux pour ${f.artiste}. Valeurs : ${f.valeurs_artiste}. Audience : ${f.audience_artiste}. Pour chaque marque : nom, secteur, pourquoi c'est un match parfait, ce que tu peux offrir (visibilité, contenu, activation), comment structurer la proposition commerciale (échange visibilité vs cash vs hybrid), contact / département à cibler.`
  },
  {
    id: 'stream_strategy', categorie: 'business', emoji: '📻',
    titre: 'Stratégie Streaming Afro',
    sous_titre: 'Maximise tes revenus et ta visibilité sur les plateformes',
    champs: [
      { id: 'artiste', label: 'Artiste', type: 'text', placeholder: 'Ex : Rema' },
      { id: 'plateformes_actives', label: 'Plateformes actives', type: 'text', placeholder: 'Ex : Spotify (principal), Boomplay, Audiomack, Apple Music' },
      { id: 'objectif_stream', label: 'Objectif streaming', type: 'select',
        options: ['Augmenter les streams mensuels', 'Percer sur de nouvelles plateformes', 'Entrer dans les playlists algo', 'Convertir streams → fans engagés', 'Maximiser les revenus per stream'] },
    ],
    prompt_builder: (f) => `Développe une stratégie streaming complète pour ${f.artiste} sur les plateformes : ${f.plateformes_actives}. Objectif : ${f.objectif_stream}. Inclus : optimisation des profils par plateforme, stratégie de sorties (fréquence, timing), tactiques pour déclencher les algorithmes, spécificités des plateformes africaines (Boomplay, Audiomack), stratégie de playlist pitching, conversion streams → revenus maximaux.`
  },
  {
    id: 'crowdfunding_pro', categorie: 'business', emoji: '🎁',
    titre: 'Campagne de Financement',
    sous_titre: 'Rédige ta page Kickstarter, Ulule ou KissKissBankBank',
    champs: [
      { id: 'artiste', label: 'Artiste / Collectif', type: 'text', placeholder: 'Ex : Orchestre Mandingue' },
      { id: 'projet_cf', label: 'Projet à financer', type: 'textarea', placeholder: 'Ex : enregistrement d\'un album live à Dakar avec 30 musiciens' },
      { id: 'objectif_cf', label: 'Montant à lever', type: 'text', placeholder: 'Ex : 12 000€' },
      { id: 'plateforme_cf', label: 'Plateforme', type: 'select',
        options: ['Ulule', 'KissKissBankBank', 'Kickstarter', 'Indiegogo', 'Patreon'] },
    ],
    prompt_builder: (f) => `Rédige une page de crowdfunding complète pour ${f.artiste} sur ${f.plateforme_cf}. Projet : ${f.projet_cf}. Objectif : ${f.objectif_cf}. Génère : titre accrocheur, pitch vidéo (script 2 minutes), description du projet (storytelling + impact), paliers de récompenses créatifs (5 niveaux), FAQ prévisible, stratégie de partage communauté diaspora.`
  },
  {
    id: 'revenue_diversification', categorie: 'business', emoji: '💹',
    titre: 'Diversification Revenus',
    sous_titre: 'Construis 7 sources de revenus autour de ta musique',
    champs: [
      { id: 'artiste', label: 'Artiste / Profil', type: 'text', placeholder: 'Ex : Producteur beatmaker afro, Lagos/Paris' },
      { id: 'revenus_actuels', label: 'Sources de revenus actuelles', type: 'textarea', placeholder: 'Ex : streaming (60%), live (40%), rien d\'autre encore' },
      { id: 'competences', label: 'Compétences et actifs disponibles', type: 'textarea', placeholder: 'Ex : studio home, collection de samples, audience YouTube 50k' },
    ],
    prompt_builder: (f) => `Crée un plan de diversification des revenus pour : ${f.artiste}. Revenus actuels : ${f.revenus_actuels}. Actifs et compétences : ${f.competences}. Propose 7 flux de revenus complémentaires avec pour chacun : concept, potentiel de revenus (€), effort de mise en place (faible/moyen/élevé), timeline de déploiement, premier pas concret à faire cette semaine.`
  },

  // ══ JURIDIQUE & PROTECTION (15) ═══════════════════════════════════════════
  {
    id: 'copyright', categorie: 'juridique', emoji: '©️',
    titre: 'Gardien du Copyright',
    sous_titre: 'Guide pour protéger tes œuvres mondialement',
    champs: [
      { id: 'type_oeuvre', label: 'Type d\'œuvre', type: 'select',
        options: ['Morceau musical (paroles + musique)', 'Musique instrumentale', 'Texte / Paroles seules', 'Clip / Œuvre audiovisuelle', 'Artwork / Visuel', 'Mix / Remix'] },
      { id: 'pays_enregistrement', label: 'Pays de résidence / d\'activité', type: 'text', placeholder: 'Ex : France, avec activités au Sénégal et au Royaume-Uni' },
      { id: 'problematique', label: 'Problématique spécifique', type: 'textarea', placeholder: 'Ex : Comment enregistrer à la SACEM ? Mes droits sur un remix non autorisé ?' },
    ],
    prompt_builder: (f) => `Guide complet sur les droits d'auteur pour une "${f.type_oeuvre}". Contexte : ${f.pays_enregistrement}. Problématique : ${f.problematique}. Couvre : démarches d'enregistrement (SACEM, sociétés africaines), protection internationale via CISAC, gestion des droits voisins, droits de synchronisation, que faire en cas d'utilisation non autorisée.`
  },
  {
    id: 'nda_analyser', categorie: 'juridique', emoji: '🔒',
    titre: 'Coffre-fort NDA',
    sous_titre: 'Génère et analyse tes accords de confidentialité',
    champs: [
      { id: 'type_nda', label: 'Action souhaitée', type: 'select',
        options: ['Générer un NDA à faire signer', 'Analyser un NDA reçu'] },
      { id: 'contenu_nda', label: 'Contexte / Texte du NDA', type: 'textarea', placeholder: 'Décris le contexte (collaboration, session studio, deal en cours) ou colle le NDA reçu...' },
      { id: 'parties_nda', label: 'Parties concernées', type: 'text', placeholder: 'Ex : artiste et beatmaker, artiste et label potentiel' },
    ],
    prompt_builder: (f) => `${f.type_nda === 'Générer un NDA à faire signer' ? 'Génère' : 'Analyse'} un accord de confidentialité. Contexte / NDA : ${f.contenu_nda}. Parties : ${f.parties_nda}. ${f.type_nda === 'Générer un NDA à faire signer' ? 'Rédige un NDA complet, professionnel, adapté au contexte musical afro-diasporique, avec toutes les clauses essentielles.' : 'Identifie les clauses problématiques, les zones floues, les risques, et propose des modifications protectrices.'}`
  },
  {
    id: 'litigation', categorie: 'juridique', emoji: '⚖️',
    titre: 'Médiation & Conflit',
    sous_titre: 'Rédige une solution amiable ou prépare un dossier litige',
    champs: [
      { id: 'type_litige', label: 'Type de litige', type: 'select',
        options: ['Non-paiement de cachets', 'Litige avec label / maison de disques', 'Plagiat / Non-attribution', 'Rupture de contrat', 'Litige entre artistes / collaborateurs', 'Problème avec promoteur'] },
      { id: 'description_litige', label: 'Description du litige', type: 'textarea', placeholder: 'Décris les faits chronologiquement : dates, montants, parties, ce qui a été dit...' },
      { id: 'preuves', label: 'Preuves disponibles', type: 'text', placeholder: 'Ex : contrat signé, emails, virement, témoins' },
    ],
    prompt_builder: (f) => `Aide à gérer ce litige musical : "${f.type_litige}". Faits : ${f.description_litige}. Preuves disponibles : ${f.preuves}. Génère : analyse juridique du cas (droits et obligations), lettre de mise en demeure professionnelle, stratégie de médiation amiable, argumentation pour une procédure judiciaire si nécessaire, institutions compétentes (SACEM, CNM, prud'hommes, arbitrage OMPI).`
  },
  {
    id: 'sample_clearance', categorie: 'juridique', emoji: '📻',
    titre: 'Libération de Sample',
    sous_titre: 'Procédure complète pour utiliser legalement un sample',
    champs: [
      { id: 'sample_source', label: 'Morceau samplé', type: 'text', placeholder: 'Ex : "Soul Makossa" de Manu Dibango, 1972' },
      { id: 'artiste_sample', label: 'Ton artiste / Projet', type: 'text', placeholder: 'Ex : mon prochain EP afrobeats' },
      { id: 'utilisation_sample', label: 'Comment tu utilises le sample', type: 'textarea', placeholder: 'Ex : loop de 8 mesures de la basse, transformée et filtrée, partie centrale du morceau' },
    ],
    prompt_builder: (f) => `Guide complet pour la libération du sample : "${f.sample_source}" utilisé dans ${f.artiste_sample}. Utilisation : ${f.utilisation_sample}. Génère : qui contacter (ayants-droits, éditeur, producteur), modèle de lettre de demande de clearance, conditions et tarifs habituels, alternative si refus ou trop cher (replay, interpolation), que faire pour les samples africains non enregistrés.`
  },
  {
    id: 'partnership_deal', categorie: 'juridique', emoji: '🤝',
    titre: 'Accord d\'Association',
    sous_titre: 'Définis les règles du jeu pour ton groupe ou collectif',
    champs: [
      { id: 'structure', label: 'Type de structure', type: 'select',
        options: ['Groupe de musique (2-5 membres)', 'Collectif artistique', 'Co-production entre artistes', 'Label entre associés', 'Joint venture promoteur-artiste'] },
      { id: 'membres', label: 'Parties impliquées', type: 'text', placeholder: 'Ex : 3 membres dont 2 auteurs-compositeurs et 1 beatmaker' },
      { id: 'enjeux', label: 'Enjeux à clarifier', type: 'textarea', placeholder: 'Ex : répartition des revenus, droits sur le catalogue, décisions artistiques, sortie d\'un membre' },
    ],
    prompt_builder: (f) => `Rédige un accord d'association complet pour : ${f.structure}. Parties : ${f.membres}. Enjeux : ${f.enjeux}. Inclus : répartition des revenus (streaming, live, sync, publishing), gouvernance et prise de décision, propriété intellectuelle et catalogue, clauses de sortie et rachat de parts, conditions de dissolution, gestion des conflits internes.`
  },
  {
    id: 'trademark_check', categorie: 'juridique', emoji: '🆔',
    titre: 'Protection Marque & Nom',
    sous_titre: 'Stratégie de dépôt de marque (INPI, EUIPO, OAPI)',
    champs: [
      { id: 'nom_a_proteger', label: 'Nom / Logo à protéger', type: 'text', placeholder: 'Ex : "Afro Empire" (nom de scène et label)' },
      { id: 'pays_marque', label: 'Pays de protection souhaités', type: 'text', placeholder: 'Ex : France, Europe, Afrique de l\'Ouest' },
      { id: 'classes_marque', label: 'Type d\'activité', type: 'select',
        options: ['Musique et divertissement', 'Mode / Vêtements', 'Événementiel', 'Éducation / Formation', 'Tous domaines (protection large)'] },
    ],
    prompt_builder: (f) => `Guide complet pour protéger "${f.nom_a_proteger}" dans les pays : ${f.pays_marque}. Activité : ${f.classes_marque}. Explique : démarches INPI (France), EUIPO (Europe), OAPI (Afrique francophone), coûts et délais, classes de Nice pertinentes, risques si le nom est déjà pris (et comment vérifier), ce qui protège vs ce qui ne protège pas, marques de certification musicale.`
  },
  {
    id: 'remix_contract', categorie: 'juridique', emoji: '🔄',
    titre: 'Contrat de Remix',
    sous_titre: 'Définis clairement les droits pour un remixeur',
    champs: [
      { id: 'artiste_original', label: 'Artiste original', type: 'text', placeholder: 'Ex : Nonso Amadi' },
      { id: 'artiste_remixeur', label: 'Remixeur', type: 'text', placeholder: 'Ex : DJ Maphorisa' },
      { id: 'titre_original', label: 'Titre original', type: 'text', placeholder: 'Ex : "Tonight"' },
      { id: 'conditions_remix', label: 'Conditions de la collaboration', type: 'textarea', placeholder: 'Ex : remix gratuit pour visibilité mutuelle, sortie sur les deux profils...' },
    ],
    prompt_builder: (f) => `Rédige un contrat de remix complet entre ${f.artiste_original} (artiste original) et ${f.artiste_remixeur} (remixeur) pour le titre "${f.titre_original}". Conditions : ${f.conditions_remix}. Inclus : autorisation de modification, propriété du remix, partage des revenus (streaming, sync), crédits obligatoires, territoire et durée d'exploitation, droits de retrait.`
  },
  {
    id: 'work_for_hire', categorie: 'juridique', emoji: '👷',
    titre: 'Contrat Prestataire Artistique',
    sous_titre: 'Pour tes graphistes, photographes et beatmakers',
    champs: [
      { id: 'type_prestation', label: 'Type de prestation', type: 'select',
        options: ['Design graphique / Artwork', 'Photographie', 'Production de beats', 'Réalisation de clip', 'Mixage / Mastering', 'Community management'] },
      { id: 'artiste_commanditaire', label: 'Artiste commanditaire', type: 'text', placeholder: 'Ex : Afrowave Records' },
      { id: 'prestataire', label: 'Prestataire', type: 'text', placeholder: 'Ex : Studio Kora Design' },
      { id: 'remuneration_prest', label: 'Rémunération convenue', type: 'text', placeholder: 'Ex : 800€ forfait, 50% à la commande, 50% à la livraison' },
    ],
    prompt_builder: (f) => `Rédige un contrat de prestation de services pour une mission de "${f.type_prestation}" entre ${f.artiste_commanditaire} (client) et ${f.prestataire} (prestataire). Rémunération : ${f.remuneration_prest}. Inclus : description précise de la mission, livrables attendus, délais, cession des droits sur les créations, conditions de révision, confidentialité, pénalités de retard.`
  },
  {
    id: 'exit_strategy', categorie: 'juridique', emoji: '🚪',
    titre: 'Clause de Sortie',
    sous_titre: 'Comment quitter proprement un label ou un manager',
    champs: [
      { id: 'relation_sortie', label: 'Relation à quitter', type: 'select',
        options: ['Label de disques', 'Manager / Agent', 'Éditeur musical', 'Partenaire de production', 'Association artistique', 'Distributeur'] },
      { id: 'contexte_sortie', label: 'Contexte de la séparation', type: 'textarea', placeholder: 'Ex : contrat de 3 ans expiré, désaccord artistique, non-respect des obligations, amiable...' },
      { id: 'actifs_sortie', label: 'Actifs concernés', type: 'text', placeholder: 'Ex : catalogue de 2 albums, dossiers en cours, accès réseaux sociaux' },
    ],
    prompt_builder: (f) => `Guide pour quitter ${f.relation_sortie}. Contexte : ${f.contexte_sortie}. Actifs : ${f.actifs_sortie}. Génère : analyse des clauses de résiliation dans ce type de contrat, lettre de résiliation formelle (modèle), droits récupérables (catalogue, réseaux, contacts), ce que l'autre partie peut légalement garder, timeline et checklist de la séparation, protections à mettre en place immédiatement.`
  },
  {
    id: 'catalogue_audit', categorie: 'juridique', emoji: '🗄️',
    titre: 'Audit de Catalogue',
    sous_titre: 'Vérifie l\'état juridique et commercial de tes actifs musicaux',
    champs: [
      { id: 'catalogue_audit_desc', label: 'Description du catalogue', type: 'textarea', placeholder: 'Ex : 3 albums (2019, 2021, 2023), 67 titres, dont 40 coécrits' },
      { id: 'historique_contrats', label: 'Historique contractuel', type: 'textarea', placeholder: 'Ex : label A (2018-2020), label B (2021-2023), indépendant depuis 2023' },
      { id: 'probleme_audit', label: 'Problème ou question spécifique', type: 'textarea', placeholder: 'Ex : suis-je propriétaire de mes masters ? Puis-je re-distribuer mes anciennes sorties ?' },
    ],
    prompt_builder: (f) => `Réalise un audit juridique complet du catalogue suivant : ${f.catalogue_audit_desc}. Historique contractuel : ${f.historique_contrats}. Question centrale : ${f.probleme_audit}. Analyse : propriété des masters et droits d'auteur par période, contraintes contractuelles résiduelles, droits récupérables, valeur estimative du catalogue, recommandations pour maximiser la valeur et la liberté artistique.`
  },
  {
    id: 'gdpr_music', categorie: 'juridique', emoji: '🛡️',
    titre: 'Protection Données Fans',
    sous_titre: 'Conformité RGPD pour ta newsletter et ton site',
    champs: [
      { id: 'outils_utilises', label: 'Outils de collecte de données', type: 'text', placeholder: 'Ex : Mailchimp, Linktree, formulaire site, Ticketmaster, Bandcamp' },
      { id: 'volume_contacts', label: 'Volume de contacts', type: 'select',
        options: ['< 500 contacts', '500 - 5 000', '5 000 - 50 000', '50 000+'] },
      { id: 'pays_fans', label: 'Pays des fans concernés', type: 'text', placeholder: 'Ex : France, Belgique, UK (hors RGPD), Côte d\'Ivoire' },
    ],
    prompt_builder: (f) => `Génère un guide de mise en conformité RGPD pour un artiste utilisant : ${f.outils_utilises}. Volume : ${f.volume_contacts}. Pays des fans : ${f.pays_fans}. Couvre : obligations RGPD pour artistes indépendants, mentions légales et politique de confidentialité (modèle), consentement éclairé pour newsletters, droits des fans (accès, effacement), ce qu'on peut faire avec les données fans pour le marketing.`
  },
  {
    id: 'split_sheet', categorie: 'juridique', emoji: '✂️',
    titre: 'Split Sheet Master',
    sous_titre: 'Répartition des droits en sortie de session studio',
    champs: [
      { id: 'morceau', label: 'Titre du morceau', type: 'text', placeholder: 'Ex : "Yoyo" — feat. Artiste X & prod. Beat King' },
      { id: 'contributeurs', label: 'Contributeurs et rôles', type: 'textarea', placeholder: 'Ex : Kofi (auteur + interprète), Aminata (co-auteure + voix), Beat King (compositeur / beatmaker)' },
      { id: 'contexte_split', label: 'Contexte', type: 'text', placeholder: 'Ex : morceau indépendant, pas de label, sortie streaming uniquement' },
    ],
    prompt_builder: (f) => `Crée un split sheet officiel pour "${f.morceau}". Contributeurs : ${f.contributeurs}. Contexte : ${f.contexte_split}. Inclus : tableau de répartition des droits d'auteur ET droits voisins / masters (% par personne), justification de la répartition, clauses sur les revenus futurs (sync, sampling, resampling), procédure d'enregistrement à la SACEM ou société équivalente, signatures requises.`
  },
  {
    id: 'residence_artistique', categorie: 'juridique', emoji: '🏛️',
    titre: 'Contrat de Résidence Artistique',
    sous_titre: 'Sécurise tes conditions pour une résidence de création',
    champs: [
      { id: 'artiste_res', label: 'Artiste', type: 'text', placeholder: 'Ex : Quatuor Kora, musique traditionnelle et électronique' },
      { id: 'structure_res', label: 'Structure d\'accueil', type: 'text', placeholder: 'Ex : Institut Français de Dakar' },
      { id: 'duree_res', label: 'Durée de la résidence', type: 'text', placeholder: 'Ex : 3 mois, de janvier à mars 2025' },
      { id: 'livrables_res', label: 'Livrables attendus', type: 'textarea', placeholder: 'Ex : concert de restitution, 1 EP enregistré, 3 ateliers publics' },
    ],
    prompt_builder: (f) => `Rédige un contrat de résidence artistique complet entre ${f.artiste_res} et ${f.structure_res}. Durée : ${f.duree_res}. Livrables : ${f.livrables_res}. Inclus : conditions d'accueil (studio, logement, per diem), propriété intellectuelle des œuvres créées, obligations de restitution, droits de captation et diffusion, conditions de prolongation/résiliation, clause de force majeure.`
  },
  {
    id: 'heritage_droit', categorie: 'juridique', emoji: '📋',
    titre: 'Protection Droits & Héritage',
    sous_titre: 'Prépare la transmission de ton patrimoine artistique',
    champs: [
      { id: 'situation_pat', label: 'Situation actuelle', type: 'textarea', placeholder: 'Ex : artiste indépendant, 3 albums, pas de structure, pas de testament...' },
      { id: 'beneficiaires', label: 'Bénéficiaires souhaités', type: 'text', placeholder: 'Ex : conjoint, enfants, parents au pays, association culturelle afro' },
    ],
    prompt_builder: (f) => `Guide de protection et transmission du patrimoine artistique. Situation : ${f.situation_pat}. Bénéficiaires : ${f.beneficiaires}. Couvre : identification de tous les actifs artistiques (masters, droits, noms de marques, réseaux sociaux), comment désigner des ayants-droits à la SACEM et autres sociétés, création d'une structure patrimoniale (SCI, holding), testament artistique, spécificités des lois successorales pour la diaspora africaine.`
  },
  {
    id: 'contract_international', categorie: 'juridique', emoji: '🌐',
    titre: 'Contrat International',
    sous_titre: 'Sécurise tes deals sur des marchés étrangers',
    champs: [
      { id: 'pays_contrat', label: 'Pays du partenaire contractuel', type: 'text', placeholder: 'Ex : Nigeria, USA, UK, Ghana' },
      { id: 'type_deal', label: 'Type de deal', type: 'select',
        options: ['Distribution internationale', 'Booking international', 'Coproduction', 'License de catalogue', 'Joint venture label'] },
      { id: 'enjeux_inter', label: 'Enjeux principaux', type: 'textarea', placeholder: 'Ex : droit applicable, juridiction, paiements en devises étrangères, risques...' },
    ],
    prompt_builder: (f) => `Rédige les éléments essentiels d'un contrat international avec une partie basée au/aux ${f.pays_contrat} pour un "${f.type_deal}". Enjeux : ${f.enjeux_inter}. Couvre : choix du droit applicable et de la juridiction, clauses essentielles pour protéger l'artiste afro face à une partie étrangère, paiements en devises (forex, escrow), résolution de litiges transfrontaliers, pièges spécifiques à ce marché.`
  },
];

// ─── État global ─────────────────────────────────────────────────────────────
let outilActif = null;
let categorieActive = 'tous';

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initNavMobile();
  bindCurseur();
  renderOutilsGrid();
  bindFiltres();
  initContactForm();
  initScrollAnimations();
  updateFilterCounts();
});

// ─── Canvas Particles ─────────────────────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomParticle() {
    return {
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.1,
      color: ['#C9A84C','#C05A2E','#1A6B45','#D4891A'][Math.floor(Math.random()*4)]
    };
  }

  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 150; i++) particles.push(randomParticle());

  (function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
        Object.assign(p, randomParticle(), { x: Math.random()*W, y: Math.random()*H });
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  })();
}

// ─── Nav Mobile ───────────────────────────────────────────────────────────────
function initNavMobile() {
  const toggle = document.getElementById('nav-toggle');
  const liens = document.querySelector('.nav-liens');
  if (!toggle || !liens) return;
  toggle.addEventListener('click', () => {
    liens.classList.toggle('mobile-open');
  });
  liens.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => liens.classList.remove('mobile-open'));
  });
}

// ─── Curseur ─────────────────────────────────────────────────────────────────
function bindCurseur() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const curseur = document.getElementById('curseur');
  if (!curseur) return;
  document.addEventListener('mousemove', e => {
    curseur.style.left = e.clientX + 'px';
    curseur.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .outil-card').forEach(el => {
    el.addEventListener('mouseenter', () => curseur.classList.add('actif'));
    el.addEventListener('mouseleave', () => curseur.classList.remove('actif'));
  });
}

// ─── Filtres ──────────────────────────────────────────────────────────────────
function updateFilterCounts() {
  const counts = { tous: OUTILS.length };
  OUTILS.forEach(o => { counts[o.categorie] = (counts[o.categorie] || 0) + 1; });
  document.querySelectorAll('[data-filtre]').forEach(btn => {
    const cat = btn.dataset.filtre;
    if (counts[cat] !== undefined) {
      const label = btn.textContent.replace(/\s*\([\d]+\)/, '');
      btn.textContent = `${label} (${counts[cat]})`;
    }
  });
}

function bindFiltres() {
  document.querySelectorAll('[data-filtre]').forEach(btn => {
    btn.addEventListener('click', () => {
      categorieActive = btn.dataset.filtre;
      document.querySelectorAll('[data-filtre]').forEach(b => b.classList.remove('actif'));
      btn.classList.add('actif');
      renderOutilsGrid();
    });
  });
}

// ─── Grille Outils ────────────────────────────────────────────────────────────
function renderOutilsGrid() {
  const grid = document.getElementById('outils-grid');
  if (!grid) return;

  const filtres = categorieActive === 'tous' ? OUTILS : OUTILS.filter(o => o.categorie === categorieActive);

  grid.innerHTML = filtres.map(outil => `
    <div class="outil-card cat-${outil.categorie}" data-outil="${outil.id}" onclick="ouvrirOutil('${outil.id}')">
      <div class="outil-emoji">${outil.emoji}</div>
      <div class="outil-label">${outil.titre}</div>
      <div class="outil-sous">${outil.sous_titre}</div>
      <div class="outil-tag tag-${outil.categorie}">${getCatLabel(outil.categorie)}</div>
      <div class="outil-arrow">→</div>
    </div>
  `).join('');

  setTimeout(() => {
    grid.querySelectorAll('.outil-card').forEach((card, i) => {
      card.style.animationDelay = (i * 0.03) + 's';
      card.classList.add('visible');
    });
  }, 50);
}

function getCatLabel(cat) {
  return { agent: '🎖 AGENT', creation: '🎨 CRÉATION', business: '💼 BUSINESS', juridique: '⚖️ JURIDIQUE' }[cat] || cat;
}

// ─── Ouverture Modal ──────────────────────────────────────────────────────────
function ouvrirOutil(id) {
  const outil = OUTILS.find(o => o.id === id);
  if (!outil) return;
  outilActif = outil;

  const modal      = document.getElementById('modal-outil');
  const titre      = document.getElementById('modal-titre');
  const formulaire = document.getElementById('modal-form');
  const resultZone = document.getElementById('modal-result');

  titre.textContent = outil.emoji + ' ' + outil.titre;
  resultZone.innerHTML = '';
  resultZone.classList.remove('visible');

  formulaire.innerHTML = outil.champs.map(c => {
    if (c.type === 'select') {
      return `<div class="form-group">
        <label for="${c.id}">${c.label}</label>
        <select id="${c.id}" name="${c.id}">
          ${c.options.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>
      </div>`;
    } else if (c.type === 'textarea') {
      return `<div class="form-group">
        <label for="${c.id}">${c.label}</label>
        <textarea id="${c.id}" name="${c.id}" placeholder="${c.placeholder || ''}" rows="4"></textarea>
      </div>`;
    } else {
      return `<div class="form-group">
        <label for="${c.id}">${c.label}</label>
        <input type="text" id="${c.id}" name="${c.id}" placeholder="${c.placeholder || ''}">
      </div>`;
    }
  }).join('') + `
    <button type="button" class="btn-generate" onclick="lancerIA()">
      <span class="btn-icon">⚡</span> Générer avec l'IA Mistral
    </button>`;

  modal.classList.add('ouvert');
  document.body.style.overflow = 'hidden';
}

function fermerModal() {
  document.getElementById('modal-outil').classList.remove('ouvert');
  document.body.style.overflow = '';
  outilActif = null;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') fermerModal(); });

// ─── Appel IA ─────────────────────────────────────────────────────────────────
async function lancerIA() {
  if (!outilActif) return;

  const champs = {};
  outilActif.champs.forEach(c => {
    const el = document.getElementById(c.id);
    champs[c.id] = el ? el.value.trim() : '';
  });

  const requis = outilActif.champs.filter(c => c.type !== 'textarea');
  const manquant = requis.find(c => !champs[c.id]);
  if (manquant) { afficherErreur('Merci de remplir : ' + manquant.label); return; }

  const prompt = outilActif.prompt_builder(champs);
  const resultZone = document.getElementById('modal-result');
  const btn = document.querySelector('.btn-generate');

  btn.disabled = true;
  btn.innerHTML = '<span class="btn-icon spin">⟳</span> L\'IA analyse…';
  resultZone.innerHTML = `
    <div class="ia-loading">
      <div class="loader-dots"><span></span><span></span><span></span></div>
      <p>Traitement en cours — Mistral AI</p>
    </div>`;
  resultZone.classList.add('visible');

  try {
    const res = await fetch('mistral_proxy.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, outil: outilActif.id })
    });

    const data = await res.json();

    if (data.success) {
      resultZone.innerHTML = `
        <div class="ia-result-header">
          <span>${outilActif.emoji} ${outilActif.titre}</span>
          <button class="btn-copy" onclick="copierResultat()">📋 Copier</button>
        </div>
        <div class="ia-result-body" id="result-content">${formatResult(data.result)}</div>`;
      resultZone.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      afficherErreur(data.error || 'Erreur inconnue de l\'IA.');
    }
  } catch (err) {
    afficherErreur('Erreur réseau : ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<span class="btn-icon">⚡</span> Générer avec l\'IA Mistral';
  }
}

function formatResult(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^## (.+)$/gm, '<h3>$1</h3>')
    .replace(/^# (.+)$/gm, '<h2>$1</h2>')
    .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gs, m => '<ul>' + m + '</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^(?!<)(.+)$/gm, m => '<p>' + m + '</p>');
}

function copierResultat() {
  const el = document.getElementById('result-content');
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    const btn = document.querySelector('.btn-copy');
    if (btn) { btn.textContent = '✅ Copié !'; setTimeout(() => btn.textContent = '📋 Copier', 2000); }
  });
}

function afficherErreur(msg) {
  const z = document.getElementById('modal-result');
  z.innerHTML = `<div class="ia-error">⚠️ ${msg}</div>`;
  z.classList.add('visible');
}

// ─── Formulaire Contact ───────────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('form-contact');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nom    = document.getElementById('c-nom')?.value || '';
    const email  = document.getElementById('c-email')?.value || '';
    const profil = document.getElementById('c-profil')?.value || '';
    const msg    = document.getElementById('c-message')?.value || '';
    const ref    = 'AAH-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    const leads = JSON.parse(localStorage.getItem('aah_leads') || '[]');
    leads.push({ ref, nom, email, profil, msg, date: new Date().toISOString() });
    localStorage.setItem('aah_leads', JSON.stringify(leads));

    const conf = document.getElementById('contact-confirm');
    if (conf) {
      conf.innerHTML = `✅ Demande enregistrée — Référence : <strong>${ref}</strong><br>Notre équipe vous contacte sous 48h.`;
      conf.classList.add('visible');
    }
    form.reset();
  });
}

// ─── Scroll Animations ────────────────────────────────────────────────────────
function initScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
}
