import React from "react";

function LegalHeader() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a
          href="/index.html"
          className="logo"
        >
          <span className="logo-mark">99</span>
          <span className="logo-text">Cell99</span>
        </a>
        <div className="header-cta">
          <a
            className="btn btn-outline"
            href="/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Back to Home
          </a>
        </div>
      </div>
    </header>
  );
}

export default LegalHeader;
