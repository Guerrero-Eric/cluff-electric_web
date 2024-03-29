import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
