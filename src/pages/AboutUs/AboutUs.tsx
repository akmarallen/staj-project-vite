import styles from "./AboutUs.module.scss";
import we from "assets/images/us.svg";
const AboutUs = () => {
 
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__short}>
        <img src={we} alt="we" />
        <div className={styles.aboutUs__short__title}>
          <h3>O Check</h3>
          <div className={styles.aboutUs__short__title__text}>
            <p>
              Добро пожаловать в Check систему оценки рисков, позволяющую
              медицинским учреждениям оценивать риски для своих пациентов. Check
              начинала свою деятельность как компания, которая установила
              прочные отношения с медицинскими учреждениями, чтобы помочь им
              легко и с максимальной эффективностью проводить оценки, тем самым
              экономя драгоценное время организации. Нажмите ниже, чтобы
              получить помощь.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs__full}>
        <div className={styles.aboutUs__full__route}>
          <h4>Вы врач?</h4>
          <p>
            Check предоставляет учреждениям учетную запись администратора для
            создания оценок риска для своих пациентов
          </p>
          <button onClick={() => (window.location.href = "/registration")}>
            Войти
          </button>
        </div>
        <div className={styles.aboutUs__full__route}>
          <h4>Как это работает?</h4>
          <p>
            Check использует модели машинного обучения, которые помогают
            генерировать точные оценки рисков
          </p>
          <button onClick={() => (window.location.href = "/test")}>
            Пройти тесты
          </button>
        </div>
        <div className={styles.aboutUs__full__route}>
          <h4>Условия использования</h4>
          <p>
            Если у вашей организации есть какие-либо сомнения относительно
            системы, нажмите ниже, чтобы прочитать наши условия
          </p>
          <button onClick={() => (window.location.href = "/another-page")}>
            Условия использования
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
