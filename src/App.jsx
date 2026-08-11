const CONFIG = {
  brand: "ANVERO",
  claim: "Automatisiert, was zwischen Anfrage und Auftrag liegt.",
  category: "Von der Anfrage bis zum Auftrag",
  demoEmail: "demo@anvero.de",
};

const Icon = ({ name, size = 20, className = "" }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    down: <path d="m6 9 6 6 6-6"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 13h6M9 17h6"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 5 3.2 8.1 7.5 9.5 4.3-1.4 7.5-4.5 7.5-9.5V6z"/><path d="m8.5 12 2.3 2.3 4.7-5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
    send: <><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
};

function Button({ children, href = "#demo", secondary = false, icon = "arrow", className = "" }) {
  return <a href={href} className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20 ${secondary ? "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50" : "bg-[#176b68] text-white shadow-[0_8px_22px_rgba(23,107,104,.2)] hover:-translate-y-0.5 hover:bg-[#125c59]"} ${className}`}>{children}<Icon name={icon} size={17} className="transition-transform group-hover:translate-x-0.5" /></a>;
}

function StatusPill({ children, tone = "amber" }) {
  const tones = {
    amber: "border-[#e5c47a] bg-[#fff8e8] text-[#79591c]",
    green: "border-[#a9d5c4] bg-[#effaf5] text-[#17654c]",
    blue: "border-[#b8d6e5] bg-[#f0f8fb] text-[#285f78]",
  };
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${tones[tone]}`}><span className="h-1.5 w-1.5 rounded-full bg-current"/>{children}</span>;
}

const processSteps = [
  { key: "email", short: "E-Mail", title: "E-Mail eingegangen", icon: "mail", tone: "slate", detail: <><p className="text-sm leading-6 text-slate-600">„Wir benötigen eine regelmäßige Reinigung für unser Bürogebäude in Hamburg. Die Fläche beträgt etwa 1.200 m², Reinigung dreimal wöchentlich …“</p><div className="mt-3 flex flex-wrap gap-2 text-[10px] text-slate-500"><span className="rounded-md bg-slate-50 px-2 py-1">Müller Immobilien</span><span className="rounded-md bg-slate-50 px-2 py-1">09:14 Uhr</span></div></> },
  { key: "data", short: "Daten", title: "Daten extrahiert", icon: "search", tone: "green", detail: <div className="grid grid-cols-2 gap-2">{[["Objekt","Bürogebäude"],["Fläche","1.200 m²"],["Ort","Hamburg"],["Intervall","3× wöchentlich"]].map(([k,v]) => <div key={k} className="rounded-lg bg-slate-50 px-3 py-2"><div className="text-[9px] uppercase tracking-wider text-slate-400">{k}</div><div className="mt-0.5 text-[11px] font-semibold text-slate-700">{v}</div></div>)}</div> },
  { key: "missing", short: "Prüfung", title: "Fehlende Angaben erkannt", icon: "clock", tone: "amber", detail: <div className="rounded-lg border border-[#ead8ac] bg-[#fffbf1] p-3"><p className="text-[11px] font-bold text-slate-800">Noch offen: Reinigungszeiten</p><p className="mt-1 text-[11px] text-slate-600">Die Angabe wird für die Kalkulation benötigt.</p></div> },
  { key: "question", short: "Rückfrage", title: "Rückfrage vorbereitet", icon: "send", tone: "amber", detail: <div className="rounded-lg border border-[#ead8ac] bg-[#fffbf1] p-3"><p className="text-[11px] font-semibold text-slate-700">„Welche Reinigungszeiten sind für Ihr Objekt gewünscht?“</p><p className="mt-2 text-[10px] font-bold text-[#79591c]">Versand nach Ihren Regeln</p></div> },
  { key: "calc", short: "Kalkulation", title: "Kalkulation vorbereitet", icon: "settings", tone: "blue", detail: <div className="grid grid-cols-2 gap-2">{[["Fläche","berücksichtigt"],["Leistung","zugeordnet"],["Personal","berechnet"],["Material","berücksichtigt"]].map(([k,v]) => <div key={k} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"><div className="text-[9px] uppercase tracking-wider text-slate-400">{k}</div><div className="mt-0.5 text-[11px] font-semibold text-slate-700">{v}</div></div>)}</div> },
  { key: "draft", short: "Entwurf", title: "Angebotsentwurf bereit", icon: "file", tone: "green", detail: <><div className="flex items-center justify-between rounded-lg border border-[#b9ddd3] bg-white px-3 py-2"><span className="text-[10px] font-semibold text-slate-500">Versand</span><span className="text-[10px] font-bold text-[#79591c]">bis Freigabe gesperrt</span></div><button type="button" className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#176b68] px-3 text-xs font-bold text-white hover:bg-[#125c59] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20"><Icon name="shield" size={15}/>Angebot prüfen und freigeben</button></> },
];

function toneClasses(tone, active = false) {
  const base = {
    slate: "bg-slate-50 text-slate-700",
    green: "bg-[#e5f1ef] text-[#176b68]",
    amber: "bg-[#fff0c8] text-[#79591c]",
    blue: "bg-[#f0f8fb] text-[#285f78]",
  }[tone];
  return active ? `${base} ring-2 ring-[#176b68]/20` : base;
}

/* Geändert: keine gekürzten Wörter mehr. Die Prozessschritte sind bewusst iconbasiert.
   Der vollständige Name bleibt per aria-label und Tooltip zugänglich. */
function ProcessNavigator({ active, setActive }) {
  return <>
    <div className="hidden items-center justify-between gap-1.5 sm:flex" role="tablist" aria-label="Angebotsvorgang">
      {processSteps.map((step, i) => <div key={step.key} className="flex min-w-0 flex-1 items-center gap-1.5">
        <button
          id={`process-tab-${i}`}
          type="button"
          onClick={() => setActive(i)}
          role="tab"
          aria-selected={active === i}
          aria-controls={`process-panel-${i}`}
          aria-label={step.title}
          title={step.title}
          className={`group relative grid h-11 min-w-0 flex-1 place-items-center rounded-lg border transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20 ${active === i ? "border-[#83b9b4] bg-[#f2faf8] shadow-sm" : "border-slate-200 bg-white hover:border-[#b9ddd3] hover:bg-[#fbfdfd]"}`}
        >
          <span className={`grid h-7 w-7 place-items-center rounded-lg ${toneClasses(step.tone, active === i)}`}><Icon name={step.icon} size={14}/></span>
          <span className="pointer-events-none absolute -top-9 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#102c2b] px-2 py-1 text-[10px] font-semibold text-white shadow-lg group-hover:block group-focus-visible:block">{step.short}</span>
        </button>
        {i < processSteps.length - 1 && <Icon name="arrow" size={12} className="shrink-0 text-slate-300"/>}
      </div>)}
    </div>

    <div className="sm:hidden" aria-label="Fortschritt im Angebotsvorgang">
      <div className="flex items-center justify-between px-1">
        {processSteps.map((step, i) => <button
          key={step.key}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`${i + 1} von 6: ${step.title}`}
          aria-current={active === i ? "step" : undefined}
          className={`grid h-10 w-10 place-items-center rounded-full border transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20 ${active === i ? "border-[#176b68] bg-[#176b68] text-white shadow-md" : i < active ? "border-[#8fc6b2] bg-[#e5f1ef] text-[#176b68]" : "border-slate-200 bg-white text-slate-400"}`}
        ><Icon name={step.icon} size={15}/></button>)}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-[#f3f7f6] px-3 py-2">
        <span className="text-[11px] font-bold uppercase tracking-[.11em] text-[#176b68]">Schritt {active + 1} von 6</span>
        <span className="text-xs font-bold text-slate-800">{processSteps[active].title}</span>
      </div>
    </div>
  </>;
}

function ProcessDetail({ active, setActive }) {
  const step = processSteps[active];
  return <div id={`process-panel-${active}`} className={`mt-3 rounded-xl border p-4 ${active === 5 ? "border-[#8fc6b2] bg-[#effaf5]" : "border-slate-200 bg-white"}`} role="tabpanel" aria-labelledby={`process-tab-${active}`} aria-label={step.title}>
    <div className="flex flex-col gap-3 min-[390px]:flex-row min-[390px]:items-start min-[390px]:justify-between">
      <div className="flex min-w-0 items-center gap-2">
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${toneClasses(step.tone)}`}><Icon name={step.icon} size={15}/></span>
        <div className="min-w-0"><p className="text-[9px] font-bold uppercase tracking-[.13em] text-slate-400">Aktueller Schritt</p><h3 className="truncate text-sm font-bold text-slate-950">{step.title}</h3></div>
      </div>
      {active === 5 ? <StatusPill tone="green">Freigabe nötig</StatusPill> : <StatusPill tone={step.tone}>{active < 2 ? "erkannt" : "in Arbeit"}</StatusPill>}
    </div>
    <div className="mt-3">{step.detail}</div>
    <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-200/80 pt-3">
      <button type="button" disabled={active === 0} onClick={() => setActive(Math.max(0, active - 1))} className="text-[11px] font-bold text-slate-500 disabled:opacity-30">← Zurück</button>
      <span className="text-[10px] text-slate-400">{active + 1} / {processSteps.length}</span>
      {active < processSteps.length - 1 ? <button type="button" onClick={() => setActive(active + 1)} className="min-h-9 rounded-lg px-2 text-[11px] font-bold text-[#176b68] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20">Weiter →</button> : <span className="text-[11px] font-bold text-[#176b68]">Entwurf bereit</span>}
    </div>
  </div>;
}

function ProductWorkspace() {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || interacted) return;
    const timer = setInterval(() => setActive(s => (s + 1) % processSteps.length), 3800);
    return () => clearInterval(timer);
  }, [interacted]);

  const chooseStep = index => {
    setInteracted(true);
    setActive(index);
  };

  return <div id="produkt" className="relative mx-auto w-full max-w-[650px] scroll-mt-24 sm:col-start-2 sm:row-start-1">
    <div className="absolute -inset-5 -z-10 rounded-[40px] bg-[#cfe6e1]/35 blur-2xl"/>
    <div className="overflow-hidden rounded-[22px] border border-slate-300/80 bg-white shadow-[0_28px_70px_rgba(23,48,46,.14),0_4px_12px_rgba(15,23,42,.05)]">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#f8faf9] px-4 py-3 sm:px-5">
        <div className="min-w-0"><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#176b68]">Angebotsvorgang #1048</p><p className="mt-1 truncate text-sm font-bold text-slate-950">Bürogebäude Hamburg</p><p className="truncate text-[10px] text-slate-500">Unterhaltsreinigung · Demo-Daten</p></div>
        <div className="shrink-0"><StatusPill>Prüfung offen</StatusPill></div>
      </div>
      <div className="border-b border-slate-200 px-4 py-3 sm:px-5"><ProcessNavigator active={active} setActive={chooseStep}/></div>
      <div className="p-4 sm:p-5"><ProcessDetail active={active} setActive={chooseStep}/></div>
    </div>
    <p className="mt-4 px-2 text-center text-[11px] leading-5 text-slate-500">Interaktive Beispielansicht mit Demo-Daten – keine echte Kundenanfrage.</p>
  </div>;
}

/* Mobile: bewusster Abschnittswechsel statt zusätzlicher Erklärkarte. */
function MobileProcessIntro() {
  return <div className="mb-5 flex items-end justify-between gap-4 sm:hidden">
    <div>
      <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#176b68]">Produktvorschau</p>
      <h2 className="mt-1.5 max-w-[250px] font-['DM_Sans'] text-[24px] font-black leading-[1.04] tracking-[-.035em] text-[#102322]">So wird aus einer Anfrage ein Angebot.</h2>
    </div>
    <span className="mb-0.5 shrink-0 rounded-full border border-[#b8d6d1] bg-white px-2.5 py-1 text-[9px] font-bold text-[#176b68]">Demo</span>
  </div>;
}

function Hero() {
  return <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-[#f8faf9]">
    <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: "linear-gradient(#dfe7e5 1px, transparent 1px), linear-gradient(90deg, #dfe7e5 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "linear-gradient(to bottom,black,transparent 80%)" }}/>
    <div className="relative mx-auto max-w-[1180px] pt-8 sm:grid sm:items-center sm:gap-14 sm:px-5 sm:py-20 lg:grid-cols-[.82fr_1.18fr] lg:px-8 lg:py-24">
      <div className="px-5 pb-10 sm:px-0 sm:pb-0">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b8d6d1] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-[#176b68] sm:mb-6 sm:text-[11px]"><Icon name="layers" size={14}/>{CONFIG.category}</div>
        <h1 className="font-['DM_Sans'] text-[clamp(2.65rem,12vw,3.1rem)] font-black leading-[.96] tracking-[-.055em] text-[#102322] sm:text-[64px] lg:text-[68px]"><span className="sm:hidden">Mehr Angebote.<br/><span className="text-[#176b68]">Weniger E-Mail-Arbeit.</span></span><span className="hidden sm:inline">Mehr Angebote erstellen.<br/><span className="text-[#176b68]">Weniger Zeit mit E-Mails verlieren.</span></span></h1>

        <p className="mt-5 max-w-[610px] text-[15px] leading-6 text-slate-600 sm:mt-7 sm:text-[17px] sm:leading-7"><span className="sm:hidden">ANVERO macht aus Kundenanfragen kalkulierte Angebotsentwürfe für Gebäudereinigungen.</span><span className="hidden sm:inline">ANVERO automatisiert die Angebotsvorbereitung für Gebäudereinigungen – von der Kundenanfrage bis zum kalkulierten Entwurf.</span></p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <Button href="#demo" className="w-full sm:w-auto">Persönliche Demo anfragen</Button>
          <Button href="#produkt" secondary className="hidden sm:inline-flex">Produkt ansehen</Button>
        </div>

        <p className="mt-5 hidden max-w-[570px] text-[13px] leading-5 text-slate-500 sm:block">Individuell eingerichtet für Leistungen, Pflichtangaben, Kalkulationsregeln und Angebotsvorlagen Ihres Unternehmens.</p>
      </div>

      {/* Auf Mobile beginnt hier sichtbar ein eigener Produktabschnitt. Desktop bleibt zweispaltig. */}
      <div className="border-t border-slate-200 bg-[#eef4f2] px-5 pb-12 pt-9 shadow-[inset_0_10px_30px_rgba(16,44,43,.035)] sm:contents">
        <MobileProcessIntro/>
        <ProductWorkspace/>
      </div>
    </div>
  </section>;
}

const benefits = [
  ["mail", "Anfragen strukturiert erfassen", "Relevante Objekt-, Kunden- und Leistungsdaten werden einem nachvollziehbaren Vorgang zugeordnet."],
  ["search", "Fehlende Angaben gezielt klären", "Offene Pflichtangaben werden erkannt und mit passenden Rückfragen ergänzt."],
  ["settings", "Angebote konsistent vorbereiten", "Leistungen und Kalkulationsregeln werden nach dem Prozess Ihres Unternehmens angewendet."],
];

function Benefits() {
  return <section id="vorteile" className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-[1120px] px-5 lg:px-8">
    <div className="max-w-3xl"><p className="section-kicker">Der konkrete Nutzen</p><h2 className="section-title">Weniger Handarbeit zwischen Posteingang und Angebot.</h2></div>
    <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
      {benefits.map(([icon,title,text]) => <article key={title} className="py-6 md:px-7 md:py-8 first:md:pl-0 last:md:pr-0"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5f1ef] text-[#176b68]"><Icon name={icon} size={18}/></span><h3 className="mt-5 text-base font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
    </div>
  </div></section>;
}

const workflowGroups = [
  { label:"Anfrage verstehen", text:"Aus einer Nachricht wird ein strukturierter Vorgang.", steps:[["mail","Anfrage kommt an"],["search","Daten werden erkannt"],["clock","Fehlendes wird markiert"]] },
  { label:"Angebot vorbereiten", text:"Offene Angaben und individuelle Regeln fließen zusammen.", steps:[["send","Rückfrage wird vorbereitet"],["settings","Antwort und Regeln werden verarbeitet"],["file","Entwurf wird kalkuliert"]] },
  { label:"Kontrolliert abschließen", text:"Die Entscheidung bleibt bei Ihrem Unternehmen.", steps:[["user","Mitarbeiter prüft"],["shield","Mitarbeiter gibt frei"],["arrow","Versand und Follow-up starten"]] },
];

function Workflow() {
  return <section id="workflow" className="border-y border-slate-200 bg-[#f1f6f4] py-16 sm:py-24"><div className="mx-auto max-w-[1120px] px-5 lg:px-8">
    <div className="max-w-3xl"><p className="section-kicker">Ein vollständiger Angebotsvorgang</p><h2 className="section-title">Von der Anfrage bis zum kontrollierten Versand.</h2><p className="section-copy">ANVERO verbindet einzelne Nachrichten, Angaben und Regeln in einem nachvollziehbaren Ablauf.</p></div>
    <div className="mt-10 grid gap-4 lg:grid-cols-3">{workflowGroups.map((group,gi) => <article key={group.label} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><span className="font-mono text-[11px] font-bold text-[#176b68]">PHASE 0{gi+1}</span><span className="h-px w-12 bg-[#b8d6d1]"/></div><h3 className="mt-4 text-lg font-black tracking-[-.025em] text-[#102322]">{group.label}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{group.text}</p><ol className="mt-5 space-y-2">{group.steps.map(([icon,label],i) => <li key={label} className="flex min-h-12 items-center gap-3 rounded-xl bg-[#f7faf9] px-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#e5f1ef] text-[#176b68]"><Icon name={icon} size={15}/></span><span className="text-xs font-bold text-slate-700">{label}</span><span className="ml-auto font-mono text-[9px] text-slate-400">{gi*3+i+1}</span></li>)}</ol></article>)}</div>
  </div></section>;
}

function Control() {
  const steps=[["sparkle","ANVERO bereitet vor"],["user","Mitarbeiter prüft"],["shield","Mitarbeiter gibt frei"],["send","Angebot wird versendet"]];
  return <section id="kontrolle" className="bg-[#102c2b] py-20 text-white sm:py-24"><div className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
    <div><p className="mb-4 text-xs font-extrabold uppercase tracking-[.15em] text-[#8ed0c9]">Kontrolle als Produktprinzip</p><h2 className="font-['DM_Sans'] text-4xl font-black leading-[1.04] tracking-[-.04em] sm:text-5xl">Automatisiert vorbereitet. Von Ihrem Team entschieden.</h2><p className="mt-6 text-base leading-7 text-slate-300">ANVERO übernimmt wiederkehrende Vorarbeit und dokumentiert jeden Schritt im Vorgang. Ihr Team prüft den kalkulierten Entwurf und gibt das Angebot verbindlich frei.</p></div>
    <div className="space-y-3">{steps.map(([icon,label],i)=><div key={label} className={`flex items-center gap-4 rounded-2xl border p-4 ${i===2?"border-[#e2bd60] bg-[#e2bd60]/10":"border-white/10 bg-white/[.04]"}`}><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${i===2?"bg-[#e2bd60] text-[#17302e]":"bg-[#1d4744] text-[#8ed0c9]"}`}><Icon name={icon}/></span><span className="text-sm font-bold">{label}</span><span className="ml-auto font-mono text-[10px] text-slate-500">0{i+1}</span></div>)}</div>
  </div></section>;
}

const industryItems=["Objekt- und Kundendaten","Flächen und Reinigungsintervalle","Reinigungsarten und Leistungspositionen","Erforderliche Pflichtangaben","Preis- und Kalkulationsregeln","Strukturierte Rückfragen","Eigene Angebotsvorlagen","Mitarbeiterrollen und Freigaben","Automatische Follow-ups"];
function Industry(){return <section id="branche" className="bg-white py-16 sm:py-24"><div className="mx-auto grid max-w-[1120px] gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div><p className="section-kicker">Branchenspezifisch eingerichtet</p><h2 className="section-title">Für den Angebotsprozess von Gebäudereinigungen entwickelt.</h2><p className="section-copy">ANVERO ist kein allgemeiner KI-Assistent. Leistungen, Pflichtangaben, Kalkulationsregeln, Angebotsvorlagen und Freigaben werden passend zu Ihrem Unternehmen eingerichtet.</p></div><div className="grid gap-2 sm:grid-cols-2">{industryItems.map(item=><div key={item} className="flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] px-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#e5f1ef] text-[#176b68]"><Icon name="check" size={15}/></span><span className="text-[13px] font-semibold leading-5 text-slate-700">{item}</span></div>)}</div></div></section>}

const setupSteps=[["search","Prozess aufnehmen","Wir erfassen typische Anfragen, Leistungen, Pflichtangaben und Freigabeschritte."],["settings","Regeln und Vorlagen einrichten","Kalkulationsgrundlagen, Dokumente und Rückfragen werden passend zu Ihrem Ablauf konfiguriert."],["layers","Anbindung abstimmen","Bestehende Systeme werden über verfügbare oder individuelle Schnittstellen eingebunden."],["check","Mit realen Fällen testen","Gemeinsam prüfen wir typische Vorgänge und passen Regeln vor dem produktiven Einsatz an."]];
function Setup(){return <section id="einrichtung" className="border-y border-slate-200 bg-[#f8faf9] py-16 sm:py-24"><div className="mx-auto max-w-[1120px] px-5 lg:px-8"><div className="max-w-3xl"><p className="section-kicker">Vom Prozess zum System</p><h2 className="section-title">So wird ANVERO für Ihr Unternehmen eingerichtet.</h2></div><div className="mt-10 grid gap-3 md:grid-cols-2">{setupSteps.map(([icon,title,text],i)=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e5f1ef] text-[#176b68]"><Icon name={icon} size={18}/></span><div><p className="text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400">Schritt {i+1}</p><h3 className="mt-1 text-base font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></div></article>)}</div></div></section>}

const faqs=[
["Für welche Unternehmensgröße eignet sich ANVERO?","ANVERO eignet sich für kleine, mittlere und große Gebäudereinigungsunternehmen. Funktionsumfang, Regeln und Anbindungen werden an den jeweiligen Angebotsprozess angepasst."],
["Welche bestehenden Systeme können angebunden werden?","ANVERO lässt sich mit gängigen Systemen und individuellen Schnittstellen verbinden. Welche Anbindung sinnvoll und technisch möglich ist, wird vor der Einrichtung gemeinsam geprüft."],
["Wo und wie werden Daten verarbeitet?","Daten werden sicher und datenschutzkonform verarbeitet. Die konkreten technischen und organisatorischen Rahmenbedingungen werden vor dem produktiven Einsatz transparent dokumentiert."],
["Wie läuft die Einrichtung ab?","Prozessaufnahme, Konfiguration und technische Anbindung werden gemeinsam abgestimmt. Anschließend wird ANVERO mit typischen Vorgängen getestet und für den produktiven Einsatz vorbereitet."],
["Welche Kosten entstehen?","Die Kosten richten sich nach dem gewünschten Funktionsumfang, dem Einrichtungsaufwand und den benötigten Anbindungen. Ein konkretes Angebot wird nach dem Erstgespräch erstellt."],
["Können Regeln und Vorlagen später angepasst werden?","Ja. Regeln, Pflichtangaben, Vorlagen und Abläufe können angepasst und erweitert werden, wenn sich der Angebotsprozess verändert."],
["Was passiert bei ungewöhnlichen Anfragen?","Unklare oder ungewöhnliche Anfragen werden kenntlich gemacht und bei Bedarf zur manuellen Prüfung an einen Mitarbeiter weitergegeben."],
["Ersetzt ANVERO Mitarbeiter?","Nein. ANVERO übernimmt wiederkehrende Vorarbeit. Mitarbeiter prüfen Angebotsentwürfe, ergänzen Sonderfälle und entscheiden verbindlich über die Freigabe."],
];
function FAQ(){const [open,setOpen]=useState(-1);return <section id="faq" className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-[900px] px-5 lg:px-8"><p className="section-kicker">Häufige Fragen</p><h2 className="section-title">Klarheit vor der Demo.</h2><div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([q,a],i)=><div key={q}><button type="button" aria-expanded={open===i} aria-controls={`faq-${i}`} onClick={()=>setOpen(open===i?-1:i)} className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20"><span className="text-[15px] font-bold text-slate-900">{q}</span><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 transition ${open===i?"rotate-180 bg-slate-50":""}`}><Icon name="down" size={15}/></span></button>{open===i&&<div id={`faq-${i}`} className="pb-5 pr-10 text-[15px] leading-7 text-slate-600">{a}</div>}</div>)}</div></div></section>}

function Demo(){return <section id="demo" className="border-t border-slate-200 bg-[#edf4f2] py-16 sm:py-24"><div className="mx-auto max-w-[1000px] px-5 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="section-kicker">Persönliche Produktdemo</p><h2 className="section-title">Sehen Sie ANVERO in Ihrem Angebotsprozess.</h2><p className="section-copy mx-auto">Wir zeigen, wie Anfragen, Rückfragen, Kalkulation, Freigabe und Follow-up in einem strukturierten Vorgang zusammenlaufen.</p></div><form className="mx-auto mt-10 max-w-[760px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_55px_rgba(23,48,46,.08)] sm:p-8" onSubmit={e=>e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><label className="form-label">Name<input className="form-input" required autoComplete="name"/></label><label className="form-label">Unternehmen<input className="form-input" required autoComplete="organization"/></label><label className="form-label sm:col-span-2">Geschäftliche E-Mail<input className="form-input" type="email" required autoComplete="email"/></label><label className="form-label sm:col-span-2">Nachricht <span className="font-normal text-slate-400">(optional)</span><textarea className="form-input resize-none" rows="3"/></label></div><button className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#176b68] px-5 text-sm font-bold text-white hover:bg-[#125c59] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20"><Icon name="send" size={17}/>Persönliche Demo anfragen</button></form></div></section>}

function Footer(){return <footer className="bg-[#0b211f] text-white"><div className="mx-auto max-w-[1120px] px-5 py-12 lg:px-8"><div className="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1.4fr_.6fr_.6fr]"><div><div className="text-lg font-black tracking-[.16em]">ANVERO</div><p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Angebotsvorbereitung für Gebäudereinigungen – von der Anfrage bis zum kalkulierten Entwurf.</p></div><div><p className="text-xs font-bold uppercase tracking-wider text-slate-300">Produkt</p><div className="mt-4 flex flex-col gap-3"><a href="#vorteile" className="text-sm text-slate-400 hover:text-white">Vorteile</a><a href="#workflow" className="text-sm text-slate-400 hover:text-white">Ablauf</a><a href="#einrichtung" className="text-sm text-slate-400 hover:text-white">Einrichtung</a></div></div><div><p className="text-xs font-bold uppercase tracking-wider text-slate-300">Kontakt</p><div className="mt-4 flex flex-col gap-3"><a href={`mailto:${CONFIG.demoEmail}`} className="text-sm text-slate-400 hover:text-white">{CONFIG.demoEmail}</a><a href="#" className="text-sm text-slate-400 hover:text-white">Impressum</a><a href="#" className="text-sm text-slate-400 hover:text-white">Datenschutz</a></div></div></div><p className="pt-6 text-xs text-slate-500">© {new Date().getFullYear()} ANVERO</p></div></footer>}

function Header() {
  const [open,setOpen]=useState(false);
  const nav=[["Produkt","#produkt"],["Vorteile","#vorteile"],["Kontrolle","#kontrolle"],["Einrichtung","#einrichtung"],["FAQ","#faq"]];
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8faf9]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 lg:h-[72px] lg:px-8">
      <a href="#top" aria-label="ANVERO Startseite" className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20"><div className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#123f3d] text-white"><span className="text-sm font-black tracking-[-0.08em]">AV</span></div><div><div className="text-[15px] font-extrabold tracking-[.14em] text-slate-950">ANVERO</div><div className="text-[10px] text-slate-500">Anfrage bis Auftrag</div></div></a>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">{nav.map(([label,href])=><a key={href} href={href} className="text-sm font-semibold text-slate-600 hover:text-slate-950">{label}</a>)}</nav>
      <Button href="#demo" className="hidden min-h-10 px-4 py-2 sm:inline-flex">Demo anfragen</Button>
      <button type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?"Menü schließen":"Menü öffnen"} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176b68]/20 sm:hidden"><span className="text-lg font-bold">{open?"×":"☰"}</span></button>
    </div>
    {open&&<nav id="mobile-nav" className="border-t border-slate-200 bg-white px-5 py-4 sm:hidden" aria-label="Mobile Navigation"><div className="mx-auto flex max-w-[1180px] flex-col">{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">{label}</a>)}<Button href="#demo" className="mt-2 w-full">Demo anfragen</Button></div></nav>}
  </header>;
}

export default function App() {
  return <>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');html{scroll-behavior:smooth}body{margin:0;font-family:Inter,sans-serif;color:#1e293b;background:#fff;-webkit-font-smoothing:antialiased}.section-kicker{margin-bottom:1rem;font-size:.72rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:#176b68}.section-title{font-family:'DM Sans',sans-serif;font-size:clamp(2.15rem,5vw,3.35rem);font-weight:900;line-height:1.03;letter-spacing:-.045em;color:#102322}.section-copy{margin-top:1.25rem;max-width:42rem;font-size:1rem;line-height:1.75;color:#64748b}.form-label{display:flex;flex-direction:column;gap:.5rem;font-size:.75rem;font-weight:700;color:#334155}.form-input{min-height:46px;border:1px solid #cbd5e1;border-radius:.65rem;background:white;padding:.7rem .8rem;font:inherit;font-size:.875rem;color:#0f172a;outline:none;transition:.2s}.form-input:focus{border-color:#176b68;box-shadow:0 0 0 4px rgba(23,107,104,.12)}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`}</style>
    <Header/>
    <main><Hero/><Benefits/><Workflow/><Control/><Industry/><Setup/><FAQ/><Demo/></main>
    <Footer/>
  </>;
}
