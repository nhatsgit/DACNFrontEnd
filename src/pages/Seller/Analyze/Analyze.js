import { useEffect, useState } from "react";
import { GetOrderAnalyze, GetOrderChartData } from "../../../apiServices/Seller/AnalyzeServices";
import styles from "../Seller.module.css"
import LineChart from "../../../component/Context/Chart/LineChart";
function Analyze() {
    const [data, setData] = useState({});
    const [chartData, setChartData] = useState({});
    const [orderMode, setOrderMode] = useState(999);
    const [chartMode, setChartMode] = useState(999);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const res = await GetOrderAnalyze(orderMode);
                setData(res)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        }
        fetchApi();
    }, [orderMode]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const res = await GetOrderChartData(chartMode);
                setChartData(res)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        }
        fetchApi();
    }, [chartMode]);
    if (!data) {
        return <div>Đang tải...</div>;
    }
    if (loading) {
        return <div>Đang cập nhật dữ liệu...</div>;
    }
    return (
        // <section>
        //     <div className="order-filter" style={{display: "flex", alignItems: "center"}}>
        //     <h1 style={{marginRight: "10px"}}>Số đơn hàng</h1>
        //     <select id="orders1" style={{marginLight: "10px"}}>
        //         <option value="1">Tất Cả</option>
        //         <option value="2">Hôm nay</option>
        //         <option value="3">Hôm qua</option>
        //         <option value="4">Trong 7 ngày qua</option>
        //         <option value="5">Trong 30 ngày qua</option>
        //     </select>
        //     </div>

        //     <div style={{textAlign:"left"}}>
        //     <p>Tổng số: <span id="txtOrder1" style={{color:"red"}}>1</span></p>
        //     <p>Chờ xác nhận: <span id="txtOrder2" style={{color:"red"}}>1</span></p>
        //     <p>Đã thanh toán: <span id="txtOrder3" style={{color:"red"}}>1</span></p>
        //     </div>

        //     <div style={{display: "flex", alignItems: "center"}}>
        //     <h1 style={{marginRight: "10px"}}>Biểu Đồ Số Đơn Hàng Theo Ngày</h1>
        //     <select id="orderChartSelect">
        //         <option value="1">Tất Cả</option>
        //         <option value="2">Trong 30 ngày qua</option>
        //         <option value="3">Trong 365 ngày qua</option>
        //     </select>
        //     </div>
        // </section>


        <section style={{ width: "80%", margin: "auto", }}>
            <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
                <h1>Đơn hàng của shop</h1>
                <select style={{ width: "200px" }} value={orderMode} onChange={(e) => { setOrderMode(e.target.value) }}>
                    <option value="999">Tất Cả</option>
                    <option value="0">Hôm nay</option>
                    <option value="1">Hôm qua</option>
                    <option value="7">Trong 7 ngày qua</option>
                    <option value="30">Trong 30 ngày qua</option>
                </select>
            </div>

            <div>
                <h1 style={{ marginRight: "10px" }}>Số đơn hàng</h1>
                <p>Tổng số: <span id="txtOrder1" style={{ color: "red" }}>{data.tongDon}</span></p>
                <p>Chờ xác nhận: <span id="txtOrder2" style={{ color: "red" }}>{data.donChoXacNhan}</span></p>
                <p>Đã thanh toán: <span id="txtOrder3" style={{ color: "red" }}>{data.donDaThanhToan}</span></p>
            </div>

            <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
                <h1 style={{ marginRight: "10px" }}>Biểu Đồ Số Đơn Hàng Theo Ngày</h1>
                <select id="orderChartSelect" style={{ width: "200px" }} value={chartMode} onChange={(e) => { setChartMode(e.target.value) }}>
                    <option value="999">Tất Cả</option>
                    <option value="30">Trong 30 ngày qua</option>
                    <option value="365">Trong 365 ngày qua</option>
                </select>
            </div>

            {data ? <LineChart data={chartData} /> : <></>}

        </section>
    );
}

export default Analyze;