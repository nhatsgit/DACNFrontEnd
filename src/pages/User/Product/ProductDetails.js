import { Link } from "react-router-dom";

function ProductDetails() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-right">
                            <div className="product-details">
                                <div className="col-sm-5">
                                    <div className="view-product">
                                        <img src="images/product-details/product.png" alt="" />
                                    </div>
                                    <div id="similar-product" className="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <a href=""><img src="images/product-details/similar2.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar3.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar2.jpg" width={125} height={125} alt="" /></a>
                                            </div>
                                            <div class="item">
                                                <a href=""><img src="images/product-details/similar3.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar1.jpg" width={125} height={125} alt="" /></a>
                                                <a href=""><img src="images/product-details/similar3.jpg" width={125} height={125} alt="" /></a>
                                            </div>
                                            <div class="item">
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
                                        <h2>TenSp</h2>
                                        <p>Web ID:ProductId</p>
                                        <p style={{ textDecoration: "line-through" }}>Giá Gốc</p>
                                        <span>
                                            <span> Giá:77777</span>

                                            <form asp-controller="ShoppingCart" asp-action="AddToCart" asp-route-productId="ProductId">
                                                <input id="txtQuantity" onchange="updateCount()" type="number" min="1" value="1" oninput="removeNegative()" name="quantity" />
                                                <button type="submit" className="btn btn-fefault cart">
                                                    <Link style={{ color: "white" }} onmouseover="this.style.color='black'" onmouseout="this.style.color='white'"><i className="fa fa-shopping-cart"></i>Bỏ vào giỏ</Link>
                                                </button>
                                            </form>

                                        </span>

                                        <p><b style={{ color: "red" }}>------------Đã hết hàng-----------</b></p>
                                        <p><b>Số lượng còn:</b> 1231231</p>
                                        <p><b>Mô tả:</b> 13213</p>
                                        <p><b>Thông số:</b> 1221313</p>
                                        <p><b>Hãng:</b> TenNhanHieu</p>
                                        <p><b>Loại:</b> TenLoai</p>
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