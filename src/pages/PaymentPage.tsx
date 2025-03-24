import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/PaymentPage-css/PaymentPage.module.css";
import Button from "../components/ButtonComponent";
import { useState, ChangeEvent } from "react";

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange =
    (field: keyof typeof paymentData) => (e: ChangeEvent<HTMLInputElement>) => {
      setPaymentData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <main className={styles.paymentContainer}>
      <h1 className={styles.heading}>Manage Payment Methods</h1>

      <form className={styles.form}>
        <FormSection title="Credit / Debit Card">
          <TextInput
            label="Cardholder Name"
            placeholder="Enter cardholder name"
            value={paymentData.cardholderName}
            onChange={handleChange("cardholderName")}
          />
          <TextInput
            label="Card Number"
            placeholder="Enter card number"
            value={paymentData.cardNumber}
            onChange={handleChange("cardNumber")}
          />
          <div className={styles.row}>
            <TextInput
              label="Expiry (MM/YY)"
              placeholder="MM/YY"
              value={paymentData.expiry}
              onChange={handleChange("expiry")}
            />
            <TextInput
              label="CVV"
              placeholder="CVV"
              value={paymentData.cvv}
              onChange={handleChange("cvv")}
            />
          </div>
        </FormSection>

        <div className={styles.actions}>
          <Button variant="confirm">Cancel</Button>
          <Button variant="navigation">Save Payment</Button>
        </div>
      </form>
    </main>
  );
};

export default PaymentPage;
