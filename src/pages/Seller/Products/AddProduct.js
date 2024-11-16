import styles from "../Seller.module.css"
function AddProduct() {
    return(
        <div className={styles.container} style={{textAlign:"left"}}>
    <div className={styles.main_content}>
        <input style={{width:"20px",height:"20px"}} type="radio" name="formSelector" value="form1" onchange="toggleForm()"  />"Thêm thủ công"
        <input style={{width:"20px",height:"20px"}} type="radio" name="formSelector" value="form2" onchange="toggleForm()"  />"Thêm tự động"
        <h2>Thêm Sản Phẩm</h2>
        <bt />
        <form method="post" enctype="multipart/form_data" id="form1" action="/Seller/Products/AddProduct">
        <div classNameName={styles.form_group}>
            <label className="control_label" for="TenSp">TenSp</label>
            <input className={styles.form_control} type="text" id="TenSp" name="TenSp" value="" />
            <span className="text_danger field_validation_valid"></span>
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="MoTa">MoTa</label>
            <input className={styles.form_control} type="text" id="MoTa" name="MoTa" value="" />
            <span className="text_danger field_validation_valid" ></span>
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="ThongSo">ThongSo</label>
            <input className={styles.form_control} type="text" id="ThongSo" name="ThongSo" value="" />
            <span className="text_danger field_validation_valid" ></span>
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="GiaNhap">GiaNhap</label>
            <input className={styles.form_control} type="text" data_val="true" id="GiaNhap" name="GiaNhap" value="" />
            <span className="text_danger field_validation_valid" ></span>
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="GiaBan">GiaBan</label>
            <input className={styles.form_control} type="text" data_val="true" id="GiaBan" name="GiaBan" value="" />
            <span className="text_danger field_validation_valid" data_valmsg_for="GiaBan" data_valmsg_replace="true"></span>
        <div id="extwaiokist" style={{display:"none"}} v="fcoon" q="ca8b28ad" c="391.4" i="398" u="11.54" s="11062415" sg="svr_10022423_ga_11062415_bai_10222417" d="1" w="false" e="" a="2" m="BMe=" vn="3gtra"><div id="extwaigglbit" style={{display:"none"}} v="fcoon" q="ca8b28ad" c="391.4" i="398" u="11.54" s="11062415" sg="svr_10022423_ga_11062415_bai_10222417" d="1" w="false" e="" a="2" m="BMe="></div></div></div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="SoLuongCon">SoLuongCon</label>
            <input className={styles.form_control} type="number"  id="SoLuongCon" name="SoLuongCon" value="" /><input name="__Invariant" type="hidden" value="SoLuongCon" />
            <span className="text_danger field_validation_valid" data_valmsg_for="SoLuongCon" data_valmsg_replace="true"></span>
        </div>
        <div classNameName={styles.form_group} style={{display:"none"}}>
            <label for="DaAn">DaAn</label>
            <input type="checkbox" data_val="true"id="DaAn" name="DaAn" value="true" />
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="PhanTramGiam">PhanTramGiam</label>
            <input className={styles.form_control} type="number" id="PhanTramGiam" name="PhanTramGiam" value="" /><input name="__Invariant" type="hidden" value="PhanTramGiam" />
            <span className="text_danger field_validation_valid" data_valmsg_for="PhanTramGiam" data_valmsg_replace="true"></span>
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="ProductCategoryId">ProductCategoryId</label>
            <select className={styles.form_control} data_val="true" data_val_required="The ProductCategoryId field is required." id="ProductCategoryId" name="ProductCategoryId"><option value="1">Balo &amp; Túi Ví</option>
    <option value="2">Điện Thoại</option>
    <option value="3">Điện tử</option>
    <option value="4">Thực phẩm</option>
    <option value="5">Đồ bếp</option>
    <option value="6">Đồ chơi</option>
    <option value="7">Đồng hồ</option>
    <option value="8">Đồ gia dụng</option>
    <option value="9">Giày dép nam</option>
    <option value="10">Giày dép nữ</option>
    <option value="11">Máy Ảnh</option>
    <option value="12">Máy tính</option>
    <option value="13">Đồ nội trợ</option>
    <option value="14">Phương tiện</option>
    <option value="15">Sắc đẹp</option>
    <option value="16">Sách</option>
    <option value="17">Thể thao</option>
    <option value="18">Thiết bị</option>
    <option value="19">Thời trang nam</option>
    <option value="20">Thời trang nữ</option>
    <option value="21">Thời trang trẻ em</option>
    <option value="22">Thú cưng</option>
    <option value="23">Trang sức</option>
    <option value="24">Trẻ em</option>
    <option value="25">Túi Ví Nữ</option>
    <option value="26">Dịch vụ</option>
    <option value="27">Y tế</option>
    </select>
        </div>
        <div classNameName={styles.form_group}>
            <label className="control_label" for="BrandId">BrandId</label>
            <select className={styles.form_control} data_val="true" data_val_required="The BrandId field is required." id="BrandId" name="BrandId"><option value="1">XiaoMi</option>
    <option value="2">Apple</option>
    <option value="3">Samsung</option>
    <option value="4">Dell</option>
    <option value="5">HP</option>
    <option value="6">Nokia</option>
    <option value="7">ASUS</option>
    <option value="8">MSI</option>
    </select>
        </div>
        <div classNameName={styles.form_group} style={{display:"none"}}>
            <label className="control_label" for="ShopId">ShopId</label>
            <input className={styles.form_control} value="1" type="number" id="ShopId" name="ShopId" />
            <input name="__Invariant" type="hidden" value="ShopId" />
    
        </div>
    
        <div classNameName={styles.form_group}>
            <label for="AnhDaiDien">Product Image</label>
            <input type="file" name="imageUrl" className={styles.form_control} id="imageInput" />
            <br />
            <img id="previewImage" style={{display:"none",maxWidth:"200px"}} alt="Image preview" />
        </div>
        <div classNameName={styles.form_group}>
            <label for="Images">Product Image:</label>
            <input type="file" id="files" name="files" multiple="" accept="image/*" />
            <div id="preview"></div>
            <br />
        </div>
    
        <button type="submit" className={`${styles.btn_primary} ${styles.btn}`}>Add</button>
    <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAVAoH79ubwbq_UdX6bhU6Ssvz0_9Mx8cEWBbZWMtp8DXMIpB_sVqijixsBAoNUJatAIXU1BXRjBSmvELbMN1JLxfUAeWFxZHHYbyCIbr0OVcrEn9He0pcvA_rffS_cSZUjy3oPpWdSbKzVlAbK1FJoqrK2fXucijKghNbmmmRl0LA" /><input name="DaAn" type="hidden" value="false" /></form>
    </div>
    </div>
    )
}
export default AddProduct;