export const dynamic = "force-dynamic";

function getAssignmentInfo() {
  const mode = (
    process.env.ASSIGNMENT_MODE ?? "sticky"
  ).toLowerCase();

  const rawTtl =
    process.env.ASSIGNMENT_TTL_MINUTES ?? "30";

  const parsedTtl = Number.parseInt(rawTtl, 10);

  const ttl =
    Number.isFinite(parsedTtl) && parsedTtl > 0
      ? parsedTtl
      : 30;

  return {
    mode,
    ttl,
  };
}

export default function Home() {
  const { mode, ttl } = getAssignmentInfo();

  return (
    <main className="page">
      <section className="rapid-card">
        <div className="rapid-card__accent" />

        <div className="rapid-card__content">
          <div className="rapid-card__header">
            <div>
              <p className="eyebrow">
                Mission: Grand Champion
              </p>

              <h1>Rapid Rush</h1>
            </div>

            <span className="phase-badge">
              <span className="phase-badge__dot" />
              Phase #1
            </span>
          </div>

          <p className="description">
            Dapatkan satu set quiz secara acak untuk memulai
            permainan. Gunakan perangkat dan browser yang sama
            selama Rapid Rush berlangsung.
          </p>

          <h5 className="instruction-note">
            <strong>Harap gunakan nama asli.</strong>{" "}
            <br />
            Gunakan &lt;nama panggilan&gt;-&lt;nama subdit&gt; sebagai nickname.
            <br />
            Contoh: Ranti-PIKSI
            <br />
            <strong>Jika nickname bukan nama asli, maka skor tidak akan diperhitungkan.</strong>{" "}
          </h5>

          <div className="action-area">
            <a className="button" href="/go">
              Mulai Quiz

              <span
                className="button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <p className="note">
              {mode === "random"
                ? "Mode: Random · Set akan diacak setiap kali permainan dimulai."
                : `Mode: Sticky · Set akan tetap sama pada perangkat ini selama ${ttl} menit.`}
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