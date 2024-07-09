import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <h1>헤더 컨테이너</h1>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px dotted grey;
    backdrop-filter: blur(10px);
  `;
