import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import Outputs from "../Outputs/Outputs";
import "./Card.scss";

const Card = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const handleResetData = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setPeople("");
  };

  console.log(tip);

  return (
    <div className="card">
      <Inputs
        bill={bill}
        people={people}
        setBill={setBill}
        setTip={setTip}
        setPeople={setPeople}
        setCustomTip={setCustomTip}
        customTip={customTip}
      />
      <Outputs
        bill={bill}
        tip={tip}
        people={people}
        onReset={handleResetData}
      />
    </div>
  );
};

export default Card;
