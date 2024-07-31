import React, { useState, useEffect } from "react";
import LeftSidebar from "../leftsidebar/Leftsidebar";
import { greenishblue, greenishwhite } from "../../config";
import GetWorkerList from "../Worker/GetWorkerList";

import styled from "@emotion/styled";
import { MdAppRegistration, MdKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Sensor = () => {
  const navigator = useNavigate();
  const handleSensorAdd = (e) => {
    e.preventDefault();
  };
  return (
    <Contianer>
      <LeftSidebar />
      <Zonecontainer>
        <NavigateList>
          <li>Home</li>
          <li>Sensor</li>
        </NavigateList>

        <Wrapper>
          <Additem>
            <MainForm onSubmit={handleSensorAdd}>
              <Part1>
                <Formitem>
                  <label htmlFor="sensorName">Sensor Name</label>
                  <input type="text" id="sensorName" />
                </Formitem>
                <Formitem>
                  <label htmlFor="sensorType">Sensor Type</label>
                  <select name="sensorType" id="sensorType">
                    <option value="Temperature">Temperature</option>
                    <option value="Humidity">Humidity</option>
                    <option value="Soil Moisture">Soil Moisture</option>
                    <option value="Light">Light</option>
                  </select>
                </Formitem>
              </Part1>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ gap: "10px", display: "flex", alignItems: "center" }}
              >
                Add Sensor
                <MdAppRegistration />
              </Button>
            </MainForm>
          </Additem>
          <ListItems>
            <Table>
              <thead>
                <tr>
                  <th>Sensor Name</th>
                  <th>Sensor Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temperature Sensor</td>
                  <td>Temperature</td>
                  <td>
                    {/* copy sensor id to clipborad*/}
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigator.clipboard.writeText("sensor-id-123");
                      }}
                    >
                      Copy Sensor ID
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </ListItems>
        </Wrapper>
      </Zonecontainer>
    </Contianer>
  );
};

export default Sensor;

const Contianer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 100vh;
  background-color: #f5f6fa;
`;

const Zonecontainer = styled.div`
  width: 90%;
  padding: 10px;

  overflow: scroll;
`;

const NavigateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  li {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
  svg {
    font-size: 1.2rem;
    color: #333;
  }

  li:not(:last-child) {
    color: gray;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
const Additem = styled.div`
  padding: 10px;
  background-color: white;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  label {
    font-size: 1rem;
    color: #333;
  }
  input {
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
  }
  select {
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    width: 100%;
  }
  button {
    padding: 10px;
    border: none;
    color: ${greenishwhite};
    background-color: ${greenishblue};
    border-radius: 5px;
    font-size: 1rem;
    width: 20rem;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Formitem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
`;
const ListItems = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;

  border-collapse: collapse;
  th {
    background-color: ${greenishblue};
    color: white;
    padding: 10px;

    border-right: 1px solid ${greenishwhite};
  }

  td {
    padding: 10px;
    border-bottom: 1px solid ${greenishwhite};
    text-align: center;

    a {
      text-decoration: none;
      color: ${greenishblue};
    }
  }
`;
