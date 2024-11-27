import styles from "../Seller.module.css"

function Products() {
  return (
    <div class={styles.main_content}>
            

    <h1>Tất cả sản phẩm</h1>

    <div class="col-sm-8">
    <form id={styles.search_form} method="post" class="dropdown" action="/Seller/Products/SearchProducts">
        <input type="text" name="query" id="searchInput" style={{width: "400px",height:"50px"}} placeholder="Tìm kiếm sản phẩm..." />
        <ul id={styles.suggestions}></ul>
        <button style={{width: "100px", height: "55px", backgroundColor: "cornflowerblue", color: "white", border: "none"}} type="submit" value="search" onmouseover="this.style.color='black'" onmouseout="this.style.color='white'">Tìm Kiếm</button>
    <input name="__RequestVerificationToken" type="hidden" value="" /></form>
    </div>

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
                    <td className={`${styles.tbody_td} ${styles.display}`}>
                        <button className={`${styles.btn} ${styles.btn_danger}`} type="button">
                            <a style={{color:"white", textDecoration: "underline"}} href="/Seller/Products/DeleteProduct/227">Ẩn</a>
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
                    <td className={`${styles.tbody_td} ${styles.display}`}>
                        <button className={`${styles.btn} ${styles.btn_danger}`} type="button">
                            <a style={{color:"white", textDecoration: "underline"}} href="/Seller/Products/DeleteProduct/227">Ẩn</a>
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
        <div class="pagination_container"><ul class={styles.pagination}><li class="active"><span>1</span></li><li><a href="/Seller/Products?page=2">2</a></li><li><a href="/Seller/Products?page=3">3</a></li><li><a href="/Seller/Products?page=4">4</a></li><li><a href="/Seller/Products?page=5">5</a></li><li><a href="/Seller/Products?page=6">6</a></li><li class="PagedList_skipToNext"><a href="/Seller/Products?page=2" rel="next">&gt;</a></li></ul></div>

    </div>
</div>
 );
}

export default Products;
