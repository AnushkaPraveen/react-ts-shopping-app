import { useState } from 'react';
import Classes from './counter.module.css';

type ComponentProps = {
    count: number ;
    increaseQuantity:(newCount: number) =>void;
    decreaseQuantity:(newCount: number) =>void;
}


const Counter: React.FC<ComponentProps> = ({count,increaseQuantity,decreaseQuantity}) => {
    //const [count, setCount] = useState<number>(1);


    const increaseCount = () => {
        const newCount: number  = count + 1;
        increaseQuantity(newCount); 
    };


    const decreaseCount = () => {
        if (count > 1) {
            const newCount: number  = count - 1;
            decreaseQuantity(newCount); // Call the callback to update the count in the parent
        }
    };
    return (
        <>
            <button className={`${Classes.updownbtn}`} onClick={decreaseCount}>-</button>
            <span className={Classes.displayCount}>{count}</span>
            <button className={`${Classes.updownbtn} me-5`} onClick={increaseCount}>+</button>
        </>
    )
}
export default Counter