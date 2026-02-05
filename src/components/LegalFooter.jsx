import React from "react";
import { businessInfo } from "../config";

function LegalFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            <span className="logo-mark">99</span>
            <span className="logo-text">Cell99</span>
          </div>
          <p>Phone accessories and repair services.</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>
            <a href="/privacy-policy.html" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="/terms-and-conditions.html" target="_blank" rel="noreferrer">
              Terms and Conditions
            </a>
          </p>
          <p>
            <a href="/icon-credits.html" target="_blank" rel="noreferrer">
              Icon Credits
            </a>
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a
              href={businessInfo.emailHref}
              target="_blank"
              rel="noreferrer"
            >
              {businessInfo.email}
            </a>
          </p>
          <p>
            <a
              href={businessInfo.tempe.phoneHref}
            >
              {businessInfo.tempe.phoneDisplay}
            </a>
          </p>
          <p className="fine-print">
            © {businessInfo.copyrightYear} | All Rights Reserved | Cell99 is not affiliated with
              Apple, Samsung, Google, or any other brand mentioned.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default LegalFooter;
