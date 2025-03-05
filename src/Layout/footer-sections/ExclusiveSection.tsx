import style from "../../css/footer.module.css";
import SendMailSection from "./SendMailSection.tsx";

const ExclusiveSection = () => {
  return (
    <div className={style.ExclusiveSection}>
      <div className={style.Frame716}>
        <div className={style.Frame715}>
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
