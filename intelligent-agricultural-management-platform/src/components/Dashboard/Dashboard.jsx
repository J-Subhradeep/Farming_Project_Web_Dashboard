import React from "react";
import styled from "@emotion/styled";

import Chart from "react-apexcharts";
import uniqueVisitorChart from "../chart/analytics-unique-visitor-chart";
import customerChart from "../chart/analytics-cuatomer-chart";
import customerChart1 from "../chart/analytics-cuatomer-chart-1";
import { Paper } from "@mui/material";
import axios from "axios";

const Dashboard = () => {

  const API_KEY = 'fc381e1e64ef7f3ebe3c5673ba78fef3'; // Replace with your API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${API_KEY}`);

      console.log(response.data);
    }
    catch
    (error) {
      console.log(error.message);
    }
  };

  fetchWeather();

  return (
    <Container>
      {/* <div style={{marginTop:"25rem", marginBottom:"1rem"}}>

      <Wrapper>
        <CardDashboard
          color="linear-gradient(45deg, #4099ff, #73b4ff)"
          h6title="Total Orders"
          value="100"
          text1="Total orders in this month"
          text2="View Details"
          mxwidth="15rem"
          />
        <CardDashboard
          color="linear-gradient(45deg, #ff5252, #ff7d7d)"
          h6title="Total Revenue"
          value="$5000"
          text1="Total revenue in this month"
          text2="View Details"
          mxwidth="15rem"
          />
        <CardDashboard
          color="linear-gradient(45deg, #0abb87, #3cd3a3)"
          h6title="Total Users"
          value="500"
          text1="Total users in this month"
          text2="View Details"
          mxwidth="15rem"
          />
        <CardDashboard
          color="linear-gradient(45deg, #f77e53, #fb9e7e)"
          h6title="Total Sales"
          value="200"
          text1="Total sales in this month"
          text2="View Details"
          mxwidth="15rem"
          />
      </Wrapper>
      </div>
      <Wrapper>

        <Paper elevation={3} style={{ width: "100%", minHeight: "70vh", marginBottom: "5rem", marginLeft: "2rem", marginRight: "2rem" }}>


        </Paper>
      </Wrapper> */}

      <Wrapper ht="250px">
        <CardDashboard
          color="linear-gradient(45deg, #4099ff, #73b4ff)"
          h6title="Total Orders"
          value="100"
          height="180px"
          text1="Total orders in this month"
          text2="View Details"
          mxwidth="15rem"
        />
        <CardDashboard
          color="linear-gradient(45deg, #772be8, #ab73ff)"
          h6title="Total Orders"
          value="100"
          height="180px"
          text1="Total orders in this month"
          text2="View Details"
          mxwidth="15rem"
        />
        <CardDashboard
          color="linear-gradient(45deg, #0fb882, #08d0d0)"
          h6title="Total Orders"
          value="100"
          height="180px"
          text1="Total orders in this month"
          text2="View Details"
          mxwidth="15rem"
        />
        <CardDashboard
          color="linear-gradient(45deg, #ee3b3b, #f87660)"
          h6title="Total Orders"
          value="100"
          height="180px"
          text1="Total orders in this month"
          text2="View Details"
          mxwidth="15rem"
        />
      </Wrapper >

      <Wrapper ht="250px">

      </Wrapper>
    </Container>
  );
};

const CardDashboard = ({
  h6title,
  value,
  color,
  icon,
  text1,
  text2,
  mxwidth,
  height,
}) => {
  return (
    <Card background={color} mxwidth={mxwidth} ht={height}>
      <Texth6 className="text-white">{h6title}</Texth6>
      <Texth2>
        <i className="feather icon-repeat" />
        <span>{value}</span>
      </Texth2>
      <Text className="mb-0">
        {text1}
        <Textspan className="float-end">{text2}</Textspan>
      </Text>
    </Card>
  );
};

export default Dashboard;

const Container = styled.div`
  background: red;
  height:100%;
  width: 100%;
  padding:10px;
  position: relative;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  min-height: ${(props) => props.ht};
  background-color:white;
  width:100%;
  position: relative;
`;
const Card = styled.div`
  background: ${(props) => props.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;

  max-width: ${(props) => props.mxwidth};
  height: ${(props) => props.ht};

  :hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Texth6 = styled.h6`
  font-size: 16px;
  color: #fff;
  margin-bottom: 1rem;
`;
const Texth2 = styled.h2`
  font-size: 24px;
  color: #fff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  color: #fff;
  margin-bottom: 1rem;
`;

const Textspan = styled.span`
  font-size: 16px;
  color: #fff;
`;

const Col = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-width: 100%;
`;

const CardGraph = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardBody = styled.div`
  padding: 1rem;
`;
