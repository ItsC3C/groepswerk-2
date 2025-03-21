import React from "react";
import DeliveryCardComponent from "./DeliveryCardcomponent";
import { Truck, ArrowLeft } from "lucide-react";
import styles from "../../css/Components-css/DetailCSS/DeliveryInfoComponent.module.css";

const DeliveryInfoComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <DeliveryCardComponent
        Icon={Truck}
        title="Free Delivery"
        description="Enter your postal code for availability"
      />
      <DeliveryCardComponent
        Icon={ArrowLeft}
        title="Return Delivery"
        description="Free 30 Days Returns"
      />
    </div>
  );
};

export default DeliveryInfoComponent;
