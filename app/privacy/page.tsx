"use client";

import { LegalLayout } from "@/components/layout/legal-layout";
import { useLocale } from "@/lib/i18n/locale-context";

function PrivacyContent() {
  const { locale } = useLocale();

  if (locale === "en") {
    return (
      <article className="prose prose-neutral max-w-none font-body">
        <h1 className="font-display text-3xl font-bold text-text-primary">
          Privacy Policy
        </h1>
        <p className="text-text-secondary">Last updated: March 2026</p>

        <h2>1. Information We Collect</h2>
        <p>
          Flipia collects minimal data required for the game to function:
        </p>
        <ul>
          <li><strong>Account data:</strong> Google profile information (name, email) used for authentication via Google Sign-In.</li>
          <li><strong>Game data:</strong> Nickname, avatar choice, game stats (wins, losses, XP, level), and leaderboard rankings.</li>
          <li><strong>Technical data:</strong> Device type, OS version, and app version for compatibility and debugging.</li>
        </ul>

        <h2>2. How We Use Your Data</h2>
        <ul>
          <li>Authenticate your account and maintain your session</li>
          <li>Display your profile, stats, and leaderboard position</li>
          <li>Enable real-time multiplayer features (room codes, game state sync)</li>
          <li>Improve the app experience and fix bugs</li>
        </ul>

        <h2>3. Data Storage</h2>
        <p>
          Your data is stored securely via InstantDB, a real-time database service. Game preferences are stored locally on your device using AsyncStorage.
        </p>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell, rent, or share your personal data with third parties. Your game stats are visible to other players only through the in-game leaderboard.
        </p>

        <h2>5. Your Rights</h2>
        <p>You can:</p>
        <ul>
          <li>Access your data through your in-app profile</li>
          <li>Request deletion of your account and associated data</li>
          <li>Modify your nickname and avatar at any time</li>
        </ul>

        <h2>6. Children</h2>
        <p>
          Flipia is not directed at children under 13. We do not knowingly collect data from children under 13.
        </p>

        <h2>7. Contact</h2>
        <p>
          For any privacy-related questions, contact us at: <strong>simplice2236@gmail.com</strong>
        </p>
      </article>
    );
  }

  return (
    <article className="prose prose-neutral max-w-none font-body">
      <h1 className="font-display text-3xl font-bold text-text-primary">
        Politique de confidentialité
      </h1>
      <p className="text-text-secondary">Dernière mise à jour : Mars 2026</p>

      <h2>1. Données collectées</h2>
      <p>
        Flipia collecte un minimum de données nécessaires au fonctionnement du jeu :
      </p>
      <ul>
        <li><strong>Données de compte :</strong> Informations du profil Google (nom, email) utilisées pour l&apos;authentification via Google Sign-In.</li>
        <li><strong>Données de jeu :</strong> Pseudo, avatar, statistiques (victoires, défaites, XP, niveau) et classements.</li>
        <li><strong>Données techniques :</strong> Type d&apos;appareil, version de l&apos;OS et version de l&apos;app pour la compatibilité.</li>
      </ul>

      <h2>2. Utilisation des données</h2>
      <ul>
        <li>Authentifier votre compte et maintenir votre session</li>
        <li>Afficher votre profil, stats et position au classement</li>
        <li>Activer les fonctionnalités multijoueur en temps réel</li>
        <li>Améliorer l&apos;expérience et corriger les bugs</li>
      </ul>

      <h2>3. Stockage des données</h2>
      <p>
        Vos données sont stockées de manière sécurisée via InstantDB. Les préférences de jeu sont stockées localement sur votre appareil.
      </p>

      <h2>4. Partage des données</h2>
      <p>
        Nous ne vendons, louons ou partageons pas vos données personnelles. Vos stats de jeu sont visibles uniquement via le classement in-game.
      </p>

      <h2>5. Vos droits</h2>
      <p>Vous pouvez :</p>
      <ul>
        <li>Accéder à vos données via votre profil in-app</li>
        <li>Demander la suppression de votre compte et données associées</li>
        <li>Modifier votre pseudo et avatar à tout moment</li>
      </ul>

      <h2>6. Mineurs</h2>
      <p>
        Flipia ne s&apos;adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données d&apos;enfants de moins de 13 ans.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question relative à la confidentialité : <strong>simplice2236@gmail.com</strong>
      </p>
    </article>
  );
}

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <PrivacyContent />
    </LegalLayout>
  );
}
