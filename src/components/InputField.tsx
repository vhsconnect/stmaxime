import * as React from "react";
interface InputInterface {
  value: string;
  update: (arg: {}) => void;
}

export const InputField = (props: InputInterface) => {
  return (
    <input
      type="text"
      value={props.value}
      id="name"
      onChange={(x) => props.update(x.target.value)}
    />
  );
};
