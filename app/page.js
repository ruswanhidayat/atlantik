export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">MISSION: GRAND CHAMPION</p>
        <h1>Rapid Rush</h1>
        <p className="description">
          Tekan tombol di bawah untuk mendapatkan satu set quiz secara acak.
          Gunakan perangkat dan browser yang sama selama permainan.
        </p>
        <a className="button" href="/go">Mulai Quiz</a>
        <p className="note">Satu perangkat akan mempertahankan set yang sama.</p>
      </section>
    </main>
  );
}
