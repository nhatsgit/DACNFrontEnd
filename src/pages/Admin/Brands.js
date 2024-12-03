import React from "react";
import HeaderAdmin from "../../component/Admin/HeaderAdmin";
import { Link } from "react-router-dom";
import { routePaths } from "../../routes";

function Brands() {
  return (
    <>
      <div className="container mt-4" style={{textAlign:"left"}}>
        <div className=" mb-4 text-start">
          <h1 style={{fontSize:"40px"}}>Thương hiệu</h1>
          <Link to={routePaths.createBrands}  style={{color:"blue",textDecoration:"underline"}}>Create New</Link>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th >Tên Nhãn Hiệu</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TenNhanHieu</td>
                <td className="text-center">
                  <Link to={routePaths.editBrands} style={{color:"blue",textDecoration:"underline"}}>
                    <i className="bi bi-pencil"></i> Edit
                  </Link> |
                  <Link to={routePaths.detailsBrands} style={{color:"blue",textDecoration:"underline"}}>
                    <i className="bi bi-info-circle"></i> Details
                  </Link> |
                  <Link to={routePaths.deleteBrands} style={{color:"blue",textDecoration:"underline"}}>
                    <i className="bi bi-trash"></i> Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Brands;
