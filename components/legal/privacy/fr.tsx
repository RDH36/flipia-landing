export function PrivacyFR() {
  return (

    <article className="prose prose-neutral max-w-none font-body">
      <h1 className="font-display text-3xl font-bold text-text-primary">
        Politique de confidentialité
      </h1>
      <p className="text-text-secondary">Dernière mise à jour : Mai 2026</p>

      <p>
        Cette Politique de confidentialité explique quelles données Flipia collecte, comment nous les utilisons, avec qui nous les partageons et les droits dont vous disposez sur vos données. Elle s&apos;applique à l&apos;application mobile Flipia sur Android et iOS ainsi qu&apos;à ce site web.
      </p>

      <h2>1. Données collectées</h2>
      <ul>
        <li><strong>Données de compte Google</strong> (uniquement si vous vous connectez avec Google)&nbsp;: identifiant Google, nom et adresse email fournis par Google Sign-In.</li>
        <li><strong>Données de compte Invité</strong> (si vous jouez en mode Invité)&nbsp;: un identifiant utilisateur pseudonyme généré par InstantDB, sans lien avec votre identité réelle.</li>
        <li><strong>Profil de jeu&nbsp;:</strong> pseudo, avatar (emoji), plateau sélectionné.</li>
        <li><strong>Données de progression&nbsp;:</strong> XP, niveau, points, victoires, défaites, séries actuelle et meilleure, achievements débloqués.</li>
        <li><strong>Historique de parties&nbsp;:</strong> difficulté, scores, durée, type d&apos;adversaire (humain/bot) et état complet des salles multijoueur.</li>
        <li><strong>Données multijoueur&nbsp;:</strong> codes de salle, état du jeu en temps réel, horodatage des coups.</li>
        <li><strong>Données techniques&nbsp;:</strong> plateforme (Android/iOS), version de l&apos;OS, version de l&apos;application, type d&apos;appareil.</li>
        <li><strong>Données de feedback</strong> (uniquement si vous envoyez un retour)&nbsp;: catégorie, message, adresse email optionnelle.</li>
        <li><strong>Données d&apos;achat&nbsp;:</strong> historique des achats intégrés et droits actifs (liés à votre identifiant InstantDB via RevenueCat).</li>
        <li><strong>Identifiants publicitaires&nbsp;:</strong> GAID sur Android, IDFA sur iOS, collectés par Google AdMob sous réserve du consentement géré au niveau de l&apos;appareil.</li>
      </ul>

      <h2>2. Utilisation des données</h2>
      <ul>
        <li>Vous authentifier et maintenir votre session</li>
        <li>Afficher votre profil, statistiques, achievements et position au classement</li>
        <li>Activer le multijoueur temps réel (création de salle, matchmaking, synchronisation)</li>
        <li>Traiter et valider les achats intégrés et droits associés (Premium, packs)</li>
        <li>Diffuser des publicités et, avec votre consentement, les personnaliser</li>
        <li>Fournir le support utilisateur et répondre à vos feedbacks</li>
        <li>Améliorer l&apos;application, corriger les bugs et prévenir la triche</li>
      </ul>

      <h2>3. Base légale (RGPD)</h2>
      <ul>
        <li><strong>Exécution du contrat&nbsp;:</strong> création et maintien de votre compte, mise à disposition des fonctionnalités du jeu.</li>
        <li><strong>Consentement&nbsp;:</strong> publicités personnalisées, notifications locales, feedback optionnel.</li>
        <li><strong>Intérêt légitime&nbsp;:</strong> sécurité, anti-triche, prévention de la fraude, amélioration du service.</li>
        <li><strong>Obligation légale&nbsp;:</strong> conservation des données d&apos;achat selon la loi comptable et de protection du consommateur.</li>
      </ul>

      <h2>4. Stockage et sous-traitants</h2>
      <p>Nous utilisons les prestataires suivants pour exploiter Flipia&nbsp;:</p>
      <ul>
        <li><strong>InstantDB</strong> (États-Unis) — base de données temps réel pour les profils, le classement, l&apos;historique de parties et les salles multijoueur&nbsp;; gère aussi l&apos;authentification via le token d&apos;identité Google.</li>
        <li><strong>Google Sign-In / Google OAuth</strong> — fournit votre identité Google (email, nom) lorsque vous choisissez ce mode de connexion.</li>
        <li><strong>Google AdMob</strong> — diffuse les publicités interstitielles et récompensées&nbsp;; collecte des identifiants publicitaires.</li>
        <li><strong>RevenueCat</strong> — gère les achats intégrés et les lie à votre identifiant utilisateur&nbsp;; reçoit les événements d&apos;achat des stores.</li>
        <li><strong>Supabase</strong> (États-Unis) — stocke uniquement les feedbacks soumis via le formulaire in-app&nbsp;; aucune session d&apos;authentification n&apos;est persistée.</li>
        <li><strong>Google Play Store / Apple App Store</strong> — distribuent l&apos;application, traitent les paiements pour les achats intégrés et livrent les mises à jour.</li>
        <li><strong>AsyncStorage</strong> — stockage local sur votre appareil pour les préférences (thème, onboarding, dates de récompenses, statuts des notifications). Aucune transmission à un serveur.</li>
      </ul>

      <h2>5. Publicité et identifiants publicitaires</h2>
      <p>
        Flipia utilise <strong>Google AdMob</strong> pour afficher des publicités interstitielles (environ une toutes les trois parties) et des publicités récompensées optionnelles (en échange d&apos;XP). AdMob peut collecter <strong>l&apos;identifiant publicitaire</strong> de votre appareil (GAID sur Android, IDFA sur iOS), des événements d&apos;interaction et des informations déduites approximatives pour diffuser et mesurer les publicités.
      </p>
      <p>
        Vous pouvez <strong>limiter le suivi publicitaire ou réinitialiser votre identifiant</strong> à tout moment dans les paramètres de votre appareil (Android&nbsp;: Paramètres &gt; Confidentialité &gt; Publicités&nbsp;; iOS&nbsp;: Réglages &gt; Confidentialité et sécurité &gt; Suivi). L&apos;achat de <strong>Flipia Premium</strong> supprime toutes les publicités.
      </p>

      <h2>6. Notifications</h2>
      <p>
        Avec votre permission, Flipia planifie une <strong>notification locale quotidienne à 18&nbsp;h</strong> pour vous rappeler votre récompense XP du jour. Les notifications sont générées localement sur votre appareil — aucun token push n&apos;est envoyé à un serveur distant. Vous pouvez désactiver les notifications à tout moment dans les paramètres de votre appareil.
      </p>

      <h2>7. Visibilité publique et partage des données</h2>
      <p>
        Nous ne <strong>vendons, louons ni partageons vos données personnelles à des fins marketing</strong>. Les informations suivantes sont toutefois visibles par les autres utilisateurs de Flipia&nbsp;:
      </p>
      <ul>
        <li>Votre <strong>pseudo</strong>, votre <strong>avatar</strong> et vos statistiques de progression (XP, niveau, victoires, parties jouées) sur le classement global et votre profil joueur public.</li>
        <li>Votre pseudo et avatar sont visibles par votre adversaire lors des parties multijoueur.</li>
      </ul>
      <p>
        Votre email Google n&apos;est <strong>jamais affiché publiquement</strong>. Les données ne sont partagées avec nos sous-traitants qu&apos;aux fins de l&apos;exploitation du service (voir Section&nbsp;4).
      </p>

      <h2>8. Durée de conservation</h2>
      <ul>
        <li>Les données de compte et de jeu sont conservées tant que votre compte est actif.</li>
        <li>Les messages de feedback sont conservés le temps nécessaire au support et à l&apos;amélioration de l&apos;application.</li>
        <li>Les enregistrements d&apos;achat sont conservés pour la durée requise par la loi comptable et la protection du consommateur.</li>
        <li>Sur demande de suppression, vos données personnelles sont retirées de nos bases actives dans un délai raisonnable&nbsp;; des statistiques agrégées et anonymisées peuvent être conservées.</li>
      </ul>

      <h2>9. Vos droits</h2>
      <p>Selon votre juridiction (RGPD, UK GDPR, CCPA, etc.), vous disposez du droit&nbsp;:</p>
      <ul>
        <li><strong>D&apos;accès</strong> aux données personnelles que nous détenons</li>
        <li><strong>De rectification</strong> des données inexactes (vous pouvez modifier votre pseudo et votre avatar dans l&apos;app à tout moment)</li>
        <li><strong>D&apos;effacement</strong> de votre compte et des données cloud associées</li>
        <li><strong>D&apos;opposition</strong> au traitement ou de <strong>retrait du consentement</strong> (ex.&nbsp;: pubs personnalisées, notifications)</li>
        <li><strong>De portabilité</strong> — recevoir une copie de vos données dans un format structuré</li>
        <li><strong>D&apos;introduire une réclamation</strong> auprès de votre autorité locale de protection des données</li>
      </ul>
      <p>
        Pour exercer l&apos;un de ces droits — y compris la <strong>suppression de compte</strong>, qui n&apos;est pas encore disponible via un bouton in-app — veuillez nous écrire à <a href="mailto:contact@dzeryhago.com"><strong>contact@dzeryhago.com</strong></a>. Nous répondrons sous 30&nbsp;jours.
      </p>

      <h2>10. Transferts internationaux</h2>
      <p>
        InstantDB, Supabase, Google, Apple et RevenueCat sont basés aux États-Unis ou exploitent une infrastructure mondiale. En utilisant Flipia, vous reconnaissez que vos données peuvent être transférées et stockées dans des pays hors de votre pays de résidence. Lorsque requis, ces transferts sont encadrés par les <strong>Clauses Contractuelles Types</strong> de la Commission européenne ou des garanties équivalentes.
      </p>

      <h2>11. Mineurs</h2>
      <p>
        Flipia ne s&apos;adresse pas aux enfants de moins de <strong>13&nbsp;ans</strong>. Nous ne collectons pas sciemment de données personnelles d&apos;enfants de moins de 13&nbsp;ans. Dans l&apos;EEE et au Royaume-Uni, les enfants de moins de 16&nbsp;ans doivent obtenir le consentement parental avant d&apos;utiliser l&apos;application. Notre intégration publicitaire AdMob est configurée pour un public de 13&nbsp;ans et plus. Si vous pensez qu&apos;un enfant de moins de 13&nbsp;ans nous a fourni des données, contactez-nous afin que nous puissions les supprimer. Nous respectons les exigences <strong>COPPA</strong> aux États-Unis et les règles du RGPD relatives aux mineurs.
      </p>

      <h2>12. Sécurité</h2>
      <p>
        Toutes les communications entre l&apos;application et nos prestataires utilisent le <strong>chiffrement HTTPS</strong>. L&apos;authentification est déléguée à Google OAuth — nous ne stockons jamais votre mot de passe Google. Malgré des mesures de sécurité raisonnables, aucun service en ligne n&apos;est 100&nbsp;% sécurisé&nbsp;; nous ne pouvons garantir une sécurité absolue.
      </p>

      <h2>13. Modifications de cette politique</h2>
      <p>
        Nous pouvons mettre à jour cette Politique de confidentialité périodiquement. La date «&nbsp;Dernière mise à jour&nbsp;» en haut de cette page reflètera toute modification. Les changements importants seront communiqués via l&apos;application ou par mise à jour de cette page.
      </p>

      <h2>14. Contact</h2>
      <p>
        Pour toute question de confidentialité, demande d&apos;exercice de vos droits ou suppression de compte&nbsp;: <a href="mailto:contact@dzeryhago.com"><strong>contact@dzeryhago.com</strong></a>
      </p>
    </article>
  );
}
