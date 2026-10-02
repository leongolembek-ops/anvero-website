import { LegalPage, Section, linkClass } from "./LegalPage";
import { BUSINESS, CONTACT } from "../siteConfig";

/* Stand Oktober 2026. Beschreibt nur den tatsaechlichen Website-Stand: Hosting bei Vercel, Kontakt per E-Mail
   und Telefon, Calendly als externer Link (nicht eingebettet), kein Formular, keine Cookies, kein Tracking,
   Schrift lokal. Angaben zu Vercel und Calendly aus deren Datenschutzhinweisen (abgerufen 02.10.2026).
   Der E-Mail-Anbieter fuer info@anvero.tech wird erst nach der tatsaechlichen Einrichtung ergaenzt.
   Vor dem Livegang rechtlich pruefen lassen (siehe LEGAL-TODO.md). Keine erfundenen Fristen. */
const external = (href, label) => (
  <a className={linkClass} href={href} target="_blank" rel="noopener noreferrer">
    {label}<span className="sr-only"> (öffnet in neuem Tab)</span>
  </a>
);

export default function Datenschutz() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      path="/datenschutz"
      description="Informationen zur Verarbeitung personenbezogener Daten auf der Website von ANVERO.">
      <p className="pb-8 text-[14px] text-av-muted">Stand: Oktober 2026</p>

      <Section title="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          <strong className="font-semibold text-av-ink">{BUSINESS.name}</strong>, Inhaber {BUSINESS.owner}<br />
          {BUSINESS.street}, {BUSINESS.zip} {BUSINESS.city}, {BUSINESS.country}<br />
          Telefon: <a className={linkClass} href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><br />
          E-Mail: <a className={linkClass} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </Section>

      <Section title="2. Allgemeines">
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website, die Bearbeitung
          von Anfragen und die Anbahnung einer Zusammenarbeit erforderlich ist. Personenbezogene Daten sind alle
          Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.
        </p>
        <p>
          Diese Website enthält kein Kontaktformular. Sie erreichen uns per E-Mail, per Telefon oder über die
          Terminbuchung bei Calendly.
        </p>
      </Section>

      <Section title="3. Hosting und Zugriffsdaten">
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet. Beim
          Aufruf der Website verarbeitet Vercel technisch bedingt Zugriffsdaten, zum Beispiel die IP-Adresse, Datum
          und Uhrzeit des Abrufs, die aufgerufene Adresse sowie Browser- und Systeminformationen. Diese Verarbeitung
          ist erforderlich, um die Website auszuliefern und ihre Sicherheit und Stabilität zu gewährleisten.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
          funktionsfähigen Webauftritt).
        </p>
        <p>
          Vercel verarbeitet diese Daten in unserem Auftrag. Dabei können Daten auch in den USA verarbeitet werden.
          Für solche Übermittlungen stützt sich Vercel nach eigenen Angaben auf das EU-U.S. Data Privacy Framework
          sowie auf Standardvertragsklauseln. Weitere Informationen finden Sie in der{" "}
          {external("https://vercel.com/legal/privacy-policy", "Datenschutzerklärung von Vercel")}.
        </p>
      </Section>

      <Section title="4. Kontaktaufnahme per E-Mail oder Telefon">
        <p>
          Wenn Sie uns per E-Mail an <a className={linkClass} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> oder
          per Telefon kontaktieren, verarbeiten wir Ihre Angaben (zum Beispiel Name, Kontaktdaten und den Inhalt Ihrer
          Nachricht), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
          Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
      </Section>

      <Section title="5. Terminbuchung über Calendly">
        <p>
          Für die Buchung eines Demo-Termins verlinken wir auf Calendly, einen Dienst der Calendly, LLC, 115 E Main
          St., Ste A1B, Buford, GA 30518, USA. Calendly ist nicht in diese Website eingebettet. Erst wenn Sie auf den
          Button klicken, öffnet sich die Seite von Calendly in einem neuen Tab. Beim reinen Aufruf unserer Website
          werden keine Daten an Calendly übertragen.
        </p>
        <p>
          Wenn Sie über Calendly einen Termin buchen, verarbeiten wir die dort von Ihnen eingegebenen Daten (zum
          Beispiel Name, E-Mail-Adresse, gewählter Termin und gegebenenfalls Ihre Anmerkungen), um den Termin
          vorzubereiten und durchzuführen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen), andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einfachen
          Terminvereinbarung). Calendly verarbeitet diese Buchungsdaten in unserem Auftrag.
        </p>
        <p>
          Calendly kann Daten in den USA verarbeiten und stützt sich für Übermittlungen nach eigenen Angaben auf das
          EU-U.S. Data Privacy Framework sowie auf Standardvertragsklauseln. Für die Nutzung der Website von Calendly,
          einschließlich der dort eingesetzten Cookies, gelten die{" "}
          {external("https://calendly.com/legal/privacy-notice", "Datenschutzhinweise von Calendly")}.
        </p>
      </Section>

      <Section title="6. Keine Cookies, kein Tracking, Schrift lokal">
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking- oder Marketingdienste. Die
          verwendete Schriftart wird zusammen mit der Website von unserem Hosting ausgeliefert; es wird dafür keine
          Verbindung zu Schriftarten-Servern Dritter aufgebaut.
        </p>
      </Section>

      <Section title="7. Empfänger">
        <p>
          Eine Weitergabe Ihrer Daten erfolgt nur, soweit dies zur Bereitstellung der Website (Vercel), zur
          Terminbuchung (Calendly) oder zur Bearbeitung Ihrer Anfrage erforderlich ist oder eine rechtliche
          Verpflichtung besteht. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.
        </p>
      </Section>

      <Section title="8. Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist.
          Anfragen und Termindaten löschen wir, wenn sie für die Bearbeitung und eine mögliche Zusammenarbeit nicht
          mehr benötigt werden, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen. In diesem Fall
          werden die Daten bis zum Ablauf der Frist aufbewahrt und für andere Zwecke gesperrt.
        </p>
      </Section>

      <Section title="9. Ihre Rechte">
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
          <a className={linkClass} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
          Für uns zuständig ist das Unabhängige Landeszentrum für Datenschutz Schleswig-Holstein.
        </p>
      </Section>

      <Section title="10. Änderungen dieser Erklärung">
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich die Website, die eingesetzten Dienste oder die
          rechtlichen Anforderungen ändern. Es gilt die jeweils hier veröffentlichte Fassung.
        </p>
      </Section>
    </LegalPage>
  );
}
