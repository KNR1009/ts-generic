import React from "react";

type ButtonProps = {
  onClick: () => void;
};

export const Button: React.VFC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>クリック</button>;
};
