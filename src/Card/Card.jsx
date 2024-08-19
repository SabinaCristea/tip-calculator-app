import Inputs from "../Inputs/Inputs";
import Outputs from "../Outputs/Outputs";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <Inputs />
      <Outputs />
    </div>
  );
};

export default Card;
