import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { greenishblue, greenishwhite } from "../../config";

// image import
import login from "../../assets/login.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${greenishblue};
`;

const LeftPane = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${greenishwhite};
`;

const RightPane = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #007c82;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${greenishwhite};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005f61;
  }
`;

const LinkText = styled(Link)`
  margin-top: 1rem;
  color: ${greenishwhite};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    localStorage.setItem("username", username);
    navigate("/");
  };

  return (
    <Container>
      <LeftPane>
        <img src={login} alt="AGRICULTURE Management Service" />
      </LeftPane>
      <RightPane>
        <FormContainer>
          <Title>AGRICULTURE Management Service</Title>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Mobile Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
          </form>
          <LinkText to="/forgot-password">Forgot Password?</LinkText>
          <LinkText to="/create-account">Create Account</LinkText>
        </FormContainer>
      </RightPane>
    </Container>
  );
};

export default Login;
