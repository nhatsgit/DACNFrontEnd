function ProductAnalyze() {
    return(
    <div>
      <h1> Biểu đồ sản phẩm theo loại</h1> 
      <h1>Top Bán Chạy</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Ảnh</th>
            <th>Số lượng đã đặt</th>
            <th>Giá</th>
            <th>Phần trăm giảm</th>
            <th>Số lượng còn</th>
            <th>Điểm Đánh Giá</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Tensp</td>
              <td>
                <img src="" alt="Anhdaidien" width="60" height="60" />
              </td>
              <td>
                <p>SoLuongBan</p>
              </td>
              <td>GiaBan</td>
              <td>PhanTramGiam</td>
              <td>SoLuongCon</td>
              <td>DiemDanhGia</td>
            </tr>
        </tbody>
      </table>

      <h1>Top Doanh Thu</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Ảnh</th>
            <th>Doanh Thu</th>
            <th>Giá</th>
            <th>Phần trăm giảm</th>
            <th>Số lượng còn</th>
            <th>Điểm Đánh Giá</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td>TenSp</td>
              <td>
                <img src="" alt="TenSp" width="60" height="60" />
              </td>
              <td>
                <p>
                  DoanhThu
                </p>
              </td>
              <td>GiaBan</td>
              <td>PhanTramGiam</td>
              <td>SoLuongCon</td>
              <td>DiemDanhGia</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ProductAnalyze;