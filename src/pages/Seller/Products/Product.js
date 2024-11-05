function Products() {
  return (
    <>
      <div className="main-content">
            <h1>Tất cả sản phẩm</h1>
            
            <div className="col-sm-8">
                <form id="search-form" className="dropdown" >
                    <input type="text" name="query" id="searchInput" style={{width: "400px",height:"45px"}} placeholder="Tìm kiếm sản phẩm..." />
                    <button style={{width: "100px",height:"50px", backgroundColor: "cornflowerblue", color: "white",border: "none", padding:"10px"}} type="submit" value="search">Tìm Kiếm</button>
                </form>
            </div>
            
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
                            <td>
                                Laptop
                            </td>
                            <td>
                                <img src="https://tse3.mm.bing.net/th?id=OIP.qoOM5k0Wfndz00RYSV6a7QHaHa&pid=Api&P=0&h=180" width="100" />
                            </td>
                            <td>
                                1.000.000 ₫
            
                            </td>
                            <td>
                                200.000 ₫
                            </td>
                            <td>
                                199
                            </td>
                            <td>
                                9
                            </td>
                            <td>
                                <button type="button" style={{backgroundColor:"red",border:"none", padding:"10px",marginLeft:"5px"}}>
                                    <a style={{color:"white"}} href="/Seller/Products/DeleteProduct/236">Ẩn</a>
                                </button>
                                <button type="button" style={{backgroundColor:"blue",border:"none", padding:"10px",marginLeft:"5px"}}>
                                    <a style={{color:"white"}} href="/Seller/Products/EditProduct/236">Chỉnh Sửa</a>
                                </button>
                                <button type="button" style={{backgroundColor:"#25cff2",border:"none", padding:"10px",marginLeft:"5px"}}>
                                    <a style={{color:"white"}} href="/Seller/Products/Details/236">Chi Tiết</a>
                                </button>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Laptop
                            </td>
                            <td>
                                <img src="https://tse3.mm.bing.net/th?id=OIP.qoOM5k0Wfndz00RYSV6a7QHaHa&pid=Api&P=0&h=180" width="100" />
                            </td>
                            <td>
                                1.000.000 ₫
            
                            </td>
                            <td>
                                200.000 ₫
                            </td>
                            <td>
                                199
                            </td>
                            <td>
                                9
                            </td>
                            <td>
                                <button type="button" style={{backgroundColor:"red",border:"none", padding:"10px",marginLeft:"5px"}}>
                                    <a style={{color:"white"}} href="/Seller/Products/DeleteProduct/236">Ẩn</a>
                                </button>
                                <button type="button" style={{backgroundColor:"blue",border:"none", padding:"10px",marginLeft:"5px"}}>
                                    <a style={{color:"white"}} href="/Seller/Products/EditProduct/236">Chỉnh Sửa</a>
                                </button>
                                <button type="button" style={{backgroundColor:"#25cff2",border:"none", padding:"10px",marginLeft:"5px"}}>
                                    <a style={{color:"white"}} href="/Seller/Products/Details/236">Chi Tiết</a>
                                </button>
                                
                            </td>
                        </tr>
                </tbody>
            </table>
            <div align="center">
                <div className="pagination-container"><span style={{color:"#2000ff"}}>1</span></div>
            </div>
        </div>
    </>
 );
}

export default Products;
