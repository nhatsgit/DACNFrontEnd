import { Link, useLocation } from "react-router-dom";
import * as ProductService from "../../../apiServices/ProductService";
import { useEffect, useState } from "react";
import { FormatCurrency } from "../../../utils/FormatCurrency";
import { CaculateDiscountPrice } from "../../../utils/CaculateDiscountPrice";

function ProductDetails() {
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState(' ')
    const [brand, setBrand] = useState(' ')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const res = await ProductService.GetProductById(id)
                setProduct(res);
                if (res.productCategoryId) {
                    const categoryName = await ProductService.GetCategoryName(res.productCategoryId)
                    setCategory(categoryName)
                }
                if (res.brandId) {
                    const brandName = await ProductService.GetBrandName(res.brandId)
                    setBrand(brandName)
                }
            } catch (error) {
                console.error("Error fetching order data:", error);
            } finally {
                setLoading(false);
            }
        }
        FetchProduct()
    }, []);
    if (loading) {
        return <div>Đang tải...</div>;
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-right">
                            <div className="product-details">
                                <div className="col-sm-5">
                                    <div className="view-product">
                                        <img src={`https://localhost:7233${product.anhDaiDien}`} alt="" />
                                    </div>
                                    <div id="similar-product" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <a href=""><img src="images/product-details/similar2.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar3.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar2.jpg" width={125} height={125} alt="" /></a>
                                            </div>
                                            <div className="item">
                                                <a href=""><img src="images/product-details/similar3.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar1.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar3.jpg" width={125} height={125} alt="" /></a>
                                            </div>
                                            <div className="item">
                                                <a href=""><img src="images/product-details/similar2.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar1.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar2.jpg" width={125} height={125} alt="" /></a>
                                            </div>

                                        </div>

                                        <a className="left item-control" style={{ left: 0 }} href="#similar-product" data-slide="prev">
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                        <a className="right item-control" href="#similar-product" data-slide="next">
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>

                                </div>
                                <div className="col-sm-7">
                                    <div className="product-information" style={{ textAlign: "left" }}>
                                        <h2>{product.tenSp}</h2>
                                        <p>Web ID:{product.productId}</p>
                                        <p style={{ textDecoration: "line-through" }}>{FormatCurrency(product.giaBan)}</p>
                                        <span>
                                            <span> Giá:{FormatCurrency(CaculateDiscountPrice(product.giaBan, product.phanTramGiam))}</span>

                                            <form>
                                                <input id="txtQuantity" onChange={() => { }} type="number" min="1" value="1" onInput={() => { }} name="quantity" />
                                                <button type="submit" className="btn btn-fefault cart">
                                                    <Link style={{ color: "white" }} onMouseOver={(e) => (e.target.style.color = 'black')}
                                                        onMouseOut={(e) => (e.target.style.color = 'white')}><i className="fa fa-shopping-cart"></i>Bỏ vào giỏ</Link>
                                                </button>
                                            </form>

                                        </span>

                                        <p><b style={{ color: "red" }}>------------Đã hết hàng-----------</b></p>
                                        <p><b>Số lượng còn:</b> {product.soLuongCon}</p>
                                        <p><b>Mô tả:</b> {product.moTa}</p>
                                        <p><b>Thông số:</b> {product.thongSo}</p>
                                        <p><b>Hãng:</b> {brand}</p>
                                        <p><b>Loại:</b> {category}</p>
                                        <Link to="/"><img src="../myLayout/images/product-details/share.png" className="share img-responsive" alt="" /></Link>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProductDetails;