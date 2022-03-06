import React from "react";

export const Generics = () => {
  // ジェネリック型を利用しない場合

  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    array.map((i) => {
      result += `/${i}`;
    });
    return result;
  };

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    array.map((i) => {
      result += i;
    });
    return result;
  };

  type GenericReduceType<T> = {
    (array: T[], initialValue: T): T;
  };

  const GenericReduce: GenericReduceType<string> = (array, initialValue) => {
    let result = initialValue;
    array.map((i) => {
      result += `/${i}`;
    });
    return result;
  };
  console.log(GenericReduce(["apple", "grep"], "strawberry"));

  return <div>Generics</div>;
};
