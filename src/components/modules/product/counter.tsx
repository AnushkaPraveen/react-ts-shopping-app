import Classes from './counter.module.css';
const Counter = () => {
    return (
        <>
            <button className={`${Classes.updownbtn}`}>-</button>
            <span className={Classes.displayCount}>1</span>
            <button className={`${Classes.updownbtn} me-5`}>+</button>
        </>
    )
}
export default Counter