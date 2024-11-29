import { useEffect, useState } from "react";
import { GetShopDetail } from "../../../apiServices/Seller/ShopServices";

function ShopDetail() {
    const [shopData, setShopData] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const shop = await GetShopDetail();
                setShopData(shop)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {

            }
        }
        fetchApi();
    }, []);
    if (!shopData) {
        return <div>Đang tải thông tin cửa hàng...</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
        return date.toLocaleDateString("vi-VN", options);
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
            {/* Ảnh bìa */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img
                    src={`${process.env.REACT_APP_API_URL}${shopData.anhBia}`}
                    alt="Ảnh bìa cửa hàng"
                    style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
                />
            </div>

            {/* Ảnh đại diện */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img
                    src={`${process.env.REACT_APP_API_URL}${shopData.anhDaiDien}`}
                    alt="Ảnh đại diện cửa hàng"
                    style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", border: "4px solid #fff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                />
            </div>

            {/* Thông tin shop */}
            <h2 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>{shopData.tenCuaHang}</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
                <em>Mô tả: {shopData.moTa}</em>
            </p>

            <div style={{ lineHeight: "1.8", color: "#555" }}>
                <p><strong>Địa chỉ:</strong> {shopData.diaChi}</p>
                <p><strong>Liên hệ:</strong> {shopData.lienHe}</p>
                <p><strong>Ngày tạo:</strong> {formatDate(shopData.ngayTao)}</p>
                <p><strong>Danh mục cửa hàng:</strong> {shopData.shopCategoryId}</p>
                <p><strong>Trạng thái:</strong> {shopData.biChan ? "Đã bị chặn" : "Hoạt động bình thường"}</p>
            </div>
        </div>
    );
}


export default ShopDetail;