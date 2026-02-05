import React from "react";
import LegalHeader from "../components/LegalHeader";
import LegalFooter from "../components/LegalFooter";
import brokenScreenIcon from "../assets/broken-screen.png";
import brokenBackIcon from "../assets/broken-back.png";
import speakerIcon from "../assets/phone-speaker.png";
import batteryIcon from "../assets/phone-battery.png";
import cameraIcon from "../assets/phone-camera.png";
import chargingPortIcon from "../assets/charging-port.png";
import diagnosticIcon from "../assets/free-diagnostic.png";
import customerServiceIcon from "../assets/customer-service.png";
import customerRetentionIcon from "../assets/customer-retention.png";
import lowPriceIcon from "../assets/low-price.png";
import localExpertIcon from "../assets/local-expert.png";

const iconCredits = [
  {
    icon: brokenScreenIcon,
    alt: "Broken screen icon",
    label: "Broken icons created by surang - Flaticon",
    href: "https://www.flaticon.com/free-icons/broken",
    title: "broken icons"
  },
  {
    icon: brokenBackIcon,
    alt: "Broken back glass icon",
    label: "Broken icons created by surang - Flaticon",
    href: "https://www.flaticon.com/free-icons/broken",
    title: "broken icons"
  },
  {
    icon: speakerIcon,
    alt: "Speaker icon",
    label: "Loud speaker icons created by ChilliColor - Flaticon",
    href: "https://www.flaticon.com/free-icons/loud-speaker",
    title: "loud speaker icons"
  },
  {
    icon: batteryIcon,
    alt: "Battery icon",
    label: "Phone battery icons created by Iconsessions - Flaticon",
    href: "https://www.flaticon.com/free-icons/phone-battery",
    title: "phone battery icons"
  },
  {
    icon: cameraIcon,
    alt: "Camera icon",
    label: "Phone camera icons created by Freepik - Flaticon",
    href: "https://www.flaticon.com/free-icons/phone-camera",
    title: "phone camera icons"
  },
  {
    icon: chargingPortIcon,
    alt: "Charging port icon",
    label: "Usb port icons created by Pixel perfect - Flaticon",
    href: "https://www.flaticon.com/free-icons/usb-port",
    title: "usb port icons"
  },
  {
    icon: diagnosticIcon,
    alt: "Diagnostics icon",
    label: "Magnifying glass icons created by Freepik - Flaticon",
    href: "https://www.flaticon.com/free-icons/magnifying-glass",
    title: "magnifying glass icons"
  },
  {
    icon: customerServiceIcon,
    alt: "Customer service icon",
    label: "Customer service icons created by Iconjam - Flaticon",
    href: "https://www.flaticon.com/free-icons/customer-service",
    title: "customer service icons"
  },
  {
    icon: customerRetentionIcon,
    alt: "Quick turnaround icon",
    label: "Customer retention icons created by rukanicon - Flaticon",
    href: "https://www.flaticon.com/free-icons/customer-retention",
    title: "customer retention icons"
  },
  {
    icon: lowPriceIcon,
    alt: "Low price guarantee icon",
    label: "Affordable icons created by Mas Art - Flaticon",
    href: "https://www.flaticon.com/free-icons/affordable",
    title: "affordable icons"
  },
  {
    icon: localExpertIcon,
    alt: "Local expert icon",
    label: "Expert icons created by Uniconlabs - Flaticon",
    href: "https://www.flaticon.com/free-icons/expert",
    title: "expert icons"
  }
];

function IconCredits() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <LegalHeader />

      <main id="main" className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Icon Credits</h1>
            <p>
              We appreciate the icon creators that help us present our services
              clearly. Below are the attributions for each icon used on this
              site.
            </p>
            <ul className="icon-credits-list">
              {iconCredits.map((credit) => (
                <li key={`${credit.label}-${credit.alt}`} className="icon-credit">
                  <img src={credit.icon} alt={credit.alt} />
                  <a
                    href={credit.href}
                    title={credit.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {credit.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}

export default IconCredits;
