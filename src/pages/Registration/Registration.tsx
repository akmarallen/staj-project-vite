import { useState } from "react";
import styles from "./Registration.module.scss";

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("client");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const response = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Login successful!");
          localStorage.setItem("token", data.access_token);
          window.location.href = "/home";
        } else {
          setError(data.message || "Server error during login");
        }
      } else {
        const response = await fetch("http://127.0.0.1:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name, password, role }),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Registration successful!");
          window.location.href = "/home";
        } else {
          setError(data.message || "Server error during registration");
        }
      }
    } catch (error) {
      setError("Error: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registration__form}>
        <h3 className={styles.registration__form__title}>Check</h3>
        <form
          className={styles.registration__form__registration}
          onSubmit={handleSubmit}
        >
          <div className={styles.registration__form__registration__input}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.registration__form__registration__input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.registration__form__registration__input}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className={styles.registration__form__registration__input}>
              <label htmlFor="role">Выберите роль:</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="client">Пациент</option>
                <option value="doctor">Врач</option>
                <option value="admin">Админ</option>
              </select>
            </div>
          )}
          {error && <p className={styles.error}>{error}</p>}
          <button
            className={styles.registration__form__registration__button}
            type="submit"
            disabled={loading}
          >
            {loading ? "Загрузка..." : isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
        <p>
          {isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Зарегистрироваться" : "Войти"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Registration;
