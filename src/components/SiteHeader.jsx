import React from "react";
import { businessInfo } from "../config";
import cell99Logo from "../assets/Logos/Cell99_logo.svg";

function SiteHeader({ variant = "main" }) {
  const isLegal = variant === "legal";

  return (
    <header className="site-header">
      <div className="container header-content">
        {isLegal ? (
          <a href="/index.html" aria-label="Cell99 home">
            <img src={cell99Logo} alt="Cell99" className="logo" />
          </a>
        ) : (
          <img src={cell99Logo} alt="Cell99" className="logo" />
        )}
        {!isLegal && (
          <nav className="nav-links">
            <a href="#services">What We Do?</a>
            <a href="#repair-services">Services</a>
            <a href="#visit">Visit</a>
          </nav>
        )}
        <div className="header-cta">
          {isLegal ? (
            <a className="btn btn-outline" href="/index.html">
              Back to Home
            </a>
          ) : (
            <>
              <a
                className="btn btn-outline"
                href={businessInfo.tempe.mapLink}
                target="_blank"
                rel="noreferrer"
              >
                Visit Us
              </a>
              <a className="btn btn-solid" href={businessInfo.tempe.phoneHref}>
                Call Us
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
