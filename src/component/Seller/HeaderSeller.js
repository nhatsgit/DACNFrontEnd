import { routePaths } from "../../routes";
import styles from "./SellerLayout.module.css"
import { Link } from "react-router-dom";

function HeaderSeller() {
    return(
        <>
        <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div>
                        <h1 className={styles.shopTitle}>Trang Bán Hàng</h1>
                        <Link to={'/'}>Về trang chủ</Link>
                    </div>

                    {/* nav1 bên trái: Tên Shop */}
                    <div className={styles.nav1}>
                        <ul className={styles.navbarNav}>
                            <div className={styles.overlay}></div>
                            <div className={styles.rectangle}>
                                <img className={styles.circle} src="http://localhost:5120/images/device%20(247).png" alt="Avatar" />
                            </div>
                            <div className={styles.content}>
                                <h4>Shop: joUSkNCprH1</h4>
                            </div>
                        </ul>
                    </div>

                    <div className={styles.nav2}>
                        <span>Chủ Shop:Admin@gmail.com</span>
                        <Link to={routePaths.account}>Quản lý tài khoản</Link>
                        <Link to={routePaths.login}>Đăng xuất</Link>
                    </div>
                </div>
            </div></>
    )
};
export default HeaderSeller;