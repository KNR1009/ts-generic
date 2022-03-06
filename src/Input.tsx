import React, { memo } from "react";
import styled from "styled-components";

type InputProps = {
  labelText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.VFC<InputProps> = ({ value, labelText, onChange }) => {
  console.log(value);
  return (
    <>
      <p>{labelText}</p>
      <InputContainer value={value} onChange={onChange}></InputContainer>
    </>
  );
};

export const InputMemo = memo(Input);

const InputContainer = styled.input``;
