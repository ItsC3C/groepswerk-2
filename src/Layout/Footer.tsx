import style from "../css/footer.module.css";
import ExclusiveSection from "./footer-sections/ExclusiveSection.tsx";
import SupportSection from "./footer-sections/SupportSection.tsx";
import AccountSection from "./footer-sections/AccountSection.tsx";
import QuickLinkSection from "./footer-sections/QuickLinkSection.tsx";
import DownloadAppSection from "./footer-sections/DownloadAppSection.tsx";

const Footer = () => {
  return (
    <footer>
      <div className={style.footer}>
        <ExclusiveSection />
        <SupportSection />
        <AccountSection />
        <QuickLinkSection />
        <DownloadAppSection />
      </div>
      <div className={style.copyright}>
        © Copyright 2025 Groepswerk 2. All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
