import style from "./Shop.module.css"
function Shop() {
    return (
        <>
            <h1>SHOP</h1>
            <hr />
            <div className="row">
                <div className="col-sm-5">
                    <div className="overlay"></div>
                    <div className="rectangle" style="background-image: url('@Model.AnhBia');">
                        <img className="circle" src="@Model.AnhDaiDien" alt="Avatar"></img>
                        <div className="content">
                            <h4>@Model.TenCuaHang</h4>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 " style="display: flex; flex-direction: column; justify-content: space-between;height:var(--col-height)">
                    <p>Địa Chỉ: <span className="text-model">@Model.DiaChi</span></p>
                    <p>Liên Hệ: <span className="text-model">@Model.LienHe</span></p>
                    <p>
                        Ngày Tạo: <span className="text-model">
                            @StringFormat.DateFormat(Model.NgayTao)
                        </span>
                    </p>
                </div>
                <div className="col-sm-3" style="display: flex; flex-direction: column; justify-content: space-between;height:var(--col-height)">
                    <p>Loại Shop: <span className="text-model">@Model.ShopCategories.TenLoai</span></p>
                    <p>Số sản phẩm: <span className="text-model">@ViewBag.ProductQuantity</span></p>
                    <p>Số lượng bán: <span className="text-model">@ViewBag.TotalQuantitySold</span></p>

                </div>
            </div>
            <hr />
        </>
    );
}

export default Shop;