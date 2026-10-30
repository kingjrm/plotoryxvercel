export const metadata = {
  title: "Terms of Service | Plotoryx",
  description: "Read the Plotoryx Terms of Service – the rules and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="policy-page container">
      <div className="policy-hero">
        <div className="policy-hero-badge">📋 Legal</div>
        <h1>Terms of Service</h1>
        <div className="policy-hero-meta">
          <span className="policy-updated">Last updated: October 2024</span>
        </div>
      </div>

      <div className="policy-body">
        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using Plotoryx ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section>
          <h2>Description of Service</h2>
          <p>
            Plotoryx is a free streaming index platform that aggregates publicly available embed links from third-party providers. Plotoryx does not host, store, or distribute any video content. All streams are served directly from third-party embed services.
          </p>
        </section>

        <section>
          <h2>User Responsibilities</h2>
          <p>By using Plotoryx, you agree to:</p>
          <ul>
            <li>Use the Service only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.</li>
            <li>Not attempt to gain unauthorized access to any portion of the Service or its related systems or networks.</li>
            <li>Not use any automated tool (bot, scraper, spider) to access the Service without prior written permission.</li>
            <li>Not reproduce, duplicate, copy, sell, or exploit any portion of the Service for commercial purposes without express written consent.</li>
            <li>Take full responsibility for any content you access via the Service.</li>
          </ul>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All branding, logos, design elements, and original content on Plotoryx are the property of Plotoryx and are protected by applicable intellectual property laws. Third-party content (movies, TV shows) belongs to their respective copyright holders.
          </p>
        </section>

        <section>
          <h2>Disclaimer of Warranties</h2>
          <p>
            Plotoryx is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the reliability, accuracy, or availability of the Service. We do not guarantee uninterrupted access to any stream or content.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Plotoryx and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use the Service.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:support@plotoryx.com" className="policy-link">support@plotoryx.com</a>
          </p>
        </section>
      </div>


    </div>
  );
}
