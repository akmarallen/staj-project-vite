import styles from "./Footer.module.scss";
//icons
import instagram from "assets/icons/instagram.svg";
import github from "assets/icons/github.svg";
import linkedin from "assets/icons/linkedin.svg";
import headset from "assets/icons/headset.svg";
import location from "assets/icons/location.svg";
import whatsapp from "assets/icons/whatsapp.svg";
import envelope from "assets/icons/envelope.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.footer__logo}>Check</h1>
      <div className={styles.footer__title}>
        <div className={styles.footer__title__social}>
          <h3>Следите за нами</h3>
          <p>
            Следуйте за нами в социальных сетях, чтобы узнавать последние
            новости о нашем прогрессе.
          </p>
          <ul className={styles.footer__title__social__list}>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={linkedin} alt="linkedIn" />
            </li>
            <li>
              <img src={github} alt="GitHub" />
            </li>
            <li>
              <img src={whatsapp} alt="whatsApp" />
            </li>
          </ul>
        </div>
        <div className={styles.footer__title__useful}>
          <div className={styles.footer__title__useful__aboutCompany}>
            <h3>О компании</h3>
            <ul className={styles.footer__title__useful__aboutCompany__list}>
              <li>О нас</li>
              <li>Сотрудничество</li>
              <li>Лицензии</li>
            </ul>
          </div>
          <div className={styles.footer__title__useful__contact}>
            <h3>Свяжитесь с нами</h3>
            <div className={styles.footer__title__useful__contact__input}>
              <input type="text" placeholder="Напишите нам" />
              <img src={envelope} alt="envelope" />
            </div>
            <div className={styles.footer__title__useful__contact__phone}>
              <img src={headset} alt="contact" />
              <p>
                +996 703 252-162 <span>         Пн-Сб</span>
              </p>
            </div>
            <div className={styles.footer__title__useful__contact__location}>
              <img src={location} alt="location" />
              <p>Кыргызско-Турецкий университет Манас</p>
            </div>
          </div>
        </div>
      </div>
      <p>Copyright © 2024 Ucraft. Все права защищены. Icon by icon8.com</p>
    </div>
  );
};

export default Footer;
