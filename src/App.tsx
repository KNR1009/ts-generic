// import React, { useCallback, useState } from "react";
import styled from "styled-components";

import "./App.css";
import { Generics } from "./Generics";

function App() {
  return (
    <div className="App">
      <Container>
        <Generics></Generics>
      </Container>
    </div>
  );
}

export const Container = styled.div`
  padding: 30px;
`;

export default App;
