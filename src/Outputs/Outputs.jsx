import "./Outputs.scss";

const Outputs = () => {
  return (
    <div className="outputs">
      <div className="outputs__info">
        <div className="outputs__tip">
          <div className="outputs__tip-desc">
            Tip Amount <span>/ person</span>
          </div>
          <div className="outputs__tip-output">$4.27</div>
        </div>
        <div className="outputs__total">
          <div className="outputs__total-desc">
            Total <span>/ person</span>
          </div>
          <div className="outputs__total-output">$4.27</div>
        </div>
      </div>
      <div className="outputs__action">
        <button className="outputs__action-btn">RESET</button>
      </div>
    </div>
  );
};

export default Outputs;
