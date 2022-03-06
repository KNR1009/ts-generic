import React from "react";
import styled from "styled-components";

import "./App.css";
import { Generics } from "./Generics";
// import { InputContents } from "./InputContents";

function App() {
  return (
    <div className="App">
      <Container>
        <Generics></Generics>
        {/* <InputContents></InputContents> */}
      </Container>
    </div>
  );
}

export const Container = styled.div`
  padding: 30px;
`;

export default App;
