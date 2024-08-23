import { calculateTip } from "../helpers/CalculateTip";
import "./Outputs.scss";

/* eslint-disable react/prop-types */
const Outputs = ({ bill, tip, people, onReset }) => {
  const tipResult = calculateTip(bill, tip, people);

  return (
    <div className="outputs">
      <div className="outputs__info">
        <div className="outputs__tip">
          <div className="outputs__tip-desc">
            Tip Amount <span>/ person</span>
          </div>
          <div className="outputs__tip-output">
            ${bill && people ? tipResult.tipPerPerson.toFixed(2) : "0"}
          </div>
        </div>
        <div className="outputs__total">
          <div className="outputs__total-desc">
            Total <span>/ person</span>
          </div>
          <div className="outputs__total-output">
            ${bill && people ? tipResult.totalAmountPerPerson.toFixed(2) : "0"}
          </div>
        </div>
      </div>
      <div className="outputs__action">
        <button
          className="outputs__action-btn"
          onClick={onReset}
          disabled={!bill && !tip && !people}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Outputs;
