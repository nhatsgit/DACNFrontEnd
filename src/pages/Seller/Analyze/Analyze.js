function Analyze() {
    return (<>
        <div className="order-filter" style={{display: "flex", alignItems: "center"}}>
        <h1 style={{marginRight: "10px"}}>Số đơn hàng</h1>
        <select id="orders1" style={{marginLight: "10px"}}>
            <option value="1">Tất Cả</option>
            <option value="2">Hôm nay</option>
            <option value="3">Hôm qua</option>
            <option value="4">Trong 7 ngày qua</option>
            <option value="5">Trong 30 ngày qua</option>
        </select>
        </div>

        <div style={{textAlign:"left"}}>
        <p>Tổng số: <span id="txtOrder1" style={{color:"red"}}>1</span></p>
        <p>Chờ xác nhận: <span id="txtOrder2" style={{color:"red"}}>1</span></p>
        <p>Đã thanh toán: <span id="txtOrder3" style={{color:"red"}}>1</span></p>
        </div>

        <div style={{display: "flex", alignItems: "center"}}>
        <h1 style={{marginRight: "10px"}}>Biểu Đồ Số Đơn Hàng Theo Ngày</h1>
        <select id="orderChartSelect">
            <option value="1">Tất Cả</option>
            <option value="2">Trong 30 ngày qua</option>
            <option value="3">Trong 365 ngày qua</option>
        </select>
        </div>
    </>);
}

export default Analyze;