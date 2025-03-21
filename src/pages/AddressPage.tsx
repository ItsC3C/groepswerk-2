import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/AdressPage-css/AddressPage.module.css";
import Button from "../components/ButtonComponent";

const AddressPage = () => (
  <main className={styles.addressContainer}>
    <h1 className={styles.heading}>Manage Addresses</h1>

    <form className={styles.form}>
      <FormSection title="Primary Address">
        <TextInput label="" placeholder="Enter street address" />
        <TextInput label="" placeholder="Enter city" />
        <TextInput label="" placeholder="Enter state or province" />
        <TextInput label="" placeholder="Enter postal code" />
        <TextInput label="" placeholder="Enter country" />
      </FormSection>

      <FormSection title="Billing Address (if different)">
        <TextInput label="" placeholder="Enter street address" />
        <TextInput label="" placeholder="Enter city" />
        <TextInput label="" placeholder="Enter state or province" />
        <TextInput label="" placeholder="Enter postal code" />
        <TextInput label="" placeholder="Enter country" />
      </FormSection>

      <div className={styles.actions}>
        <Button variant="confirm">Cancel</Button>
        <Button variant="navigation">Save Address</Button>
      </div>
    </form>
  </main>
);

export default AddressPage;
