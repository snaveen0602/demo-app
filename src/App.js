import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Table from "./Table/Table";
import Charts from "./Charts/Charts";
import Navbar from "./Navbar/Navbar";
import Forms from "./Forms/Forms";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const getUserCred = (data) => {
    if (data.email !== "" && data.password !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login getUserCred={getUserCred} />} />
        <Route path="/table" element={<Table />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
