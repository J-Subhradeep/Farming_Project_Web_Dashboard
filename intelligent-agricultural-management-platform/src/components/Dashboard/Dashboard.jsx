import React from "react";
import styled from "@emotion/styled";

import Chart from "react-apexcharts";
import uniqueVisitorChart from "./chart/analytics-unique-visitor-chart";
import customerChart from "./chart/analytics-cuatomer-chart";
import customerChart1 from "./chart/analytics-cuatomer-chart-1";

const Container = styled.div`
  padding: 1rem 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 1rem;
`;
const Card = styled.div`
  background: ${(props) => props.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: ${(props) => props.mxwidth};
  height: ${(props) => props.height || "auto"};

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

const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <CardDashboard
          color="linear-gradient(45deg, #4099ff, #73b4ff)"
          h6title="Total Orders"
          value="100"
          text1="Total orders in this month"
          text2="View Details"
          mxwidth="280px"
        />
        <CardDashboard
          color="linear-gradient(45deg, #ff5252, #ff7d7d)"
          h6title="Total Revenue"
          value="$5000"
          text1="Total revenue in this month"
          text2="View Details"
          mxwidth="280px"
        />
        <CardDashboard
          color="linear-gradient(45deg, #0abb87, #3cd3a3)"
          h6title="Total Users"
          value="500"
          text1="Total users in this month"
          text2="View Details"
          mxwidth="280px"
        />
        <CardDashboard
          color="linear-gradient(45deg, #f77e53, #fb9e7e)"
          h6title="Total Sales"
          value="200"
          text1="Total sales in this month"
          text2="View Details"
          mxwidth="280px"
        />
      </Wrapper>
      <Wrapper>
        <Col>
          <CardGraph>
            <CardHeader>
              <h5>Unique Visitor</h5>
            </CardHeader>
            <CardBody className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
            </CardBody>
          </CardGraph>

          {/* <CardGraph>
            <CardHeader>
              <h5>Unique Visitor</h5>
            </CardHeader>
            <CardBody className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
            </CardBody>
          </CardGraph>
          <CardGraph>
            <CardHeader>
              <h5>Unique Visitor</h5>
            </CardHeader>
            <CardBody className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
            </CardBody>
          </CardGraph> */}
          <Card height="400px" mxwidth="370px" background="white">
            <Chart {...customerChart} />
          </Card>
          <Card
            height="400px"
            mxwidth="370px"
            background="linear-gradient(45deg, #4099ff, #73b4ff)"
          >
            <Chart {...customerChart1} />
          </Card>
        </Col>
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
    <Card background={color} mxwidth={mxwidth} height={height}>
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
