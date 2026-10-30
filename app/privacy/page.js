export const metadata = {
  title: "Privacy Policy | Plotoryx",
  description: "Learn how Plotoryx handles your data. We collect minimal information and never sell your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="policy-page container">
      <div className="policy-hero">
        <div className="policy-hero-badge">🔒 Privacy</div>
        <h1>Privacy Policy</h1>
        <div className="policy-hero-meta">
          <span className="policy-updated">Last updated: October 2024</span>
        </div>
      </div>

      <div className="policy-body">
        <section>
          <h2>Introduction</h2>
          <p>
            Plotoryx ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services. We believe in transparency and minimal data collection.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>Plotoryx collects minimal data to provide its service:</p>
          <ul>
            <li><strong>Usage data:</strong> We may collect anonymous analytics such as page views and general traffic patterns to understand how the service is used.</li>
            <li><strong>Local storage:</strong> Watchlist, continue-watching history, and preferences are stored locally in your browser using localStorage. This data never leaves your device and is not transmitted to our servers.</li>
            <li><strong>Third-party embeds:</strong> Streaming content is served via third-party embed providers. These providers may set their own cookies or collect data according to their own privacy policies.</li>
          </ul>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Plotoryx itself does not use tracking cookies. However, embedded streaming players from third-party providers may use cookies. You can disable third-party cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties. We do not collect personal information (such as name or email) unless you contact us directly.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Plotoryx uses the TMDB API for movie and TV data. TMDB's data is used under their terms of use. Streaming embeds are provided by third-party services; their use of data is governed by their respective privacy policies.
          </p>
          <p>
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Plotoryx is not directed at children under the age of 13. We do not knowingly collect any information from children under 13.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect the service from unauthorized access. Since we collect minimal personal data, the risk to your personal information is low.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            Since your watchlist and preferences are stored locally on your device, you can clear them at any time by clearing your browser's localStorage. You have full control over this data.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the "Last updated" date at the top of this page.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@plotoryx.com" className="policy-link">privacy@plotoryx.com</a>
          </p>
        </section>
      </div>


    </div>
  );
}
