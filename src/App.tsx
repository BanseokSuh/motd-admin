import { Reset } from 'styled-reset';
import RoutesComponent from './Routes/Routes';
import styled from 'styled-components';
import Footer from './Layouts/Footer/Footer';
import GlobalStyle from './Styles/GlobalStyle';
import Sidebar from './Layouts/Sidebar/Sidebar';
import Navigation from './Layouts/Navigation/Navigation';

function App(): JSX.Element {

  return (
    <Layout>
      <Reset />
      <GlobalStyle />

      {/* 최상단 네이게이션 */}
      <Navigation />

      {/* 좌측 사이드바 */}
      <Sidebar />

      {/* 컨텐츠 */}
      <ContentWrapper>
        {/* 내용 */}
        <Content>
          <RoutesComponent />
        </Content>
        <Footer />
      </ContentWrapper>
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  padding: 1rem;
`;

const Content = styled.div`
  width: 100%;
  min-height: 50rem;
  margin: 0 auto;
`;

export default App;