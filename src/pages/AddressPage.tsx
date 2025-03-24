import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/AdressPage-css/AddressPage.module.css";
import Button from "../components/ButtonComponent";
import { useState, ChangeEvent } from "react";

const AddressPage = () => {
  const [primaryAddress, setPrimaryAddress] = useState({
    street: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    street: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
  });

  const handlePrimaryChange =
    (field: keyof typeof primaryAddress) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setPrimaryAddress((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleBillingChange =
    (field: keyof typeof billingAddress) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setBillingAddress((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <main className={styles.addressContainer}>
      <h1 className={styles.heading}>Manage Addresses</h1>

      <form className={styles.form}>
        <FormSection title="Primary Address">
          <TextInput
            label="Street"
            placeholder="Enter street address"
            value={primaryAddress.street}
            onChange={handlePrimaryChange("street")}
          />
          <TextInput
            label="City"
            placeholder="Enter city"
            value={primaryAddress.city}
            onChange={handlePrimaryChange("city")}
          />
          <TextInput
            label="State/Province"
            placeholder="Enter state or province"
            value={primaryAddress.region}
            onChange={handlePrimaryChange("region")}
          />
          <TextInput
            label="Postal Code"
            placeholder="Enter postal code"
            value={primaryAddress.postalCode}
            onChange={handlePrimaryChange("postalCode")}
          />
          <TextInput
            label="Country"
            placeholder="Enter country"
            value={primaryAddress.country}
            onChange={handlePrimaryChange("country")}
          />
        </FormSection>

        <FormSection title="Billing Address (if different)">
          <TextInput
            label="Street"
            placeholder="Enter street address"
            value={billingAddress.street}
            onChange={handleBillingChange("street")}
          />
          <TextInput
            label="City"
            placeholder="Enter city"
            value={billingAddress.city}
            onChange={handleBillingChange("city")}
          />
          <TextInput
            label="State/Province"
            placeholder="Enter state or province"
            value={billingAddress.region}
            onChange={handleBillingChange("region")}
          />
          <TextInput
            label="Postal Code"
            placeholder="Enter postal code"
            value={billingAddress.postalCode}
            onChange={handleBillingChange("postalCode")}
          />
          <TextInput
            label="Country"
            placeholder="Enter country"
            value={billingAddress.country}
            onChange={handleBillingChange("country")}
          />
        </FormSection>

        <div className={styles.actions}>
          <Button variant="confirm">Cancel</Button>
          <Button variant="navigation">Save Address</Button>
        </div>
      </form>
    </main>
  );
};

export default AddressPage;
