# LEGAL-TODO: Offene Punkte vor dem Livegang

Stand: Oktober 2026. Das ist eine Arbeitsliste, keine Rechtsberatung. Impressum und Datenschutzerklaerung
sollten vor der Veroeffentlichung von einer fachkundigen Stelle (Rechtsanwalt, Datenschutzbeauftragte/r
oder Fachkraft fuer Datenschutz) geprueft werden.

## Aktueller Stand

- **Impressum und Datenschutzerklaerung** beschreiben den tatsaechlichen Website-Stand, ohne sichtbare Platzhalter.
  Sie sind **nicht rechtlich geprueft** und muessen vor dem Livegang geprueft werden.
- **Calendly ist der primaere Kontaktweg.** Link: `https://calendly.com/leongolembek` (Konstante `CALENDLY_URL`
  in `src/siteConfig.js`). Der Button "Demo-Termin auswählen" oeffnet die externe Calendly-Seite in einem
  neuen Tab (`target="_blank"`, `rel="noopener noreferrer"`). Calendly ist nicht in die Seite eingebettet.
- **Kein Kontaktformular.** Das Formular wurde vollstaendig entfernt (keine Formularuebermittlung, kein
  Formularanbieter, kein `VITE_FORM_ENDPOINT`). Kontakt ausserdem per E-Mail und Telefon.
- **Oeffentliche E-Mail-Adresse:** `info@anvero.tech` (vorher `info@anvero.de`, ueberall ersetzt). Das Postfach
  ist noch nicht eingerichtet (geplant: Zoho Mail). Vor dem Livegang einrichten und testen.

## Impressum (`src/pages/Impressum.jsx`)

Aufgefuehrt sind nur die bestaetigten Angaben: ANVERO (Einzelunternehmen), Inhaber Leon Raik Golembek,
Zeppelinstrasse 5, 25451 Quickborn, Deutschland, Telefon, E-Mail.

Zu klaeren:

- [ ] **USt-IdNr.:** Bisher "nicht vorhanden oder nicht angegeben". Falls eine vergeben ist (§ 27a UStG),
      muss sie ins Impressum. Falls keine vorhanden ist, bleibt der Eintrag weg.
- [ ] **Handelsregister:** Bisher "nicht vorhanden". Dann ist keine Angabe noetig.
- [ ] **Verantwortlich fuer Inhalte (§ 18 Abs. 2 MStV):** Nur relevant, sobald journalistisch-redaktionelle
      Inhalte erscheinen (z. B. Ratgeber). Dann Name und Anschrift ergaenzen. Pruefen lassen.
- [ ] **Verbraucherstreitbeilegung (§ 36 VSBG):** Ob und welche Aussage noetig ist, haengt davon ab, ob
      Verbraucher angesprochen werden. Die Seite richtet sich an Unternehmen. Pruefen lassen.
- [ ] **Berufs- oder erlaubnispflichtige Taetigkeit / Aufsichtsbehoerde:** Nur falls zutreffend.
- [ ] **Kleinunternehmerregelung:** Falls § 19 UStG genutzt wird, ist das fuer Angebote und Rechnungen
      relevant (nicht zwingend im Impressum). Mit Steuerberatung klaeren.
- [ ] Telefonnummer bestaetigen (`0152 31792983`, Link `tel:+4915231792983`).

## Datenschutzerklaerung (`src/pages/Datenschutz.jsx`)

Der Text beschreibt nur, was sich aus dem Projektcode und Ihren Angaben belegen laesst. Angaben zu Vercel und
Calendly (Firma, Anschrift, Rolle als Auftragsverarbeiter, Uebermittlung in die USA ueber EU-U.S. Data Privacy
Framework und Standardvertragsklauseln) stammen aus deren eigenen Datenschutzhinweisen, abgerufen am 02.10.2026:
`https://vercel.com/legal/privacy-policy`, `https://calendly.com/legal/privacy-notice`.

Zu pruefen und gegebenenfalls zu ergaenzen:

- [ ] **Gesamttext rechtlich pruefen lassen**, bevor die Seite live geht.
- [ ] **Vercel:** Auftragsverarbeitungsvertrag (DPA) im Vercel-Konto pruefen bzw. abschliessen, Region und Umfang
      der Server-Logs klaeren. Vor dem Livegang bestaetigen, dass in Vercel keine Analytics, Speed Insights oder
      aehnliche Dienste aktiviert sind (sonst stimmt "keine Cookies, kein Tracking" nicht mehr).
- [ ] **Calendly:** DPA mit Calendly pruefen bzw. abschliessen. Einstellungen im eigenen Konto pruefen: welche
      Eingabefelder abgefragt werden (nur Erforderliches), Bestaetigungs- und Erinnerungs-E-Mails, Weiterleitungen,
      Integrationen (z. B. Kalender), Aufbewahrung. Pruefen, ob in der Terminbeschreibung auf die
      Datenschutzerklaerung verwiesen werden soll.
- [ ] **E-Mail-Anbieter fuer `info@anvero.tech` (geplant Zoho Mail):** Erst nach der tatsaechlichen Einrichtung in
      die Datenschutzerklaerung aufnehmen (Anbieter, Sitz, AV-Vertrag, Speicherort). Bis dahin steht dort kein
      Mailanbieter. Danach erneut rechtlich pruefen lassen.
- [ ] **Speicherdauer:** Im Text steht bewusst nur eine allgemeine Formulierung ohne Fristen. Falls konkrete
      Fristen festgelegt werden (Anfragen, Termindaten, E-Mails), eintragen.
- [ ] **Aufsichtsbehoerde:** Zustaendigkeit (ULD Schleswig-Holstein) bestaetigen lassen.
- [ ] **Datenschutzbeauftragte/r:** Voraussichtlich nicht benennungspflichtig, bitte bestaetigen lassen.
- [ ] Cookie-/Einwilligungsbanner: Nach Stand des Codes nicht noetig. Entfaellt, solange keine Dienste ergaenzt
      werden. Calendly wird nur verlinkt, nicht eingebettet.
- [ ] "Keine automatisierte Entscheidungsfindung" gilt fuer die Website. Fuer das Produkt ANVERO selbst
      (Kundendaten, Postfachzugriff) wird eine **eigene** Datenschutz- und AV-Dokumentation benoetigt.
- [ ] Datum "Stand" bei jeder inhaltlichen Aenderung aktualisieren.
- [ ] Falls spaeter wieder ein Formular eingebaut wird: Anbieter, AV-Vertrag, Speicherort und Spamschutz klaeren
      und die Datenschutzerklaerung ergaenzen, bevor es aktiv wird.

## Technischer Ablauf des Produkts (intern, Stand der Angaben des Inhabers)

ANVERO hat keine eigene Oberflaeche. Alles laeuft ueber das Postfach.

Der aktuelle Demo- und Automatisierungsstand wird mit Microsoft Outlook und Make betrieben. Die Produktlogik
ist nicht auf einen bestimmten Postfachanbieter begrenzt. Outlook dient aktuell als Referenzintegration fuer
die Demo. Ablauf der Referenzintegration:

Eingangspostfach (Referenzintegration: Microsoft Outlook, Demo-Postfach)
-> Make ueberwacht das Postfach
-> Make legt den Vorgang in Airtable an
-> Make AI Toolkit (KI) extrahiert strukturierte Angaben
-> Ergebnisse werden in Airtable gespeichert
-> vollstaendige und unvollstaendige Vorgaenge werden unterschiedlich weiterverarbeitet
-> Fehlen Angaben: Rueckfrage liegt als E-Mail-Entwurf im Postfach.
   Sind alle Angaben da (festgelegte Standardleistung): Angebot als PDF und Kunden-E-Mail als Entwurf liegen im Postfach.
-> ein Mitarbeiter des Kunden prueft Angebot und E-Mail und sendet sie selbst. Sonderfaelle erkennt ANVERO
   selbst und gibt sie zur manuellen Pruefung weiter.

Was die Website daraus oeffentlich sagt: "Anfrage rein. Angebot fertig. Sie senden." (H1, eingegrenzt durch die Unterzeile),
"arbeitet direkt im Postfach", "Rueckfrage als Entwurf", "Angebot als PDF", "Kunden-E-Mail als Entwurf",
"Ihr Team prueft und sendet", "kein neues System", "setzt KI zur Auswertung der Anfragetexte ein".

**Begriffe auf der Website (konsistent halten):** "Angebot" bezeichnet immer das fertige Angebot (PDF). "Entwurf"
steht nur fuer die Rueckfrage und die Kunden-E-Mail. Nicht verwenden: "Angebotsentwurf", "fertiger Entwurf",
"Entwurf im Postfach". "Pruefen" und "senden" beschreiben den Schritt des Mitarbeiters ("prueft Angebot und E-Mail
und sendet sie selbst"). "Freigabe" wird nicht als Oberflaechen-Status verwendet.
Auf der Seite steht durchgehend nur "Postfach". Outlook und Microsoft werden oeffentlich nicht genannt, damit
Outlook nicht als Produktgrenze erscheint.

Datenschutzfolgen (vor dem ersten Pilotbetrieb klaeren, nicht auf der Website):
- [ ] **Rollen:** Der Reinigungsbetrieb ist Verantwortlicher, ANVERO verarbeitet im Auftrag. Es wird ein
      **AV-Vertrag** mit jedem Pilotbetrieb gebraucht.
- [ ] **Unterauftragnehmer:** der jeweilige Postfachanbieter des Kunden (in der Referenzintegration Microsoft),
      Make, Airtable und der KI-Anbieter hinter dem Make AI Toolkit. Jeweils AV-Vertraege, Standort der Verarbeitung, Drittlandtransfer (Grundlage?),
      Speicherdauer und Loeschung klaeren und dem Kunden offenlegen.
- [ ] **Datensparsamkeit:** Liest Make das ganze Postfach oder nur einen festgelegten Ordner? Empfehlung: nur
      ein dediziertes Postfach oder einen Ordner fuer Angebotsanfragen.
- [ ] **Postfachzugriff:** Welche Berechtigungen braucht die Anbindung je Postfachanbieter (z. B. Zustimmung
      des Administrators beim Kunden, in der Referenzintegration bei Microsoft)?
- [ ] **Speicherdauer in Airtable** und Loeschkonzept nach Pilotende.
- [ ] **KI-Transparenz:** Die FAQ nennt den KI-Einsatz. Pruefen, ob die Aussage vollstaendig ist (z. B. wohin
      die Texte zur Auswertung gesendet werden) und ob die Kunden das vertraglich wissen muessen.
- [ ] **Zuverlaessigkeit der Extraktion:** KI-Auswertung kann Angaben falsch lesen. Das Team prueft jedes
      Angebot vor dem Senden. Die Seite sagt "Preise nach Ihren hinterlegten Regeln", nicht "fehlerfrei".
- [ ] **Abhaengigkeit von Make und Airtable:** Verfuegbarkeit und Nutzungsbedingungen fuer den gewerblichen
      Einsatz pruefen. Auf der Seite gibt es keine Verfuegbarkeitszusage.
- [ ] **Marken:** "Microsoft" und "Outlook" stehen nicht auf der Seite. Falls spaeter genannt: ohne Logo,
      mit Markenhinweis, rechtlich pruefen.
- [ ] **Offen vom Inhaber:** Wo sieht das Team Sonderfaelle (Ordner, Kennzeichnung, E-Mail)? Gilt "ANVERO sendet
      nie selbst" ausnahmslos? Wie wird die Anbindung beim ersten Pilotbetrieb eingerichtet?

## Interne Klaerungspunkte zu oeffentlichen Aussagen (nicht auf der Website sichtbar)

Die Startseite enthaelt bewusst nur Aussagen, die wir als bestaetigt behandeln. Bitte vor dem Livegang
gegen die Realitaet pruefen. Was nicht stimmt, wird gestrichen oder angepasst.

**Produktaussagen (Wettbewerbsrecht, UWG)**
- [ ] Anfragen werden strukturiert (Objekt, Flaeche, Intervall, Leistung) und fehlende Angaben markiert.
- [ ] Das Angebot wird nach hinterlegten Regeln kalkuliert, ohne geschaetzte Werte. Bei fehlenden Angaben wird
      kein Angebot berechnet, bei widerspruechlichen Angaben oder Sonderfaellen geht der Vorgang zur manuellen
      Pruefung an das Team.
- [ ] Rueckfrage und Kunden-E-Mail liegen als Entwurf im Postfach, bis ein Mitarbeiter sie prueft und selbst
      sendet. ANVERO sendet nicht selbst.
- [ ] Unklare oder untypische Faelle werden gekennzeichnet und an einen Mitarbeiter uebergeben.
- [ ] H1 (vom Inhaber bestaetigt, hier zur Dokumentation): "Anfrage rein. Angebot fertig. Sie senden." (frueher: "Standardangebote automatisch erstellen. Nur noch
      pruefen und senden."). Gilt ausschliesslich fuer die vom Betrieb vorab festgelegten Standardleistungen
      (z. B. Unterhaltsreinigung, Glasreinigung) bei vollstaendigen Angaben. Fehlen Angaben, liegt zuerst die
      Rueckfrage als Entwurf bereit, die der Mitarbeiter ebenfalls prueft und sendet. Sonderfaelle uebernimmt
      das Team manuell. Die Eingrenzung steht direkt in der Unterzeile unter der H1. Wenn sich Umfang oder
      Anbindung aendern, Texte anpassen (Hero, Vorschau, Schritte, FAQ "Was genau macht ANVERO?").
- [ ] "Nur noch pruefen und senden": Der Mitarbeiter muss weder das Angebot noch die Kunden-E-Mail neu schreiben.
      Pruefen heisst auch: falsch erfasste Angaben (KI-Auswertung) erkennen. Bestaetigen, dass das im Betrieb
      so gelebt wird.
- [ ] Postfachanbindung: Die Anbindung je Postfachanbieter wird mit dem Betrieb eingerichtet. Auf der Seite
      stehen keine Systemnamen. Die Postfachanbindung hat Datenschutzfolgen (Zugriffsumfang, Verarbeitung der
      Kundenanfragen) und gehoert in die produktbezogene Datenschutz- und AV-Dokumentation.
- [ ] Problem-Abschnitt: "Fläche, Intervall oder Zeiten fehlen oft schon in der ersten Anfrage" ist eine Erfahrungsaussage
      ohne Zahl. Bestaetigen, dass sie aus Ihrer Praxis stammt.
- [ ] Aus dem oeffentlichen Text entfernt, weil nicht bestaetigt: "Jeder Schritt dokumentiert/nachvollziehbar",
      "kleine, mittlere und grosse Gebaeudereinigungen", "Ihr Team arbeitet im gewohnten Postfach weiter",
      "Kein allgemeiner KI-Assistent". Nur wieder aufnehmen, wenn belegt.

**Zeitersparnis und Geschwindigkeit (neu)**
- [ ] Zeitangaben auf der Seite: Hero und Abschnitte enthalten keine Zeitzusage. Uebrig sind die Testdaten-Uhrzeiten
      in den drei Beispielablaeufen der Weiche und die FAQ "Wie schnell liegt ein Angebot bereit?". Die Antwort sagt
      jetzt: "Das haengt von der Anbindung Ihres Postfachs ab. In der Demo liegen ... nach wenigen Minuten bereit".
      Gedeckt durch die Angabe des Inhabers (Demo: 1-2 Minuten). Beim Kunden haengt es von der
      Make-Abfragehaeufigkeit ab. Falls Kundenanbindungen deutlich langsamer laufen, Antwort pruefen.
- [ ] FAQ "Kann ANVERO falsche Preise erfinden?": Antwort lautet jetzt "ANVERO erfindet keine Preise. Die Angaben
      werden nach Ihren hinterlegten Regeln verarbeitet. Ihr Team prueft jedes Angebot vor dem Senden." (kein
      absolutes "Nein" mehr, weil die KI-Auswertung Angaben falsch lesen kann).
- [ ] "Sonderfaelle erkennt ANVERO selbst" (Kontrolle, FAQ) bleibt, weil vom Inhaber bestaetigt. Falls in
      Kundenanbindungen Sonderfaelle nicht zuverlaessig erkannt werden, abschwaechen.
- [ ] Arbeitsteilung: Die acht Schritte stehen als Tabelle, gekennzeichnet als "Typischer Ablauf einer
      Standardanfrage". Bestaetigen, dass sie der Praxis in Gebaeudereinigungen entsprechen. Der Satz "7 von 8
      Arbeitsschritten uebernimmt ANVERO" wird bewusst nicht verwendet.
- [ ] Zeitrechner: Zwei Eingaben (Standardangebote pro Monat, Minuten pro Angebot heute), jeweils Schieberegler
      plus Zahlenfeld. Fuer Pruefen und Senden mit ANVERO wird fest mit 5 Minuten gerechnet (Vorgabe des Inhabers:
      "wenige Minuten, abhaengig von der Person"), nicht einstellbar. Sichtbar ist nur das Ergebnis pro Monat, ohne
      Rechenweg und ohne Jahreshochrechnung. Der Hinweis darunter nennt die 5 Minuten ausdruecklich als Beispielwert,
      Rueckfragen und Sonderfaelle als nicht eingerechnet und schliesst eine Zusage aus. Weil der Wert fest ist, ist
      er eine eigene Aussage: einmal messen und den Rechner vor dem Livegang rechtlich ansehen lassen (UWG).
**Pilotangebot (Abschnitt "Pilotphase")**
- [ ] "Vergünstigte Pilotkonditionen": Konditionen intern festlegen, bevor die erste Demo stattfindet.
      Auf der Website stehen keine Zahlen. Die Details werden in der Demo besprochen.
- [ ] "Ausgewaehlte Gebaeudereinigungen": Es muss tatsaechlich eine Auswahl stattfinden.
- [ ] Keine Fristen, keine Platzzahlen, keine "nur noch"-Aussagen auf der Seite. So lassen.
- [ ] "Persoenliche Begleitung" und "direkter Kontakt zum Gruender": Es muss auch kapazitaetsseitig
      machbar sein, Pilotbetriebe so zu betreuen.
- [ ] "Die Demo ist unverbindlich": Bestaetigen, dass daraus keine Verpflichtung entsteht.

**Gruenderabschnitt**
- [ ] Der Abschnitt nennt nur Name, Rolle und Kontakt. Ergaenzbar, sobald vorhanden: Foto, kurze Vita,
      Motivation. Nur Wahres, nichts Erfundenes.

**FAQ "Wie sieht es mit dem Datenschutz aus?"**
- [ ] Die Antwort sagt, dass Datenschutz und Datenverarbeitung vor dem Start gemeinsam besprochen werden.
      Das ist eine Zusage. Bestaetigen, dass sie so eingehalten wird, sonst die Frage entfernen.

**Calendly**
- [ ] Der Button heisst "Demo-Termin auswählen", weil nur der Profil-Link bekannt ist. Sobald ein
      20-Minuten-Termin existiert: `CALENDLY_URL` auf diesen Termin setzen und `CALENDLY_LABEL`
      auf "20-Minuten-Demo buchen" aendern (`src/siteConfig.js`).

**Oeffentlich sichtbar, aber noch offen (vor Livegang schliessen)**
- [ ] `info@anvero.tech` steht auf der Website, das Postfach ist aber noch nicht eingerichtet. Vor dem Livegang
      einrichten (Mailanbieter, DNS: MX, SPF, DKIM, DMARC) und mit einer Test-Mail pruefen.

## Kontaktwege und Texte auf der Startseite

- [ ] Kein Kontaktformular. Kontaktwege: Calendly (primaer), E-Mail, Telefon. Unter dem Calendly-Button im
      Demo-Bereich steht ein kurzer Hinweis auf die externe Calendly-Seite mit Link zur Datenschutzerklaerung.
- [ ] Die Aussage zur Antwortzeit wurde entfernt. Nur wieder aufnehmen, wenn sie eingehalten wird.
- [ ] Keine Zusagen zu Antwort- oder Terminfristen ergaenzen, die nicht eingehalten werden.
- [ ] Produktaussagen auf der Seite ("Gesendet wird nur durch Ihr Team", "Preise nach Ihren hinterlegten Regeln",
      "Fehlende Angaben werden nicht geraten", "Sonderfaelle bleiben bei Ihrem Team") muessen dem tatsaechlichen
      Produkt entsprechen (Wettbewerbsrecht, UWG).
- [ ] Beispieldaten im Hero ("Musterreinigung GmbH", "Beispiel GmbH", "Angebot Nr. 0001") und im Ablauf sind
      erfundene Testdaten und als "Beispielangebot mit Testdaten" bzw. "Beispielablauf mit Testdaten"
      gekennzeichnet. Das beibehalten. Gleiches gilt fuer das OG-Bild (`public/og-image.png`).

## Technik (Vercel und Betrieb)

- [ ] Vercel-Projekt anlegen/verbinden. Framework "Vite", Build `npm run build`, Output `dist`
      (steht bereits in `vercel.json`).
- [ ] Domain `anvero.tech` im Vercel-Projekt hinzufuegen und DNS wie angezeigt setzen (A-Record bzw. CNAME).
- [ ] Entscheiden: `anvero.tech` oder `www.anvero.tech` als Hauptadresse. Die andere Variante in Vercel als
      Weiterleitung (308) auf die Hauptadresse einrichten. Im Projekt ist ueberall `https://anvero.tech` gesetzt.
- [ ] Alte Domains (`anvero.de`, `www.anvero.de`): Falls sie als Website geplant waren, bewusst
      weiterleiten oder abschalten. Als Website-URL wird sie im Projekt nirgends verwendet.
- [ ] HTTPS und Zertifikat: Vercel stellt sie automatisch aus. Nach dem Livegang kontrollieren.
- [ ] Derzeit keine Umgebungsvariablen noetig (Formular entfernt, `.env.example` enthaelt nur einen Hinweis).
      Hinweis: Werte mit Praefix `VITE_` sind im Browser sichtbar. Keine Geheimnisse dort ablegen.
- [ ] Nach dem Deployment testen: `/`, `/impressum`, `/datenschutz` direkt aufrufen und neu laden,
      `/robots.txt`, `/sitemap.xml`, unbekannte URL (muss 404 liefern), Header (z. B. mit
      securityheaders.com).
- [ ] Content-Security-Policy: Noch nicht gesetzt. Erst nach einem Test mit dem echten Build einfuehren
      (Inline-`style` fuer die Animationsverzoegerung im Ablauf braucht `style-src 'unsafe-inline'`; zuerst als `Content-Security-Policy-Report-Only` testen). HSTS nicht blind setzen, sondern nach der Domainverbindung den echten Header von Vercel pruefen.
- [ ] Google Search Console und Bing Webmaster Tools: Domain verifizieren, Sitemap `https://anvero.tech/sitemap.xml` einreichen.
- [x] `public/favicon.svg`, `public/apple-touch-icon.png` (180x180), `public/og-image.png` (1200x630) angelegt (Logo "anvero." bzw. "a." auf Petrol, Hero-Text, Beispielangebot mit Testdaten). Nach dem Livegang Linkvorschau mit dem LinkedIn Post Inspector pruefen.
- [ ] Prerendering einplanen: Impressum und Datenschutz werden aktuell erst im Browser per JavaScript
      aufgebaut (Titel und Canonical werden dort gesetzt). Fuer Crawler ohne JavaScript und
      fuer Link-Vorschauen waere statisches HTML besser.
