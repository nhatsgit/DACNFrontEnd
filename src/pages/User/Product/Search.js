import { useLocation, useNavigate } from "react-router-dom";
import ListProduct from "../../../component/User/Products/ListProduct";
import * as ProductService from "../../../apiServices/ProductService";
import { useEffect, useState } from "react";
function Search() {
    const query = new URLSearchParams(useLocation().search);
    const keyword = query.get('keyword');
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, settotalPage] = useState(5)
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await ProductService.QuerryProduct({ keyword: keyword, pageSize: 9, pageNumber: currentPage });
                const categories = await ProductService.GetCategoriesFromQuerry({ keyword: keyword });
                setProducts(res);
                setCurrentPage(res.pageNumber)
                settotalPage(res.pageCount)
                setCategories(categories)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
            }
        }
        fetchApi();
    }, [keyword]);
    const HandleSelectPage = async (pageNumber) => {
        try {
            const res = await ProductService.QuerryProduct({ keyword: keyword, pageSize: 9, pageNumber: pageNumber });
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            setProducts(res)
            setCurrentPage(res.pageNumber)
            settotalPage(res.pageCount)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
        }
    }
    const HandleFilterByCategory = async (categoryId) => {

        try {
            const res = await ProductService.QuerryProduct({ keyword: keyword, categoryId: categoryId, pageSize: 9, pageNumber: 1 });
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            setProducts(res)
            setCurrentPage(res.pageNumber)
            settotalPage(res.pageCount)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
        }
    }
    const HandleFilterByPrice = async () => {
        try {
            const res = await ProductService.QuerryProduct({ keyword: keyword, minPrice: minPrice, maxPrice: maxPrice, pageSize: 9, pageNumber: 1 });
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            setProducts(res)
            setCurrentPage(res.pageNumber)
            settotalPage(res.pageCount)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
        }
    }

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
                                        <h2>Danh mục</h2>
                                        {
                                            categories.map((category, index) => (

                                                <div key={index} className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title" style={{ color: "gray", display: "flex", alignItems: "center" }}>
                                                            <label style={{ alignItems: "center", margin: "5px 0px 5px 30px" }}>
                                                                <input type="radio" id="option1" name="ratio"
                                                                    value={category.id} onChange={(e) => HandleFilterByCategory(e.target.value)} style={{ marginRight: "10px" }} />
                                                                {category.tenLoai}
                                                            </label>
                                                        </h4>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </div>

                                    <div className="price-range">


                                        <div className="well">
                                            <h2>Tầm Giá</h2>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><input id="minPrice" type="number" min="1000"
                                                            value={minPrice} onChange={(e) => { setMinPrice(e.target.value) }} style={{ width: "100px" }} placeholder="Từ ₫" />
                                                        </td>
                                                        <td>&mdash;</td>
                                                        <td><input id="maxPrice" type="number" min="1000"
                                                            value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value) }} style={{ width: "100px" }} placeholder="Đến ₫" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br></br>
                                            <center><button onClick={() => { HandleFilterByPrice() }} type="button">Lọc</button></center>
                                        </div>
                                    </div>

                                    <div className="shipping text-center">

                                        <img src="../images/home/shipping.jpg" alt="" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-9 padding-right" id="searchResults">
                            <ListProduct listProduct={products.items} size={9} uiSize={'4'} />

                        </div>
                        <hr />
                        <center>
                            <ul className="pagination">
                                {Array.from({ length: totalPage }, (_, index) => (
                                    <li key={index} className={index === currentPage - 1 ? "active" : ""} onClick={() => HandleSelectPage(index + 1)}>
                                        <a className="page-link">{index + 1}</a>
                                    </li>
                                ))}
                            </ul>

                        </center>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;