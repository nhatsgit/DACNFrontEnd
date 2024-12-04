import React from 'react';
import { useEffect, useState } from "react";
import { GetShopDetail } from "../../../apiServices/Seller/ShopServices";

function ShopDetail() {
    const [shopData, setShopData] = useState({});
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [backgroundPreview, setBackgroundPreview] = useState(null);

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

    if (!shopData) {
        return <div>Đang tải thông tin cửa hàng...</div>;
    }

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result); // Set preview of avatar image
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle file change for background image
    const handleBackgroundChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundPreview(reader.result); // Set preview of background image
            };
            reader.readAsDataURL(file);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        };
        return date.toLocaleDateString("vi-VN", options);
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px" }}>
            <h1 align="center">Thiết lập thông tin cửa hàng</h1>
            <form encType="multipart/form-data">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="control-label"><strong>Tên Cửa Hàng</strong></label>
                            <input name="TenCuaHang" defaultValue={shopData.tenCuaHang} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label"><strong>Địa chỉ</strong></label>
                            <input className="form-control" name="address" id="address" type="text" defaultValue={shopData.diaChi} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"><strong>Liên Hệ</strong></label>
                            <input name="LienHe" defaultValue={shopData.lienHe} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label"><strong>Mô Tả Shop</strong></label>
                            <textarea name="MoTa" defaultValue={shopData.moTa} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label"><strong>Loại Shop</strong></label>
                            <select name="ShopCategoryId" className="form-control" defaultValue={shopData.ShopCategoryId}>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="control-label"><strong>Ngày Tạo</strong></label>
                            <p className="form-control-static">{formatDate(shopData.ngayTao)}</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                    <div className="form-group" align="center">
                            <label><strong>Ảnh Đại Diện</strong></label>
                            <input 
                                type="file" 
                                name="imageAvatar" 
                                className="form-control" 
                                id="imageAvatar" 
                                style={{ display: "none" }} 
                                onChange={handleAvatarChange} 
                            />
                            <img 
                                src={avatarPreview || `${process.env.REACT_APP_API_URL}${shopData.anhDaiDien}`} 
                                alt="Avatar" 
                                style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
                            />
                            <button 
                                type="button" 
                                onClick={() => document.getElementById("imageAvatar").click()} 
                                className="btn btn-secondary"
                            >
                                Chọn Ảnh Đại Diện
                            </button>
                        </div>
                        <div className="form-group" align="center">
                            <label><strong>Ảnh Bìa</strong></label>
                            <input 
                                type="file" 
                                name="imageBackground" 
                                className="form-control" 
                                id="imageBackground" 
                                style={{ display: "none" }} 
                                onChange={handleBackgroundChange} 
                            />
                            <img 
                                src={backgroundPreview || `${process.env.REACT_APP_API_URL}${shopData.anhBia}`} 
                                alt="Background" 
                                style={{ height: "200px" }} 
                            />
                            <button 
                                type="button" 
                                onClick={() => document.getElementById("imageBackground").click()} 
                                className="btn btn-secondary"
                            >
                                Chọn Ảnh Bìa
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-group" align="center">
                    <input type="submit" value="Lưu" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default ShopDetail;
