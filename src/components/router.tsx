import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import AppHome from "./pages/home";
import AppNotFound from "./pages/not-found";

const RoutesContainer = styled.div`
  max-height: 100%;
`;

export default function AppRouter() {
  return (
    <Router>
      <RoutesContainer>
        <Routes>
          <Route index element={<AppHome/>}/>
          <Route path='*' element={<AppNotFound/>}/>
        </Routes>
      </RoutesContainer>
    </Router>
  );
}
