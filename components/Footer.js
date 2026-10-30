"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ── Policy content ──────────────────────────────────────────────────────────
const POLICIES = {
  dmca: {
    label: "DMCA Policy",
    icon: "shield-checkmark-outline",
    sections: [
      {
        title: "What is DMCA?",
        body: "The Digital Millennium Copyright Act (DMCA) is a United States copyright law that provides a framework for protecting copyrighted content online. Plotoryx respects intellectual property rights and complies with the DMCA.",
      },
      {
        title: "How Plotoryx Works",
        body: "Plotoryx does not host, store, or distribute any video content. We are a streaming index that embeds publicly available third-party video sources. All content is provided by external embed providers, not by Plotoryx.",
      },
      {
        title: "Reporting Infringement",
        body: "If you believe that content accessible through Plotoryx infringes your copyright, please contact us with: (1) Your contact information, (2) A description of the copyrighted work, (3) The specific URL where the content appears, (4) A statement of good faith belief, (5) Your electronic or physical signature.",
      },
      {
        title: "Takedown Process",
        body: "Upon receiving a valid DMCA notice, we will act promptly to remove or disable access to the identified content. We will also notify the alleged infringer and may restore content if a valid counter-notice is received.",
      },
      {
        title: "Repeat Infringers",
        body: "Plotoryx has a policy of terminating access for users who are repeat copyright infringers in appropriate circumstances.",
      },
    ],
  },
  terms: {
    label: "Terms of Service",
    icon: "document-text-outline",
    sections: [
      {
        title: "Acceptance of Terms",
        body: "By accessing and using Plotoryx, you accept and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the site immediately.",
      },
      {
        title: "Use of Service",
        body: "Plotoryx provides a free streaming index for entertainment purposes. You agree to use the service only for lawful purposes. You may not use Plotoryx to violate any laws, infringe rights, or distribute harmful content.",
      },
      {
        title: "Disclaimer of Warranties",
        body: "Plotoryx is provided \"as is\" without warranties of any kind. We do not guarantee the availability, accuracy, or reliability of any content or the service itself. Streaming availability may change at any time.",
      },
      {
        title: "Third-Party Content",
        body: "All video content is embedded from third-party providers. Plotoryx is not responsible for the content, quality, or availability of third-party streams. Use of those streams is subject to the terms of those providers.",
      },
      {
        title: "Limitation of Liability",
        body: "To the maximum extent permitted by law, Plotoryx and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.",
      },
      {
        title: "Changes to Terms",
        body: "We reserve the right to modify these terms at any time. Continued use of Plotoryx after changes constitutes your acceptance of the new terms.",
      },
    ],
  },
  privacy: {
    label: "Privacy Policy",
    icon: "lock-closed-outline",
    sections: [
      {
        title: "Information We Collect",
        body: "Plotoryx collects minimal data. We may automatically receive standard technical data such as your IP address, browser type, and pages visited — solely for analytics and security purposes. We do not require account registration.",
      },
      {
        title: "Cookies & Local Storage",
        body: "We use browser localStorage to save your watchlist, continue-watching history, and preferences (such as autoplay settings). No login is required and this data stays on your device.",
      },
      {
        title: "Third-Party Services",
        body: "We use the TMDB API for movie and TV show metadata. Third-party streaming embeds may set their own cookies or collect data according to their own privacy policies. We encourage you to review those policies.",
      },
      {
        title: "Data Sharing",
        body: "Plotoryx does not sell, trade, or rent your personal information to third parties. We do not share data except as required by law or to protect the rights and safety of users.",
      },
      {
        title: "Analytics",
        body: "We may use privacy-respecting analytics tools to understand general usage patterns. These tools do not track individual users or collect personally identifiable information.",
      },
      {
        title: "Your Rights",
        body: "You have the right to access, correct, or delete any personal data we hold about you. Since we collect minimal data and require no accounts, most data is controlled directly by you in your browser.",
      },
      {
        title: "Contact",
        body: "If you have any questions about this Privacy Policy, please reach out to us through our community channels.",
      },
    ],
  },
};

export default function Footer() {
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [qrModalActive, setQrModalActive] = useState(false);
  const [policyModal, setPolicyModal] = useState(null); // null | "dmca" | "terms" | "privacy"
  const [policyTab, setPolicyTab] = useState("dmca");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Escape key handler for both modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (policyModal) setPolicyModal(null);
        else if (qrModalActive) setQrModalActive(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [qrModalActive, policyModal]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (policyModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [policyModal]);

  const openPolicy = (key) => {
    setPolicyTab(key);
    setPolicyModal(key);
  };

  const activePolicy = POLICIES[policyTab];

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-grid">
            {/* Brand Info Column */}
            <div className="footer-col brand-col">
              <Link href="/" className="footer-brand">
                <img src="/Plotoryx-Logo.png" alt="Plotoryx" className="footer-logo" />
                <span>Plotoryx</span>
              </Link>
              <p className="footer-desc">
                Enjoy instant streaming of high-quality movies, TV shows, and anime. Completely free, with multiple streaming servers and clean interfaces.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="Telegram">
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className="social-link" aria-label="Discord">
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/movies">Movies</Link></li>
                <li><Link href="/tv">TV Shows</Link></li>
                <li><Link href="/genres">Genres</Link></li>
                <li><Link href="/trending">Trending</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li><Link href="/favorites">Watchlist</Link></li>
                <li><a href="#">FAQ</a></li>
                <li>
                  <button className="policy-link-btn" onClick={() => openPolicy("dmca")}>
                    DMCA Policy
                  </button>
                </li>
                <li>
                  <button className="policy-link-btn" onClick={() => openPolicy("terms")}>
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button className="policy-link-btn" onClick={() => openPolicy("privacy")}>
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Donate Column */}
            <div className="footer-col donate-col">
              <h4 className="footer-title">Support Plotoryx</h4>
              <p className="donate-desc">Help us keep the servers running and ad-free! Scan the QR Code to donate.</p>
              <div className="qr-container">
                <div className="qr-wrapper" onClick={() => setQrModalActive(true)}>
                  <img src="/QRCode.png" alt="Donate QR Code" className="qr-image" />
                  <div className="qr-scan-line"></div>
                </div>
                <div className="qr-badge">
                  <ion-icon name="cafe-outline"></ion-icon>
                  <span>Buy us a Coffee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>
                &copy; {currentYear} <span>PlotoryxMovie</span>. All rights reserved.
              </p>
            </div>
            <div className="footer-meta-info">
              <p>
                Made with <ion-icon name="heart" class="heart-icon"></ion-icon> for cinephiles.
              </p>
              <button
                className={`back-to-top ${backToTopVisible ? "visible" : ""}`}
                id="backToTopBtn"
                aria-label="Back to top"
                onClick={scrollToTop}
              >
                <ion-icon name="arrow-up-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Code Modal */}
      {qrModalActive && (
        <div
          className="qr-modal-overlay active"
          id="qrModal"
          onClick={(e) => {
            if (e.target.id === "qrModal") setQrModalActive(false);
          }}
        >
          <div className="qr-modal-container">
            <button
              className="qr-modal-close"
              id="closeQrModalBtn"
              aria-label="Close QR Code"
              onClick={() => setQrModalActive(false)}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="qr-modal-content">
              <h3 className="qr-modal-title">Support Plotoryx</h3>
              <p className="qr-modal-desc">Scan, screenshot, or save this QR code to help support the site!</p>
              <div className="qr-modal-image-wrapper">
                <img src="/QRCode.png" alt="Donate QR Code Large" className="qr-modal-image" />
              </div>
              <a href="/QRCode.png" download="Plotoryx-Donate-QR.png" className="btn btn-primary qr-download-btn">
                <ion-icon name="download-outline" style={{ fontSize: "1.25rem", marginRight: "4px" }}></ion-icon> Download Image
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Policy Modal */}
      {policyModal && (
        <div
          className="policy-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setPolicyModal(null); }}
        >
          <div className="policy-modal">
            {/* Header */}
            <div className="policy-modal-header">
              <div className="policy-tabs">
                {Object.entries(POLICIES).map(([key, p]) => (
                  <button
                    key={key}
                    className={`policy-tab ${policyTab === key ? "active" : ""}`}
                    onClick={() => setPolicyTab(key)}
                  >
                    <ion-icon name={p.icon}></ion-icon>
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
              <button className="policy-close-btn" onClick={() => setPolicyModal(null)} aria-label="Close">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            {/* Body */}
            <div className="policy-modal-body">
              <div className="policy-hero">
                <div className="policy-hero-icon" style={{ color: policyTab === "dmca" ? "#e50914" : policyTab === "terms" ? "#f5c518" : "#3b82f6" }}>
                  <ion-icon name={activePolicy.icon}></ion-icon>
                </div>
                <h2 className="policy-hero-title">{activePolicy.label}</h2>
                <p className="policy-hero-sub">Last updated: January 2025 · Plotoryx</p>
              </div>

              <div className="policy-sections">
                {activePolicy.sections.map((section, i) => (
                  <div key={i} className="policy-section">
                    <h3 className="policy-section-title">
                      <span className="policy-section-num">{String(i + 1).padStart(2, "0")}</span>
                      {section.title}
                    </h3>
                    <p className="policy-section-body">{section.body}</p>
                  </div>
                ))}
              </div>

              <div className="policy-footer-note">
                <ion-icon name="information-circle-outline"></ion-icon>
                <span>
                  For questions or concerns, reach us through our community channels.
                </span>
              </div>
            </div>
          </div>

          <style jsx>{`
            .policy-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.75);
              backdrop-filter: blur(6px);
              -webkit-backdrop-filter: blur(6px);
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
              animation: fadeIn 0.2s ease;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .policy-modal {
              background: #0e0e0e;
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 18px;
              width: 100%;
              max-width: 680px;
              max-height: 85vh;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              animation: slideUp 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
              box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.04);
            }
            @keyframes slideUp {
              from { transform: translateY(30px) scale(0.97); opacity: 0; }
              to   { transform: translateY(0) scale(1); opacity: 1; }
            }

            /* Header */
            .policy-modal-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 12px;
              padding: 14px 16px 14px 20px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.07);
              flex-shrink: 0;
              background: rgba(255,255,255,0.02);
            }
            .policy-tabs {
              display: flex;
              gap: 4px;
              flex-wrap: wrap;
            }
            .policy-tab {
              display: flex;
              align-items: center;
              gap: 6px;
              padding: 7px 14px;
              border-radius: 99px;
              border: 1px solid transparent;
              background: transparent;
              color: rgba(255, 255, 255, 0.45);
              font-size: 0.8rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.18s;
              white-space: nowrap;
              font-family: inherit;
            }
            .policy-tab ion-icon {
              font-size: 0.95rem;
            }
            .policy-tab:hover {
              color: rgba(255, 255, 255, 0.8);
              background: rgba(255, 255, 255, 0.06);
            }
            .policy-tab.active {
              background: rgba(255, 255, 255, 0.1);
              border-color: rgba(255, 255, 255, 0.14);
              color: white;
            }
            .policy-close-btn {
              width: 34px;
              height: 34px;
              border-radius: 50%;
              border: 1px solid rgba(255, 255, 255, 0.1);
              background: rgba(255, 255, 255, 0.05);
              color: rgba(255, 255, 255, 0.6);
              font-size: 1.2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              flex-shrink: 0;
              transition: all 0.15s;
            }
            .policy-close-btn:hover {
              background: rgba(255, 255, 255, 0.12);
              color: white;
            }

            /* Body */
            .policy-modal-body {
              overflow-y: auto;
              flex: 1;
              scrollbar-width: thin;
              scrollbar-color: rgba(255,255,255,0.1) transparent;
            }
            .policy-modal-body::-webkit-scrollbar { width: 5px; }
            .policy-modal-body::-webkit-scrollbar-track { background: transparent; }
            .policy-modal-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }

            /* Hero */
            .policy-hero {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 36px 32px 24px;
              border-bottom: 1px solid rgba(255,255,255,0.06);
            }
            .policy-hero-icon {
              font-size: 3rem;
              margin-bottom: 14px;
              line-height: 1;
              filter: drop-shadow(0 0 16px currentColor);
            }
            .policy-hero-title {
              font-size: 1.7rem;
              font-weight: 800;
              color: white;
              margin: 0 0 6px;
              letter-spacing: -0.02em;
            }
            .policy-hero-sub {
              font-size: 0.78rem;
              color: rgba(255, 255, 255, 0.35);
              margin: 0;
            }

            /* Sections */
            .policy-sections {
              padding: 24px 32px;
              display: flex;
              flex-direction: column;
              gap: 0;
            }
            .policy-section {
              padding: 18px 0;
              border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .policy-section:last-child {
              border-bottom: none;
            }
            .policy-section-title {
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 0.95rem;
              font-weight: 700;
              color: white;
              margin: 0 0 8px;
            }
            .policy-section-num {
              font-size: 0.7rem;
              font-weight: 800;
              color: rgba(255,255,255,0.25);
              font-family: monospace;
              letter-spacing: 0.05em;
              flex-shrink: 0;
            }
            .policy-section-body {
              font-size: 0.875rem;
              line-height: 1.75;
              color: rgba(255, 255, 255, 0.55);
              margin: 0;
              padding-left: 28px;
            }

            /* Footer note */
            .policy-footer-note {
              display: flex;
              align-items: flex-start;
              gap: 8px;
              margin: 0 32px 28px;
              padding: 14px 16px;
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.07);
              border-radius: 10px;
              font-size: 0.8rem;
              color: rgba(255,255,255,0.35);
              line-height: 1.5;
            }
            .policy-footer-note ion-icon {
              font-size: 1rem;
              flex-shrink: 0;
              margin-top: 1px;
            }

            /* policy-link-btn in footer */
            :global(.policy-link-btn) {
              background: none;
              border: none;
              padding: 0;
              margin: 0;
              color: inherit;
              font: inherit;
              cursor: pointer;
              text-align: left;
              opacity: 1;
              transition: color 0.15s;
            }
            :global(.policy-link-btn:hover) {
              color: var(--accent, #e50914);
            }

            @media (max-width: 560px) {
              .policy-modal {
                max-height: 92vh;
                border-radius: 16px 16px 0 0;
                margin-bottom: 0;
                align-self: flex-end;
              }
              .policy-overlay {
                align-items: flex-end;
                padding: 0;
              }
              .policy-tab span {
                display: none;
              }
              .policy-tab {
                padding: 8px 10px;
              }
              .policy-hero {
                padding: 28px 20px 20px;
              }
              .policy-sections {
                padding: 16px 20px;
              }
              .policy-section-body {
                padding-left: 20px;
              }
              .policy-footer-note {
                margin: 0 20px 24px;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
