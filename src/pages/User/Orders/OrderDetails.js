function OrderDetails() {
    return (
        <>
            <section id="cart_items">
                <div class="container">
                    <div class="breadcrumbs">
                        <ol class="breadcrumb">
                            <h1>Thông tin đơn hàng</h1>
                        </ol>
                    </div>
                    <div class="table-responsive cart_info">
                        <table class="table table-condensed">
                            <thead>
                                <tr class="cart_menu">
                                    <td class="image" style={{ width: "200px" }}>Ảnh</td>
                                    <td class="description">Tên sản phẩm</td>
                                    <td class="price">Đơn giá</td>
                                    <td class="quantity">Số lượng mua</td>
                                    <td class="total">Thành tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td class="cart_product" style={{ width: "200px" }}>
                                        <a asp-controller="Products" asp-action="Details" asp-route-ma="@item.ProductId"><img src="images/product-details/product.png" alt="" width="120" height="100" /></a>
                                    </td>
                                    <td class="cart_description">
                                        <h4><a asp-controller="Products" asp-action="Details" asp-route-ma="@item.ProductId">@item.Product.TenSp</a></h4>
                                        <p>Web ID: 232</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>20000</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>x3</p>
                                    </td>
                                    <td class="cart_total" id="cartTotal">
                                        <p class="cart_total_price" id="totalPrice">60000</p>
                                    </td>
                                    <td>

                                        <button onclick="openForm(@item.ProductId)" id="openModalBtn" type="button" class="btn btn-fefault cart">Đánh Giá</button>



                                        <button type="button" class="btn btn-fefault cart">
                                            <a a asp-controller="ShoppingCart" asp-action="AddToCart" asp-route-productId="@item.ProductId" asp-route-quantity="1" style={{ color: "white" }} onmouseover="this.style.color='black'" onmouseout="this.style.color='white'">Mua Lại</a>
                                        </button>


                                    </td>

                                </tr>
                                <tr>
                                    <td class="cart_product" style={{ width: "200px" }}>
                                        <a asp-controller="Products" asp-action="Details" asp-route-ma="@item.ProductId"><img src="images/product-details/product.png" alt="" width="120" height="100" /></a>
                                    </td>
                                    <td class="cart_description">
                                        <h4><a asp-controller="Products" asp-action="Details" asp-route-ma="@item.ProductId">@item.Product.TenSp</a></h4>
                                        <p>Web ID: 232</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>20000</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>x3</p>
                                    </td>
                                    <td class="cart_total" id="cartTotal">
                                        <p class="cart_total_price" id="totalPrice">60000</p>
                                    </td>
                                    <td>

                                        <button onclick="openForm(@item.ProductId)" id="openModalBtn" type="button" class="btn btn-fefault cart">Đánh Giá</button>



                                        <button type="button" class="btn btn-fefault cart">
                                            <a a asp-controller="ShoppingCart" asp-action="AddToCart" asp-route-productId="@item.ProductId" asp-route-quantity="1" style={{ color: "white" }} onmouseover="this.style.color='black'" onmouseout="this.style.color='white'">Mua Lại</a>
                                        </button>


                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                        <dl class="row">
                            <dt class="col-sm-3">
                                Thời Gian Đặt:
                            </dt>
                            <dd class="col-sm-9">
                                12/2/2222
                            </dd>

                            <dt class="col-sm-3">
                                Địa Chỉ Giao Hàng:
                            </dt>
                            <dd class="col-sm-9">
                                VN
                            </dd>
                            <dt class="col-sm-3">
                                Ghi Chú:
                            </dt>
                            <dd class="col-sm-9">
                                Dat hang
                            </dd>
                            <dt class="col-sm-3">
                                Trạng Thái Đơn Hàng:
                            </dt>
                            <dd class="col-sm-9">
                                Da giao hang
                            </dd>
                            <dt class="col-sm-3">
                                Phương Thức Thanh Toán:
                            </dt>
                            <dd class="col-sm-9">
                                Truc Tiep
                            </dd>
                            <dt class="col-sm-3">
                                Mã Giảm Giá:
                            </dt>

                            <dd class="col-sm-9">
                                GIAMGIA3 giảm 60 % tổng đơn hàng
                                , đơn tối thiểu 99900
                                , giảm tối đa 88891
                            </dd>

                            <dt class="col-sm-3">
                                <h3>Tổng Đơn Hàng:</h3>
                            </dt>
                            <dd class="col-sm-9">
                                <h3>Tong don hang:89898</h3>
                            </dd>
                        </dl>

                        <form asp-action="Delete" asp-controller="Orders" asp-route-id="@Model.OrderId" method="post">
                            <input type="submit" value="Hủy Đơn" onclick="return confirm('Bạn Có Chắc Chắn Muốn Hủy Đơn Này?');" class="btn btn-danger" />
                        </form>

                        <form asp-action="GiveBackOrder" asp-controller="Orders" asp-route-id="@Model.OrderId" method="post">
                            <input type="submit" value="Yêu cầu trả hàng" onclick="return confirm('Bạn Có Chắc Chắn Muốn Yêu Cầu Trả Hàng?');" class="btn btn-danger" />
                        </form>

                    </div>
                </div>

            </section>
        </>
    );
}

export default OrderDetails;