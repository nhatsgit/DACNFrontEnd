function CreateVouchers() {
    return (
        <div className="container my-4" style={{textAlign:"left"}}>
            <h1 className="title"  style={{ fontSize: "40px" }}>Create<br/> Voucher</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="VoucherCode" className="form-label">Mã giảm giá</label>
                            <input type="text" id="VoucherCode" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="PhanTramGiam" className="form-label">Phần trăm giảm</label>
                            <input type="number" id="PhanTramGiam" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="GiamToiDa" className="form-label">Giảm tối đa</label>
                            <input type="number" id="GiamToiDa" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="DonToiThieu" className="form-label">Đơn tối thiểu</label>
                            <input type="number" id="DonToiThieu" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="NgayBatDau" className="form-label">Ngày bắt đầu</label>
                            <input type="date" id="NgayBatDau" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="NgayHetHan" className="form-label">Ngày hết hạn</label>
                            <input type="date" id="NgayHetHan" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SoLuongCon" className="form-label">Số lượng còn</label>
                            <input type="number" id="SoLuongCon" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="VoucherCategoryId">Danh mục voucher</label>
                            <select className="form-control">
                                <option value="">Chọn danh mục</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button><br/>
                            <button type="button" className="btn btn-secondary">
                                Back to List
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


function EditVouchers() {
    return (
        <div className="container my-4" style={{textAlign:"left"}}>
            <h1 className="title"  style={{ fontSize: "40px" }}>Edit<br/> Voucher</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="VoucherCode" className="form-label">Mã giảm giá</label>
                            <input type="text" id="VoucherCode" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="PhanTramGiam" className="form-label">Phần trăm giảm</label>
                            <input type="number" id="PhanTramGiam" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="GiamToiDa" className="form-label">Giảm tối đa</label>
                            <input type="number" id="GiamToiDa" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="DonToiThieu" className="form-label">Đơn tối thiểu</label>
                            <input type="number" id="DonToiThieu" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="NgayBatDau" className="form-label">Ngày bắt đầu</label>
                            <input type="date" id="NgayBatDau" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="NgayHetHan" className="form-label">Ngày hết hạn</label>
                            <input type="date" id="NgayHetHan" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SoLuongCon" className="form-label">Số lượng còn</label>
                            <input type="number" id="SoLuongCon" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="VoucherCategoryId">Danh mục voucher</label>
                            <select className="form-control">
                                <option value="">Chọn danh mục</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button><br/>
                            <div style={{margin:"15px 0"}}><a href="/vouchers" style={{textDecoration:"underline",color:"blue"}} >
                                Back to List
                            </a></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function DetailsVouchers() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8" style={{textAlign:"left"}}>
                    <h1 className="mb-4" style={{ fontSize: "40px" }}>Details<br/>Voucher</h1>
                    
                    <div className="card shadow-sm p-4">
                        <hr />
                        <dl className="row">
                            <dt className="col-sm-3 mb-3 fw-bold">Mã giảm giá:</dt>
                            <dd className="col-sm-9 mb-3">VoucherCode</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Phần trăm giảm:</dt>
                            <dd className="col-sm-9 mb-3">PhanTramGiam</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Giảm tối đa:</dt>
                            <dd className="col-sm-9 mb-3">GiamToiDa</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Đơn tối thiểu:</dt>
                            <dd className="col-sm-9 mb-3">GiamToiThieu</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Ngày bắt đầu:</dt>
                            <dd className="col-sm-9 mb-3">NgayBatDau</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Ngày hết hạn:</dt>
                            <dd className="col-sm-9 mb-3">NgayHetHan</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Số lượng còn:</dt>
                            <dd className="col-sm-9 mb-3">SoLuongCon</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Danh mục voucher:</dt>
                            <dd className="col-sm-9 mb-3">VoucherCategory</dd>
                        </dl>

                    </div>

                    <div className=" mt-4">
                        <a href="/EditVouchers" style={{textDecoration:"underline",color:"blue"}}>Edit</a> |
                        <a href="/Vouchers" style={{textDecoration:"underline",color:"blue"}}>Back to List</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DeleteVouchers() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8" style={{ textAlign: "left" }}>
                    <h1 className="mb-4" style={{ fontSize: "40px" }}>Delete <br/>Are you sure you want to delete this? <br/>Voucher</h1>
                    <hr />
                    <form>
                    <dl className="row">
                            <dt className="col-sm-3 mb-3 fw-bold">Mã giảm giá:</dt>
                            <dd className="col-sm-9 mb-3">VoucherCode</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Phần trăm giảm:</dt>
                            <dd className="col-sm-9 mb-3">PhanTramGiam</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Giảm tối đa:</dt>
                            <dd className="col-sm-9 mb-3">GiamToiDa</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Đơn tối thiểu:</dt>
                            <dd className="col-sm-9 mb-3">GiamToiThieu</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Ngày bắt đầu:</dt>
                            <dd className="col-sm-9 mb-3">NgayBatDau</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Ngày hết hạn:</dt>
                            <dd className="col-sm-9 mb-3">NgayHetHan</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Số lượng còn:</dt>
                            <dd className="col-sm-9 mb-3">SoLuongCon</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Danh mục voucher:</dt>
                            <dd className="col-sm-9 mb-3">VoucherCategory</dd>
                        </dl>
                        <div style={{ marginTop: "10px" }}>
                            <a href="/ProductCategory" className="btn btn-danger" >Delete</a> |
                            <a href="/ProductCategory" style={{ textDecoration: "underline", color: "blue" }}>Back to List</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {CreateVouchers,EditVouchers,DetailsVouchers,DeleteVouchers};