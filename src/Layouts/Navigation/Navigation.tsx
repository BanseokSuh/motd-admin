import styled from 'styled-components';

const Navigation = () => {

    return (
        <Wrapper>
            <NavName href="/motd-admin">Light Community Church</NavName>
        </Wrapper>
    )
};

const Wrapper = styled.nav`
    width: 100%;
    background-color: #2F72BA;
    // background-color: #3F63C4;
    padding: 20px;
    vertical-align: middle;
`;

const NavName = styled.a`
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    vertical-align: middle;
`;

export default Navigation;