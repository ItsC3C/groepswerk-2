import style from "../../css/footer.module.css";

const QuickLinkSection = () => (
  <div className={style.QuickLinkSection}>
    <div className={style.QuickLinks}>Quick Links</div>
    <div className={style.Holder}>
      <div className={style.PrivacyPolicy}>Privacy Policy</div>
      <div className={style.TermsOfUse}>Terms of Use</div>
      <div className={style.FAQ}>FAQ</div>
      <div className={style.Contact}>Contact</div>
    </div>
  </div>
);
export default QuickLinkSection;
