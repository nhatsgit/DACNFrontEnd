function MyCarts() {
    return (
        <>
            <div classNameName="breadcrumbs">
                <ol classNameName="breadcrumb">
                    <h1>Giỏ Hàng Của Tôi</h1>
                </ol>
            </div>

            <section id="cart_items" >
                <div className="container" >
                    <div style={{ textAlign: "left" }}>
                        <strong style={{ paddingLeft: "20px", color: "red" }}>Shop xyz</strong>
                        <button type="button" style={{ backgroundColor: "transparent", border: "2px solid red" }}><a style={{ color: "orangered" }}>Xem Shop</a></button>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image" style={{ width: "200px" }}>Ảnh</td>
                                    <td className="description">Tên sản phẩm</td>
                                    <td className="price">Đơn Giá</td>
                                    <td className="quantity">Số Lượng</td>
                                    <td className="total">Thành Tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart_product" style={{ width: "200px" }}>
                                        <a ><img src="images/product-details/product.png" alt="" width={120} height={100} /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a>Ten</a></h4>
                                        <p>Web ID: 3333</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>23424324</p>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="form-group">
                                                <input id="txtQuantity_@item.ProductId" onchange="updateCart(@item.ProductId,@Model.shopId)" type="number" min="1" name="txtQuantity" value="1" style={{ width: "100px" }} oninput="removeNegativeSign(@item.ProductId)" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart_total" id="cartTotal">
                                        <p className="cart_total_price" id="totalPrice">99999</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" ><i className="fa fa-times"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product" style={{ width: "200px" }}>
                                        <a ><img src="images/product-details/product.png" alt="" width={120} height={100} /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a >Ten</a></h4>
                                        <p>Web ID: 3333</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>23424324</p>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="form-group">
                                                <input id="txtQuantity_@item.ProductId" onchange="updateCart(@item.ProductId,@Model.shopId)" type="number" min="1" name="txtQuantity" value="1" style={{ width: "100px" }} oninput="removeNegativeSign(@item.ProductId)" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart_total" id="cartTotal">
                                        <p className="cart_total_price" id="totalPrice">99999</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" ><i className="fa fa-times"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1 style={{ textAlign: "right", color: "red" }}>Tổng đơn hàng: 3443434d</h1>


                    <div style={{ textAlign: "right" }}>
                        <p>
                            <button type="button" class="btn btn-default cart">
                                <a style={{ color: "white" }} onmouseover="this.style.color='black'" onmouseout="this.style.color='white'">Đặt hàng</a>
                            </button>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyCarts;