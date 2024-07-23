import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      navigator("/");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    // save the user to the local storage
    localStorage.setItem("username", username);
    navigator("/");
  };

  return (
    <div className={styles.background}>
      <div className={styles.logincard}>
        <div className={styles.headerline}>
          {/* leafe icon */}
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 114.86"
            className={styles.leafIcon}
          >
            <defs>
              <style>{`.cls-1{fill:#01a437;}`}</style>
            </defs>
            <title>leaves</title>
            <path
              className="cls-1"
              d="M59.07,110.77C110.92,105,139.6,71.12,112.44,0c-21.29,14.9-50.39,24.6-65,44.55C57,52.94,64.89,62.23,67.08,74.37c13.19-16.08,27.63-30.72,35.23-47-7.79,39.07-20,53.84-38.78,73.81a93.64,93.64,0,0,1-4.46,9.62Zm-14.9,4C4,105-15.18,76.09,14.27,24.75c23.8,22.92,65.79,37.48,38.39,85.86a27.08,27.08,0,0,1-1.83,2.93C45.9,89.62,26.21,70.69,20.43,50.61,21.77,83.42,31.23,93,45.88,114.86c-.57,0-1.14-.06-1.71-.13Z"
            />
          </svg>
          <span className={styles.leafText}>Intelligent Agriculture</span>
        </div>
        <h1 className={styles.titleh1}>Login</h1>
        <form className={styles.formStyle} onSubmit={handleLogin}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={`${styles.button} ${styles.login}`}>
            Login
          </button>
        </form>

        <div className={styles.devider}></div>
        <Link
          className={`${styles.button} ${styles.createAccount}`}
          to="/register"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
