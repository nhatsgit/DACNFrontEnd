import React from "react";
import { Link } from "react-router-dom";
import { routePaths } from "../../../routes";


const Voucher = () => {
  return (
    <div>
      <h1>Mã giảm giá của shop</h1>
      <a href="/VoucherCreater"><button className="btn btn-primary">Tạo mới</button></a>
      <table className="table">
        <thead>
          <tr>
            <th>Mã giảm giá</th>
            <th>Phần trăm giảm</th>
            <th>Giảm tối đa</th>
            <th>Đơn tối thiểu</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày hết hạn</th>
            <th>Số lượng còn</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>VoucherCode</td>
              <td>PhanTramGiam</td>
              <td>GiamToiDa</td>
              <td>DonToiThieu</td>
              <td>NgayBatDau</td>
              <td>NgayHetHan</td>
              <td>SoLuongCon</td>
              <td style={{display:"flex"}}>
                <Link to={routePaths.EditVoucher}><button className="btn btn-info" style={{ marginTop: 0 }}>Sửa</button></Link>
                <Link to={routePaths.DetailsVoucher}><button className="btn btn-success">Chi Tiết</button></Link>
                <Link to={routePaths.DeleteVoucher}><button className="btn btn-danger">Kết thúc</button></Link>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Voucher;
