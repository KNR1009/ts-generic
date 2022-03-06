import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { InputMemo } from "./Input";

export const InputContents = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [other, setOther] = useState<string>("");

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const onChangeOther = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOther(e.target.value);
    },
    [setOther]
  );
  return (
    <InputArea>
      <InputMemo
        value={name}
        onChange={onChangeName}
        labelText={"名前"}
      ></InputMemo>
      <InputMemo
        value={email}
        onChange={onChangeEmail}
        labelText={"メールアドレス"}
      ></InputMemo>
      <InputMemo
        value={other}
        onChange={onChangeOther}
        labelText={"そのほか"}
      ></InputMemo>
    </InputArea>
  );
};

const InputArea = styled.div``;
