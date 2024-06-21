import React from "react";
import styles from "./Forms.module.css";

export default function Forms() {
  const [userCred, setUserCred] = React.useState({
    name: "",
    mobile: "",
    email: "",
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
    if (userCred.name.trim() === "") {
      setErrorMsg({
        error: true,
        msg: "Please enter your name",
      });
    } else if (userCred.mobile.trim() === "") {
      setErrorMsg({
        error: true,
        msg: "Please enter your mobile",
      });
    } else if (userCred.mobile.length < 10) {
      setErrorMsg({
        error: true,
        msg: "Please enter a valid mobile number with 10 digits",
      });
    } else if (userCred.email.trim() === "") {
      setErrorMsg({
        error: true,
        msg: "Please enter your email",
      });
    } else {
      setErrorMsg({ error: false, msg: "" });
    }
    console.log(userCred);
  };

  return (
    <div className={styles.loginContainer}>
      <h4 className={styles.loginHeader}>Personal Information</h4>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Enter the Name"
          onChange={handleChange}
        />
        <label className={styles.label}>mobile</label>
        <input
          className={styles.input}
          name="mobile"
          type="text"
          placeholder="Enter the mobile"
          onChange={handleChange}
        />
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Enter the email"
          onChange={handleChange}
        />
        {errorMsg.error && <p className={styles.errorMsg}>{errorMsg.msg}</p>}
        <button className={styles.button} type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}
