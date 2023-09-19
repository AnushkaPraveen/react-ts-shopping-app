import Item from "../components/modules/Item";
const Home = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <div className="container">
                <div className="row">
                    {arr.map((num, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 col-6" key={index}>
                            <Item />
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
export default Home;