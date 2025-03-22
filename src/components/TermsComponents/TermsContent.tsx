import TermSection from "./TermSection.tsx";
import styles from "../../css/Components-css/Terms/TermsContent.module.css";

const TermsContent = () => (
  <>
    <h1 className={styles.heading}>Terms of Use</h1>
    <p className={styles.intro}>
      Welcome to PokéStore! By accessing or using our website, you agree to
      comply with and be bound by the following terms and conditions:
    </p>
    <TermSection title="Use of Site">
      <p>
        You may browse, shop, and create an account. Unauthorized use of the
        site is prohibited.
      </p>
    </TermSection>
    <TermSection title="Account Responsibility">
      <p>
        You are responsible for maintaining the confidentiality of your account
        information.
      </p>
    </TermSection>
    <TermSection title="Orders & Payments">
      <p>
        All orders are subject to product availability and confirmation of the
        order price.
      </p>
    </TermSection>
    <TermSection title="Intellectual Property">
      <p>
        All content on this site is owned by PokéStore and protected by
        copyright laws.
      </p>
    </TermSection>
    <TermSection title="Limitation of Liability">
      <p>
        PokéStore is not liable for any indirect, incidental, or consequential
        damages arising from use of the site.
      </p>
    </TermSection>
    <TermSection title="Changes to Terms">
      <p>
        We reserve the right to modify these terms at any time. Changes take
        effect when posted.
      </p>
    </TermSection>
    <TermSection title="Contact Us">
      <p>
        If you have any questions about these Terms of Use, please contact us at{" "}
        <a href="mailto:support@pokestore.be">support@pokestore.be</a>.
      </p>
    </TermSection>
  </>
);

export default TermsContent;
