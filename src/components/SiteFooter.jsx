import React from "react";
import { businessInfo } from "../config";
import cell99Logo from "../assets/Logos/Cell99_logo.svg";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={cell99Logo} alt="Cell99" className="logo footer-logo" />
          <p>Phone accessories and services in Tempe, AZ.</p>
        </div>
        <div>
          <h4>Visit</h4>
          <p>{businessInfo.tempe.address}</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>
            <a href="/privacy-policy.html">Privacy Policy</a>
          </p>
          <p>
            <a href="/terms-and-conditions.html">Terms and Conditions</a>
          </p>
          <p>
            <a href="/icon-credits.html">Icon Credits</a>
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a href={businessInfo.tempe.phoneHref}>
              {businessInfo.tempe.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={businessInfo.emailHref} target="_blank" rel="noreferrer">
              {businessInfo.email}
            </a>
          </p>
          <p className="fine-print">
            © {businessInfo.copyrightYear} | All Rights Reserved | Cell99 is not
            affiliated with Apple, Samsung, Google, or any other brand mentioned.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
