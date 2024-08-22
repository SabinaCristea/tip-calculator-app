import { useEffect, useState } from "react";
import "./Inputs.scss";

/* eslint-disable react/prop-types */
const Inputs = ({
  setBill,
  setTip,
  setPeople,
  bill,
  people,
  customTip,
  setCustomTip,
  isActive,
  setIsActive,
  activeTip,
  setActiveTip,
}) => {
  useEffect(() => {
    setIsActive(true);
    setTip(customTip || activeTip || 0);
  }, [setTip, customTip, activeTip]);

  const handleTip = (value) => {
    setCustomTip("");
    setTip(value);
    setActiveTip(value);
  };

  const handleCustomTip = (value) => {
    setActiveTip(null);
    setCustomTip(value);
    setTip(value);
  };

  console.log(isActive);

  return (
    <div className="inputs">
      <div className="inputs__bill">
        <div className="inputs__bill-label label">Bill</div>
        <div className="relative">
          <input
            type="number"
            className="inputs__bill-input"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(Math.abs(e.target.value))}
            min="0"
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
          {[5, 10, 15, 25, 50].map((value) => (
            <div
              key={value}
              className={`inputs__select-tip--tips_btn ${
                activeTip === value ? "active" : ""
              }`}
              onClick={() => handleTip(value)}
            >
              {value}%
            </div>
          ))}
          <input
            className="inputs__select-tip--tips_btn custom-tip custom-tip"
            placeholder="Custom"
            type="number"
            value={customTip}
            onChange={(e) =>
              handleCustomTip(Math.abs(parseInt(e.target.value)))
            }
            min="0"
          />
        </div>
      </div>
      <div className="inputs__people">
        <div className="inputs__people-label label">Number of People</div>
        {people === 0 && <div className="red-text">Can`t be zero</div>}
        <div className="relative">
          <input
            type="number"
            className={`${people === 0 ? "red" : ""} inputs__people-input`}
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(Math.abs(parseInt(e.target.value)))}
            min="0"
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
