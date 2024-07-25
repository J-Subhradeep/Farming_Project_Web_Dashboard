import React from "react";
import styled from "@emotion/styled";

import { IoHomeOutline } from "react-icons/io5";
import { RxComponent1 } from "react-icons/rx";

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
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

// Links within sections
const SectionLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  text-decoration: none;
  margin: 5px 0;
  gap: 5px;

  &:hover {
    color: #007bff;
  }
`;

const Devider = styled.hr`
  border: 0;
  height: 1px;
  background: #dcdcdc;
  margin: 20px 0;
`;

const LeftSidebar = () => {
  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <SidebarContainer>
      <SectionTitle>Navigation</SectionTitle>
      <Devider />
      <SectionLink href="#">
        <IoHomeOutline /> Dashboard
      </SectionLink>
      <Devider />
      <SectionLink href="#">
        <RxComponent1 />
        Component
      </SectionLink>
      <Devider />
      <SectionLink href="#">
        <RxComponent1 />
        Component
      </SectionLink>
      <Devider />
      <SectionLink href="#">
        <RxComponent1 />
        Component
      </SectionLink>
      <Devider />
      <SectionLink href="#">
        <RxComponent1 />
        Component
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
        <SectionLink onClick={HandleLogout}>Logout</SectionLink>
      </Section>
    </SidebarContainer>
  );
};

export default LeftSidebar;
