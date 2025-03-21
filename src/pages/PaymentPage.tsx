import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/PaymentPage-css/PaymentPage.module.css";
import Button from "../components/ButtonComponent";

const PaymentPage = () => (
  <main className={styles.paymentContainer}>
    <h1 className={styles.heading}>Manage Payment Methods</h1>

    <form className={styles.form}>
      <FormSection title="Credit / Debit Card">
        <TextInput label="" placeholder="Enter cardholder name" />
        <TextInput label="" placeholder="Enter card number" />
        <div className={styles.row}>
          <TextInput label="" placeholder="MM/YY" />
          <TextInput label="" placeholder="CVV" />
        </div>
      </FormSection>

      <div className={styles.actions}>
        <Button variant="confirm">Cancel</Button>
        <Button variant="navigation">Save Payment</Button>
      </div>
    </form>
  </main>
);

export default PaymentPage;
