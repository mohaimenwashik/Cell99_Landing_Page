import React from "react";
import { businessInfo } from "../config";
import LegalHeader from "../components/LegalHeader";
import LegalFooter from "../components/LegalFooter";

// Terms and Conditions Component - Displays Cell99's service terms
function TermsAndConditions() {
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
            <h1>Terms and Conditions</h1>
            <p className="effective-date">
              <strong>Effective Date:</strong> {businessInfo.effectiveDate}
            </p>

            <p>
              Welcome to {businessInfo.name}. By using our services, you agree to be bound
              by the following Terms and Conditions. If you do not agree with
              these terms, please do not use our services.
            </p>

            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By scheduling, placing an order, or otherwise accessing our
                services, you acknowledge that you have read, understood, and
                agree to these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2>2. Services Offered</h2>
              <p>
                {businessInfo.name} provides fixing services for mobile phones and related
                devices. Services may include but are not limited to screen
                replacements, battery replacements, software updates, and
                diagnostic services. We reserve the right to modify or
                discontinue any service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2>3. Estimates and Pricing</h2>
              <ul>
                <li>
                  All estimates provided by {businessInfo.name} are based on available
                  information and are subject to change. Final pricing may vary
                  based on the actual condition of the device and any additional
                  fixes required.
                </li>
                <li>
                  We accept payment via cash, credit/debit cards, and other
                  payment methods that may be offered on our website or
                  in-store.
                </li>
              </ul>
            </section>

            <section>
              <h2>4. Warranty</h2>
              <ul>
                <li>
                  We offer a warranty on parts and labor for a period of 30 days
                  from the date of the completed fix. This warranty does not
                  cover damages caused by misuse, accidents, unauthorized fixes,
                  or liquid damage.
                </li>
                <li>
                  Warranty claims must be accompanied by the original receipt or
                  proof of service.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Liability Limitations</h2>
              <ul>
                <li>
                  {businessInfo.name} is not responsible for any loss of data, software, or
                  applications on your device during the fixing process. It is
                  recommended that you back up all important information before
                  submitting your device for service.
                </li>
                <li>
                  Our liability is limited to the total amount paid for the
                  service in question. We shall not be liable for any indirect,
                  incidental, or consequential damages resulting from the use of
                  our services.
                </li>
              </ul>
            </section>

            <section>
              <h2>6. Customer Responsibilities</h2>
              <ul>
                <li>
                  You must provide accurate and complete information regarding
                  your device and the issues it is experiencing.
                </li>
                <li>
                  Ensure that the device is free of any personal data or
                  sensitive information, as a fix may involve accessing the
                  device's operating system.
                </li>
              </ul>
            </section>

            <section>
              <h2>7. Termination of Services</h2>
              <p>
                We reserve the right to terminate or suspend your access to our
                services without prior notice if you violate these Terms and
                Conditions or engage in any conduct that we deem unacceptable.
              </p>
            </section>

            <section>
              <h2>8. Changes to Terms</h2>
              <p>
                {businessInfo.name} reserves the right to modify these Terms and Conditions
                at any time. Changes will be effective immediately upon posting
                on our website. Your continued use of our services after changes
                indicates your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2>9. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of the State of Arizona. Any disputes
                arising from these terms shall be resolved in the courts of
                Arizona.
              </p>
            </section>

            <section>
              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions,
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
              <p>Thank you for choosing {businessInfo.name} for your device needs!</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <LegalFooter />
    </div>
  );
}

export default TermsAndConditions;
