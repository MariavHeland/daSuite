export default function Home() {
  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="nav">
        <span className="nav-brand">DA SUITE</span>
        <div className="nav-links">
          <a href="#suite">The Suite</a>
          <a href="#minda">MINDA</a>
          <a href="#ayda">AYDA</a>
          <a href="#guida">GUIDA</a>
          <a href="#lamda">LAMDA</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="screen" style={{ paddingTop: "120px" }}>
        <div className="label">DA SUITE</div>
        <h1 className="headline">
          The software backbone<br />of independent film.
        </h1>
        <div className="rule" />
        <p className="nav-links" style={{ letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold2)" }}>
          MINDA &nbsp;·&nbsp; AYDA &nbsp;·&nbsp; GUIDA &nbsp;·&nbsp; LAMDA
        </p>
        <p className="body" style={{ marginTop: "3rem" }}>
          Every independent film runs on one producer's memory, a chain of emails,
          and hope. DA SUITE is the first platform built to change that —
          purpose-built for the international independent production company.
        </p>
        <p style={{ marginTop: "2rem", fontFamily: "sans-serif", fontSize: "0.75rem", color: "var(--dim)" }}>
          Maria v. Heland &nbsp;·&nbsp; 2026
        </p>
      </section>

      {/* ── 2. THE PROBLEM ──────────────────────────────────────── */}
      <section className="screen screen--alt">
        <div className="label">Why this exists</div>
        <p className="pullquote" style={{ maxWidth: "700px" }}>
          "Every independent film runs on one producer's memory, a chain of emails, and hope."
        </p>
        <p className="body" style={{ marginBottom: "3rem" }}>
          When that producer walks out the door — the contract never filed,
          the obligation tracked only in their head, the co-production complication
          nobody else understood — all of it walks with them.
        </p>
        <div className="rule" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem", marginTop: "1rem" }}>
          <div>
            <div className="stat-number">1 in 3</div>
            <div className="stat-label">co-productions miss a key delivery deadline</div>
          </div>
          <div>
            <div className="stat-number">€2.4M</div>
            <div className="stat-label">average budget exposure from contract conflicts</div>
          </div>
          <div>
            <div className="stat-number" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Memory</div>
            <div className="stat-label">is not a system. DA SUITE is.</div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUR TOOLS ───────────────────────────────────────── */}
      <section className="screen screen--dark" id="suite">
        <div className="label">What we built</div>
        <h2 className="headline headline--white">
          Four tools.<br />One suite.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }}>
          {[
            {
              name: "MINDA", domain: "minda.mov", anchor: "#minda",
              desc: "Contracts, obligations & people. Everything promised. Nothing missed.",
            },
            {
              name: "AYDA", domain: "ayda.mov", anchor: "#ayda",
              desc: "Budgets, financing & tax incentives across 31 European territories.",
            },
            {
              name: "GUIDA", domain: "guida.mov", anchor: "#guida",
              desc: "Co-production intelligence. 55 treaties. Instant compliance.",
            },
            {
              name: "LAMDA", domain: "lamda.mov", anchor: "#lamda",
              desc: "Story reference engine. Any script mapped to cinema history in seconds.",
            },
          ].map((app) => (
            <a key={app.name} href={app.anchor} className="app-card" style={{ textDecoration: "none" }}>
              <div className="app-card-name">{app.name}</div>
              <div className="app-card-domain">{app.domain}</div>
              <div className="app-card-desc">{app.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── 4. WHO NEEDS THIS ───────────────────────────────────── */}
      <section className="screen">
        <div className="label">The people who need this</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem", maxWidth: "720px" }}>
          {[
            "The line producer who holds three co-productions at once.",
            "The writer who needs to know what films solved the structural problem.",
            "The producer who can't afford to miss a presale delivery window.",
          ].map((line) => (
            <p key={line} className="for-text">— {line}</p>
          ))}
        </div>
        <div className="rule" />
        <p className="body">
          Every independent production company in Europe. Every project that crosses a border.
        </p>
      </section>

      {/* ── 5. THE MARKET ───────────────────────────────────────── */}
      <section className="screen screen--alt">
        <div className="label">The market</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6vw", alignItems: "center" }}>
          <div>
            <div className="stat-number">4,200+</div>
            <div className="stat-label" style={{ marginBottom: "2.5rem" }}>independent production companies in Europe</div>
            <div className="stat-number">€8.2B</div>
            <div className="stat-label">European co-production volume annually</div>
          </div>
          <div>
            <p className="pullquote" style={{ marginBottom: "1.5rem" }}>
              None of them have a system built for how this actually works.
            </p>
            <p className="body">
              DA SUITE is the first integrated platform purpose-built for the
              international independent production company — not adapted from
              enterprise software, not a spreadsheet, not a chatbot.
            </p>
            <p className="for-text" style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
              We are building what the industry needs and has never had.
            </p>
          </div>
        </div>
      </section>

      {/* ══ MINDA ══════════════════════════════════════════════════ */}

      {/* MINDA 1 — What it is */}
      <section className="screen screen--dark" id="minda">
        <div className="label" style={{ color: "var(--gold2)" }}>MINDA &nbsp;·&nbsp; minda.mov</div>
        <h2 className="headline">
          Minda remembers<br />everything.<br />You don't have to.
        </h2>
        <div className="rule" />
        <p className="body">
          Project memory, contract continuity, and obligation tracking —
          across every co-producer, every territory, every draft.
          The institutional knowledge that currently lives in one person's head,
          made permanent and searchable.
        </p>
      </section>

      {/* MINDA 2 — What it does */}
      <section className="screen">
        <div className="label">MINDA — What it does</div>
        <ul className="feature-list" style={{ maxWidth: "680px" }}>
          <li>Contract conflicts flagged in real time — before they become disputes</li>
          <li>Every obligation, deadline, and commitment tracked in one place</li>
          <li>Co-production compliance across 55 bilateral treaties</li>
          <li>Budget contingency monitoring with instant alerts when thresholds are breached</li>
          <li>Full audit trail — who agreed what, and when</li>
          <li>Survives producer changes, handovers, and gaps between productions</li>
        </ul>
      </section>

      {/* MINDA 3 — Who it's for */}
      <section className="screen screen--alt">
        <div className="label">MINDA — The moment it saves you</div>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The line producer who holds three co-productions at once and needs to prove,
          in twenty minutes, what was agreed in a contract signed six months ago in
          a language they don't speak.
        </p>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The producer whose key creative just left the project — and everything
          they knew about the Danish co-producer's obligations left with them.
        </p>
        <p className="for-text" style={{ maxWidth: "680px" }}>
          — The completion bond company asking for a contract summary at 9am.
        </p>
        <div className="rule" />
        <p className="body">minda.mov</p>
      </section>

      {/* ══ AYDA ═══════════════════════════════════════════════════ */}

      {/* AYDA 1 — What it is */}
      <section className="screen screen--dark" id="ayda">
        <div className="label" style={{ color: "var(--gold2)" }}>AYDA &nbsp;·&nbsp; ayda.mov</div>
        <h2 className="headline">
          Every budget.<br />Every territory.<br />Every incentive.
        </h2>
        <div className="rule" />
        <p className="body">
          Production finance intelligence across 31 European territories.
          Ayda models your budget, maps your financing, and tells you exactly
          what soft money is available — and what it requires.
        </p>
      </section>

      {/* AYDA 2 — What it does */}
      <section className="screen">
        <div className="label">AYDA — What it does</div>
        <ul className="feature-list" style={{ maxWidth: "680px" }}>
          <li>Budget modelling with live financing scenarios across territories</li>
          <li>Tax incentives and soft money mapped across 31 European territories</li>
          <li>Co-production budget split calculations with treaty compliance checks</li>
          <li>Contingency tracking with threshold alerts before problems become crises</li>
          <li>Presale and gap financing analysis</li>
          <li>Currency exposure and recoupment waterfall modelling</li>
        </ul>
      </section>

      {/* AYDA 3 — Who it's for */}
      <section className="screen screen--alt">
        <div className="label">AYDA — The moment it saves you</div>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The producer who can't afford to guess what the German DFFF will
          and won't cover — and needs to know before the co-production agreement
          is signed.
        </p>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The financier building a term sheet who needs the recoupment waterfall
          modelled three ways by tomorrow morning.
        </p>
        <p className="for-text" style={{ maxWidth: "680px" }}>
          — The production that missed a contingency breach until it was too late.
        </p>
        <div className="rule" />
        <p className="body">ayda.mov</p>
      </section>

      {/* ══ GUIDA ══════════════════════════════════════════════════ */}

      {/* GUIDA 1 — What it is */}
      <section className="screen screen--dark" id="guida">
        <div className="label" style={{ color: "var(--gold2)" }}>GUIDA &nbsp;·&nbsp; guida.mov</div>
        <h2 className="headline">
          55 treaties.<br />Instant compliance.<br />No surprises.
        </h2>
        <div className="rule" />
        <p className="body">
          Co-production intelligence built from every bilateral treaty in Europe.
          Guida tells you whether your project qualifies, what it requires, and
          where the gaps are — before you sign anything.
        </p>
      </section>

      {/* GUIDA 2 — What it does */}
      <section className="screen">
        <div className="label">GUIDA — What it does</div>
        <ul className="feature-list" style={{ maxWidth: "680px" }}>
          <li>Treaty eligibility checked instantly for any territory combination</li>
          <li>Cultural test requirements mapped by country and fund</li>
          <li>Co-producer search and match across the European production landscape</li>
          <li>Compliance gaps identified before contracts are signed</li>
          <li>Key person obligations, creative control requirements, and spend thresholds</li>
          <li>Updates automatically as treaty terms and fund requirements change</li>
        </ul>
      </section>

      {/* GUIDA 3 — Who it's for */}
      <section className="screen screen--alt">
        <div className="label">GUIDA — The moment it saves you</div>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The project that needs a French co-producer to unlock the CNC,
          with two weeks to find the right one and no time to read the treaty.
        </p>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The German-Swedish co-production that has been structured incorrectly
          for three months before anyone noticed.
        </p>
        <p className="for-text" style={{ maxWidth: "680px" }}>
          — The producer pitching at a market who needs to know,
          in one sentence, why this qualifies as a genuine European co-production.
        </p>
        <div className="rule" />
        <p className="body">guida.mov</p>
      </section>

      {/* ══ LAMDA ══════════════════════════════════════════════════ */}

      {/* LAMDA 1 — What it is */}
      <section className="screen screen--dark" id="lamda">
        <div className="label" style={{ color: "var(--gold2)" }}>LAMDA &nbsp;·&nbsp; lamda.mov</div>
        <h2 className="headline">
          Any script mapped to<br />cinema history<br />in seconds.
        </h2>
        <div className="rule" />
        <p className="body">
          Research engine and script doctor for filmmakers. Lamda finds the films
          that are structurally closest to yours — across any tradition, not just
          Hollywood — and diagnoses what isn't working with a specific precedent
          for every problem it finds.
        </p>
      </section>

      {/* LAMDA 2 — What it does */}
      <section className="screen">
        <div className="label">LAMDA — What it does</div>
        <ul className="feature-list" style={{ maxWidth: "680px" }}>
          <li>Comp titles from any narrative tradition — Greek, Japanese, West African, Nordic, Latin American, not only Hollywood</li>
          <li>Script diagnostic: every structural problem identified with a film precedent and a concrete fix</li>
          <li>Myth and narrative structure mapping — surfaces what tradition your story is actually working in</li>
          <li>Pitch preparation: elevator pitch, party pitch, invited pitch, podium pitch — all four scenarios</li>
          <li>Role-specific reports for writer, director, producer, and editor</li>
          <li>Bilingual output — responds in the language of the input</li>
        </ul>
      </section>

      {/* LAMDA 3 — Who it's for */}
      <section className="screen screen--alt">
        <div className="label">LAMDA — The moment it saves you</div>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The writer who knows Act 2 isn't working but can't see why —
          and needs to know which film solved exactly this problem and how.
        </p>
        <p className="for-text" style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
          — The director whose story structure doesn't fit the three-act template
          because it was never a three-act story — it's a kishōtenketsu structure,
          or a sovereignty cycle, and it needs to be read on those terms.
        </p>
        <p className="for-text" style={{ maxWidth: "680px" }}>
          — The producer who needs comp titles that actually mean something
          to a European broadcaster, not just a US studio.
        </p>
        <div className="rule" />
        <p className="body">lamda.mov</p>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section className="screen screen--dark" id="contact" style={{ alignItems: "center", textAlign: "center" }}>
        <h2 className="headline" style={{ marginBottom: "0.5rem" }}>Shall we?</h2>
        <div className="rule" />
        <p className="body" style={{ textAlign: "center", margin: "0 auto 1.5rem" }}>
          Maria v. Heland
        </p>
        <a
          href="mailto:mariav.heland@gmail.com"
          className="body"
          style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1.1rem" }}
        >
          mariav.heland@gmail.com
        </a>
        <p style={{ marginTop: "4rem", fontFamily: "sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--dim)" }}>
          DA SUITE &nbsp;·&nbsp; minda.mov &nbsp;·&nbsp; ayda.mov &nbsp;·&nbsp; guida.mov &nbsp;·&nbsp; lamda.mov
        </p>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="footer">
        <span>DA SUITE &nbsp;·&nbsp; dasuite.mov</span>
        <span>Maria v. Heland &nbsp;·&nbsp; 2026</span>
      </footer>
    </>
  );
}
