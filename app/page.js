export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="page">
      <section className="rapid-card">
        <div className="rapid-card__accent" />

        <div className="rapid-card__content">
          <div className="rapid-card__header">
            <div>
              <p className="eyebrow">Mission: Grand Champion</p>
              <h1>Rapid Rush</h1>
            </div>

            <span className="phase-badge">
              <span className="phase-badge__dot" />
              Phase #1
            </span>
          </div>

          <p className="description">
            Dapatkan satu set quiz secara acak untuk memulai permainan.
            Gunakan perangkat dan browser yang sama selama Rapid Rush berlangsung.
          </p>

          <div className="action-area">
            <a className="button" href="/go">
              Mulai Quiz
              <span className="button-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <p className="note">
              Set yang diterima akan tetap sama pada perangkat ini.
            </p>
          </div>
        </div>
      </section>

      <p className="footer-note">
        Atlantik 2026 · Mission: Grand Champion
      </p>
    </main>
  );
}