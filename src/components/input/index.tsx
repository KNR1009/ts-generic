import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input: React.VFC<InputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};
