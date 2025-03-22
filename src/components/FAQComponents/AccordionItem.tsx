import { useState } from "react";
import styles from "../../css/Components-css/FAQComponents/FaqAccordion.module.css";
import { FaqItem } from "../../types";

const AccordionItem = ({ item }: { item: FaqItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        {item.question}
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className={styles.answer}>{item.answer}</div>}
    </div>
  );
};

export default AccordionItem;
