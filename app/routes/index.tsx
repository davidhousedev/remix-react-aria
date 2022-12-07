import React from "react";
import { FocusScope } from "react-aria";

export default function Index() {
  let [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {isOpen && (
        <FocusScope contain restoreFocus autoFocus>
          <label htmlFor="first-input">First Input</label>
          <input id="first-input" />
          <label htmlFor="second-input">Second Input</label>
          <input id="second-input" />
          <button onClick={() => setOpen(false)}>Close</button>
        </FocusScope>
      )}
    </>
  );
}
