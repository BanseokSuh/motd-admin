import { Reset } from 'styled-reset';
import RoutesComponent from './Routes/Routes';
import styled from 'styled-components';
import Footer from './Layouts/Footer/Footer';
import GlobalStyle from './Styles/GlobalStyle';
import Sidebar from './Layouts/Sidebar/Sidebar';

function App(): JSX.Element {
  return (
    <Layout>
      <Reset />
      <GlobalStyle />

      {/* 좌측 네이게이션 */}
      <Sidebar />

      {/* 컨텐츠 */}
      <MainContent>
        {/* 내용 */}
        <Content>
          <Container>
            <RoutesComponent />
          </Container>
        </Content>
        <Footer />
      </MainContent>
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  padding: 1rem;
`;

const Content = styled.div`
  width: 100%;
  min-height: 50rem;
  margin: 0 auto;
  padding: 1rem;
  // background-color: #f0f0f0;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 0.5rem;
`;

export default App;