import Item from "./Item";
const Home = () => {
    const arr=[1,2,3,4];
    return (
        <>
       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {arr.map((num, index) => (
                <Item key={index} />
            ))}
        </div>
        </>
    )
}
export default Home;