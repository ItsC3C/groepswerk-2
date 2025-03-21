import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/ReturnPage-css/ReturnPage.module.css";
import Button from "../components/ButtonComponent";

const ReturnPage = () => (
  <main className={styles.returnContainer}>
    <h1 className={styles.heading}>Request a Return</h1>

    <form className={styles.form}>
      <FormSection title="Return Details">
        <TextInput label="" placeholder="Enter your order number" />
        <TextInput label="" placeholder="Enter product name or SKU" />
        <TextInput label="" placeholder="Describe the reason for return" />
        <TextInput label="" placeholder="Any additional details (optional)" />
      </FormSection>

      <div className={styles.actions}>
        <Button variant="confirm">Cancel</Button>
        <Button variant="navigation">Submit Return</Button>
      </div>
    </form>
  </main>
);

export default ReturnPage;
