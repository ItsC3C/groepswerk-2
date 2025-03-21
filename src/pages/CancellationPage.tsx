import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/CancellationPage-css/CancellationPage.module.css";
import Button from "../components/ButtonComponent";

const CancellationPage = () => (
  <main className={styles.cancelContainer}>
    <h1 className={styles.heading}>Request Cancellation</h1>

    <form className={styles.form}>
      <FormSection title="Cancellation Details">
        <TextInput label="" placeholder="Enter your order number" />
        <TextInput label="" placeholder="Enter product name or SKU" />
        <TextInput label="" placeholder="Describe reason for cancellation" />
        <TextInput label="" placeholder="Any additional details (optional)" />
      </FormSection>

      <div className={styles.actions}>
        <Button variant="confirm">Cancel</Button>
        <Button variant="navigation">Submit Cancellation</Button>
      </div>
    </form>
  </main>
);

export default CancellationPage;
