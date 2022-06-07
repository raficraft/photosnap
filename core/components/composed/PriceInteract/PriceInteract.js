import React, { useEffect, useRef, useState } from "react";
import Btn from "../../btn/Btn/Btn";
import { Checkbox } from "../../btn/Checkbox/Checkbox";
import PriceCard from "../../PriceCard/PriceCard";
import { PriceInteractContainer } from "./PriceInteract.css";

export default function PriceInteract() {
  const [multiple, setMultiple] = useState(1);
  const checkRef = useRef();

  function changePrice() {
    const isChecked = checkRef.current.input.checked;
    const val = isChecked ? 1 : 12;
    setMultiple(val);
  }

  useEffect(() => {
    console.log("render", multiple);
  }, [multiple]);

  return (
    <PriceInteractContainer>
      <header>
        <Checkbox
          ref={checkRef}
          external={() => {
            changePrice();
          }}
        ></Checkbox>
      </header>
      <div className="contentPrice">
        <PriceCard
          multiple={multiple}
          theme="light"
          content={{
            title: "Basic",
            text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
            price: "19.00",
            duration: "per month",
            button: <Btn type="dark" text="pick a plan" />,
          }}
        ></PriceCard>
        <PriceCard
          multiple={multiple}
          theme="dark bigCard"
          content={{
            title: "pro",
            text: "More advanced features available. Recommended for photography veterans and professionals.",
            price: "39.00",
            duration: "per month",
            button: <Btn type="light" text="pick a plan" />,
          }}
        ></PriceCard>
        <PriceCard
          multiple={multiple}
          theme="light"
          content={{
            title: "Buisness",
            text: "Additional features available such as more detailed metrics. Recommended for business owners.",
            price: "99.00",
            duration: "per month",
            button: <Btn type="dark" text="pick a plan" />,
          }}
        ></PriceCard>
      </div>
    </PriceInteractContainer>
  );
}
