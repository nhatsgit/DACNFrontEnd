function CheckOut() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-right" style={{ textAlign: "left" }}>
                            <form asp-action="Checkout" asp-route-shopId="@ViewBag.Cart.shopId" method="post">

                                <h2>Điền thông tin đơn hàng</h2>
                                <div style={{ paddingLeft: "1em" }}>
                                    <div class="form-group">
                                        <label class="control-label"><strong>Địa chỉ</strong></label><br />
                                        <input class="form-control" name="address" id="address" type="text" style={{ width: "500px", display: "none" }} />
                                        <textarea id="currentAddress" class="form-control" readonly>@ViewBag.Address</textarea>
                                        <div id="popup" style={{ display: "none" }} class="form-group">
                                            <div style={{ display: "inline-block" }}>
                                                <select id="province" name="province"  >
                                                </select>
                                            </div>
                                            <div style={{ display: "inline-block" }}>
                                                <select id="district" name="district"  >
                                                    <option value="">Chọn quận/huyện</option>
                                                </select>
                                            </div>
                                            <div style={{ display: "inline-block" }}>
                                                <select id="ward" name="ward"  >
                                                    <option value="">Chọn xã/phường</option>
                                                </select>
                                            </div>
                                            <input id="specificAddress" name="specificAddress" placeholder="Địa chỉ cụ thể" />
                                            <button type="button" id="btnclose" onclick="closepopup()">Hủy</button>

                                        </div>
                                        <button type="button" id="btnpopup" onclick="openpopup()">Chọn địa chỉ khác</button>
                                    </div>


                                    <div class="form-group">
                                        <label asp-for="Notes">Ghi Chú</label>
                                        <input asp-for="Notes" class="form-control" value="Đặt hàng" />
                                    </div>
                                </div>

                                <section id="cart_items">
                                    <label style={{ paddingLeft: "1em" }}>Chi tiết đơn hàng</label>

                                    <div class="container">
                                        <div class="breadcrumbs">
                                        </div>

                                        <div class="table-responsive cart_info">
                                            <table class="table table-condensed">
                                                <thead>
                                                    <tr class="cart_menu">
                                                        <td class="image" style={{ width: "200px" }}>Ảnh</td>
                                                        <td class="description">Tên sản phẩm</td>
                                                        <td class="price">Đơn Giá</td>
                                                        <td class="quantity">Số Lượng</td>
                                                        <td class="total">Thành Tiền</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    <tr>
                                                        <td class="cart_product" style={{ width: "200px" }}>
                                                            <a a asp-controller="Products" asp-action="Details" asp-route-ma="@item.ProductId"><img src="images/product-details/product.png" alt="" width="120" height="90" /></a>
                                                        </td>
                                                        <td class="cart_description">
                                                            <h4><a asp-controller="Products" asp-action="Details" asp-route-ma="@item.ProductId">@item.ProductName</a></h4>
                                                            <p>Web ID: 111</p>
                                                        </td>
                                                        <td class="cart_price">
                                                            <p>999999</p>
                                                        </td>
                                                        <td>
                                                            <p>x3</p>
                                                        </td>
                                                        <td class="cart_total" id="cartTotal">
                                                            <p class="cart_total_price" id="totalPrice">277777</p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <tr>
                                            </tr>
                                        </div>
                                    </div>
                                </section>
                                <div style={{ paddingLeft: "1em" }}>
                                    <label>Chi tiết thanh toán</label>
                                    <p>Tổng đơn hàng: 99999</p>
                                    <p id="percentDiscount">Giảm giá đơn hàng: 0 ₫</p>
                                    <h3 style={{ color: "red" }} id="totalOrderPrice">Tổng thanh toán: 99999</h3>
                                    <div class="form-group">
                                        <label asp-for="PaymentId" class="control-label">Chọn phương thức thanh toán</label>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" asp-for="PaymentId" value="@item.Value" id="payment_@item.Value" required />
                                            <label class="form-check-label" for="payment_@item.Value">online</label>
                                            <input class="form-check-input" type="radio" asp-for="PaymentId" value="@item.Value" id="payment_@item.Value" required />
                                            <label class="form-check-label" for="payment_@item.Value">cod</label>
                                        </div>


                                    </div>
                                    <input type="submit" value="Đặt Hàng" class="btn btn-primary" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default CheckOut;