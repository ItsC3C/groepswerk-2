import style from "../../css/footer.module.css";
import SendMailSection from "./SendMailSection.tsx";

const ExclusiveSection = () => {
  return (
    <div className={style.ExclusiveSection}>
      <div className={style.ExclusiveHolder}>
        <div className={style.Holder}>
          <div className={style.Logo}>
            <div className={style.Exclusive}>Exclusive</div>
          </div>
          <div className={style.Subscribe}>Subscribe</div>
        </div>
        <div className={style.discount}>Get 10% off your first order</div>
      </div>
      <SendMailSection />
    </div>
  );
};
export default ExclusiveSection;
