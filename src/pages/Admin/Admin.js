import { Link } from "react-router-dom";
import HeaderAdmin from "../../component/Admin/HeaderAdmin";
import React from "react";
import { routePaths } from "../../routes";

function Admin() {
  return (
    <>
      <div className="container mt-4">
        <p className="text-end" style={{textAlign:"left"}}>
            <h1 className="mb-4" style={{fontSize:"40px"}}>Quản lý cửa hàng</h1>    
            <Link to={routePaths.createStore} style={{color:"blue",textDecoration:"underline"}}>Thêm tài khoản cửa hàng</Link>
        </p>
        <table className="table ">
          <thead>
            <tr >
              <th style={{textAlign:"center"}}>UserName</th>
              <th style={{textAlign:"center"}}>Chủ shop</th>
              <th style={{textAlign:"center"}}>Email</th>
              <th style={{textAlign:"center"}}>Tên Shop</th>
              <th style={{textAlign:"center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UserName2</td>
              <td>FullName2</td>
              <td>Email</td>
              <td>TenCuaHang</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <Link to={routePaths.detailsStore} style={{color:"blue",textDecoration:"underline"}}>
                    Chi tiết shop
                  </Link> |
                  <a href="#" style={{color:"blue",textDecoration:"underline"}}>
                    Reset Password
                  </a> |
                  <a href="#" style={{color:"blue",textDecoration:"underline"}}> 
                    Block Shop
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
