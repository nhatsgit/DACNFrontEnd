import { Link, useNavigate } from "react-router-dom";
import styles from "../../../pages/Seller/Seller.module.css"
import { HideProduct } from "../../../apiServices/Seller/ProductSellerServices";
import { useEffect, useState } from "react";
import { FormatCurrency } from "../../../utils/FormatCurrency";
import { routePaths } from "../../../routes";

function ProductListSeller({ listProduct }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    useEffect(() => {
        if (listProduct && listProduct.length > 0) {
            setProducts(listProduct);
        }
    }, [listProduct]);

    if (!products || products.length === 0) {
        return <div>Đang tải...</div>;
    }


    const HandleHideProduct = async (productId) => {
        try {
            alert("bạn có thực sự muốn ẩn sản phẩm này")
            await HideProduct(productId);
            const updatedProducts = products.filter(product => product.productId !== productId);
            setProducts(updatedProducts);
            alert("Ẩn sản phẩm thành công")

        } catch (error) {

        }
    }
    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            TenSp
                        </th>
                        <th>
                            AnhDaiDien
                        </th>
                        <th>
                            GiaNhap
                        </th>
                        <th>
                            GiaBan
                        </th>
                        <th>
                            SoLuongCon
                        </th>
                        <th>
                            PhanTramGiam
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return <tr key={index}>
                                <td className={styles.tbody_td}>
                                    {product.tenSp}
                                </td>
                                <td className={styles.tbody_td}>
                                    <img
                                        src={`${process.env.REACT_APP_API_URL}${product.anhDaiDien}`}
                                        width={75}
                                        onError={(e) => { e.target.src = "https://i5.walmartimages.com/asr/d92cca6d-cb6d-4e4c-b5c0-70d5b39ecdf8.43fbe65bc7884354b2c58c12beea36c8.jpeg" }}
                                        alt="Product"
                                    />
                                </td>
                                <td className={styles.tbody_td}>
                                    {FormatCurrency(product.giaBan)}

                                </td>
                                <td className={styles.tbody_td}>
                                    {FormatCurrency(product.giaNhap)}

                                </td>
                                <td className={styles.tbody_td}>
                                    {product.soLuongCon}

                                </td>
                                <td className={styles.tbody_td}>
                                    {product.phanTramGiam}

                                </td>
                                <td className={`${styles.tbody_td} ${styles.display}`}>
                                    {
                                        product.daAn ? <button className={`${styles.btn} ${styles.btn_success}`} type="button">
                                            <p style={{ color: "white", textDecoration: "underline" }} href="/Seller/Products/DeleteProduct/227">Hiện</p>
                                        </button> :
                                            <button className={`${styles.btn} ${styles.btn_danger}`} type="button" onClick={() => { HandleHideProduct(product.productId) }}>
                                                <p style={{ color: "white", textDecoration: "underline" }}>Ẩn</p>
                                            </button>
                                    }
                                    <button className={`${styles.btn} ${styles.btn_primary}`} type="button" >
                                        <Link to={routePaths.editProduct} style={{ color: "white", textDecoration: "underline" }} >Chỉnh Sửa</Link>
                                    </button>
                                    <button className={`${styles.btn} ${styles.btn_info}`} type="button">
                                        <Link to={routePaths.detailProduct} style={{ color: "white", textDecoration: "underline" }} >Chi Tiết</Link>
                                    </button>

                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </>
    );
}

export default ProductListSeller;