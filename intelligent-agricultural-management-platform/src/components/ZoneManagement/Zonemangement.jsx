import React, { useState, useEffect } from "react";
import LeftSidebar from "../leftsidebar/Leftsidebar";
import { greenishblue, greenishwhite } from "../../config";

import styled from "@emotion/styled";
import { MdKeyboardArrowRight } from "react-icons/md";

import axios from "axios";
import { Link } from "react-router-dom";

const Zonemangement = () => {
  const [zone, setZone] = useState({
    firmId: "",
    zone: "",
  });

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = sessionStorage.getItem("i_token");
    if (!token) {
      window.location.href = "/login";
    }
    setToken(token);
  }, []);
  const handleZoneCreation = async (e) => {
    e.preventDefault();
    console.log("Zone created");
    try {
      await axios
        .post(
          "https://api.web-project.in/agriculture/zones/create-zone",
          {
            farmId: zone.firmId,
            name: zone.zone,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(zone);
  }, [zone]);

  return (
    <Contianer>
      <LeftSidebar title="Zone" />
      <Zonecontainer>
        <NavigateList>
          <Link to="/">
            <li>Home</li>
          </Link>

          <MdKeyboardArrowRight />
          <li>Zone</li>
        </NavigateList>

        <Wrapper>
          <Additem>
            <MainForm onSubmit={handleZoneCreation}>
              <Part1>
                {/* add a select option */}
                <Formitem>
                  <label htmlFor="zone">Firm ID</label>
                  <select
                    name="zone"
                    id="zone"
                    onChange={(e) =>
                      setZone({
                        ...zone,
                        firmId: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Firm ID</option>
                    <option value="zone1">Zone 1</option>
                    <option value="zone2">Zone 2</option>
                    <option value="zone3">Zone 3</option>
                  </select>
                </Formitem>
                <Formitem>
                  <label htmlFor="zone">Zone</label>
                  <input
                    type="text"
                    placeholder="Add Zone"
                    onChange={(e) =>
                      setZone({
                        ...zone,
                        zone: e.target.value,
                      })
                    }
                  />
                </Formitem>
              </Part1>
              <button type="submit">Add</button>
            </MainForm>
          </Additem>
          <ListItems>
            <Table>
              <thead>
                <tr>
                  <th>Farm Name</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>farm1</td>
                  <td>1234567890</td>
                  <td>address1</td>
                </tr>
              </tbody>
            </Table>
          </ListItems>
        </Wrapper>
      </Zonecontainer>
    </Contianer>
  );
};
const Contianer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 100vh;
  background-color: #f5f6fa;
  overflow: hidden;
`;

const Zonecontainer = styled.div`
  width: 90%;
  padding: 10px;
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
    border-radius: 5px;
    background-color: ${greenishblue};
    color: white;
    width: 10%;
    // place-self: flex-end;
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
  }
`;

export default Zonemangement;
