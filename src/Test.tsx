import React from "react";

type TestProps = {
  products: {
    name: string;
    isSoldOut: boolean;
  }[];
};

export const TestMemo: React.VFC<TestProps> = React.memo(({ products }) => {
  console.log("レンダリングB");

  const soldOutProducts = () => {
    products.filter((x) => x.isSoldOut === true);
  };

  console.log(soldOutProducts);
  return <div>Test</div>;
});
