import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/button";
import { Input } from "./components/input";

export const Generics = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <div className="input-area">
        <p className="label">名前</p>
        <Input onChange={onChangeName} value={name} />
      </div>
      <div className="input-area">
        <p className="label">メールアドレス</p>
        <Input onChange={onChangeEmail} value={email} />
      </div>

      <div className="button-container">
        {" "}
        <Button onClick={() => {}} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .label {
    margin-bottom: 10px;
  }
  .button-container {
    margin-top: 40px;
  }
`;
