import { ShoppingBag, Clock, Shield } from "lucide-react";
import img2 from "../assets/AboutImage (2).png";
import img3 from "../assets/AboutImage (3).png";
import img4 from "../assets/AboutImage (4).png";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import OurStoryComponent from "../components/AboutComponents/OurStoryComponent";
import StatsComponent from "../components/AboutComponents/StatsComponent";
import OurTeamComponent from "../components/AboutComponents/OurTeamComponent";
import OurServicesComponent from "../components/AboutComponents/OurServicesComponent";
import styles from "../css/Page.module.css";

interface Stat {
  number: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const stats: Stat[] = [
    { number: "10.5k", label: "Sellers active our site" },
    { number: "33k", label: "Monthly Product Sale" },
    { number: "45.5k", label: "Customer active in our site" },
    { number: "25k", label: "Annual gross sale in our site" },
  ];

  const team: TeamMember[] = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: img4,
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: img3,
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: img2,
    },
  ];

  const services: Service[] = [
    {
      icon: ShoppingBag,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Clock,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="About" />
        <OurStoryComponent />
        <StatsComponent stats={stats} />
        <OurTeamComponent team={team} />
        <OurServicesComponent services={services} />
      </div>
    </div>
  );
};

export default AboutPage;
