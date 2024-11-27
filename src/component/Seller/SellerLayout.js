import { Link } from "react-router-dom";
import styles from "./SellerLayout.module.css";
import HeaderSeller from "./HeaderSeller";
import { routePaths } from "../../routes";


function SellerLayout({ children }) {
    return (
        <>
            <HeaderSeller/>

            <div className={styles.mainContent}>
                <div className={styles.leftNavbar}>
                    <ul className={styles.leftNavLinks}>
                        <li className={styles.navSection}>Quản lý sản phẩm
                            <ul className={styles.subNavLinks}>
                                <li><Link to={`${routePaths.products}`}>Sản phẩm đang bán</Link></li>
                                <li><Link to={`${routePaths.hidden}`}>Sản phẩm đã ẩn</Link></li>
                                <li><Link to={`${routePaths.out_of_stock}`}>Sản phẩm hết hàng</Link></li>
                                <li><Link to={`${routePaths.add}`}>Thêm sản phẩm</Link></li>
                            </ul>
                        </li>
                        <li className={styles.navSection}>Quản lý đơn hàng
                            <ul className={styles.subNavLinks}>
                                <li><Link to={`${routePaths.products}`}>Tất cả</Link></li>
                                <li><Link to={`${routePaths.pending}`}>Chờ xác nhận</Link></li>
                                <li><Link to={`${routePaths.delivered}`}>Đã giao hàng</Link></li>
                                <li><Link to={`${routePaths.cancalled}`}>Đơn hủy</Link></li>
                                <li><Link to={`${routePaths.return_requested}`}>Yêu cầu trả hàng</Link></li>
                                <li><Link to={`${routePaths.returned}`}>Đã trả hàng</Link></li>
                            </ul>
                        </li>
                        {/* <li className={styles.navSection}>Quản lý Voucher
                            <ul className={styles.subNavLinks}>
                                <li><Link to="/orders/all">Tất cả</Link></li>
                                <li><Link to="/orders/delivered">Voucher</Link></li>
                                <li><Link to="/orders/cancelled">Đơn hết</Link></li>
                                <li><Link to="/orders/returned">Đã hết hạn</Link></li>
                            </ul>
                        </li> */}
                        <li className={styles.navSection}>Quản lý Shop
                            <ul className={styles.subNavLinks}>
                                <li><Link to={`${routePaths.staff}`}>Thông tin shop</Link></li>
                                <li><Link to={`${routePaths.staff}`}>Nhân viên</Link></li>
                                <li><Link to={`${routePaths.addstaff}`}>Thêm nhân viên</Link></li>
                            </ul>
                        </li>
                        <li className={styles.navSection}>Dữ liệu
                            <ul className={styles.subNavLinks}>
                                <li><Link to={`${routePaths.analyze}`}>Phân tích đơn hàng</Link></li>
                                <li><Link to="/orders/delivered">Phân tích doanh thu</Link></li>
                                <li><Link to="/orders/cancelled">Phân tích sản phẩm</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Children Content */}
                <div className={styles.childrenContent}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default SellerLayout;
