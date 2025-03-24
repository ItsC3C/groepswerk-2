import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/CancellationPage-css/CancellationPage.module.css";
import Button from "../components/ButtonComponent";
import { useState, ChangeEvent } from "react";

const CancellationPage = () => {
  const [cancellationData, setCancellationData] = useState({
    orderNumber: "",
    productName: "",
    reason: "",
    additionalDetails: "",
  });

  const handleChange =
    (field: keyof typeof cancellationData) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setCancellationData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <main className={styles.cancelContainer}>
      <h1 className={styles.heading}>Request Cancellation</h1>

      <form className={styles.form}>
        <FormSection title="Cancellation Details">
          <TextInput
            label="Order Number"
            placeholder="Enter your order number"
            value={cancellationData.orderNumber}
            onChange={handleChange("orderNumber")}
          />
          <TextInput
            label="Product Name/SKU"
            placeholder="Enter product name or SKU"
            value={cancellationData.productName}
            onChange={handleChange("productName")}
          />
          <TextInput
            label="Reason"
            placeholder="Describe reason for cancellation"
            value={cancellationData.reason}
            onChange={handleChange("reason")}
          />
          <TextInput
            label="Additional Details"
            placeholder="Any additional details (optional)"
            value={cancellationData.additionalDetails}
            onChange={handleChange("additionalDetails")}
          />
        </FormSection>

        <div className={styles.actions}>
          <Button variant="confirm">Cancel</Button>
          <Button variant="navigation">Submit Cancellation</Button>
        </div>
      </form>
    </main>
  );
};

export default CancellationPage;
