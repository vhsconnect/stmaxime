import * as React from "react";
interface ButtonInterface {
  actuate: () => void;
}

export const Button = (props: ButtonInterface) => (
  <button
    onClick={e => {
      e.preventDefault();
      props.actuate();
    }}
  >
    Update Name
  </button>
);
