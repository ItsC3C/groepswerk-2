import PolicySection from "./PolicySection.tsx";
import styles from "../../css/Components-css/PrivacyPolicyCSS/PrivacyPolicyContent.module.css";

const PrivacyPolicyContent = () => (
  <>
    <h1 className={styles.heading}>Privacy Policy</h1>
    <p className={styles.intro}>
      Your privacy is important to us. This policy explains how we collect, use,
      and protect your personal information.
    </p>
    <PolicySection title="Information We Collect">
      <ul>
        <li>
          <strong>Personal Data:</strong> Name, email address, shipping address,
          payment details.
        </li>
        <li>
          <strong>Usage Data:</strong> Browsing history, pages visited, time
          spent on pages.
        </li>
      </ul>
    </PolicySection>
    <PolicySection title="How We Use Your Information">
      <ul>
        <li>To process and fulfill orders.</li>
        <li>To communicate about your account and orders.</li>
        <li>To improve our website and customer experience.</li>
        <li>To send marketing communications (you may opt out at any time).</li>
      </ul>
    </PolicySection>
    <PolicySection title="Data Sharing">
      <p>
        We do not sell your personal data. We may share information with service
        providers who help us operate our site.
      </p>
    </PolicySection>
    <PolicySection title="Cookies">
      <p>
        We use cookies to enhance site functionality and analyze traffic. You
        can disable cookies in your browser settings.
      </p>
    </PolicySection>
    <PolicySection title="Your Rights">
      <p>
        You may request access, correction, or deletion of your personal data at
        any time by contacting us.
      </p>
    </PolicySection>
    <PolicySection title="Contact Us">
      <p>
        If you have any questions about this privacy policy, please contact us
        at <a href="mailto:support@pokestore.be">support@pokestore.be</a>.
      </p>
    </PolicySection>
  </>
);

export default PrivacyPolicyContent;
