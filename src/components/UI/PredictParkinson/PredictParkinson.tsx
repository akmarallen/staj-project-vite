import axios from "axios";
import React, { useState } from "react";
import styles from "./PredictParkinson.module.scss";

const PredictParkinson: React.FC = () => {
  // const [formData, setFormData] = useState<number[]>(Array(22).fill(0));
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/PredictParkinson",
        // formData
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("Ошибка при предсказании болезни Паркинсона:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Parkinson Prediction</h1>
      <form action="PredictParkinson" method="POST" onClick={handleSubmit} className={styles.container__form}>
        MDVP:Fo(Hz){" "}
        <input type="text" name="0" className={styles.container__form__input} />
        <br />
        MDVP:Fhi(Hz){" "}
        <input type="text" name="2" className={styles.container__form__input} />
        <br />
        MDVP:Flo(Hz){" "}
        <input type="text" name="3" className={styles.container__form__input} />
        <br />
        MDVP:Jitter(%){" "}
        <input type="text" name="4" className={styles.container__form__input} />
        <br />
        MDVP:Jitter(Abs){" "}
        <input type="text" name="5" className={styles.container__form__input} />
        <br />
        MDVP:RAP{" "}
        <input type="text" name="6" className={styles.container__form__input} />
        <br />
        MDVP:PPQ{" "}
        <input type="text" name="7" className={styles.container__form__input} />
        <br />
        Jitter:DDP{" "}
        <input type="text" name="8" className={styles.container__form__input} />
        <br />
        MDVP:Shimmer{" "}
        <input type="text" name="9" className={styles.container__form__input} />
        <br />
        MDVP:Shimmer(dB){" "}
        <input
          type="text"
          name="10"
          className={styles.container__form__input}
        />
        <br />
        Shimmer:APQ3{" "}
        <input
          type="text"
          name="11"
          className={styles.container__form__input}
        />
        <br />
        Shimmer:APQ5{" "}
        <input
          type="text"
          name="12"
          className={styles.container__form__input}
        />
        <br />
        MDVP:APQ{" "}
        <input
          type="text"
          name="13"
          className={styles.container__form__input}
        />
        <br />
        Shimmer:DDA{" "}
        <input
          type="text"
          name="14"
          className={styles.container__form__input}
        />
        <br />
        NHR{" "}
        <input
          type="text"
          name="15"
          className={styles.container__form__input}
        />
        <br />
        HNR{" "}
        <input
          type="text"
          name="16"
          className={styles.container__form__input}
        />
        <br />
        RPDE{" "}
        <input
          type="text"
          name="17"
          className={styles.container__form__input}
        />
        <br />
        DFA{" "}
        <input
          type="text"
          name="18"
          className={styles.container__form__input}
        />
        <br />
        spread1{" "}
        <input
          type="text"
          name="19"
          className={styles.container__form__input}
        />
        <br />
        spread2{" "}
        <input
          type="text"
          name="20"
          className={styles.container__form__input}
        />
        <br />
        D2{" "}
        <input
          type="text"
          name="21"
          className={styles.container__form__input}
        />
        <br />
        PPE
        <input
          type="text"
          name="22"
          className={styles.container__form__input}
        />
        <br />
        Answer: {result} <br />
        <input type="submit" value="Sum" />
        <br />
      </form>
      {result && <h2>Prediction Result: {result}</h2>}
    </div>
  );
};

export default PredictParkinson;
