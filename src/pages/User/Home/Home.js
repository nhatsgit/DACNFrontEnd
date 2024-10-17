import Slider from "../../../component/User/Slider/Slider";
import ListProduct from "../../../component/User/Products/ListProduct";
function Home() {
    return (
        <>
            <Slider />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="features_items">
                                <h2 style={{
                                    textTransform: 'capitalize',
                                }} className="title text-center">Gợi ý hôm nay</h2>
                                <ListProduct size={12} uiSize={'3'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;