import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [customAmount, set_customAmount] = useState(0);
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <br />
      <input
        type="number"
        value={customAmount}
        onChange={(e) => {
          set_customAmount(parseInt(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch(deposit(customAmount));
          set_customAmount(0);
        }}
      >
        Deposit customAmount
      </button>
    </div>
  );
}

export default App;
