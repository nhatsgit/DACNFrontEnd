function CanceledOrder() {
    return(<section>
        <h1 style={{textAlign:"center"}}>Đơn hàng đã hủy</h1>
        <section>
        <div className="container sum" style={{width: "80%",margin:" 0 auto",padding: "1rem",border:" 1px solid #333", }}>
        <strong>Ngày đặt: 04/11/2024 11:57</strong>
        <div className="second p-3" style={{display: "flex", justifyContent: "space-between", alignItems: "center",padding: "1rem",borderTop:" 1px solid #333", }} >
        <div className="images">
        <img src="https://tse2.mm.bing.net/th?id=OIP.vTQtiWGIyZk58E-tZ_AkEwHaFs&pid=Api&P=0&h=180" alt="" width={120} height={100} />
        <h4 style={{ display: "inline-block", marginLeft: "10px" }}>
        Asus
        <span style={{display: "block",}}>x1</span>
        </h4>
        </div>
                <div className="text-right">
                <h4 className="text-dark">182.000 ₫</h4>
                </div>
        </div>
        <div className="row third p-3" style={{display: "flex", justifyContent: "space-between", alignItems: "center",padding: "1rem",borderTop:" 1px solid #333", }}>
        <div>
            <h3 style={{color: "red"}}>Đã hủy đơn</h3>
        </div>
        <div className="col-md-6 text-right">
            <h3 style={{color: "red"}}><span>Thành tiền:</span> 182.000 ₫</h3>
            <button style={{background:"#0b5ed7", border:"none" ,padding:"10px"}}>
            <a style={{color: "white"}} href="/Seller/Orders/OrderDetails?ma=1">Xem chi tiết</a>
            </button>
        </div>
        </div>
        </div>
        </section>
        <div className="center" style={{display: "flex", justifyContent: "center",  height: "150%",}}>
        <div className="pagination-container"><span>1</span></div>
        </div>
    </section>)
};
export default CanceledOrder;