import { Link } from "react-router-dom";
import HeaderAdmin from "../../component/Admin/HeaderAdmin";
import React from "react";
import { routePaths } from "../../routes";

function ProductCategories() {
    return (
        <>
            <div className="container mt-4" style={{ textAlign: "left" }}>
                <p>
                    <h1 style={{fontSize:"40px"}}>Quản Lý Danh Mục</h1>
                    <Link to={routePaths.createProductCategory} style={{ color: "blue", textDecoration: "underline" }}>Create New</Link>
                </p>
                <div className="table-responsive">
                    <table className="table table-bordered ">
                        <thead className="table-dark">
                            <tr>
                                <th>ProductCategoryId</th>
                                <th>Tên Loại</th>
                                <th>Ảnh Đại Diện</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>TenLoai</td>
                                <td>
                                    <img
                                        src="#"
                                        alt="Ảnh Đại Diện"
                                        className="img-thumbnail"
                                        width="75"
                                        height="75"
                                    />
                                </td>
                                <td>
                                    <Link to={routePaths.editProductCategory} style={{color:"blue",textDecoration:"underline"}}>
                                        Sửa
                                    </Link> |
                                    <Link to={routePaths.detailsProductCategory} style={{color:"blue",textDecoration:"underline"}}>
                                        Chi tiết
                                    </Link> |
                                    <Link to={routePaths.deleteProductCategory} style={{color:"blue",textDecoration:"underline"}}>
                                        Xóa
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

export default ProductCategories;
