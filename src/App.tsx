import React from "react";
import styled from "styled-components";

import "./App.css";
import { InputContents } from "./InputContents";

function App() {
  return (
    <div className="App">
      <Container>
        <InputContents></InputContents>
      </Container>
    </div>
  );
}

export const Container = styled.div`
  padding: 30px;
`;

export default App;
