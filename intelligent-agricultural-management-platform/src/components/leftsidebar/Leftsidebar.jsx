import React from "react";
import styled from "@emotion/styled";

import { IoHomeOutline } from "react-icons/io5";
import { RxComponent1 } from "react-icons/rx";
import { MdManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { greenishblue, greenishwhite } from "../../config";

// Sidebar container
const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 0px 20px -7px rgba(189, 189, 189, 1);
`;

// Individual sections
const Section = styled.div`
  margin-bottom: 20px;
`;

// Section title
const SectionTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

// Links within sections
const SectionLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;
  text-decoration: none;
  margin: 5px 0;
  gap: 5px;

  &:hover {
    color: ${greenishblue};
  }
`;

const Devider = styled.hr`
  border: 0;
  height: 1px;
  background: #dcdcdc;
  margin: 20px 0;
`;

const LeftSidebar = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem("username");
    sessionStorage.removeItem("i_token");
    navigate("/login");
  };

  return (
    <SidebarContainer>
      <SectionTitle>Navigation</SectionTitle>
      <Devider />
      <SectionLink href="/">
        <IoHomeOutline /> Dashboard
      </SectionLink>
      <Devider />
      <SectionLink href="/farm-management">
        <MdManageAccounts />
        Farm Managementt
      </SectionLink>
      <Devider />
      <SectionLink href="/zone-management">
        <RxComponent1 />
        Zone Management
      </SectionLink>
      <Devider />
      <SectionLink href="#">
        <RxComponent1 />
        Irrigation Systems
      </SectionLink>
      <Devider />
      <SectionLink href="#">
        <RxComponent1 />
        Soil Sensors
      </SectionLink>
      {/* <Section>
        <SectionTitle>Navigation</SectionTitle>
        <SectionLink href="#">
          <SectionLink href="#">
            <IoHomeOutline /> Dashboard
          </SectionLink>
        </SectionLink>
      </Section>
      <Devider />
      <Section>
        <SectionTitle>Utilities</SectionTitle>
        <SectionLink href="#">
          <RxComponent1 />
          Component
        </SectionLink>
      </Section>
      <Devider />
      <Section>
        <SectionTitle>Support</SectionTitle>
        <SectionLink href="#">Sample Page</SectionLink>
        <Devider />
        <SectionLink href="#">Documentation</SectionLink>
      </Section>
      <Devider />
       */}
      <Devider />
      <Section>
        <SectionTitle>Authentication</SectionTitle>
        <br />
        <SectionLink onClick={HandleLogout}>Logout</SectionLink>
      </Section>
    </SidebarContainer>
  );
};

export default LeftSidebar;
