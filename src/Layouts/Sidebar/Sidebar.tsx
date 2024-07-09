import styled from 'styled-components';

const Sidebar = () => {
  const img = 'https://via.placeholder.com/200'; // Placeholder image URL

  return (
    <NavBar>
      <LogoWrapper href="/">
        <Logo src={img} alt="Logo" />
      </LogoWrapper>
      <NavLink href="/motd">MOTD 이미지</NavLink>
    </NavBar>
  );
};

// Style for the logo
const LogoWrapper = styled.a`
    display: block;
    margin-bottom: 20px; /* Adjust spacing below the logo as needed */
`;

const Logo = styled.img`
  width: 100%; /* Adjust width as needed, or use max-width for larger logos */
  margin-bottom: 20px; /* Adjust spacing below the logo as needed */
`;

const NavBar = styled.nav`
  width: 200px; /* Adjust width as needed */
  background-color: #f0f0f0; /* Adjust background color as needed */
  min-height: 100vh;
  padding: 20px;
`;

const NavLink = styled.a`
  display: block;
  padding: 10px;
  color: #333; /* Adjust link color as needed */
  text-decoration: none;

  &:hover {
    background-color: #ddd; /* Adjust hover background color as needed */
  }
`;

export default Sidebar;
