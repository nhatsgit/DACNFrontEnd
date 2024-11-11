function AddProduct() {
    return(
    <section style={{textAlign:"left"}}>
        <input style={{width:"20px",height:"20px"}} type="radio" name="formSelector" value="form1" checked /> Thêm thủ công
        <input style={{width:"20px",height:"20px"}} type="radio" name="formSelector" value="form2" /> Thêm tự động
        <br />
        <h2 style={{fontSize:"xx-large"}}>Thêm Sản Phẩm</h2>
    <form id="form1">
        <div className="form-group" style={{height:"60px"}}>
            <label for="Tensp" className="control-label" style={{fontSize:"large"}}>Tensp</label>
            <input  className="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="MoTa" className="control-label" style={{fontSize:"large"}}>MoTa</label>
            <input className="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="ThongSo" className="control-label" style={{fontSize:"large"}}>ThongSo</label>
            <input lass="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="GiaNhap" className="control-label" style={{fontSize:"large"}}>GiaNhap</label>
            <input className="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="GiaBan" className="control-label" style={{fontSize:"large"}}>GiaBan</label>
            <input className="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="SoLuongCon" className="control-label" style={{fontSize:"large"}}>SoLuongCon</label>
            <input className="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{display:"none"}}>
            <label for="checkbox" style={{fontSize:"large"}}>checkbox</label>
            <input type="checkbox" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="PhanTramGiam" className="control-label" style={{fontSize:"large"}}>PhanTramGiam</label>
            <input className="form-control" style={{display:"block", padding:"5px",width:"50%"}}/>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="ProductCategoryId" className="control-label" style={{fontSize:"large"}}>ProductCategoryId</label>
            <select className="form-control" asp-items="ViewBag.ProductCategoryId" style={{display:"block", padding:"5px",width:"50%"}}></select>
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="BrandId" className="control-label" style={{fontSize:"large"}}>BrandId</label>
            <select className="form-control" asp-items="ViewBag.BrandId" style={{display:"block", padding:"5px",width:"50%"}}></select>
        </div>
        <div className="form-group" style={{display:"none"}}>
            <label for="" className="control-label"></label>
            <input className="form-control" value="@ViewBag.ShopId" style={{display:"block", padding:"5px",width:"50%"}}/>

        </div>

        <div className="form-group" style={{height:"60px"}}>
            <label for="AnhDaiDien" style={{fontSize:"large"}}>Product Image</label>
            <input type="file" asp-for="AnhDaiDien" name="imageUrl" className="form-control" id="imageInput"style={{display:"block", padding:"5px",width:"50%", border:"1px solid #868b91"}}/>
            <br />
{/* <img src="" id="previewImage" style={{maxWidth:"200px",display:"none"}} alt="Image preview" /> */}
        </div>
        <div className="form-group" style={{height:"60px"}}>
            <label for="Images" style={{fontSize:"large"}}>Product Image</label>
            <input type="file" asp-for="Images" id="files" name="files" multiple accept="image/*" style={{display:"block", padding:"5px",width:"50%"}}/>
            <div id="preview"></div>
            <br />
        </div>

        <button type="submit" className="btn btn-primary" style={{padding:"10px",backgroundColor:"#0d6efd",border:"none", width:"70px"}}><a href="" style={{color:"white"}}>Add</a></button>
    </form>
    </section>)
}
export default AddProduct;