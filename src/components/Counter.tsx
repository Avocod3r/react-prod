import {useState} from "react";
import classes from './styles.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;