import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import Outputs from "../Outputs/Outputs";
import "./Card.scss";

const Card = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const handleResetData = () => {
    setBill("");
    setTip("");
    setPeople("");
  };

  console.log(bill, tip, people);

  return (
    <div className="card">
      <Inputs
        bill={bill}
        tip={tip}
        people={people}
        setBill={setBill}
        setTip={setTip}
        setPeople={setPeople}
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
