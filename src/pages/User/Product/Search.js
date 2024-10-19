import { useLocation } from "react-router-dom";
import ListProduct from "../../../component/User/Products/ListProduct";
function Search() {
    const query = new URLSearchParams(useLocation().search);
    const keyword = query.get('keyword');
    const categories = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <h2 style={{ textTransform: "capitalize" }} className="title text-center">Kết quả tìm kiếm cho từ khóa `{keyword}`</h2>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <form>
                                    <div className="panel-group category-products" id="categoryView">
                                        {
                                            categories.map((category) => (

                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title" style={{ color: "gray" }}>
                                                            <input type="radio" id="option1" name="ratio" value={category} />
                                                            {category * 166275}
                                                        </h4>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </div>

                                    <div className="price-range">

                                        <h2>Tầm Giá</h2>
                                        <div className="well">
                                            <table>
                                                <tr>
                                                    <td><input id="minPrice" type="number" min="1000" value="0" style={{ width: "100px" }} placeholder="Từ ₫" /></td>
                                                    <td>&mdash;</td>
                                                    <td><input id="maxPrice" type="number" min="1000" style={{ width: "100px" }} placeholder="Đến ₫" /></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <center><button onClick="Filter(1)" type="button">Lọc</button></center>
                                    <div className="shipping text-center">

                                        <img src="../images/home/shipping.jpg" alt="" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-9 padding-right" id="searchResults">
                            <ListProduct size={9} uiSize={'4'} />
                            <hr />
                            <center>
                                <ul className="pagination">

                                    <li className="active">
                                        <a className="page-link" >1</a>
                                    </li>
                                    <li className="">
                                        <a className="page-link" >1</a>
                                    </li>
                                    <li className="">
                                        <a className="page-link" >1</a>
                                    </li>
                                    <li className="">
                                        <a className="page-link" >1</a>
                                    </li>
                                    <li className="">
                                        <a className="page-link" >1</a>
                                    </li>
                                    <li className="">
                                        <a className="page-link" >1</a>
                                    </li>

                                </ul>

                            </center>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;