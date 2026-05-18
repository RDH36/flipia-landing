"use client";

import { LegalLayout } from "@/components/layout/legal-layout";
import { useLocale } from "@/lib/i18n/locale-context";

function TermsContent() {
  const { locale } = useLocale();

  if (locale === "en") {
    return (
      <article className="prose prose-neutral max-w-none font-body">
        <h1 className="font-display text-3xl font-bold text-text-primary">
          Terms of Service
        </h1>
        <p className="text-text-secondary">Last updated: May 2026</p>

        <h2>1. Acceptance</h2>
        <p>
          By downloading, installing, or using Flipia (the &quot;app&quot;), you agree to be bound by these Terms of Service. If you do not agree, please uninstall the app and stop using it.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          Flipia is a free mobile memory card game available on Android and iOS. The service includes:
        </p>
        <ul>
          <li>Solo modes against AI opponents of varying difficulty</li>
          <li>Real-time 1v1 multiplayer via room codes and automatic matchmaking</li>
          <li>Player profiles, public leaderboards, and achievements (20+ unlockable)</li>
          <li>Daily XP rewards and progression system (levels, streaks)</li>
          <li>Optional in-app purchases (cosmetic packs and Premium)</li>
          <li>Advertisements provided by Google AdMob (interstitial and rewarded)</li>
        </ul>

        <h2>3. Eligibility and Age</h2>
        <p>
          Flipia is intended for users aged <strong>13 and older</strong>. If you reside in the European Economic Area or the United Kingdom and are under 16, you must obtain verifiable consent from a parent or legal guardian before using the app. We do not knowingly allow children under 13 to use the service.
        </p>

        <h2>4. User Account</h2>
        <ul>
          <li>You may sign in with <strong>Google Sign-In</strong> to save your progress in the cloud and play multiplayer, or play as a <strong>Guest</strong> with a locally-tied identifier.</li>
          <li>You are responsible for the security of your Google account and for all activity that occurs under your account.</li>
          <li>You must choose a <strong>nickname</strong> that is not offensive, deceptive, infringing, or impersonating another person or brand.</li>
          <li>We may remove or rename accounts whose nickname violates these terms.</li>
        </ul>

        <h2>5. Acceptable Use</h2>
        <p>When using Flipia, you agree NOT to:</p>
        <ul>
          <li>Use cheats, bots, modified clients, automation, or exploits to gain an unfair advantage</li>
          <li>Harass, threaten, or harm other players through room codes, matchmaking, or any other means</li>
          <li>Attempt to disrupt the game servers, multiplayer rooms, or other players&apos; experience</li>
          <li>Reverse-engineer, decompile, or attempt to extract the source code of the app</li>
          <li>Bypass, disable, or interfere with the advertising or in-app purchase systems</li>
          <li>Create multiple accounts to manipulate leaderboards, achievements, or matchmaking</li>
        </ul>

        <h2>6. In-App Purchases</h2>
        <p>
          Flipia offers optional one-time in-app purchases processed through Google Play Billing or the Apple App Store, with subscription management handled by <strong>RevenueCat</strong>. Current products include:
        </p>
        <ul>
          <li><strong>Flipia Premium (Lifetime):</strong> removes all ads, grants a +10% XP bonus, unlocks a crown avatar and the premium board.</li>
          <li><strong>Angel Pack:</strong> unlocks the angel avatar and matching board (cosmetic only).</li>
          <li><strong>Demon Pack:</strong> unlocks the demon avatar and matching board (cosmetic only).</li>
        </ul>
        <p>
          Prices are displayed in your local currency by the relevant store. <strong>Purchase restoration</strong> is available from the in-app shop and paywall screens. <strong>Refunds</strong> are handled exclusively under the policy of the store from which you bought (Google Play or App Store) and are not granted directly by us. Some products may be <strong>unavailable in certain countries</strong> due to store restrictions. All cosmetic packs are purely visual and provide no competitive advantage.
        </p>

        <h2>7. Advertising</h2>
        <p>
          Flipia displays advertisements provided by <strong>Google AdMob</strong> to support the free version of the game:
        </p>
        <ul>
          <li><strong>Interstitial ads</strong> are shown approximately once every three games for non-Premium users.</li>
          <li><strong>Rewarded ads</strong> are optional and can be watched in exchange for XP bonuses.</li>
          <li>Purchasing <strong>Flipia Premium</strong> removes all ads permanently.</li>
        </ul>
        <p>
          Ad personalization depends on your consent and your device&apos;s advertising preferences. See our Privacy Policy for details.
        </p>

        <h2>8. User-Generated Content and Public Visibility</h2>
        <p>
          Your <strong>nickname</strong>, <strong>avatar</strong>, and game statistics (XP, level, wins, games played) are visible to other players through the global leaderboard, player profiles, and multiplayer lobbies. Do not include personal information (real name, address, phone, email) in your nickname. We may remove content that violates these terms without prior notice.
        </p>

        <h2>9. Intellectual Property</h2>
        <p>
          All content, design, code, graphics, sounds, and assets of Flipia are protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written authorization. The Flipia name and logo remain our exclusive property.
        </p>

        <h2>10. Service Availability and Modifications</h2>
        <p>
          We strive to keep Flipia available continuously but do not guarantee uninterrupted, secure, or error-free service. We may add, modify, suspend, or discontinue features (including game modes, packs, ads, or matchmaking) at any time. To maintain a responsive matchmaking experience, if no human opponent is found within a short window, a <strong>bot may join your match</strong>.
        </p>

        <h2>11. Third-Party Stores and Platforms</h2>
        <p>
          Flipia is distributed through the <strong>Google Play Store</strong> and the <strong>Apple App Store</strong>. Your use of the app on these platforms is also subject to the terms of those stores. Promotions for other apps from the same developer (e.g., Mitsitsy) may appear inside the app.
        </p>

        <h2>12. Limitation of Liability</h2>
        <p>
          Flipia is provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> without warranty of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages, lost progress, lost in-app purchases, interruption of service, or any other damages arising from your use of the app.
        </p>

        <h2>13. Termination</h2>
        <p>
          You may stop using the app at any time by uninstalling it. You may request the deletion of your account and associated cloud data by contacting us at the email below. We may suspend or terminate accounts that violate these terms.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. The &quot;Last updated&quot; date above will reflect any change. Your continued use of Flipia after a change constitutes acceptance of the new terms.
        </p>

        <h2>15. Governing Law</h2>
        <p>
          These terms are governed by the law applicable to your country of residence to the extent required by mandatory consumer protection rules. Any dispute will first be addressed through good-faith communication with us before any other action.
        </p>

        <h2>16. Contact</h2>
        <p>
          For any question regarding these terms: <strong>simplice2236@gmail.com</strong>
        </p>
      </article>
    );
  }

  return (
    <article className="prose prose-neutral max-w-none font-body">
      <h1 className="font-display text-3xl font-bold text-text-primary">
        Conditions d&apos;utilisation
      </h1>
      <p className="text-text-secondary">Dernière mise à jour : Mai 2026</p>

      <h2>1. Acceptation</h2>
      <p>
        En téléchargeant, installant ou utilisant Flipia (l&apos;«&nbsp;application&nbsp;»), vous acceptez d&apos;être lié par ces Conditions d&apos;utilisation. Si vous n&apos;êtes pas d&apos;accord, veuillez désinstaller l&apos;application et cesser de l&apos;utiliser.
      </p>

      <h2>2. Description du service</h2>
      <p>
        Flipia est un jeu mobile gratuit de cartes mémoire disponible sur Android et iOS. Le service comprend&nbsp;:
      </p>
      <ul>
        <li>Des modes solo contre des adversaires IA de difficultés variables</li>
        <li>Du multijoueur 1v1 en temps réel via codes room et matchmaking automatique</li>
        <li>Des profils joueurs, des classements publics et plus de 20 achievements</li>
        <li>Une récompense XP quotidienne et un système de progression (niveaux, séries)</li>
        <li>Des achats intégrés optionnels (packs cosmétiques et version Premium)</li>
        <li>Des publicités fournies par Google AdMob (interstitielles et récompensées)</li>
      </ul>

      <h2>3. Éligibilité et âge</h2>
      <p>
        Flipia s&apos;adresse aux utilisateurs âgés de <strong>13 ans ou plus</strong>. Si vous résidez dans l&apos;Espace économique européen ou au Royaume-Uni et que vous avez moins de 16 ans, vous devez obtenir le consentement vérifiable d&apos;un parent ou tuteur légal avant d&apos;utiliser l&apos;application. Nous ne permettons pas sciemment aux enfants de moins de 13 ans d&apos;utiliser le service.
      </p>

      <h2>4. Compte utilisateur</h2>
      <ul>
        <li>Vous pouvez vous connecter avec <strong>Google Sign-In</strong> pour sauvegarder votre progression dans le cloud et jouer en multijoueur, ou jouer en <strong>Invité</strong> avec un identifiant lié localement.</li>
        <li>Vous êtes responsable de la sécurité de votre compte Google et de toute activité effectuée sous votre compte.</li>
        <li>Vous devez choisir un <strong>pseudo</strong> qui ne soit ni offensant, ni trompeur, ni contrefaisant, ni usurpateur d&apos;une autre personne ou marque.</li>
        <li>Nous nous réservons le droit de supprimer ou renommer les comptes dont le pseudo enfreint ces règles.</li>
      </ul>

      <h2>5. Utilisation acceptable</h2>
      <p>En utilisant Flipia, vous vous engagez à ne PAS&nbsp;:</p>
      <ul>
        <li>Utiliser des triches, bots, clients modifiés, automatisations ou exploits pour obtenir un avantage injuste</li>
        <li>Harceler, menacer ou nuire à d&apos;autres joueurs via les codes room, le matchmaking ou tout autre moyen</li>
        <li>Tenter de perturber les serveurs, les salles multijoueur ou l&apos;expérience des autres joueurs</li>
        <li>Décompiler, rétro-ingéniérer ou tenter d&apos;extraire le code source de l&apos;application</li>
        <li>Contourner, désactiver ou interférer avec les systèmes de publicité ou d&apos;achats intégrés</li>
        <li>Créer plusieurs comptes pour manipuler les classements, achievements ou le matchmaking</li>
      </ul>

      <h2>6. Achats intégrés</h2>
      <p>
        Flipia propose des achats intégrés optionnels à paiement unique, traités via Google Play Billing ou l&apos;App Store d&apos;Apple, avec gestion par <strong>RevenueCat</strong>. Les produits actuels sont&nbsp;:
      </p>
      <ul>
        <li><strong>Flipia Premium (à vie)</strong>&nbsp;: supprime toutes les publicités, octroie un bonus XP de +10&nbsp;%, débloque un avatar couronne et le plateau premium.</li>
        <li><strong>Pack Angel</strong>&nbsp;: débloque l&apos;avatar ange et le plateau associé (purement cosmétique).</li>
        <li><strong>Pack Demon</strong>&nbsp;: débloque l&apos;avatar démon et le plateau associé (purement cosmétique).</li>
      </ul>
      <p>
        Les prix sont affichés dans votre monnaie locale par le store concerné. La <strong>restauration des achats</strong> est disponible depuis la boutique in-app et les écrans de paywall. Les <strong>remboursements</strong> relèvent exclusivement de la politique du store auprès duquel vous avez acheté (Google Play ou App Store) et ne sont pas accordés directement par nous. Certains produits peuvent être <strong>indisponibles dans certains pays</strong> en raison de restrictions des stores. Tous les packs cosmétiques sont purement visuels et ne confèrent aucun avantage compétitif.
      </p>

      <h2>7. Publicité</h2>
      <p>
        Flipia affiche des publicités fournies par <strong>Google AdMob</strong> pour soutenir la version gratuite du jeu&nbsp;:
      </p>
      <ul>
        <li>Les <strong>publicités interstitielles</strong> sont affichées environ une fois toutes les trois parties pour les utilisateurs non-Premium.</li>
        <li>Les <strong>publicités récompensées</strong> sont optionnelles et peuvent être visionnées en échange de bonus XP.</li>
        <li>L&apos;achat de <strong>Flipia Premium</strong> supprime définitivement toutes les publicités.</li>
      </ul>
      <p>
        La personnalisation des publicités dépend de votre consentement et des préférences publicitaires de votre appareil. Voir notre Politique de confidentialité pour les détails.
      </p>

      <h2>8. Contenu utilisateur et visibilité publique</h2>
      <p>
        Votre <strong>pseudo</strong>, votre <strong>avatar</strong> et vos statistiques de jeu (XP, niveau, victoires, parties jouées) sont visibles par les autres joueurs via le classement global, les profils joueurs et les lobbies multijoueur. N&apos;incluez aucune information personnelle (vrai nom, adresse, téléphone, email) dans votre pseudo. Nous pouvons retirer sans préavis tout contenu enfreignant ces conditions.
      </p>

      <h2>9. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu, du design, du code, des graphismes, des sons et des assets de Flipia est protégé par le droit d&apos;auteur et autres lois sur la propriété intellectuelle. Vous ne pouvez ni reproduire, ni distribuer, ni modifier, ni créer d&apos;œuvre dérivée sans notre autorisation écrite préalable. Le nom et le logo Flipia restent notre propriété exclusive.
      </p>

      <h2>10. Disponibilité et modifications du service</h2>
      <p>
        Nous nous efforçons de maintenir Flipia disponible en continu mais ne garantissons pas un service ininterrompu, sécurisé ou exempt d&apos;erreurs. Nous pouvons à tout moment ajouter, modifier, suspendre ou retirer des fonctionnalités (modes de jeu, packs, publicités, matchmaking). Pour maintenir un matchmaking réactif, si aucun adversaire humain n&apos;est trouvé dans un court délai, un <strong>bot peut rejoindre votre partie</strong>.
      </p>

      <h2>11. Stores et plateformes tierces</h2>
      <p>
        Flipia est distribué via le <strong>Google Play Store</strong> et l&apos;<strong>Apple App Store</strong>. Votre utilisation de l&apos;application sur ces plateformes est également soumise aux conditions de ces stores. Des promotions pour d&apos;autres applications du même développeur (ex.&nbsp;: Mitsitsy) peuvent apparaître dans l&apos;application.
      </p>

      <h2>12. Limitation de responsabilité</h2>
      <p>
        Flipia est fourni <strong>«&nbsp;tel quel&nbsp;»</strong> et <strong>«&nbsp;tel que disponible&nbsp;»</strong>, sans garantie d&apos;aucune sorte. Dans la limite maximale autorisée par la loi, nous ne sommes pas responsables des dommages indirects, accidentels ou consécutifs, des pertes de progression, des pertes d&apos;achats intégrés, des interruptions de service ou de tout autre dommage résultant de votre utilisation de l&apos;application.
      </p>

      <h2>13. Résiliation</h2>
      <p>
        Vous pouvez cesser d&apos;utiliser l&apos;application à tout moment en la désinstallant. Vous pouvez demander la suppression de votre compte et des données cloud associées en nous contactant à l&apos;email ci-dessous. Nous pouvons suspendre ou résilier les comptes qui enfreignent ces conditions.
      </p>

      <h2>14. Modifications des conditions</h2>
      <p>
        Nous pouvons mettre à jour ces Conditions d&apos;utilisation périodiquement. La date «&nbsp;Dernière mise à jour&nbsp;» ci-dessus reflètera toute modification. L&apos;utilisation continue de Flipia après une modification vaut acceptation des nouvelles conditions.
      </p>

      <h2>15. Loi applicable</h2>
      <p>
        Ces conditions sont régies par la loi applicable à votre pays de résidence dans la mesure exigée par les règles impératives de protection des consommateurs. Tout litige sera d&apos;abord traité par une communication de bonne foi avec nous avant toute autre action.
      </p>

      <h2>16. Contact</h2>
      <p>
        Pour toute question relative à ces conditions&nbsp;: <strong>simplice2236@gmail.com</strong>
      </p>
    </article>
  );
}

export default function TermsPage() {
  return (
    <LegalLayout>
      <TermsContent />
    </LegalLayout>
  );
}
