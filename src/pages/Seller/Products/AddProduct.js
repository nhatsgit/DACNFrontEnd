import { useEffect, useState } from "react";
import styles from "../Seller.module.css"
import { GetBrands, GetCategories } from "../../../apiServices/ProductService";
import { CreateProduct } from "../../../apiServices/Seller/ProductSellerServices";
function AddProduct() {
    const [product, setProduct] = useState({
        ProductId: 0,
        TenSp: "",
        AnhDaiDien: "",
        MoTa: "",
        ThongSo: "",
        GiaNhap: "",
        GiaBan: "",
        SoLuongCon: 0,
        PhanTramGiam: 0,
        DiemDanhGia: 0,
        DaAn: false,
        ProductCategoryId: 1,
        BrandId: 1,
        ShopId: 0,
    });
    const [mainImage, setMainImage] = useState(null);
    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);
    const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {

                const resCategories = await GetCategories();
                const resBrands = await GetBrands();
                setCategories(resCategories)
                setBrands(resBrands)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchApi();
    }, []);
    if (loading) {
        return <div>Đang tải...</div>;
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await CreateProduct(product, mainImage, additionalImages);
            alert("Product created successfully!");
            console.log(result);
        } catch (error) {
            alert("Failed to create product.");
            console.error(error);
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];

        setMainImage(file);
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setMainImagePreview(previewUrl);
        }
    };

    const handleAdditionalImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setAdditionalImages(files);

        const previews = files.map((file) => URL.createObjectURL(file));
        setAdditionalImagePreviews(previews);
    };
    return (
        <div className={styles.container} style={{ textAlign: "left" }}>

            <div className={styles.main_content}>
                <input style={{ width: "20px", height: "20px" }} type="radio" name="formSelector" value="form1" onchange="toggleForm()" />"Thêm thủ công"
                <input style={{ width: "20px", height: "20px" }} type="radio" name="formSelector" value="form2" onchange="toggleForm()" />"Thêm tự động"
                <h2>Thêm Sản Phẩm</h2>
                <bt />
                <form onSubmit={HandleSubmit} >
                    <div className={styles.form_group}>
                        <label className="control_label" for="TenSp">TenSp</label>
                        <input className={styles.form_control} type="text" name="TenSp" value={product.TenSp} onChange={handleInputChange} />
                        <span className="text_danger field_validation_valid"></span>
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="MoTa">MoTa</label>
                        <input className={styles.form_control} type="text" name="MoTa" value={product.MoTa} onChange={handleInputChange} />
                        <span className="text_danger field_validation_valid" ></span>
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="ThongSo">ThongSo</label>
                        <input className={styles.form_control} type="text" name="ThongSo" value={product.ThongSo} onChange={handleInputChange} />
                        <span className="text_danger field_validation_valid" ></span>
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="GiaNhap">GiaNhap</label>
                        <input className={styles.form_control} type="number" name="GiaNhap" value={product.GiaNhap} onChange={handleInputChange} />
                        <span className="text_danger field_validation_valid" ></span>
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="GiaBan">GiaBan</label>
                        <input className={styles.form_control} type="number" name="GiaBan" value={product.GiaBan} onChange={handleInputChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="SoLuongCon">SoLuongCon</label>
                        <input className={styles.form_control} type="number" name="SoLuongCon" value={product.SoLuongCon} onChange={handleInputChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="PhanTramGiam">PhanTramGiam</label>
                        <input className={styles.form_control} type="number" name="PhanTramGiam" value={product.PhanTramGiam} onChange={handleInputChange} />
                        <span className="text_danger field_validation_valid" data_valmsg_for="PhanTramGiam" data_valmsg_replace="true"></span>
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="ProductCategoryId">ProductCategoryId</label>
                        <select className={styles.form_control} name="ProductCategoryId" value={product.ProductCategoryId} onChange={handleInputChange}>
                            {
                                categories.map((category, index) => {
                                    return < option key={index} value={category.productCategoryId}>{category.tenLoai}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className={styles.form_group}>
                        <label className="control_label" for="BrandId">BrandId</label>
                        <select className={styles.form_control} name="BrandId" value={product.BrandId} onChange={handleInputChange}><option value="1">XiaoMi</option>
                            {
                                brands.map((brand, index) => {
                                    return <option key={index} value={brand.brandId}>{brand.tenNhanHieu}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className={styles.form_group}>
                        <label for="AnhDaiDien">Anh dai dien</label>
                        <input type="file" onChange={handleMainImageChange} name="imageUrl" className={styles.form_control} id="imageInput" />

                        <br />
                        {mainImagePreview && <img src={mainImagePreview} alt="Main Preview" style={{ width: "200px", marginTop: "10px" }} />}
                    </div>
                    <div className={styles.form_group}>
                        <label for="Images">Product Image:</label>
                        <input type="file" onChange={handleAdditionalImagesChange} id="files" name="files" multiple accept="image/*" />
                        {additionalImagePreviews.map((preview, index) => (
                            <img key={index} src={preview} alt={`Additional Preview ${index}`} style={{ width: "100px" }} />
                        ))}
                        <br />
                    </div>

                    <button type="submit" className={`${styles.btn_primary} ${styles.btn}`}>Add</button>
                    <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAVAoH79ubwbq_UdX6bhU6Ssvz0_9Mx8cEWBbZWMtp8DXMIpB_sVqijixsBAoNUJatAIXU1BXRjBSmvELbMN1JLxfUAeWFxZHHYbyCIbr0OVcrEn9He0pcvA_rffS_cSZUjy3oPpWdSbKzVlAbK1FJoqrK2fXucijKghNbmmmRl0LA" /><input name="DaAn" type="hidden" value="false" /></form>
            </div>

        </div>
    )
}
export default AddProduct;