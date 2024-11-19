import styles from "../Seller.module.css"
function HiddenProduct(){
    return(
        <div class={styles.main_content}>
            

        <h1>Sản phẩm đã bị ẩn</h1>
    
        <table class={styles.table}>
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
                    <tr>
                        <td className={styles.tbody_td}>
                            FSczTpDClI227
                        </td>
                        <td className={styles.tbody_td}>
                            <img src="https://i5.walmartimages.com/asr/d92cca6d-cb6d-4e4c-b5c0-70d5b39ecdf8.43fbe65bc7884354b2c58c12beea36c8.jpeg" width={100} />
                        </td>
                        <td className={styles.tbody_td}>
                            37.000.000 ₫
    
                        </td>
                        <td className={styles.tbody_td}>
                            4.200.000 ₫
                        </td>
                        <td className={styles.tbody_td}>
                            300
                        </td>
                        <td className={styles.tbody_td}>
                            14
                        </td>
                        <td className={styles.tbody_td}>
                            <button className={`${styles.btn} ${styles.btn_success}`} type="button">
                                <a style={{color:"white", textDecoration: "underline"}} href="/Seller/Products/DeleteProduct/227">Hiện</a>
                            </button>
                            <button className={`${styles.btn} ${styles.btn_primary}`} type="button" >
                                <a style={{color:"white", textDecoration: "underline"}} href="/Seller/Products/EditProduct/227">Chỉnh Sửa</a>
                            </button>
                            <button className={`${styles.btn} ${styles.btn_info}`}  type="button">
                                <a style={{ color: "white", textDecoration: "underline" }} href="/Seller/Products/Details/227">Chi Tiết</a>
                            </button>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.tbody_td}>
                            FSczTpDClI227
                        </td>
                        <td className={styles.tbody_td}>
                            <img src="https://th.bing.com/th/id/OIP.cGWTUQRrxNF5lMXfjPhWlgAAAA?rs=1&pid=ImgDetMain" width={100} />
                        </td>
                        <td className={styles.tbody_td}>
                            37.000.000 ₫
    
                        </td>
                        <td className={styles.tbody_td}>
                            4.200.000 ₫
                        </td>
                        <td className={styles.tbody_td}>
                            300
                        </td>
                        <td className={styles.tbody_td}>
                            14
                        </td>
                        <td className={styles.tbody_td}>
                            <button className={`${styles.btn} ${styles.btn_success}`} type="button">
                                <a style={{color:"white", textDecoration: "underline"}} href="/Seller/Products/DeleteProduct/227">Hiện</a>
                            </button>
                            <button className={`${styles.btn} ${styles.btn_primary}`} type="button" >
                                <a style={{color:"white", textDecoration: "underline"}} href="/Seller/Products/EditProduct/227">Chỉnh Sửa</a>
                            </button>
                            <button className={`${styles.btn} ${styles.btn_info}`}  type="button">
                                <a style={{ color: "white", textDecoration: "underline" }} href="/Seller/Products/Details/227">Chi Tiết</a>
                            </button>
                            
                        </td>
                    </tr>
            </tbody>
        </table>
        <div align="center">
    <div class="pagination-container">
        <ul className={styles.pagination}>
            <li class="active"><span>1</span></li>
            <li class="active"><span>2</span></li>
        </ul>
    </div>
</div>
</div>
    )
};
export default HiddenProduct;