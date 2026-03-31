import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import HomePage from "./pages/BirthdayInvitation";

const AppContent = () => {
  return (
    <AppContainer>
      <AnimatedBackground />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  /* 👇 CAMBIA ESTO 👇 */
  background: transparent; 
`;

const MainContent = styled.div` 
  width: 100%;
  z-index: 10;
  position: relative;
`;

export default App;