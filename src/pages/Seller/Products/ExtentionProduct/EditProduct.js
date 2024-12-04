function EditProduct() {
    return (
        <div>
            <h1 style={{fontSize:"30px"}}>Edit</h1> 
            <h4>Product</h4>
            <hr />
            <form action="/EditProduct" method="post" encType="multipart/form-data">
                <div className="form-group text-danger">
                </div>
                <input type="hidden" name="ProductId"/>
                <div className="form-group">
                    <label htmlFor="TenSp" className="control-label">TenSp</label>
                    <input name="TenSp" className="form-control" />
                    <span className="text-danger"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="MoTa" className="control-label">MoTa</label>
                    <input name="MoTa" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="ThongSo" className="control-label">ThongSo</label>
                    <input name="ThongSo" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="GiaNhap" className="control-label">GiaNhap</label>
                    <input name="GiaNhap" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="GiaBan" className="control-label">GiaBan</label>
                    <input name="GiaBan" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="SoLuongCon" className="control-label">SoLuongCon</label>
                    <input name="SoLuongCon" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="PhanTramGiam" className="control-label">PhanTramGiam</label>
                    <input name="PhanTramGiam" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductCategoryId" className="control-label">ProductCategoryId</label>
                    <select name="ProductCategoryId" className="form-control">
                        <option>
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="BrandId" className="control-label">BrandId</label>
                    <select name="BrandId" className="form-control" >
                        <option>
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="AnhDaiDien">Product Image</label>
                    <input type="file" name="imageUrl" className="form-control" id="imageInput" />
                    <br />
                     <img src="#" style={{ maxWidth: "200px" }} alt="Image preview" />
                </div>
                <div className="form-group">
                <label htmlFor="Images">Image Description</label>
            <button type="button" className="btn btn-secondary" onClick={() => document.getElementById("files").click()} >
                Choose Files
            </button>
            <input type="file" name="files" id="files" multiple accept="image/*" className="form-control" style={{ display: "none" }} />
            <div id="preview">
                    <img src="#" width="200" alt="Preview" />
            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                    <div>
                        <a href="/seller/product" style={{textDecoration:"underline",color:"blue"}}>Back to List</a>
                    </div>
        </div>
    );
}

export default EditProduct;
