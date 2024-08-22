import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import Outputs from "../Outputs/Outputs";
import "./Card.scss";

const Card = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [activeTip, setActiveTip] = useState(null);

  const handleResetData = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setPeople("");
    setIsActive(false);
    setActiveTip(null);
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
        isActive={isActive}
        setIsActive={setIsActive}
        activeTip={activeTip}
        setActiveTip={setActiveTip}
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
