import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/ReturnPage-css/ReturnPage.module.css";
import Button from "../components/ButtonComponent";
import { useState, ChangeEvent } from "react";

const ReturnPage = () => {
  const [returnData, setReturnData] = useState({
    orderNumber: "",
    productName: "",
    reason: "",
    additionalDetails: "",
  });

  const handleChange =
    (field: keyof typeof returnData) => (e: ChangeEvent<HTMLInputElement>) => {
      setReturnData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <main className={styles.returnContainer}>
      <h1 className={styles.heading}>Request a Return</h1>

      <form className={styles.form}>
        <FormSection title="Return Details">
          <TextInput
            label="Order Number"
            placeholder="Enter your order number"
            value={returnData.orderNumber}
            onChange={handleChange("orderNumber")}
          />
          <TextInput
            label="Product Name/SKU"
            placeholder="Enter product name or SKU"
            value={returnData.productName}
            onChange={handleChange("productName")}
          />
          <TextInput
            label="Reason"
            placeholder="Describe the reason for return"
            value={returnData.reason}
            onChange={handleChange("reason")}
          />
          <TextInput
            label="Additional Details"
            placeholder="Any additional details (optional)"
            value={returnData.additionalDetails}
            onChange={handleChange("additionalDetails")}
          />
        </FormSection>

        <div className={styles.actions}>
          <Button variant="confirm">Cancel</Button>
          <Button variant="navigation">Submit Return</Button>
        </div>
      </form>
    </main>
  );
};

export default ReturnPage;
