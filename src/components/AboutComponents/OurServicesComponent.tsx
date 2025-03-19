import React from "react";
import styles from "../../css/Components-css/AboutCSS/OurServicesComponent.module.css";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface OurServicesComponentProps {
  services: Service[];
}

const OurServicesComponent: React.FC<OurServicesComponentProps> = ({
  services,
}) => {
  return (
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <div className={styles.iconWrapper}>
            <service.icon className={styles.icon} />
          </div>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceDescription}>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurServicesComponent;
