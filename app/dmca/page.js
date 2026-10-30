export const metadata = {
  title: "DMCA Policy | Plotoryx",
  description: "Plotoryx DMCA Policy – how we handle copyright takedown requests.",
};

export default function DMCAPage() {
  return (
    <div className="policy-page container">
      <div className="policy-hero">
        <div className="policy-hero-badge">⚖️ Legal</div>
        <h1>DMCA Policy</h1>
        <div className="policy-hero-meta">
          <span className="policy-updated">Last updated: October 2024</span>
        </div>
      </div>

      <div className="policy-body">
        <section>
          <h2>Overview</h2>
          <p>
            Plotoryx respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), Plotoryx will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent.
          </p>
          <p>
            Plotoryx is an aggregator platform that indexes publicly available streaming links. We do not host, upload, or store any media files on our servers. All content is sourced from third-party embed providers.
          </p>
        </section>

        <section>
          <h2>Filing a DMCA Takedown Notice</h2>
          <p>
            If you believe that content available through Plotoryx infringes your copyright, you may submit a written DMCA notice to our designated agent containing the following information:
          </p>
          <ul>
            <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
            <li>Identification of the copyrighted work(s) claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing, including the URL or page where it appears.</li>
            <li>Your contact information, including your address, telephone number, and email address.</li>
            <li>A statement that you have a good-faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notice is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ul>
        </section>

        <section>
          <h2>Counter-Notification</h2>
          <p>
            If you believe that material you posted was removed by mistake or misidentification, you may submit a counter-notification. Counter-notifications must include your name, address, phone number, the material's location before removal, a statement under penalty of perjury that the material was removed by mistake, and your consent to the jurisdiction of the appropriate federal court.
          </p>
        </section>

        <section>
          <h2>Repeat Infringer Policy</h2>
          <p>
            In appropriate circumstances, Plotoryx will disable or terminate the access of users who are repeat infringers of intellectual property rights.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            To submit a DMCA notice or counter-notification, please contact our designated copyright agent at:{" "}
            <a href="mailto:dmca@plotoryx.com" className="policy-link">dmca@plotoryx.com</a>
          </p>
        </section>
      </div>


    </div>
  );
}
