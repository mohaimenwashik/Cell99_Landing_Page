import React, { useEffect, useState } from "react";
import { businessInfo } from "./config";
import brokenScreenIcon from "./assets/broken-screen.png";
import brokenBackIcon from "./assets/broken-back.png";
import speakerIcon from "./assets/phone-speaker.png";
import batteryIcon from "./assets/phone-battery.png";
import cameraIcon from "./assets/phone-camera.png";
import chargingPortIcon from "./assets/charging-port.png";
import diagnosticIcon from "./assets/free-diagnostic.png";
import customerServiceIcon from "./assets/customer-service.png";
import customerRetentionIcon from "./assets/customer-retention.png";
import lowPriceIcon from "./assets/low-price.png";
import localExpertIcon from "./assets/local-expert.png";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

// ============================================================================
// BUSINESS DATA - Store information, services, and page content
// ============================================================================

// Store information - imported from centralized config
// All contact details are managed in config.js for global access
const store = {
  name: businessInfo.name,
  address: businessInfo.tempe.address,
  phoneDisplay: businessInfo.tempe.phoneDisplay,
  phoneHref: businessInfo.tempe.phoneHref,
  hours: businessInfo.hours,
  city: businessInfo.tempe.city,
  mapLink: businessInfo.tempe.mapLink,
  email: businessInfo.email
};
const googleStaticMapsKey = import.meta.env.VITE_GOOGLE_STATIC_MAPS_KEY;
const mapEmbedSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
  store.address
)}&zoom=16&size=900x520&maptype=roadmap&markers=color:red%7C${encodeURIComponent(
  store.address
)}&key=${googleStaticMapsKey}`;

// Hero section badges - Key highlights displayed below the main heading
const heroBadges = [
  "Quick Cell Phone Services",
  "Accessories for all brands and models",
  "Walk-ins welcome", 
  "Appointments by call"
];

// Services offered - Displayed as cards in the Services section
// Maps over this array to create service cards dynamically
const services = [
  {
    title: "Broken Phone?",
    detail:
      "Cracked screens, battery issues, charging ports, and more are fixed with ease. Call for availability and quotes."
  },
  {
    title: "Need new case & accessories?",
    detail:
      "Variety of cases, screen protectors, chargers, cables, and everyday essentials for most devices."
  },
  {
    title: "Device Running Slow?",
    detail:
      "Setup assistance, data transfers, software cleanups and troubleshooting for phones available in the US."
  }
];

// Repair services - Specific repair types offered
// Displayed as icon cards in the "Our Repair Services Include" section
const repairServices = [
  {
    icon: brokenScreenIcon,
    title: "Front Glass",
    detail: "Quick replacement for cracked or damaged phone screens."
  },
  {
    icon: speakerIcon,
    title: "Speaker",
    detail: "Fix audio issues and speaker problems."
  },
  {
    icon: brokenBackIcon,
    title: "Back Glass",
    detail: "Professional back glass replacement service."
  },
  {
    icon: cameraIcon,
    title: "Camera",
    detail: "Camera lens and sensor calibrations for all phones."
  },
  {
    icon: chargingPortIcon,
    title: "Charging Port",
    detail: "Charging port calibration and replacements."
  },
  {
    icon: batteryIcon,
    title: "Battery",
    detail: "Battery replacement for extended device life."
  },
  {
    icon: diagnosticIcon,
    title: "Free Diagnostics",
    detail: "Complete diagnostic service at no cost."
  }
];

// Reasons customers choose us - Key benefits and why we stand out
// Displayed as feature cards in the "Why Our Customers Choose Us" section
const reasonsToChoose = [
  {
    icon: customerServiceIcon,
    title: "Premier Customer Care",
    detail: "We strive to serve our community with trusted phone services."
  },
  {
    icon: customerRetentionIcon,
    title: "Quick Turnaround",
    detail: "Our goal is to get your phone running like new in no time."
  },
  {
    icon: lowPriceIcon,
    title: "Low Price Guarantee",
    detail: "We understand price matters. That's why we keep our rates fair and competitive."
  },
  {
    icon: localExpertIcon,
    title: "Local Phone Experts",
    detail: "Trusted phone services offering screen replacement, battery replacement, and more."
  }
];

// Frequently Asked Questions - Common customer questions and answers
// Rendered as FAQ cards in the "Quick Answers" section
const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are available by phone, and walk-ins are welcome."
  },
  {
    q: "What phones do you service?",
    a: "We service all kind of brands and many other phones sold in the US."
  },
  {
    q: "Do you sell accessories for older models?",
    a: "Yes. We carry accessories for older devices and the latest releases."
  }
];

// ============================================================================
// MAIN REACT COMPONENT - App
// ============================================================================

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScrollTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };
  // JSON-LD Schema - Structured data for search engines (SEO)
  // Helps Google understand the business type and location
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MobilePhoneStore", "LocalBusiness"],
    name: store.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1700 E Elliot Rd STE 4",
      addressLocality: "Tempe",
      addressRegion: "AZ",
      postalCode: "85284",
      addressCountry: "US"
    },
    areaServed: "Tempe, AZ"
  };

  // Add phone number to schema only if it's a valid phone number (not placeholder)
  if (store.phoneDisplay && !store.phoneDisplay.includes("Update")) {
    jsonLd.telephone = store.phoneDisplay;
  }

  // Main render output - All page content is defined here
  return (
    <div className="page">
      {/* Accessibility: Skip link allows users to jump to main content */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      {/* MAIN CONTENT AREA - All page sections */}
      <main id="main">
        {/* HERO SECTION - Large welcome area with value proposition */}
        <section className="hero">
          {/* Decorative background gradients */}
          <div className="hero-bg"></div>
          {/* Two-column layout: text on left, contact card on right */}
          <div className="container hero-grid">
            {/* Left column: headline and description */}
            <div className="hero-copy">
              <p className="eyebrow">Accessories • Walk-ins • Quick Service</p>
              <h1>
                Highest rated in {store.city}
              </h1>
              <p className="lead">
                Cell99 keeps you connected with accessories for old to latest
                models, plus trusted solution for your phone. Call to book an appointment, or
                walk in when you’re ready.
              </p>
              <div className="hero-cta">
                <a className="btn btn-solid" href={store.phoneHref}>
                  Call Us
                </a>
                <a className="btn btn-ghost" href={store.mapLink} target="_blank" rel="noreferrer">
                  Directions 📍
                </a>
              </div>
              {/* Display highlight badges dynamically from heroBadges array */}
              <div className="hero-badges">
                {heroBadges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            {/* Right column: Contact information card */}
            <div className="hero-card">
              {/* Card header with location information */}
              <div className="card-top">
                <span className="card-label">Visit Cell99</span>
                <h2>{store.address}</h2>
                <p className="card-sub">Open 7 Days a Week</p>
                <a
                  className="hero-mini-map"
                  href={store.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Cell99 location in Google Maps"
                >
                  <img
                    src={mapEmbedSrc}
                    alt="Map showing Cell99 location in Tempe, Arizona."
                    loading="lazy"
                  />
                </a>
              </div>
              {/* Visual divider */}
              <div className="card-divider"></div>
              {/* Call-to-action buttons in card */}
              <div className="card-actions">
                <a className="btn btn-outline" href={store.mapLink} target="_blank" rel="noreferrer">
                  Directions
                </a>
                <a className="btn btn-solid" href={store.phoneHref}>
                  {store.phoneDisplay}
                </a>
              </div>
              <p className="card-note">
                Appointments by phone. Walk-ins welcome.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Displays main service offerings */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Everything your phone needs</h2>
              <p>
                From accessories to fixes, we help keep your device protected
                and running smoothly.
              </p>
            </div>
            {/* Render each service as a card from services array */}
            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="info-card">
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REPAIR SERVICES SECTION - Specific repair services offered */}
        <section id="repair-services" className="section alt">
          <div className="container">
            <div className="section-header">
              <h2>Our Services Include</h2>
              <p>We fix a wide range of phone issues with expert care and fast turnaround.</p>
            </div>
            {/* Display repair services as icon cards */}
            <div className="card-grid">
              {repairServices.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <img src={service.icon} alt={`${service.title} icon`} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION - Benefits and reasons customers trust us */}
        <section className="section why-choose-us">
          <div className="container">
            <div className="section-header">
              <h2>Why Our Customers Choose Us</h2>
              <p>Here's what sets Cell99 apart from other shops.</p>
            </div>
            {/* Display reasons as feature cards with icons */}
            <div className="reasons-grid">
              {reasonsToChoose.map((reason) => (
                <article key={reason.title} className="reason-card">
                  <div className="reason-icon">
                    <img src={reason.icon} alt={`${reason.title} icon`} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT SECTION - Store information and benefits */}
        <section id="visit" className="section">
          <div className="container visit-grid">
            {/* Left column: Store details (address, phone, hours) */}
            <div className="visit-copy">
              <div className="section-header">
                <h2>Visit the store</h2>
                <p>
                  Stop by Cell99 in Tempe for accessories and help. Call
                  ahead to book an appointment.
                </p>
              </div>
              <div className="visit-details">
                <div>
                  <h4>Address</h4>
                  <p>{store.address}</p>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>{store.phoneDisplay}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{store.email}</p>
                </div>
                <div>
                  <h4>Hours</h4>
                  <div className="hours-list">
                    <p><strong> Mon: </strong> {store.hours.monday}</p>
                    <p><strong> Tue: </strong> {store.hours.tuesday}</p>
                    <p><strong> Wed: </strong> {store.hours.wednesday}</p>
                    <p><strong> Thu: </strong> {store.hours.thursday}</p>
                    <p><strong> Fri: </strong> {store.hours.friday}</p>
                    <p><strong> Sat: </strong> {store.hours.saturday}</p>
                    <p><strong> Sun: </strong> {store.hours.sunday}</p>
                  </div>
                </div>
              </div>
              <div className="visit-actions">
                <a className="btn btn-solid" href={store.phoneHref}>
                  Call Now
                </a>
                <a className="btn btn-outline" href={store.mapLink} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </div>
            </div>
            {/* Right column: Highlighted benefits panel */}
            <div className="visit-panel">
              <div className="panel-top">
                <p className="panel-title">Appointments & walk-ins</p>
                <h3>We’ll meet you where you are.</h3>
              </div>
              <p>
                Call to reserve a time, or drop in for walk-in service. We carry
                accessories for most devices and can help with a wide range of
                services.
              </p>              
              <h3>For Walk-ins</h3>
              <div className="visit-map-wrap">
                <a
                  className="visit-map"
                  href={store.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Cell99 location in Google Maps"
                >
                  <img
                    src={mapEmbedSrc}
                    alt="Map showing Cell99 location in Tempe, Arizona."
                    loading="lazy"
                  />
                </a>
              </div>              
              <div className="panel-tags">
                <span>Appointments by call</span>
                <span>Walk-ins welcome</span>
                <span>Accessories in-store</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION - Frequently asked questions */}
        <section className="section alt">
          <div className="container">
            <div className="section-header">
              <h2>FAQs</h2>
              <p>Common questions from new visitors.</p>
            </div>
            {/* Render FAQ items as cards from faqs array */}
            <div className="faq-grid">
              {faqs.map((item) => (
                <div key={item.q} className="faq-card">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Inject JSON-LD schema for SEO - Helps search engines understand the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <button
        type="button"
        className={`scroll-top ${showScrollTop ? "is-visible" : ""}`}
        onClick={handleScrollTop}
        aria-label="Back to top"
      >
        Scroll to Top ↑
      </button>
    </div>
  );
}

// Export App component as default
export default App;
