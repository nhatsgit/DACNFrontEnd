import { useContext, useEffect, useState } from "react";
import { routePaths } from "../../routes";
import styles from "./SellerLayout.module.css";
import { Link } from "react-router-dom";
import { GetShopDetail } from "../../apiServices/Seller/ShopServices";
import { AuthContext } from "../Context/AuthContext";

function HeaderSeller() {
    const [shopData, setShopData] = useState({});
    
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const shop = await GetShopDetail();
                setShopData(shop);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchApi();
    }, []);

    const { auth, setAuth } = useContext(AuthContext);
    const HandleLogout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
        setAuth({
            isAuthenticated: false,
            user: {
                username: ""
            }
        });
    };

    if (!shopData) {
        return <div>Đang tải thông tin cửa hàng...</div>;
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div>
                        <h1 className={styles.shopTitle}>Trang Bán Hàng</h1>
                        <Link to={'/'}>Về trang chủ</Link>
                    </div>
                    <div className={styles.nav1}>
                        <ul className={styles.navbarNav}>
                            <div className={styles.overlay}></div>

                            <div
                                className={styles.rectangle}
                                style={{backgroundImage: `url('${process.env.REACT_APP_API_URL}${shopData.anhBia}')`,}}>
                                <img 
                                    className={styles.circle} 
                                    src={`${process.env.REACT_APP_API_URL}${shopData.anhDaiDien}`} 
                                    alt="Avatar"
                                />
                            </div>

                            <div className={styles.content}>
                                <h4>{shopData.tenCuaHang}</h4>
                            </div>
                        </ul>
                    </div>

                    <div className={styles.nav2}>
                        <span>Chủ Shop: {auth.user.username}</span>
                        <a href={routePaths.account}>Quản lý tài khoản</a>
                        <Link to="/" onClick={HandleLogout}>Đăng xuất</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSeller;
