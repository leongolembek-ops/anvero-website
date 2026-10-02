# ANVERO Website

Marketing-Website fuer ANVERO, die Angebotsautomatisierung fuer Gebaeudereinigungen.
Stack: Vite + React 19 + Tailwind 3. Domain: `https://anvero.tech`. Hosting: Vercel.

## Starten

Voraussetzung: Node.js 20 oder neuer.

```
npm install
npm run dev       # Entwicklungsserver, http://localhost:5173
npm run build     # Produktions-Build nach dist/
npm run preview   # Build lokal ansehen
```

Hinweis: Der aktuelle Stand wurde ohne Build erstellt (auf dem Entwicklungsrechner war kein Node vorhanden).
Vor dem Livegang einmal `npm run build` ausfuehren und die Seite im Browser pruefen.

## Aktueller Stand

### Produktlogik (Grundlage aller Texte)

ANVERO hat **keine eigene Oberflaeche**. Alles laeuft im bestehenden Postfach des Betriebs:

1. Eine Kundenanfrage kommt per E-Mail im vorgesehenen Postfach an.
2. ANVERO erfasst die Angaben und prueft Pflichtangaben, Standardleistung und Widersprueche.
3. **Fehlen Angaben:** Es wird kein Angebot berechnet. Die Rueckfrage liegt als **Entwurf** im Postfach.
4. **Alle Angaben vorhanden und festgelegte Standardleistung:** Das Angebot wird nach den hinterlegten
   Regeln berechnet und liegt als **PDF** im Postfach, die Kunden-E-Mail als **Entwurf**.
5. **Sonderfall** (keine festgelegte Standardleistung, Widersprueche, besondere Anforderungen): ANVERO erkennt
   das selbst und uebergibt zur manuellen Pruefung an das Team.
6. Ein Mitarbeiter des Betriebs **prueft Angebot und E-Mail und sendet sie selbst**. **ANVERO sendet niemals
   automatisch an Kunden.**

Einschraenkung, die immer gilt: Die Aussage "Standardangebote automatisch erstellen. Nur noch pruefen und
senden." bezieht sich **ausschliesslich auf die vom Betrieb vorab festgelegten Standardleistungen** (z. B.
Unterhaltsreinigung, Glasreinigung) **bei vollstaendigen Angaben**. Die Eingrenzung steht deshalb direkt in der
Unterzeile unter der H1. Die Standardleistungen werden individuell mit dem Kunden abgesprochen.

**Referenzintegration:** Der aktuelle Demo- und Automatisierungsstand wird mit Microsoft Outlook und Make
betrieben. Die Produktlogik ist nicht auf einen bestimmten Postfachanbieter begrenzt. Outlook dient aktuell als
Referenzintegration fuer die Demo. Auf der Website steht deshalb durchgehend nur "Postfach", ohne Anbieternamen.
Technischer Ablauf und Datenschutzfolgen (Make, Airtable, KI): siehe `LEGAL-TODO.md`.

### Begriffsregeln (auf der gesamten Website einhalten)

- **"Angebot"** bezeichnet immer das fertige Angebot als **PDF**.
- **"Entwurf"** bezeichnet **nur** die Rueckfrage und die Kunden-E-Mail. Nicht verwenden fuer das Angebot:
  "Angebotsentwurf", "fertiger Entwurf", "Entwurf im Postfach".
- **"Pruefen und senden"** beschreibt die Aufgabe des Mitarbeiters ("prueft Angebot und E-Mail und sendet sie
  selbst"). "Freigabe" wird nicht als Oberflaechen-Status verwendet.
- **ANVERO sendet niemals automatisch.**
- Produktbezeichnung: "Angebotsautomatisierung". Nicht "Software", damit niemand eine Oberflaeche erwartet.
- Nur "Postfach", kein Anbietername (Outlook, Microsoft) in den oeffentlichen Texten.

### Hero (oberster Bereich)

- **H1:** "Anfrage rein. Angebot fertig. Sie senden." ("Sie senden." in Petrol, der Farbe fuer Sie und Ihr Team)
- **Zeile ueber der H1:** "Angebotsautomatisierung fuer Gebaeudereinigungen" (schlichter Text, kein Badge).
- **Unterzeile:** "Fuer von Ihnen festgelegte Standardleistungen erstellt ANVERO das Angebot direkt im Postfach:
  als PDF mit Kunden-E-Mail im Entwurf. Fehlt eine Angabe, liegt die Rueckfrage bereit. Ihr Team prueft und sendet."
- **Hauptbutton:** "Demo-Termin auswaehlen" (Calendly, neuer Tab). Daneben Textlink "Ablauf an einem Beispiel
  ansehen" (`#ablauf`). Darunter "Persoenlich mit dem Gruender · an einer Ihrer Anfragen · unverbindlich".
- **Hero-Visual: das Angebot erklaert sich selbst** ("Beispielangebot mit Testdaten"): Angebots-PDF
  (Musterreinigung GmbH an Beispiel GmbH, Angebot Nr. 0001, `Angebot_Beispiel-GmbH.pdf`). Jede Zeile zeigt mit
  einem grauen Etikett, woher sie kommt: "aus der Anfrage erkannt" (Leistung, Objekt, Flaeche, Intervall),
  "per Rueckfrage ergaenzt" (Zeiten), "nach Ihren Regeln berechnet" (Preis, ohne Betrag). Unten in Petrol:
  "Kunden-E-Mail mit PDF liegt als Entwurf im Postfach. Ihr Team prueft und sendet."

### Gestaltung

- Farb-Tokens `av.*` in `tailwind.config.js` (Farben der Petrol-Variante): paper #FAFAF7, ink #0E1F1E,
  body #3D4B4A, muted #5E6B6A, line #E3E6E3, tag #ECEEEC, petrol #0F5C58, petrol-light #8FC9C2 (auf dunkel),
  night #0F2928 (Kontrolle, Footer). Schatten `shadow-paper` nur fuer das PDF.
- **Eine Akzentfarbe, feste Bedeutung:** Petrol = Sie und Ihr Team (Pruefen, Senden, "Sie senden." in der H1,
  Calendly-Button, Links). ANVERO wird neutral dargestellt (dunkle Schrift, graue Etiketten). Der Anfragende
  bleibt grau. Ocker/Gold wird nicht mehr verwendet.
- **Logo:** Wortmarke "anvero." (klein geschrieben, Inter SemiBold, Laufweite -0,035em), der Punkt in Petrol wie bei
  "Sie senden." in der H1. Auf dunklem Grund: Schrift weiss, Punkt petrol-light. Im Text heisst die Firma weiterhin
  "ANVERO". Auf der Website als Komponente `Wordmark` in `src/components/Layout.jsx` (Header, Footer). Dateien in
  `brand/` (wird nicht veroeffentlicht): `anvero-logo.svg`, `anvero-logo-weiss.svg` (Schrift als Pfade, ohne
  Schriftabhaengigkeit) und `anvero-logo-calendly.png` (transparent, fuer Calendly). Favicon und Apple-Icon zeigen
  "a." auf Petrol.
- Keine Karten als Dekoration, kein Hintergrundraster, kein Leuchten. Inhalte stehen frei, getrennt durch
  Haarlinien und Weissraum. Nur PDF und E-Mails haben Flaeche und Schatten.
- Schrift Inter, Ueberschriften in 600, Fliesstext 17 px. Keine Serifenschrift (wuerde ein neues Paket brauchen).
- CTA: Petrol, weisse Schrift, Ecken 10 px, kein Leuchtschatten, kein Hochspringen, bricht nicht um.

### Seitenaufbau und Anker

Hero (`#top`) - E-Mail-Verlauf mit Weiche (`#ablauf`) - Zeitersparnis und Rechner (`#zeit`) - Kontrolle
(`#kontrolle`) - Pilotphase (`#pilot`) - Gruender (`#gruender`) - FAQ (`#faq`) - Demo mit Calendly, E-Mail und
Telefon (`#demo`). Navigation im Header: Ablauf, Zeitersparnis, Kontrolle, Pilotphase, FAQ. Alle Anker laufen ueber
`/#...`, damit sie auch auf Unterseiten wie `/impressum` funktionieren.

**E-Mail-Verlauf mit Weiche (klickbar):** Hinweis "Waehlen Sie einen Fall, um den Ablauf zu sehen." und drei
Auswahlkarten mit Kreis (Radiogruppe, per Klick und Pfeiltasten bedienbar): Alles da (Angebot als PDF und
Kunden-E-Mail) · Etwas fehlt (Rueckfrage als Entwurf, vorausgewaehlt) · Sonderfall (manuelle Pruefung durch Ihr Team).
Darunter der Ablauf des gewaehlten Falls als kurze Zeilen mit Uhrzeit (Testdaten), die sich nacheinander einblenden
(`.flow-row` in `src/index.css`, bei reduzierter Bewegung ohne Animation). Feste Mindesthoehe, damit die Seite beim
Umschalten nicht springt (nur ab `sm`; mobil liegen die Karten ueber der Liste, dort keine Mindesthoehe, damit keine
Leerflaeche entsteht). H2: "ANVERO prueft jede Anfrage und waehlt den passenden Weg." Beispiel Sonderfall: "Reinigung nach einem Wasserschaden im Lager". Kunde grau, ANVERO
dunkel, Sie in Petrol, jeweils mit eigenem Symbol. Keine Karten, nur Haarlinien. Am Ende die
Vertrauenszeile (unveraendert): "Kein neues System. Keine unkontrollierten Sendungen. Ihr Team arbeitet im
bestehenden Postfach und sendet nur, was geprueft wurde." Der fruehere Abschnitt "Drei Wege" ist entfallen.

**Zeitersparnis und Rechner:** Ueberschrift "Weniger manuelle Schritte zwischen Anfrage und Angebot.", Text "Die
wiederkehrenden Schritte uebernimmt ANVERO. Bei Ihrem Team bleiben Pruefen und Senden." Arbeitsteilung als Tabelle
mit einer Zeile pro Schritt (Spalten Schritt, Heute, Mit ANVERO), gekennzeichnet als "Typischer Ablauf einer
Standardanfrage". In der Spalte "Mit ANVERO" graue Etiketten "ANVERO", in der letzten Zeile "Pruefen und senden"
ein Petrol-Etikett "Ihr Team". Der Satz "7 von 8
Arbeitsschritten uebernimmt ANVERO" wird ausdruecklich nicht verwendet. Keine Balken, keine durchgestrichene Liste.
Rechner mit zwei Eingaben, jeweils nativer Schieberegler (`input type="range"`) plus Zahlenfeld, beide synchron
(`CALC_FIELDS` und `CalcField` in `src/App.jsx`): Standardangebote pro Monat (Start 30, 1 bis 300) und Minuten pro
Angebot heute (Start 45, 5 bis 180, inklusive Kalkulation, Angebot und E-Mail). Leere oder ungueltige Eingaben
ergeben 0 statt NaN, Werte ausserhalb des Bereichs werden begrenzt, beim Verlassen des Zahlenfelds wird der Wert
bereinigt. Fuer Pruefen und Senden mit ANVERO wird fest mit 5 Minuten gerechnet (`CHECK_MINUTES`), kein
Eingabefeld (Entscheidung des Inhabers). Sichtbar ist nur das Ergebnis "20 Stunden" und "mögliche Zeitersparnis
pro Monat", ohne Rechenweg und ohne Jahreshochrechnung. Direkt darunter: "Beispielrechnung auf Grundlage Ihrer
Angaben. Die 5 Minuten sind ein Beispielwert fuer Pruefen und Senden mit ANVERO. Rueckfragen und Sonderfaelle sind
nicht eingerechnet. Keine Zusage einer bestimmten Bearbeitungszeit."

Die Seite zeigt keine erfundenen Kunden, Referenzen, Zitate, Logos oder Zahlen. Beispiele sind als Beispiele
gekennzeichnet.

### Kontaktwege (kein Formular)

- **Calendly (primaerer Kontaktweg):** `https://calendly.com/leongolembek`, Konstante `CALENDLY_URL` in
  `src/siteConfig.js`. Button "Demo-Termin auswaehlen" (Header, mobiles Menue, Hero, Zeitersparnis, Pilot,
  Demo-Bereich, Footer-Link) oeffnet die externe
  Seite in einem neuen Tab (`target="_blank"`, `rel="noopener noreferrer"`). Nicht eingebettet. Nur Links mit
  `https://calendly.com/` werden akzeptiert. Solange nur der allgemeine Profil-Link verwendet wird, bleibt die
  Beschriftung "Demo-Termin auswaehlen" (`CALENDLY_LABEL`). "20-Minuten-Demo buchen" erst verwenden, wenn ein
  direkter 20-Minuten-Termin-Link existiert.
- **E-Mail und Telefon:** `info@anvero.tech` und `0152 31792983` (Demo-Bereich, Gruender, Footer, FAQ, Rechtsseiten).
- **Kein Kontaktformular:** Das Formular wurde vollstaendig entfernt (Felder, Validierung, `fetch`, Honeypot,
  `VITE_FORM_ENDPOINT`). Es gibt keine Formularuebermittlung und keinen Formularanbieter. Die Website braucht
  derzeit keine Umgebungsvariablen.

### Domain, Rechtliches, Hosting

- **Domain:** Einzige Website-URL ist `https://anvero.tech` (`index.html`, `public/robots.txt`,
  `public/sitemap.xml`, `SITE_URL` in `src/siteConfig.js`). Oeffentliche E-Mail-Adresse: `info@anvero.tech`
  (`CONTACT` in `src/siteConfig.js`). Das Postfach muss vor dem Livegang eingerichtet sein (Mailanbieter, DNS:
  MX, SPF, DKIM, DMARC). Das interne Demo-Postfach fuer Make und Tests steht bewusst nicht auf der Website.
- **Seiten:** `/impressum` und `/datenschutz` (`src/pages/`), im Footer verlinkt. Routing ohne Zusatzpaket in
  `src/App.jsx`. `vercel.json` liefert beide Pfade per Rewrite auf `index.html` aus. Unbekannte Pfade ergeben
  einen echten 404.
- **Stammdaten zentral:** `src/siteConfig.js` (Firmen- und Kontaktdaten, Calendly).
- **`public/robots.txt`:** Aktuell `Disallow: /` (reine Vercel-Testversion). Vor dem Livegang auf
  `https://anvero.tech` wieder `Allow: /` und die Sitemap-Zeile `Sitemap: https://anvero.tech/sitemap.xml`
  eintragen.
- **Vercel:** Framework Vite, Build `npm run build`, Output `dist` (in `vercel.json`). Dort auch einfache
  Sicherheits-Header und Caching fuer `/assets/`.

## Rechtlicher Status

**Impressum (`src/pages/Impressum.jsx`) und Datenschutzerklaerung (`src/pages/Datenschutz.jsx`)** beschreiben den
tatsaechlichen Website-Stand und enthalten keine sichtbaren Platzhalter mehr. Die Datenschutzerklaerung nennt
Hosting bei Vercel, Kontakt per E-Mail und Telefon, Calendly als externen, nicht eingebetteten Link (jeweils mit
Anbieter, Sitz und Angaben zur USA-Uebermittlung laut deren eigenen Datenschutzhinweisen, abgerufen 02.10.2026),
keine Cookies, kein Tracking, lokale Schrift, Betroffenenrechte und Beschwerderecht. Sie wurde **nicht rechtlich
geprueft** und muss vor dem Livegang fachkundig geprueft werden. Der E-Mail-Anbieter fuer `info@anvero.tech` wird
erst nach der tatsaechlichen Einrichtung ergaenzt. Offene Punkte (inklusive Produkt-Datenschutz mit Make, Airtable
und KI, AV-Vertraege und Unterauftragnehmer) stehen in `LEGAL-TODO.md`.

## Vor dem Livegang zwingend

1. `LEGAL-TODO.md` abarbeiten. Impressum und Datenschutzerklaerung rechtlich pruefen lassen. Fuer Pilotbetriebe
   AV-Vertrag und Unterauftragnehmer klaeren.
2. Postfach `info@anvero.tech` einrichten (Mailanbieter, DNS) und testen. Danach den Mailanbieter in der
   Datenschutzerklaerung ergaenzen.
3. `public/robots.txt` fuer die Produktion zuruecksetzen (siehe oben).
4. `npm ci`, `npm audit` und `npm run build` ausfuehren und die Seiten im Browser pruefen (Hero und H1 bei 320 und
   375 px, Rechner mit Schiebereglern, Calendly-Button: neuer Tab, richtiger Link, `/impressum` und `/datenschutz`
   direkt aufrufen).
5. Vercel-Projekt, Domain `anvero.tech` und Weiterleitungen pruefen (siehe `LEGAL-TODO.md`, Abschnitt Technik).
   Danach echte Header pruefen (HSTS), CSP erst als `Report-Only` testen.
6. Linkvorschau mit dem LinkedIn Post Inspector pruefen (`og-image.png`).
7. Produktaussagen auf der Seite gegen die Realitaet pruefen (siehe `LEGAL-TODO.md`).

## Projektstruktur

```
index.html              Meta, Open Graph, Canonical
vercel.json             Rewrites, Header, Caching
public/                 robots.txt, sitemap.xml, favicon.svg, apple-touch-icon.png (180x180), og-image.png (1200x630)
src/App.jsx             Startseite (Hero, Ablauf, Zeitersparnis und Rechner, Kontrolle, Pilot, Gruender, FAQ, Demo), Routing
src/siteConfig.js       Stammdaten, Kontakt, Calendly
src/components/         ui.jsx (Icon, Buttons, Calendly), Layout.jsx (Header, Footer)
src/pages/              Impressum, Datenschutz (Layout in LegalPage.jsx, gleiches Design wie die Startseite)
src/usePageMeta.js      Titel, Canonical und Open-Graph-URL fuer Unterseiten
tailwind.config.js      Design-Tokens av.* (gesamte Website); brand.*/approve.* nur noch Altbestand
brand/                  Logo-Dateien (SVG hell/weiss, PNG fuer Calendly), nicht Teil der Website
```
## Verlauf (kurz)

- **v1 bis v2.1:** Formularzustaende, selbst gehostete Fonts (Inter, kein Google Fonts), Design-Tokens,
  Navigationsluecke geschlossen, Open-Graph-Tags, Anker-Offset, Barrierefreiheit der FAQ.
- **Audit-Schritt 1:** `.gitignore`, Kontraste und Mindestschriftgroesse 12 px, Formularvalidierung mit
  Feldfehlern und ARIA, `robots.txt`/`sitemap.xml`, stabile Vorschau ohne Springen.
- **Schritt 2:** Domain `anvero.tech`, Impressum und Datenschutz (Entwuerfe), Vercel-Konfiguration, Calendly.
- **Schritt 3:** Pilot-Positionierung (Pilotphase, Gruender, FAQ), keine Statuslisten oder Platzhalter
  auf der Website.
- **Schritt 4 und folgende:** Produktlogik "im Postfach", Angebotsautomatisierung statt "Software", neue H1,
  E-Mail-Ablauf als Hero-Vorschau, drei Schritte, Vertrauenszeile, Begriffsregeln, neue FAQ (kein neues
  System, KI-Einsatz). Die frueheren Dashboard-Elemente (klickbare Schritte, "Freigabe offen", Rotation)
  und die alte H1 sind entfallen.
