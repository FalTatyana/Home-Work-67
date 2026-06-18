import './Counter.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementByNum, increment, incrementByNum} from "./counterSlice.ts";
import type { RootState } from '../app/store.ts';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="Counter">
      <h1>{ counterValue }</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementByNum(5))}>Increase by num</button>
      <button onClick={() => dispatch(decrementByNum(5))}>Decrease by num</button>
    </div>
  );
};

export default Counter;