import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { addNum, deleteNum, enterPassword } from "./Keyboard";

const Keyboard = () => {

    const dispatch = useDispatch();
    const keybordValue = useSelector((state: RootState) => state.counter.value);

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <input
                type="text"
                className="form-control mb-3"
                style={{ height: '80px', fontSize: '2rem' }}
                readOnly
                value={keybordValue}
            />

            <div className="row g-2">
                <div className="col-4">
                    <button
                        className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("1"))}
                    >
                        1
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("2"))}
                    >
                        2
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("3"))}
                    >
                        3
                    </button>
                </div>

                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("4"))}
                    >
                        4
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("5"))}
                    >
                        5
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("6"))}
                    >
                        6
                    </button>
                </div>

                <div className="col-4">
                    <button
                        className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("7"))}
                    >
                        7
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("8"))}
                    >
                        8
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("9"))}
                    >
                        9
                    </button>
                </div>

                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(deleteNum())}
                    >
                        &lt;
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(addNum("0"))}
                    >
                        0
                    </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-light border w-100 fs-1"
                        onClick={() => dispatch(enterPassword())}
                    >
                        E
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Keyboard