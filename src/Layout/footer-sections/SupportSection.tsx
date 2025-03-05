import style from "../../css/footer.module.css";

const SupportSection = () => {
  return (
    <div className={style.SupportSection}>
      <div className={style.Support}>Support</div>
      <div className={style.Holder}>
        <div className={style.Adress}>
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </div>
        <div className={style.Mail}>exclusive@gmail.com</div>
        <div className={style.Phone}>+88015-88888-9999</div>
      </div>
    </div>
  );
};

export default SupportSection;
