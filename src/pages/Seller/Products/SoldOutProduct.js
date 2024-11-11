function SoldOutProduc() {
    return(<>
        <h1>Sản phẩm hết hàng</h1>


<table className="table" style={{margin:"auto"}}>
        <thead>
            <tr>
                <th style={{paddingLeft:"20px"}}>
                    TenSp
                </th>
                <th style={{paddingLeft:"20px"}}>
                    AnhDaiDien
                </th>           
                <th style={{paddingLeft:"20px"}}>
                    GiaNhap
                </th>
                <th style={{paddingLeft:"20px"}}>
                    GiaBan
                </th>
                <th style={{paddingLeft:"20px"}}>
                    SoLuongCon
                </th>
                <th style={{paddingLeft:"20px"}}>
                    PhanTramGiam
                </th>
                <th></th>
            </tr>
        </thead>
<tbody>
    <tr>
        <td style={{paddingLeft:"20px"}}>
        May tinh                
        </td>
        <td style={{paddingLeft:"20px"}}>
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510531ld.jpg" width={100} />
        </td>
        <td style={{paddingLeft:"20px"}} >
        300.000
        </td >
        <td style={{paddingLeft:"20px"}}>
        700.000                
        </td >
        <td  style={{paddingLeft:"20px"}}>
        10                
        </td>
        <td  style={{paddingLeft:"20px"}}>
        30%                
        </td>
        <td  style={{paddingLeft:"20px"}}>
            <button type="button" class="btn btn-primary" style={{backgroundColor:"blue",border:"none", padding:"10px",marginLeft:"5px"}}>
                <a href="EditProduct" style={{color:"white"}}>Chỉnh Sửa</a>
            </button>
            <button type="button" class="btn btn-info" style={{backgroundColor:"#25cff2",border:"none", padding:"10px",marginLeft:"5px"}}>
                <a href="Details" style={{color:"white"}}>Chi Tiết</a>
            </button>
        </td>
    </tr>
</tbody>
</table>
    </>)
}
export default SoldOutProduc;