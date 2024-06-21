import React from "react";
import styles from "./Login.module.css";

export default function Login({ getUserCred }) {
  const [userCred, setUserCred] = React.useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = React.useState({
    error: false,
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCred((ps) => ({
      ...ps,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCred.email.trim() === "" || userCred.password.trim() === "") {
      setErrorMsg({
        error: true,
        msg: "Please enter your email and password to login",
      });
    } else {
      setErrorMsg({ error: false, msg: "" });
    }
    getUserCred(userCred);
  };

  return (
    <div className={styles.loginContainer}>
      <h4 className={styles.loginHeader}>Login here</h4>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Enter the email"
          onChange={handleChange}
          pattern="^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        />
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          name="password"
          type="text"
          placeholder="Enter the password"
          onChange={handleChange}
        />
        {errorMsg.error && <p className={styles.errorMsg}>{errorMsg.msg}</p>}
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
