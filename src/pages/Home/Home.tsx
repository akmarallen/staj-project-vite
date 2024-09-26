import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import styles from "./Home.module.scss";
import kayrat from "assets/images/kayrat.svg";
import fast from "assets/images/fast.svg";
import security from "assets/images/security.svg";
import checked from "assets/images/checked.svg";
import kayratWithLaptop from "assets/images/kayratWithLaptop.svg";
// import ArticleCard from "components/UI/ArticleCard/ArticleCard";
const Home = () => {
  // const response = await fetch("http://127.0.0.1:5000/api/register", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, name, password, role }),
  // });

  return (
    <div className={styles.home}>
      <div className={styles.home__homeContainer}>
        <Swiper
          cssMode={true}
          loop={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.home__homeContainer__homeSwiper}
        >
          <SwiperSlide>
            <div className={styles.home__homeContainer__homeSwiper__mainText}>
              <h2>Эффективный и надежный Check</h2>
              <p>
                "Check - ваш надежный партнер в заботе о здоровье! Пройдите
                тесты, задайте важные вопросы и улучшите свою жизнь уже сегодня.
                Вы заслуживаете лучшего!"
              </p>
              <button
                className={
                  styles.home__homeContainer__homeSwiper__mainText__testButton
                }
                onClick={() => (window.location.href = "/test")}
              >
                Пройти тест
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.home__homeContainer__homeSwiper__mainText}>
              <h2>Простота использования.</h2>
              <p>
                Простой и удобный в использовании инструмент оценки рисков для
                медицинских учреждений. Нажмите кнопку «Помощь» для получения
                помощи в использовании.
              </p>
              <button
                className={
                  styles.home__homeContainer__homeSwiper__mainText__testButton
                }
                onClick={() => (window.location.href = "/another-page")}
              >
                Помощь
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.home__homeContainer__homeSwiper__mainText}>
              <h2>Ваш третий слайд</h2>
              <p>Описание для третьего слайда.</p>
              <button
                className={
                  styles.home__homeContainer__homeSwiper__mainText__testButton
                }
                onClick={() => (window.location.href = "/third-page")}
              >
                Узнать больше
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.home__homeAboutUs}>
        <p>
          Мы рады видеть тебя здесь. Check — это уникальная платформа, которая
          призвана помочь тем, кто столкнулся с болезнью, а также тем, кто
          заботится о своем здоровье и хочет проверить его состояние. Наши тесты
          и вопросы помогут тебе получить необходимую информацию и рекомендации
          для поддержания здорового образа жизни. <br />
          <br /> С уважением, Команда Check
        </p>
        <img src={kayrat} alt="boy is Kayrat" />
      </div>
      <div className={styles.home__homeGrade}>
        <h3>Оценивайте с легкостью</h3>
        <div className={styles.home__homeGrade__hangs}>
          <div className={styles.home__homeGrade__hangs__hang}>
            <img src={fast} alt="fast" />
            <p>БЫСТРО</p>
          </div>
          <div className={styles.home__homeGrade__hangs__hang}>
            <img src={security} alt="security" />
            <p>БЕЗОПАСНО</p>
          </div>
          <div className={styles.home__homeGrade__hangs__hang}>
            <img src={checked} alt="checked" />
            <p>НАДЕЖНО</p>
          </div>
        </div>
      </div>
      <div className={styles.home__homeUseful}>
        <h3>Дополнительные статьи</h3>
        <div className={styles.home__homeUseful__articles}>
          <img src={kayratWithLaptop} alt="kayratWithLaptop" />
          <Swiper
            cssMode={true}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className={styles.home__homeContainer__homeSwiper}
          >
            <SwiperSlide
              className={styles.home__homeContainer__homeSwiper__slide}
            >
              article
              {/* <ArticleCard article={} /> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
