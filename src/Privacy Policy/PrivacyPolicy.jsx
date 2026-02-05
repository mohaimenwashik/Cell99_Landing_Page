import React from "react";
import { businessInfo } from "../config";
import LegalHeader from "../components/LegalHeader";
import LegalFooter from "../components/LegalFooter";

// Privacy Policy Component - Displays Cell99's privacy practices and data handling
function PrivacyPolicy() {
  return (
    <div className="page">
      {/* Skip link for accessibility */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Header */}
      <LegalHeader />

      <main id="main" className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Privacy Policy</h1>
            <p className="effective-date">
              <strong>Effective Date:</strong> {businessInfo.effectiveDate}
            </p>

            <p>
              At Cell 99, we are committed to protecting your privacy and
              ensuring that your personal information is handled in a safe and
              responsible manner. This Privacy Policy outlines how we collect,
              use, disclose, and protect your information by applicable laws in
              the United States.
            </p>

            <section>
              <h2>1. Information We Collect</h2>
              <p>
                When you visit our store, use our website, or communicate with
                us, we may collect the following types of information:
              </p>

              <h3>Personal Information:</h3>
              <p>
                This includes your name, address, email address, phone number,
                and any other information you provide to us when you place an
                order or request a quote.
              </p>

              <h3>Device Information:</h3>
              <p>
                Information about the device you bring in for a fix, including
                its make, model, serial number, and condition.
              </p>

              <h3>Payment Information:</h3>
              <p>
                If you make a purchase, we may collect information necessary to
                process your payment, such as credit card numbers or other
                payment details.
              </p>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul>
                <li>To provide and manage our services.</li>
                <li>
                  To communicate with you regarding your device's status,
                  orders, or inquiries.
                </li>
                <li>To process payments and manage your account.</li>
                <li>To improve our services and customer experience.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2>3. Disclosure of Your Information</h2>
              <p>
                We do not share your personal information with third parties
                except in the following circumstances:
              </p>

              <h3>Service Providers:</h3>
              <p>
                We may share your information with trusted third-party service
                providers who assist us in operating our business and providing
                services to you (e.g., payment processors, shipping companies).
              </p>

              <h3>Legal Compliance:</h3>
              <p>
                We may disclose your information when required by law or in
                response to valid requests by public authorities.
              </p>

              <h3>Business Transfers:</h3>
              <p>
                In the event of a merger, acquisition, or sale of all or a
                portion of our business, your information may be transferred as
                part of that transaction.
              </p>
            </section>

            <section>
              <h2>4. Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, alteration, or
                destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure. While we strive
                to protect your information, we cannot guarantee its absolute
                security.
              </p>
            </section>

            <section>
              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>
                  Request correction of any inaccurate or incomplete
                  information.
                </li>
                <li>
                  Request deletion of your personal information, subject to
                  certain exceptions.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a
                  href={businessInfo.tempe.phoneHref}
                >
                  {businessInfo.tempe.phoneDisplay}
                </a>.
              </p>
            </section>

            <section>
              <h2>6. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. Any changes will be
                posted on our website with a new effective date. We encourage
                you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <address>
                <strong>{businessInfo.name}</strong>
                <br />
                {businessInfo.tempe.address}
                <br />
                <a
                  href={businessInfo.emailHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {businessInfo.email}
                </a>
                <br />
                <a
                  href={businessInfo.tempe.phoneHref}
                >
                  {businessInfo.tempe.phoneDisplay}
                </a>
              </address>
              <p>
                Your privacy is important to us, and we appreciate your trust in
                {businessInfo.name}. Thank you for choosing us for your device needs!
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <LegalFooter />
    </div>
  );
}

export default PrivacyPolicy;
