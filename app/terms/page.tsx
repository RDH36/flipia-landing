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
        <p className="text-text-secondary">Last updated: March 2026</p>

        <h2>1. Acceptance</h2>
        <p>
          By downloading or using Flipia, you agree to these Terms of Service. If you do not agree, do not use the app.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          Flipia is a free mobile memory card game launching first on Android, with iOS to follow. It includes solo modes against AI opponents and real-time 1v1 multiplayer via room codes.
        </p>

        <h2>3. User Account</h2>
        <ul>
          <li>You must authenticate via Google Sign-In to use multiplayer features and save your progress.</li>
          <li>You are responsible for maintaining the security of your account.</li>
          <li>You must choose an appropriate nickname that does not violate the rights of others.</li>
        </ul>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use cheats, bots, or exploits to gain unfair advantages</li>
          <li>Harass other players through room codes or any other means</li>
          <li>Attempt to disrupt the game servers or other players&apos; experience</li>
          <li>Reverse-engineer or decompile the application</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All content, design, code, and assets of Flipia are protected by copyright. You may not reproduce, distribute, or create derivative works without permission.
        </p>

        <h2>6. Availability</h2>
        <p>
          We strive to keep Flipia available at all times but do not guarantee uninterrupted service. We may update, modify, or discontinue features at any time.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Flipia is provided &quot;as is&quot; without warranty. We are not liable for any loss of data, interruption of service, or damages arising from your use of the app.
        </p>

        <h2>8. Changes</h2>
        <p>
          We may update these terms at any time. Continued use of Flipia after changes constitutes acceptance of the new terms.
        </p>

        <h2>9. Contact</h2>
        <p>
          For any questions: <strong>simplice2236@gmail.com</strong>
        </p>
      </article>
    );
  }

  return (
    <article className="prose prose-neutral max-w-none font-body">
      <h1 className="font-display text-3xl font-bold text-text-primary">
        Conditions d&apos;utilisation
      </h1>
      <p className="text-text-secondary">Dernière mise à jour : Mars 2026</p>

      <h2>1. Acceptation</h2>
      <p>
        En téléchargeant ou en utilisant Flipia, vous acceptez ces Conditions d&apos;utilisation. Si vous n&apos;êtes pas d&apos;accord, n&apos;utilisez pas l&apos;application.
      </p>

      <h2>2. Description du service</h2>
      <p>
        Flipia est un jeu mobile gratuit de cartes mémoire. Il sort d&apos;abord sur Android, puis sur iOS. Il comprend des modes solo contre des IA et du multijoueur 1v1 en temps réel via des codes room.
      </p>

      <h2>3. Compte utilisateur</h2>
      <ul>
        <li>Vous devez vous authentifier via Google Sign-In pour le multijoueur et la sauvegarde.</li>
        <li>Vous êtes responsable de la sécurité de votre compte.</li>
        <li>Vous devez choisir un pseudo approprié ne violant pas les droits d&apos;autrui.</li>
      </ul>

      <h2>4. Utilisation acceptable</h2>
      <p>Vous vous engagez à ne pas :</p>
      <ul>
        <li>Utiliser des triches, bots ou exploits pour obtenir un avantage injuste</li>
        <li>Harceler d&apos;autres joueurs via les codes room ou tout autre moyen</li>
        <li>Tenter de perturber les serveurs ou l&apos;expérience des autres joueurs</li>
        <li>Décompiler ou rétro-ingéniérer l&apos;application</li>
      </ul>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        Tout le contenu, design, code et assets de Flipia sont protégés par le droit d&apos;auteur. Vous ne pouvez pas reproduire ou distribuer sans autorisation.
      </p>

      <h2>6. Disponibilité</h2>
      <p>
        Nous nous efforçons de maintenir Flipia disponible mais ne garantissons pas un service ininterrompu. Nous pouvons modifier ou arrêter des fonctionnalités à tout moment.
      </p>

      <h2>7. Limitation de responsabilité</h2>
      <p>
        Flipia est fourni &quot;tel quel&quot; sans garantie. Nous ne sommes pas responsables des pertes de données ou dommages liés à l&apos;utilisation de l&apos;app.
      </p>

      <h2>8. Modifications</h2>
      <p>
        Nous pouvons mettre à jour ces conditions à tout moment. L&apos;utilisation continue de Flipia après les modifications vaut acceptation.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question : <strong>simplice2236@gmail.com</strong>
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
