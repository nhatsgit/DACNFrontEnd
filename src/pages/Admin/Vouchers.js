import { Link } from "react-router-dom";
import HeaderAdmin from "../../component/Admin/HeaderAdmin";
import React from "react";
import { routePaths } from "../../routes";

function Vouchers() {
    return(
        <>
        <div className="container mt-4">
            <nav style={{textAlign:"left"}}>
                <h1 style={{fontSize:"40px"}}>Mã giảm giá của hệ thống</h1>
                <Link to={routePaths.createVouchers} style={{color:"blue",textDecoration:"underline"}}>Tạo mới</Link>
            </nav>
            <div className="table-responsive">
                <table className="table table-bordered ">
                    <thead className="table-dark">
                        <tr>
                            <th>Mã Voucher</th>
                            <th>Phần Trăm Giảm</th>
                            <th>Giảm Tối Đa</th>
                            <th>Đơn Tối Thiểu</th>
                            <th>Ngày Bắt Đầu</th>
                            <th>Ngày Hết Hạn</th>
                            <th>Số Lượng Còn</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>VoucherCode</td>
                                <td>PhanTramGiam</td>
                                <td>
                                    15.000 ₫
                                </td>
                                <td>
                                    3.000.000 ₫
                                </td>
                                <td>1/29/2025 6:23:20 PM</td>
                                <td>2/12/2025 6:23:20 PM</td>
                                <td>100</td>
                                <td>
                                    <Link to={routePaths.editVouchers}  style={{color:"blue",textDecoration:"underline"}}>
                                        Sửa
                                    </Link> |
                                    <Link to={routePaths.detailsVouchers} style={{color:"blue",textDecoration:"underline"}}>
                                        Chi tiết
                                    </Link> |
                                    <Link to={routePaths.deleteVouchers} style={{color:"blue",textDecoration:"underline"}}>
                                        Kết thúc
                                    </Link> 
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}
export default Vouchers;