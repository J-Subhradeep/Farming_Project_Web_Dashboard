import React, { useEffect } from "react";
import Styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const navigator = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) {
      navigator("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
