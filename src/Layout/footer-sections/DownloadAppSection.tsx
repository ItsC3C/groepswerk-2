import style from "../../css/footer.module.css";

const DownloadAppSection = () => (
  <div className={style.DownloadAppSection}>
    <div data-layer="Frame 721" className={style.Holder}>
      <div className={style.DownloadApp}>Download App</div>
      <div className={style.DetailHolder}>
        <div className={style.Coupon}>Save $3 with App New User Only</div>
        <div className={style.DownloadAppHolder}>
          <div className={style.QrCode}>
            <img
              data-layer="Qrcode 1"
              className={style.Qrcode1}
              src="https://placehold.co/76x76"
            />
          </div>
          <div className={style.DownloadAppStoreHolder}>
            <div className={style.GooglePlay}>
              <img
                className={style.GooglePlayLogo}
                src="https://placehold.co/104x30"
              />
            </div>
            <div className={style.Appstore}>
              <img
                className={style.AppStoreLogo}
                src="https://placehold.co/104x34"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={style.SocialsHolder}>
      <img src="https://placehold.co/24x24" alt="Facebook Logo" />
      <img src="https://placehold.co/24x24" alt="Twitter Logo" />
      <img src="https://placehold.co/24x24" alt="Instagram Logo" />
      <img src="https://placehold.co/24x24" alt="LinkedIn Logo" />
    </div>
  </div>
);
export default DownloadAppSection;
