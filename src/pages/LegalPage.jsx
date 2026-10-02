import { Header, Footer } from "../components/Layout";
import { usePageMeta } from "../usePageMeta";

/* Rechtsseiten im Design der Startseite: Inter, Ueberschriften in 600, Farben av.*, Abschnitte durch Haarlinien getrennt. */
export function LegalPage({ title, description, path, children }) {
  usePageMeta({ title: `${title} | ANVERO`, description, path });
  return (
    <div className="bg-av-paper text-av-body antialiased">
      <Header />
      <main>
        <article className="mx-auto max-w-[760px] px-5 py-14 sm:py-20 lg:px-8">
          <p className="mb-4 text-[13px] font-medium text-av-muted">Rechtliches</p>
          <h1 className="text-[clamp(2.2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-.025em] text-av-ink">{title}</h1>
          <div className="mt-10">{children}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function Section({ title, children }) {
  return (
    <section className="border-t border-av-line py-8">
      <h2 className="text-[20px] font-semibold tracking-[-.01em] text-av-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[16px] leading-7 text-av-body">{children}</div>
    </section>
  );
}

export const linkClass =
  "font-semibold text-av-petrol underline underline-offset-2 hover:text-av-petrol-dark focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol";
