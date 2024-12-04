function DetailProduct() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8" style={{textAlign:"left"}}>
                    <h1 className="mb-4" style={{ fontSize: "40px" }}>Details<br/>Product</h1>
                    <hr />
                    <div className="card shadow-sm p-4">
                        <dl className="row">
                            <dt className="col-sm-3 mb-3 fw-bold">TenSp:</dt>
                            <dd className="col-sm-9 mb-3">TenSp</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Ảnh đại diện:</dt>
                            <dd className="col-sm-9 mb-3">
                                <img src="#" alt="Anhdaidien" width={150} height={150}></img>
                            </dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Mota:</dt>
                            <dd className="col-sm-9 mb-3">Mota</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">ThongSo:</dt>
                            <dd className="col-sm-9 mb-3">ThongSo</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Giá nhập:</dt>
                            <dd className="col-sm-9 mb-3">111</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Giá bán:</dt>
                            <dd className="col-sm-9 mb-3">222</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Số lượng còn:</dt>
                            <dd className="col-sm-9 mb-3">20</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Phần Trăm Giảm:</dt>
                            <dd className="col-sm-9 mb-3">20</dd>
                            
                            <dt className="col-sm-3 mb-3 fw-bold">Danh mục voucher:</dt>
                            <dd className="col-sm-9 mb-3">VoucherCategory</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Brand:</dt>
                            <dd className="col-sm-9 mb-3">Brand</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Ảnh mô tả:</dt>
                            <dd className="col-sm-9 mb-3">
                                <img src="#" alt="Anhdaidien" width={150} height={150}></img>
                            </dd>
                        </dl>

                    </div>

                    <div className=" mt-4">
                        <a href="/seller/editProduct" style={{textDecoration:"underline",color:"blue"}}>Edit</a> |
                        <a href="/seller/product" style={{textDecoration:"underline",color:"blue"}}>Back to List</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailProduct;