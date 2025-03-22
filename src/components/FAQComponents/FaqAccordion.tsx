import styles from "../../css/Components-css/FAQComponents/FaqAccordion.module.css";
import AccordionItem from "./AccordionItem";
import { FaqItem } from "../../types";

const faqData: FaqItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "Add items to your cart, proceed to checkout, fill in your shipping details, and confirm payment.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Visa, MasterCard, American Express, and PayPal.",
  },
  {
    question: "Can I track my shipment?",
    answer:
      "Yes — you’ll receive a tracking number via email once your order has shipped.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return most items within 30 days of delivery for a full refund. Items must be unused and in original packaging.",
  },
  {
    question: "How do I change or cancel my order?",
    answer:
      "Contact our customer support within 2 hours of placing your order to make changes or cancellations.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination.",
  },
  {
    question: "How do I apply a promo code?",
    answer:
      "Enter your promo code at checkout in the 'Discount Code' field and click 'Apply'. Discounts will reflect in your order total.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "We use industry-standard encryption (SSL) to protect your data. Your information is never sold to third parties.",
  },
];

const FaqAccordion = () => {
  return (
    <div className={styles.accordion}>
      {faqData.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FaqAccordion;
