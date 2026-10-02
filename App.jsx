import { useState, useEffect, useRef } from "react";
import { Icon, CalendlyButton } from "./components/ui";
import { Header, Footer } from "./components/Layout";
import { CONTACT } from "./siteConfig";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

/* Gestaltungsregeln:
   - Eine Akzentfarbe. Petrol (av-petrol) = Sie und Ihr Team: Pruefen, Senden, Calendly-Button, "Sie senden." in der H1.
   - ANVERO wird neutral dargestellt (Tinte, graue Etiketten auf av-tag). Der Anfragende bleibt grau.
   - Nur Artefakte (PDF) bekommen Flaeche und Schatten. Inhalte stehen frei, getrennt durch Haarlinien.
   - "Angebot" = fertiges PDF. "Entwurf" nur fuer Rueckfrage und Kunden-E-Mail. ANVERO sendet nie selbst.
   - Keine Preise, keine erfundenen Kunden. Beispiele sind als Testdaten gekennzeichnet. */

const H2 = "text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-.025em] text-av-ink";
const KICKER = "mb-4 text-[13px] font-medium text-av-muted";
const LEAD = "mt-5 max-w-2xl text-[17px] leading-[1.65] text-av-body";
const LINK = "font-semibold text-av-petrol underline underline-offset-2 hover:text-av-petrol-dark";
const TAG = "inline-flex items-center gap-1.5 rounded-md bg-av-tag px-2 py-0.5 text-[12px] font-medium text-av-ink";

/* ── Hero-Visual: das Angebot erklaert sich selbst ─────────────── */
/* Jede Zeile zeigt, woher sie kommt (graue ANVERO-Etiketten). Unten in Petrol: was Ihr Team tut. */

function HeroArtifact() {
  const rows = [
    ["Unterhaltsreinigung · Bürogebäude, Musterstadt · 1.200 m² · 3× pro Woche", "aus der Anfrage erkannt"],
    ["Montag, Mittwoch und Freitag ab 18 Uhr", "per Rückfrage ergänzt"],
  ];
  return (
    <figure className="mx-auto w-full max-w-[520px]">
      <figcaption className="mb-3 text-[12px] text-av-muted">Beispielablauf mit Testdaten</figcaption>
      <div className="rounded-[6px] border border-av-line bg-white px-6 py-6 shadow-paper sm:px-8">
        <div className="flex items-start justify-between gap-4 border-b border-av-line pb-4">
          <div>
            <p className="text-[12px] text-av-muted">Musterreinigung GmbH</p>
            <p className="mt-1 text-[18px] font-semibold text-av-ink">Angebot Nr. 0001</p>
            <p className="mt-1 flex items-center gap-1.5 text-[12px] text-av-muted">
              <Icon name="file" size={13} className="shrink-0" />Angebot_Beispiel-GmbH.pdf
            </p>
          </div>
          <p className="text-right text-[12px] leading-5 text-av-muted">für Beispiel GmbH<br />Musterstadt</p>
        </div>

        <ul>
          {rows.map(([value, tag]) => (
            <li key={tag} className="grid gap-2 border-b border-av-line py-3.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
              <span className="text-[14px] leading-6 text-av-ink">{value}</span>
              <span className={`justify-self-start sm:justify-self-end ${TAG}`}><Icon name="check" size={12} />{tag}</span>
            </li>
          ))}
          <li className="grid gap-2 py-3.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
            <span className="flex items-center gap-3 text-[14px] text-av-ink">
              Preis <span aria-hidden="true" className="h-2 w-16 rounded-sm bg-av-line" />
            </span>
            <span className={`justify-self-start sm:justify-self-end ${TAG}`}><Icon name="check" size={12} />nach Ihren Regeln berechnet</span>
          </li>
        </ul>

        <p className="mt-3 flex items-start gap-2 border-t border-av-line pt-4 text-[14px] font-semibold leading-6 text-av-petrol">
          <Icon name="shield" size={17} className="mt-[3px] shrink-0" />
          Kunden-E-Mail mit PDF liegt als Entwurf im Postfach. Ihr Team prüft und sendet.
        </p>
      </div>
    </figure>
  );
}

/* ── Hero ──────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="border-b border-av-line bg-av-paper">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 text-[13px] font-medium text-av-muted">Angebotsautomatisierung für Gebäudereinigungen</p>
          <h1 className="text-[clamp(2.5rem,5.4vw,4rem)] font-semibold leading-[1.05] tracking-[-.03em] text-av-ink">
            Anfrage rein. Angebot fertig. <span className="text-av-petrol">Sie senden.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.65] text-av-body">
            Für von Ihnen festgelegte Standardleistungen erstellt ANVERO das Angebot direkt im Postfach: als PDF mit
            Kunden-E-Mail im Entwurf. Fehlt eine Angabe, liegt die Rückfrage bereit. Ihr Team prüft und sendet.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <CalendlyButton size="lg" className="w-full sm:w-auto" />
            <a href="#ablauf" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-av-petrol hover:text-av-petrol-dark focus:outline-none focus-visible:underline">
              Ablauf an einem Beispiel ansehen <Icon name="arrow" size={16} />
            </a>
          </div>
          <p className="mt-4 text-[14px] text-av-muted">
            Persönlich mit dem Gründer · an einer Ihrer Anfragen · unverbindlich ·{" "}
            oder <a href="#demo" className={LINK}>Anfrage per Formular</a>
          </p>
        </div>

        <HeroArtifact />
      </div>
    </section>
  );
}

/* ── Verlauf mit Weiche: kurz und ruhig ────────────────────────── */

/* Weiche: drei Faelle, jeweils mit eigenem Beispielablauf.
   Rollen: Anfragender (grau), ANVERO (Tinte), Sie und Ihr Team (Petrol). Uhrzeiten und Inhalte sind Testdaten. */
const WAYS = [
  {
    key: "alles", title: "Alles da", result: "Angebot als PDF und Kunden-E-Mail",
    events: [
      ["09:14", "customer", "Kunde fragt an: Unterhaltsreinigung fürs Büro, 1.200 m², 3× pro Woche, Mo, Mi, Fr ab 18 Uhr."],
      ["09:16", "anvero", "ANVERO: Alle Angaben da. Angebot als PDF und Kunden-E-Mail liegen bereit."],
      ["09:25", "team", "Sie prüfen und senden das Angebot."],
    ],
  },
  {
    key: "fehlt", title: "Etwas fehlt", result: "Rückfrage als Entwurf",
    events: [
      ["09:14", "customer", "Kunde fragt an: Unterhaltsreinigung fürs Büro, 1.200 m², 3× pro Woche."],
      ["09:16", "anvero", "ANVERO: Reinigungszeiten fehlen. Die Rückfrage liegt als Entwurf bereit."],
      ["09:20", "team", "Sie senden die Rückfrage."],
      ["11:02", "customer", "Kunde antwortet: Montag, Mittwoch und Freitag ab 18 Uhr."],
      ["11:04", "anvero", "ANVERO: Antwort zugeordnet. Angebot als PDF und Kunden-E-Mail liegen bereit."],
      ["11:10", "team", "Sie prüfen und senden das Angebot."],
    ],
  },
  {
    key: "sonder", title: "Sonderfall", result: "Manuelle Prüfung durch Ihr Team",
    events: [
      ["09:14", "customer", "Kunde fragt an: Reinigung nach einem Wasserschaden im Lager."],
      ["09:16", "anvero", "ANVERO: Keine festgelegte Standardleistung. Als Sonderfall an Ihr Team übergeben."],
      ["09:30", "team", "Ihr Team prüft die Anfrage und erstellt das Angebot selbst."],
    ],
  },
];
const DEFAULT_WAY = 1; // "Etwas fehlt" zeigt Rueckfrage und Antwort und ist deshalb vorausgewaehlt
const ROLE = {
  customer: { time: "text-av-muted", text: "text-av-body", icon: "mail" },
  anvero: { time: "text-av-ink", text: "text-av-ink", icon: "settings" },
  team: { time: "text-av-petrol", text: "font-semibold text-av-petrol", icon: "send" },
};

function Flow() {
  const [selected, setSelected] = useState(DEFAULT_WAY);
  const radios = useRef([]);
  const way = WAYS[selected];

  /* Auswahlkarten als Radiogruppe: Pfeiltasten wechseln den Fall, nur die gewaehlte Karte ist per Tab erreichbar. */
  const onKey = (e) => {
    const dir = ["ArrowRight", "ArrowDown"].includes(e.key) ? 1 : ["ArrowLeft", "ArrowUp"].includes(e.key) ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (selected + dir + WAYS.length) % WAYS.length;
    setSelected(next);
    radios.current[next]?.focus();
  };

  return (
    <section id="ablauf" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className={KICKER}>So läuft eine Anfrage</p>
        <h2 className={`max-w-3xl ${H2}`}>ANVERO prüft jede Anfrage und wählt den richtigen Weg.</h2>
        <p className={LEAD}>
          Vollständige Anfragen werden zum Angebot, fehlende Angaben zur Rückfrage, Sonderfälle gehen an Ihr Team.
          Gesendet wird immer von Ihnen.
        </p>

        <p id="way-hint" className="mt-10 text-[14px] text-av-muted">Wählen Sie einen Fall, um den Ablauf zu sehen.</p>
        <div role="radiogroup" aria-labelledby="way-hint" onKeyDown={onKey} className="mt-3 grid max-w-3xl gap-3 sm:grid-cols-3">
          {WAYS.map((w, i) => {
            const on = i === selected;
            return (
              <button key={w.key} type="button" role="radio" aria-checked={on} tabIndex={on ? 0 : -1}
                ref={(el) => { radios.current[i] = el; }} onClick={() => setSelected(i)}
                className={`flex items-start gap-3 rounded-[10px] px-4 py-3 text-left transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol ${
                  on ? "border-[1.5px] border-av-ink bg-av-paper" : "border border-[#CBD2CF] bg-white hover:border-av-ink hover:bg-av-paper"
                }`}>
                <span aria-hidden="true" className={`mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full border-[1.5px] ${on ? "border-av-ink" : "border-av-muted"}`}>
                  {on && <span className="h-2 w-2 rounded-full bg-av-ink" />}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-av-ink">{w.title}</span>
                  <span className="mt-0.5 block text-[14px] leading-5 text-av-body">{w.result}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Feste Mindesthoehe fuer den laengsten Fall, damit die Seite beim Umschalten nicht springt.
            key={way.key} startet die Einblend-Animation bei jedem Wechsel neu. */}
        <div className="mt-8 min-h-[36rem] max-w-3xl sm:min-h-[22rem]">
          <ol key={way.key} className="border-t border-av-line" aria-label={`Beispielablauf mit Testdaten: ${way.title}`}>
            {way.events.map(([time, role, text], i) => (
              <li key={time} style={{ animationDelay: `${i * 120}ms` }}
                className="flow-row grid grid-cols-[3.25rem_1.25rem_minmax(0,1fr)] items-baseline gap-3 border-b border-av-line py-4">
                <span className={`text-[14px] tabular-nums ${ROLE[role].time}`}>{time}</span>
                <Icon name={ROLE[role].icon} size={16} className={`translate-y-[3px] ${ROLE[role].time}`} />
                <span className={`text-[16px] leading-6 ${ROLE[role].text}`}>{text}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-4 text-[12px] text-av-muted">Beispielablauf mit Testdaten.</p>

        <p className="mt-12 flex max-w-3xl items-start gap-3 text-[18px] font-medium leading-8 text-av-ink">
          <Icon name="shield" size={22} className="mt-1 shrink-0 text-av-petrol" />
          Kein neues System. Keine unkontrollierten Sendungen. Ihr Team arbeitet im bestehenden Postfach und sendet nur, was geprüft wurde.
        </p>
      </div>
    </section>
  );
}

/* ── Zeitersparnis: Arbeitsteilung und Rechner ─────────────────── */

const STEPS = ["Anfrage lesen", "Angaben heraussuchen", "Rückfrage schreiben", "Antwort zuordnen",
  "Kalkulieren", "Angebot und PDF erstellen", "Kunden-E-Mail schreiben", "Prüfen und senden"];

/* Fester Beispielwert fuer Pruefen und Senden mit ANVERO (Vorgabe des Inhabers, nicht gemessen).
   Steht ausdruecklich im Hinweis direkt unter dem Ergebnis. */
const CHECK_MINUTES = 5;

const fmt = (n) => n.toLocaleString("de-DE", { maximumFractionDigits: 1 });
const toNumber = (v) => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

function TimeSaving() {
  const [count, setCount] = useState("30");
  const [today, setToday] = useState("45");

  const c = toNumber(count), t = toNumber(today), k = CHECK_MINUTES;
  const saved = Math.max((c * (t - k)) / 60, 0);

  const fields = [
    ["calc-count", "Standardangebote pro Monat", "z. B. Unterhalts- oder Glasreinigung", count, setCount],
    ["calc-today", "Minuten pro Angebot heute", "inklusive Kalkulation, Angebot und E-Mail", today, setToday],
  ];

  return (
    <section id="zeit" className="border-y border-av-line bg-av-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className={KICKER}>Zeitersparnis</p>
        <h2 className={`max-w-3xl ${H2}`}>Weniger manuelle Schritte zwischen Anfrage und Angebot.</h2>
        <p className={LEAD}>Die wiederkehrenden Schritte übernimmt ANVERO. Bei Ihrem Team bleiben Prüfen und Senden.</p>

        {/* Arbeitsteilung: eine Zeile pro Schritt */}
        <table className="mt-10 w-full max-w-3xl text-left text-[15px]">
          <caption className="mb-3 text-left text-[13px] text-av-muted">Typischer Ablauf einer Standardanfrage</caption>
          <thead>
            <tr className="text-[13px] text-av-muted">
              <th scope="col" className="pb-3 font-medium">Schritt</th>
              <th scope="col" className="w-24 pb-3 font-medium sm:w-36">Heute</th>
              <th scope="col" className="w-28 pb-3 font-medium sm:w-36">Mit ANVERO</th>
            </tr>
          </thead>
          <tbody className="border-b border-av-line">
            {STEPS.map((s, i) => {
              const last = i === STEPS.length - 1;
              return (
                <tr key={s} className="border-t border-av-line">
                  <th scope="row" className={`py-3 pr-4 ${last ? "font-semibold text-av-petrol" : "font-normal text-av-ink"}`}>{s}</th>
                  <td className="py-3 text-av-muted">Ihr Team</td>
                  <td className="py-3">
                    {last
                      ? <span className="rounded-md bg-av-petrol px-2 py-0.5 text-[13px] font-semibold text-white">Ihr Team</span>
                      : <span className="rounded-md bg-av-tag px-2 py-0.5 text-[13px] font-medium text-av-body">ANVERO</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Zeitrechner mit eigenen Werten */}
        <div className="mt-16 grid gap-12 border-t border-av-line pt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-[22px] font-semibold tracking-[-.015em] text-av-ink">Rechnen Sie mit Ihren eigenen Werten.</h3>
            <p className="mt-2 text-[15px] text-av-body">Beispielrechnung. Ersetzen Sie die Startwerte durch Ihre Zahlen.</p>
            <div className="mt-8 space-y-6">
              {fields.map(([id, label, hint, value, set]) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-[15px] font-medium text-av-ink">{label}</label>
                  <p id={`${id}-hint`} className="mt-0.5 text-[13px] text-av-muted">{hint}</p>
                  <input id={id} type="number" inputMode="numeric" min="0" step="1" value={value}
                    aria-describedby={`${id}-hint`} onChange={(e) => set(e.target.value)}
                    className="field mt-2 w-full max-w-[220px] tabular-nums" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-av-line lg:pl-16">
            <div aria-live="polite">
              <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none tracking-[-.02em] text-av-petrol">
                {fmt(saved)} Stunden
              </p>
              <p className="mt-2 text-[18px] text-av-ink">mögliche Zeitersparnis pro Monat</p>
              <p className="mt-2 text-[14px] text-av-muted">
                {fmt(c)} Angebote × ({fmt(t)} − {fmt(k)}) Minuten · rund {fmt(saved * 12)} Stunden im Jahr
              </p>
            </div>
            <p className="mt-5 border-l-2 border-av-line pl-3 text-[13px] leading-5 text-av-muted">
              Beispielrechnung auf Grundlage Ihrer Angaben. Für Prüfen und Senden mit ANVERO sind {CHECK_MINUTES} Minuten
              pro Angebot als Beispielwert angesetzt. Rückfragen und Sonderfälle sind nicht eingerechnet. Keine Zusage einer
              bestimmten Bearbeitungszeit.
            </p>
            <p className="mt-8 text-[15px] text-av-body">In der Demo rechnen wir mit Ihren echten Abläufen.</p>
            <CalendlyButton className="mt-4 w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Kontrolle ─────────────────────────────────────────────────── */

function Control() {
  const points = [
    ["Gesendet wird nur durch Ihr Team", "Rückfrage und Kunden-E-Mail liegen als Entwurf im Postfach, bis ein Mitarbeiter sie sendet."],
    ["Preise nach Ihren hinterlegten Regeln", "Kalkuliert wird mit Ihrer Preislogik, nicht mit geschätzten Werten."],
    ["Fehlende Angaben werden nicht geraten", "Was fehlt, wird erkannt. Die Rückfrage liegt als Entwurf bereit."],
    ["Sonderfälle bleiben bei Ihrem Team", "Was nicht zu Ihren festgelegten Leistungen passt, erkennt ANVERO selbst und gibt es zur manuellen Prüfung weiter."],
  ];
  return (
    <section id="kontrolle" className="bg-av-night py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-[1120px] items-start gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 text-[13px] font-medium text-av-petrol-light">Sie behalten die Entscheidung</p>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-.025em]">
            Kontrolle, bevor ein Angebot Ihr Haus verlässt.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-[1.65] text-white/75">
            ANVERO erledigt die wiederkehrende Arbeit. Ihr Team prüft, entscheidet und sendet.
          </p>
        </div>
        <ul className="border-t border-white/15">
          {points.map(([t, d]) => (
            <li key={t} className="flex items-start gap-4 border-b border-white/15 py-5">
              <Icon name="check" size={20} className="mt-0.5 shrink-0 text-av-petrol-light" />
              <div>
                <p className="text-[16px] font-semibold leading-6">{t}</p>
                <p className="mt-1 text-[15px] leading-6 text-white/75">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Pilotphase: frühe Zusammenarbeit ──────────────────────────── */

function Pilot() {
  const perks = [
    ["Persönliche Begleitung", "Von der ersten Anfrage bis zum eingerichteten Ablauf haben Sie einen festen Ansprechpartner."],
    ["Direkter Kontakt zum Gründer", "Fragen und Anregungen gehen direkt an den Gründer, ohne Umweg."],
    ["Vergünstigte Pilotkonditionen", "Pilotbetriebe erhalten besondere Konditionen. Die Details besprechen wir in der Demo."],
    ["Gemeinsames Einrichten", "Wir legen mit Ihnen fest, welche Leistungen automatisch abgedeckt werden, und richten Pflichtangaben, Kalkulationsregeln und die Anbindung Ihres Postfachs anhand Ihres Betriebs ein."],
  ];
  const steps = [
    ["Persönliche Demo", "Wir sehen uns gemeinsam eine typische Anfrage aus Ihrem Betrieb an. Unverbindlich."],
    ["Regeln gemeinsam einrichten", "Wir legen fest, welche Leistungen ANVERO automatisch abdeckt, etwa Unterhalts- oder Glasreinigung, und hinterlegen Pflichtangaben, Kalkulationsregeln, Vorlagen und die Anbindung Ihres Postfachs."],
    ["Mit echten Fällen prüfen", "Gemeinsam prüfen wir reale Vorgänge und schärfen die Regeln nach."],
    ["Gemeinsam starten", "Ihr Team arbeitet mit fertigen Angeboten im Postfach, prüft und sendet."],
  ];
  return (
    <section id="pilot" className="border-b border-av-line bg-av-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className={KICKER}>Pilotphase</p>
        <h2 className={`max-w-3xl ${H2}`}>Gestalten Sie den Angebotsprozess gemeinsam mit ANVERO.</h2>
        <p className={LEAD}>
          Wir suchen ausgewählte Gebäudereinigungen für die erste Pilotphase. Der Einstieg ist eine persönliche Demo
          mit dem Gründer, danach richten wir ANVERO gemeinsam anhand Ihres Betriebs ein.
        </p>

        <dl className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {perks.map(([t, d]) => (
            <div key={t} className="border-t border-av-line py-6">
              <dt className="text-[17px] font-semibold text-av-ink">{t}</dt>
              <dd className="mt-2 text-[15px] leading-7 text-av-body">{d}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-14 text-[18px] font-semibold text-av-ink">So läuft der Einstieg ab</h3>
        <ol className="mt-8 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-av-petrol/30 pt-5">
              <span className="text-[13px] font-medium text-av-petrol">Schritt {i + 1}</span>
              <h4 className="mt-2 text-[16px] font-semibold text-av-ink">{t}</h4>
              <p className="mt-2 text-[15px] leading-6 text-av-body">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CalendlyButton size="lg" className="w-full sm:w-auto" />
          <p className="max-w-md text-[15px] leading-6 text-av-body">Die Demo ist unverbindlich. Sie entscheiden in Ihrem Tempo.</p>
        </div>
      </div>
    </section>
  );
}

/* ── Gründer: direkter Ansprechpartner ─────────────────────────── */

function Founder() {
  return (
    <section id="gruender" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[860px] px-5 lg:px-8">
        <p className={KICKER}>Ihr Ansprechpartner</p>
        <h2 className={H2}>Sie sprechen direkt mit dem Gründer.</h2>
        <p className="mt-6 text-[18px] leading-8 text-av-body">
          Ich bin Leon Golembek, Gründer von ANVERO. In der Pilotphase haben Sie mich als festen Ansprechpartner:
          für die Demo, für die Einrichtung und für alle Fragen dazwischen.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-[16px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <a href={`mailto:${CONTACT.email}`} className={LINK}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref} className={LINK}>{CONTACT.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ───────────────────────────────────────────────────────── */

function FAQ() {
  const [open, setOpen] = useState(-1);
  const faqs = [
    ["Was genau macht ANVERO?",
      "ANVERO ist eine Angebotsautomatisierung für Gebäudereinigungen und arbeitet direkt im Postfach. Für vorab festgelegte Leistungen wie Unterhalts- oder Glasreinigung erkennt es fehlende Angaben. Dann liegt die Rückfrage als Entwurf bereit, sonst das Angebot als PDF und die Kunden-E-Mail als Entwurf. Ihr Team prüft und sendet. Sonderfälle gehen zur manuellen Prüfung an Ihr Team."],
    ["Was sehe ich in der Demo?",
      "Wir spielen gemeinsam eine typische Anfrage aus Ihrem Betrieb durch, auf Wunsch anonymisiert, vom Eingang bis zum fertigen Angebot im Postfach. Danach entscheiden Sie, ob Sie mehr erfahren möchten. Die Demo ist unverbindlich."],
    ["Wie schnell liegt ein Angebot bereit?",
      "In der Regel nach wenigen Minuten: Dann liegen das Angebot als PDF und die Kunden-E-Mail als Entwurf in Ihrem Postfach, oder die Rückfrage, falls eine Angabe fehlt. Wann gesendet wird, entscheidet Ihr Team."],
    ["Brauche ich ein neues System oder eine neue Oberfläche?",
      "Nein. ANVERO arbeitet in Ihrem bestehenden Postfach. Sie müssen keine neue Oberfläche lernen."],
    ["Verschickt ANVERO selbstständig E-Mails an meine Kunden?",
      "Nein. Rückfrage und Kunden-E-Mail liegen als Entwurf in Ihrem Postfach, bis ein Mitarbeiter sie geprüft und gesendet hat. Ohne das verlässt keine Nachricht Ihr Haus."],
    ["Kann ANVERO falsche Preise erfinden?",
      "Nein. Kalkuliert wird ausschließlich mit der Preislogik, die Sie hinterlegt haben. Fehlen Angaben oder passt die Anfrage nicht zu Ihren festgelegten Leistungen, wird der Fall zur manuellen Prüfung übergeben statt geschätzt."],
    ["Was passiert bei ungewöhnlichen Anfragen?",
      "Anfragen, die nicht zu Ihren festgelegten Leistungen passen, und untypische Fälle erkennt ANVERO selbst und gibt sie zur manuellen Prüfung an einen Mitarbeiter, statt sie automatisch zu beantworten."],
    ["Setzt ANVERO KI ein?",
      "Ja. Zur Auswertung der Anfragetexte setzt ANVERO KI ein. Kalkuliert wird nach Ihren hinterlegten Regeln, und gesendet wird nur durch Ihr Team."],
    ["Ersetzt ANVERO Mitarbeiter?",
      "Nein. ANVERO übernimmt die wiederkehrende Vorarbeit. Ihre Mitarbeiter prüfen Angebote, entscheiden Sonderfälle und senden."],
    ["Was bedeutet die Pilotphase für mich?",
      "Wir arbeiten mit ausgewählten Gebäudereinigungen eng zusammen: mit persönlicher Begleitung, direktem Kontakt zum Gründer, vergünstigten Pilotkonditionen und einer gemeinsamen Einrichtung anhand Ihres Betriebs. Gedacht ist die Pilotphase für gewerbliche Gebäudereinigungen, die regelmäßig Anfragen erhalten und Angebote kalkulieren."],
    ["Wie sieht es mit dem Datenschutz aus?",
      <>
        Datenschutz und Datenverarbeitung besprechen wir vor dem Start gemeinsam mit Ihnen. Schreiben Sie uns gern vorab
        an <a href={`mailto:${CONTACT.email}`} className={LINK}>{CONTACT.email}</a>.
        Für die Nutzung dieser Website gilt unsere <a href="/datenschutz" className={LINK}>Datenschutzerklärung</a>.
      </>],
  ];
  return (
    <section id="faq" className="border-t border-av-line bg-av-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[860px] px-5 lg:px-8">
        <p className={KICKER}>Häufige Fragen</p>
        <h2 className={H2}>Klarheit vor der Demo.</h2>
        <div className="mt-10 divide-y divide-av-line border-y border-av-line">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol">
                <span className="text-[16px] font-semibold text-av-ink">{q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center text-av-muted transition ${open === i ? "rotate-180" : ""}`}>
                  <Icon name="down" size={18} />
                </span>
              </button>
              <div id={`faq-${i}`} hidden={open !== i} className="pb-5 pr-10 text-[16px] leading-7 text-av-body">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Demo-Formular mit echten Zuständen ────────────────────────── */

/* Endpoint kommt aus .env (VITE_FORM_ENDPOINT), siehe .env.example.
   Ohne Endpoint: im Dev-Server simulierter Erfolg, im Produktions-Build
   eine ehrliche Fehlermeldung statt eines vorgetäuschten Erfolgs. */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Technische Obergrenzen gegen überlange Eingaben (kein Ersatz für serverseitige Prüfung). */
const FIELD_LIMITS = { name: 100, company: 150, email: 254, message: 2000 };

function validateDemo(f) {
  const errors = {};
  if (!f.get("name")) errors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!f.get("company")) errors.company = "Bitte geben Sie den Namen Ihres Unternehmens ein.";
  const email = f.get("email");
  if (!email) errors.email = "Bitte geben Sie Ihre geschäftliche E-Mail-Adresse ein.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Diese E-Mail-Adresse scheint nicht zu stimmen. Bitte prüfen Sie sie, zum Beispiel name@firma.de.";
  return errors;
}

function TextField({ name, label, type = "text", autoComplete, required = false, optional = false, multiline = false, error, onChange, className = "" }) {
  const id = `demo-${name}`;
  const errorId = `${id}-error`;
  const Control = multiline ? "textarea" : "input";
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-semibold text-av-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {optional && <span className="font-normal text-av-muted"> (optional)</span>}
      </label>
      <Control id={id} name={name} type={multiline ? undefined : type} rows={multiline ? 3 : undefined}
        autoComplete={autoComplete} required={required} maxLength={FIELD_LIMITS[name]}
        aria-invalid={error ? "true" : undefined} aria-describedby={error ? errorId : undefined}
        onChange={() => onChange(name)}
        className={`field ${multiline ? "resize-none" : ""} ${error ? "border-red-600 focus:border-red-600 focus:ring-red-600/[.12]" : ""}`} />
      {error && (
        <p id={errorId} className="flex items-start gap-1.5 text-[13px] font-semibold leading-5 text-red-700">
          <Icon name="alert" size={14} className="mt-[3px] shrink-0" />{error}
        </p>
      )}
    </div>
  );
}

function Demo() {
  const [state, setState] = useState("idle");
  const [err, setErr] = useState("");
  const [errors, setErrors] = useState({});
  const successRef = useRef(null);
  const fail = (message) => { setErr(message); setState("error"); };
  const clearError = (name) => setErrors((prev) => {
    if (!prev[name]) return prev;
    const { [name]: _removed, ...rest } = prev;
    return rest;
  });

  useEffect(() => {
    if (state === "success") successRef.current?.focus();
  }, [state]);

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get("_hp")) return;
    for (const key of Object.keys(FIELD_LIMITS)) f.set(key, String(f.get(key) ?? "").trim());

    const found = validateDemo(f);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setErr(""); setState("idle");
      form.elements[firstInvalid]?.focus(); // Screenreader lesen so direkt die Fehlermeldung vor
      return;
    }
    setErr(""); setState("loading");

    if (!FORM_ENDPOINT) {
      if (import.meta.env.DEV) { setTimeout(() => setState("success"), 900); return; }
      console.error("VITE_FORM_ENDPOINT fehlt – Formular ist nicht verbunden.");
      fail(`Das Formular ist derzeit nicht verfügbar. Bitte schreiben Sie uns direkt an ${CONTACT.email}.`); return;
    }
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: f, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("success");
    } catch (error) {
      console.error("Demo-Formular konnte nicht gesendet werden:", error);
      fail(`Senden hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns an ${CONTACT.email}.`);
    }
  };

  return (
    <section id="demo" className="border-t border-av-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[760px] px-5 lg:px-8">
        <div className="text-center">
          <p className={KICKER}>Persönliche Demo</p>
          <h2 className={H2}>Sehen Sie ANVERO an einer Ihrer Anfragen.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.65] text-av-body">
            In der unverbindlichen Demo spielen wir eine typische Anfrage aus Ihrem Betrieb live durch,
            bis zum fertigen Angebot im Postfach. Ohne Vorbereitung, ohne Verpflichtung.
          </p>
        </div>

        {/* Alternative Kontaktwege neben dem Formular. Der Calendly-Link kommt aus src/siteConfig.js. */}
        <div className="mx-auto mt-8 flex max-w-[680px] flex-col items-center gap-3 text-center">
          <CalendlyButton size="lg" className="w-full sm:w-auto" />
          <p className="text-[14px] leading-6 text-av-body">
            Sie erreichen uns auch direkt:{" "}
            <a href={`mailto:${CONTACT.email}`} className={LINK}>{CONTACT.email}</a>
            {" · "}
            <a href={CONTACT.phoneHref} className={LINK}>{CONTACT.phoneDisplay}</a>
          </p>
          <p className="mt-4 text-[14px] font-medium text-av-muted">Oder Anfrage per Formular</p>
        </div>

        {state === "success" ? (
          <div ref={successRef} tabIndex={-1} role="status" className="mx-auto mt-8 max-w-[620px] rounded-[10px] border border-av-line bg-av-paper p-8 text-center focus:outline-none">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-av-petrol-tint text-av-petrol"><Icon name="check" size={24} /></span>
            <h3 className="mt-4 text-lg font-semibold text-av-ink">Vielen Dank für Ihre Anfrage</h3>
            <p className="mt-2 text-[15px] leading-7 text-av-body">
              Wir haben Ihre Angaben erhalten und melden uns bei Ihnen.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate
            className="mx-auto mt-6 max-w-[680px] rounded-[10px] border border-av-line bg-av-paper p-6 sm:p-8">
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
              className="absolute h-0 w-0 opacity-0" />
            <p className="mb-5 text-[13px] text-av-muted">Felder mit * sind Pflichtfelder.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField name="name" label="Name" autoComplete="name" required error={errors.name} onChange={clearError} />
              <TextField name="company" label="Unternehmen" autoComplete="organization" required error={errors.company} onChange={clearError} />
              <TextField name="email" label="Geschäftliche E-Mail" type="email" autoComplete="email" required
                error={errors.email} onChange={clearError} className="sm:col-span-2" />
              <TextField name="message" label="Nachricht" optional multiline onChange={clearError} className="sm:col-span-2" />
            </div>

            {/* Meldungen zum Senden selbst (Netzwerk, nicht erreichbar); Feldfehler stehen direkt am Feld. */}
            <div aria-live="polite" className="mt-3 min-h-5">
              {state === "error" && (
                <p className="flex items-center gap-1.5 text-[13px] font-semibold text-red-700">
                  <Icon name="alert" size={14} />{err}
                </p>
              )}
            </div>

            <p className="mt-2 text-[13px] leading-5 text-av-muted">
              Wir verwenden Ihre Angaben, um Ihre Anfrage zu bearbeiten. Informationen zur Datenverarbeitung finden
              Sie in der <a href="/datenschutz" className={LINK}>Datenschutzerklärung</a>.
            </p>

            <button type="submit" disabled={state === "loading"}
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-av-petrol bg-white px-5 text-[15px] font-semibold text-av-petrol transition-colors hover:bg-av-petrol-tint disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol">
              {state === "loading"
                ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-av-petrol/30 border-t-av-petrol" />Wird gesendet …</>
                : <><Icon name="send" size={17} />Anfrage senden</>}
            </button>
            <p className="mt-3 text-center text-[13px] text-av-muted">Keine Newsletter-Anmeldung.</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="bg-av-paper text-av-body antialiased">
      <Header />
      <main>
        <Hero />
        <Flow />
        <TimeSaving />
        <Control />
        <Pilot />
        <Founder />
        <FAQ />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

/* Einfaches Routing ohne Zusatzpaket: Vercel liefert fuer /impressum und /datenschutz die index.html
   aus (siehe vercel.json), hier wird anhand des Pfads die passende Seite gerendert. */
const PAGES = { "/impressum": Impressum, "/datenschutz": Datenschutz };

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = PAGES[path];
  return Page ? <Page /> : <Home />;
}
