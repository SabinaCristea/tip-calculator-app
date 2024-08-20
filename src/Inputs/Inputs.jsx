import "./Inputs.scss";

const Inputs = ({ setBill, setTip, setPeople }) => {
  return (
    <div className="inputs">
      <div className="inputs__bill">
        <div className="inputs__bill-label label">Bill</div>
        <div className="relative">
          <input
            type="number"
            className="inputs__bill-input"
            placeholder="0"
            onChange={(e) => setBill(parseInt(e.target.value))}
          />
          <img
            src="./images/icon-dollar.svg"
            alt="Dollar icon"
            className="icon-dollar"
          />
        </div>
      </div>
      <div className="inputs__select-tip">
        <div className="inputs__select-tip--label label">Select Tip %</div>
        <div className="inputs__select-tip--tips">
          <div
            className="inputs__select-tip--tips_btn"
            onClick={() => setTip(5)}
          >
            5%
          </div>
          <div
            className="inputs__select-tip--tips_btn"
            onClick={() => setTip(10)}
          >
            10%
          </div>
          <div
            className="inputs__select-tip--tips_btn"
            onClick={() => setTip(15)}
          >
            15%
          </div>
          <div
            className="inputs__select-tip--tips_btn"
            onClick={() => setTip(25)}
          >
            25%
          </div>
          <div
            className="inputs__select-tip--tips_btn"
            onClick={() => setTip(50)}
          >
            50%
          </div>

          <input
            className="inputs__select-tip--tips_btn custom-tip custom-tip"
            placeholder="Custom"
            type="number"
            onChange={(e) => setTip(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="inputs__people">
        <div className="inputs__people-label label">Number of People</div>
        <div className="relative">
          <input
            type="number"
            className="inputs__people-input"
            placeholder="0"
            onChange={(e) => setPeople(parseInt(e.target.value))}
          />
          <img
            src="./images/icon-person.svg"
            alt="Person icon"
            className="icon-person"
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
