import styled from 'styled-components';
import { FaPhotoVideo } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <NavBar>
      <LogoWrapper href="/">
        {/* <Logo src={img} alt="Logo" /> */}
      </LogoWrapper>
      <NavLink to="/">
        <FaPhotoVideo /> <span>MOTD 이미지</span>
      </NavLink>
      {/* <NavLink to="/main">
        <FaPhotoVideo /> <span>r_main</span>
      </NavLink>
      <NavLink to="/about">
        <FaPhotoVideo /> <span>r_about</span>
      </NavLink>
      <NavLink to="/motd-admin">
        <FaPhotoVideo /> <span>MOTD 이미지</span>
      </NavLink> */}
    </NavBar>
  );
};

// Style for the logo
const LogoWrapper = styled.a`
  display: block;
  margin-bottom: 20px;
`;

const NavBar = styled.nav`
  width: 300px;
  min-height: 100vh;
  border-right: 1px solid #ddd;
  padding: 20px 0px;
`;

// const NavLink = styled.a`
//   display: block;
//   padding: 10px;
//   color: #3F63C4;
//   font-weight: bold;
//   text-decoration: none;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

const NavLink = styled(Link)`
    display: block;
  padding: 10px;
  color: #3F63C4;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Sidebar;
