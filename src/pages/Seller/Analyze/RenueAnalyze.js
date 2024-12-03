function RenueAnalyze() {
    return(
        <section style={{ width: "80%", margin: "auto", }}>
            <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
                <h1>Doanh thu</h1>
                <select style={{ width: "200px" }}>
                    <option value="999">Tất Cả</option>
                    <option value="0">Hôm nay</option>
                    <option value="1">Hôm qua</option>
                    <option value="7">Trong 7 ngày qua</option>
                    <option value="30">Trong 30 ngày qua</option>
                </select>
            </div>
                <h3 style={{color:"red"}} id="txtRevenue"> 0 ₫</h3>

            <div style={{ display: "flex", alignItems: "center", height: "50px"}}>
                <h1 style={{ marginRight: "10px" }}>Biểu Đồ Doanh Thu Theo Ngày</h1>
                <select id="model" style={{width:"200px"}}>
                    <option value="999">Tất Cả</option>
                    <option value="30">Trong 30 ngày qua</option>
                    <option value="365">Trong 365 ngày qua</option>
                </select>
            </div>
        </section>
    )
}
export default RenueAnalyze;