function VoucherCreater() {
  return (
    <div>
      <h1>Create</h1>
      <h4>Voucher</h4>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="VoucherCode">Mã giảm giá</label>
              <input className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="PhanTramGiam">Phần trăm giảm</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="GiamToiDa">Giảm tối đa</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="DonToiThieu">Đơn tối thiểu</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="NgayBatDau">Ngày bắt đầu</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="NgayHetHan">Ngày hết hạn</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="SoLuongCon">Số lượng còn</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="VoucherCategoryId">Danh mục voucher</label>
              <select className="form-control">
                <option value="">Chọn danh mục</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" style={{marginTop:"0"}}>
                Create
              </button>
              <a href="/Voucher"><button type="button" className="btn btn-secondary">
                Back to List
              </button></a>
            </div>
          </form>
        </div>
      </div>
    </div>

    )
}
export default VoucherCreater;