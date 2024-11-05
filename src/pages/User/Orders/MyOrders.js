function MyOrders() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-right">
                            <h1 style={{ textAlign: "center" }}>Đơn hàng của tôi</h1>
                            <style>

                            </style>
                            <section style={{ border: "2px solid black" }}>
                                <div class="container sum">
                                    <div class="second p-3">
                                        <strong>Ngày đặt: 15/12/2022</strong>

                                        <div class="row product py-2">
                                            <div class="col-md-6 d-flex">
                                                <div class="images">
                                                    <img src="/images/product-details/new.jpg" alt="" />
                                                </div>
                                                <div class="context ml-3">
                                                    <p>Ten san pham</p>
                                                    x 3
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <h5 class="text-dark">80000</h5>
                                            </div>
                                        </div>
                                        <div class="row product py-2">
                                            <div class="col-md-6 d-flex">
                                                <div class="images">
                                                    <img src="@item.Product.AnhDaiDien" alt="" />
                                                </div>
                                                <div class="context ml-3">
                                                    <p>Ten san pham</p>
                                                    x 3
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <h5 class="text-dark">80000</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row third py-3" style={{ borderTop: "1px solid grey", width: "99%" }}>
                                        <div class="col-md-6">
                                            <h4 style={{ color: "red" }}>Trang thai don hang</h4>
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <h3 style={{ color: "red" }}><span>Thành tiền:</span>Tong tien</h3>

                                            <button type="button" class="btn btn-fefault cart">
                                                <a style={{ color: "white" }} onmouseover="this.style.color='black'" onmouseout="this.style.color='white'">Xem chi tiết</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default MyOrders;