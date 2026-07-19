import Image from "next/image";

const services = [
  "Web Application Development",
  "Mobile Application Development",
  "Custom Software Development",
  "API & System Integration",
  "UI/UX Design",
  "Branding & Identity",
  "Digital Marketing",
  "Content & Creative Production",
  "AI & Automation Solutions",
  "Cloud, DevOps & Infrastructure",
  "Security & Maintenance Services",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <path d="M22 2c.7 12.8 7.2 19.3 20 20-12.8.7-19.3 7.2-20 20-.7-12.8-7.2-19.3-20-20 12.8-.7 19.3-7.2 20-20Z" />
    </svg>
  );
}

function ServiceIcon({ index }) {
  const icons = [
    <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 7h.01M10 7h.01M8 15l-2-2 2-2M16 11l2 2-2 2"/></>,
    <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 18h2"/></>,
    <><path d="M12 2 3.5 6.7 12 11.4l8.5-4.7L12 2Z"/><path d="m3.5 11.3 8.5 4.8 8.5-4.8M3.5 16l8.5 4.8 8.5-4.8"/></>,
    <><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="m8.7 10.6 6.6-3.2M8.7 13.4l6.6 3.2"/></>,
    <><path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4M4 16l4 4"/></>,
    <><path d="M12 3a9 9 0 1 0 9 9c0-1.2-.8-2-2-2h-3a2 2 0 0 1-2-2V5c0-1.2-.8-2-2-2Z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="8.5" cy="16" r="1"/></>,
    <><path d="M4 14v6M10 10v10M16 5v15M3 4h18"/><path d="m4 10 6-4 6 2 5-5"/></>,
    <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m3 15 5-5 4 4 3-3 6 6"/><circle cx="16.5" cy="8.5" r="1.5"/></>,
    <><path d="M12 3a6 6 0 0 0-3.5 10.9V17h7v-3.1A6 6 0 0 0 12 3Z"/><path d="M9 21h6M10 17v-4l2-2 2 2v4M19 4l1-1M5 4 4 3"/></>,
    <><path d="M7 18H6a4 4 0 0 1-.4-8A6.5 6.5 0 0 1 18 8.5 4.8 4.8 0 0 1 18.2 18H17"/><path d="M9 15v6M15 15v6M12 12v9"/></>,
    <><path d="M12 2 4.5 5v6c0 5 3 8.8 7.5 11 4.5-2.2 7.5-6 7.5-11V5L12 2Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  ];

  return <svg className="serviceIcon" viewBox="0 0 24 24" aria-hidden="true">{icons[index]}</svg>;
}

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <div className="orb orbOne" />
      <div className="orb orbTwo" />

      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Techbela home">
          <Image src="/techbela-logo.png" alt="Techbela" width={182} height={35} priority />
        </a>
        <div className="navRight">
          <span className="availability"><i /> Available for projects</span>
          <a className="contactLink" href="mailto:hello@techbela.com">
            Let&apos;s talk <ArrowIcon />
          </a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <div className="heroTop">
          <div className="eyebrow"><span /> Digital solutions · Real business impact</div>
        </div>
        <div className="heroOrbit" aria-hidden="true">
          <span className="orbitRing orbitRingOuter"><i /></span>
          <span className="orbitRing orbitRingInner"><i /></span>
          <span className="orbitCore">
            <Image src="/techbela-white.png" alt="" width={56} height={56} />
          </span>
        </div>
        <div className="heroTitle">
          <h1>
            Beyond technology<br />
            <span className="highlight">towards excellence.</span>
          </h1>
        </div>
        <div className="heroBottom">
          <div className="heroStatement">
            <span>Build</span><i /> <span>Automate</span><i /> <span>Grow</span>
            <p>We unite strategy, design, and technology to turn ambitious ideas into memorable digital experiences.</p>
          </div>
          <div className="scrollCue" aria-hidden="true">
            <span>Explore</span><i><ArrowIcon /></i>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="tickerTrack">
          {["Web", "Mobile", "Brand", "AI", "Cloud", "Creative", "Web", "Mobile", "Brand", "AI", "Cloud", "Creative"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="valueStrip wrap" aria-label="Techbela approach">
        <div className="valueIntro">
          <span>Built differently</span>
          <p>One partner from first sketch to final scale.</p>
        </div>
        <div className="valueItem coral">
          <strong>01</strong>
          <span>Strategy-led</span>
        </div>
        <div className="valueItem blue">
          <strong>02</strong>
          <span>Design-minded</span>
        </div>
        <div className="valueItem dark">
          <strong>03</strong>
          <span>Technology-driven</span>
        </div>
      </section>

      <section className="services wrap" id="services">
        <div className="sectionIntro">
          <span className="sectionNumber">01</span>
          <div>
            <p className="kicker">Our expertise</p>
            <h2>Everything your idea<br />needs to <em>thrive.</em></h2>
          </div>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <div className={`service service-${index + 1}`} key={service}>
              <div className="serviceHead">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="iconBox"><ServiceIcon index={index} /></div>
              </div>
              <h3>{service}</h3>
              <i><ArrowIcon /></i>
            </div>
          ))}
          <div className="service comingCard">
            <div className="spark"><SparkIcon /></div>
            <p>And a whole lot more, tailored to where you&apos;re headed.</p>
          </div>
        </div>
      </section>

      <section className="closing wrap">
        <div className="closingMark" aria-hidden="true">T<span>B</span></div>
        <div className="closingCopy">
          <p className="kicker">Launching soon</p>
          <h2>Good things are<br />worth the <em>wait.</em></h2>
          <p className="subcopy">
            We&apos;re putting the final touches on something we can&apos;t wait to share.
            Be the first to know when Techbela goes live.
          </p>
        </div>
        <a className="emailCard" href="mailto:hello@techbela.com">
          <span>Start a conversation</span>
          <strong>hello@techbela.com</strong>
          <i><ArrowIcon /></i>
        </a>
      </section>

      <footer className="footer wrap">
        <a className="brand footerBrand" href="#top">
          <Image src="/techbela-logo.png" alt="Techbela" width={156} height={30} />
        </a>
        <p>© {new Date().getFullYear()} Techbela. All rights reserved.</p>
        <p>Dhaka · Bangladesh</p>
      </footer>
    </main>
  );
}
