import React from "react";
import { TypeAnimation } from "react-type-animation";

const dataText = [
  "Mint is Live!",
  "WL? you can Mint for 0.039E!",
  "Page One.",
  "More than just a pass.",
];

function TextAnimation() {
  return (
    <div>
      <p></p>
      <TypeAnimation
        sequence={[
          dataText[0],
          1000,
          dataText[1],
          3000,
          dataText[2],
          5000,
          dataText[[3]],
          () => {
            console.log("Done typing!"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
}

export default TextAnimation;
