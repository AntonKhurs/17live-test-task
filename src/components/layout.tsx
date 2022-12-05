import styled from 'styled-components';
import AppRouter from './router';

const AppHeader = styled.header`
  min-width: 100%;
  text-align: center;
  -webkit-box-shadow: 0px 4px 10px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 10px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(34, 60, 80, 0.2);
`;

const AppMain = styled.main`
  flex: 1 1 auto;
  max-width: 100%;
  overflow: auto;
  padding: 0px 10px;
`;

const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  height: 100%;
  min-width: 100%;
  align-items: center;
`;

const AppLayout = () => {
    return (
      <AppLayoutContainer>
        <AppHeader>
          <h1>Wellcome to the test app</h1>
        </AppHeader>
        <AppMain>
          <AppRouter />
        </AppMain>
      </AppLayoutContainer>
    );
  };
export default AppLayout;
