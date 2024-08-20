import { calculateTip } from "../helpers/CalculateTip";
import "./Outputs.scss";

const Outputs = ({ bill, tip, people, onReset }) => {
  const tipResult = calculateTip(bill, tip, people);

  console.log(tipResult.tipPerPerson);
  console.log(tipResult.totalAmountPerPerson);

  return (
    <div className="outputs">
      <div className="outputs__info">
        <div className="outputs__tip">
          <div className="outputs__tip-desc">
            Tip Amount <span>/ person</span>
          </div>
          <div className="outputs__tip-output">${tipResult.tipPerPerson}</div>
        </div>
        <div className="outputs__total">
          <div className="outputs__total-desc">
            Total <span>/ person</span>
          </div>
          <div className="outputs__total-output">
            ${tipResult.totalAmountPerPerson}
          </div>
        </div>
      </div>
      <div className="outputs__action">
        <button className="outputs__action-btn" onClick={onReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Outputs;
