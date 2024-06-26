import React from "react";
import Heading from "../UI elements/Heading";

export default function Prizes() {
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh]"
      id="prizes"
    >
      <Heading index={"02"} title={"Prizes"} />
      <p className="my-5 font-mono text-3xl text-lightest_slate">
        Prize pool worth <span>₹1.5Lakh</span>
      </p>
      <div className="flex items-center justify-center w-full font-mono text-3xl rounded-md glassmorphism h-96">
        Coming soon.....
      </div>
    </div>
  );
}
