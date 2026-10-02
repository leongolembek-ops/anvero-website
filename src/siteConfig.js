/* Zentrale Stammdaten der Website. Nur hier pflegen, nicht in den Komponenten. */

/* Einzige gueltige Website-URL. Muss mit index.html, public/robots.txt und
   public/sitemap.xml uebereinstimmen (dort steht sie als feste Zeichenkette). */
export const SITE_URL = "https://anvero.tech";

export const BUSINESS = {
  name: "ANVERO",
  legalForm: "Einzelunternehmen",
  owner: "Leon Raik Golembek",
  street: "Zeppelinstraße 5",
  zip: "25451",
  city: "Quickborn",
  country: "Deutschland",
};

/* Oeffentliche Kontaktadresse auf der Website-Domain. Das interne Demo-Postfach fuer Make und Tests
   wird hier bewusst nicht eingetragen. */
export const CONTACT = {
  email: "info@anvero.tech",
  phoneDisplay: "0152 31792983",
  phoneHref: "tel:+4915231792983",
};

/* Calendly-Buchungslink. Es werden nur Links akzeptiert, die mit "https://calendly.com/" beginnen.
   Datenschutzerklaerung um den Terminanbieter ergaenzen (siehe LEGAL-TODO.md). */
const CALENDLY_URL = "https://calendly.com/leongolembek/20min";

/* Beschriftung des Calendly-Buttons. Der Link oben ist der allgemeine Profil-Link, ein 20-Minuten-Termin
   ist nicht belegt. Erst auf "20-Minuten-Demo buchen" aendern, wenn in Calendly ein 20-Minuten-Termin
   eingerichtet ist und CALENDLY_URL direkt auf diesen Termin zeigt. */
export const CALENDLY_LABEL = "Demo-Termin auswählen";

export const CALENDLY_HREF = CALENDLY_URL.startsWith("https://calendly.com/") ? CALENDLY_URL : null;
