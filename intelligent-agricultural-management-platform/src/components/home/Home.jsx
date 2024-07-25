import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Leftsidebar from "../leftsidebar/Leftsidebar";

const Home = () => {
  const navigator = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) {
      navigator("/login");
    }
  }, []);

  return (
    <Contianer>
      <Leftsidebar />
      <Dashboard />
    </Contianer>
  );
};

export default Home;

const Contianer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #f5f6fa;
  overflow: hidden;
`;
