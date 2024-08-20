import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import Outputs from "../Outputs/Outputs";
import "./Card.scss";

const Card = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const handleResetData = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  console.log(bill, tip, people);

  return (
    <div className="card">
      <Inputs setBill={setBill} setTip={setTip} setPeople={setPeople} />
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
