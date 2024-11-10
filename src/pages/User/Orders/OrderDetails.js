import { useEffect, useState } from "react";
import * as OrderService from "../../../apiServices/OrderService";
import { formatCurrency } from "../../../utils/FormatCurrency";
import { useLocation } from "react-router-dom";

function OrderDetails() {
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');
    const [order, setOrder] = useState(null); // Chờ dữ liệu có từ API
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const orderRes = await OrderService.GetOrderById(id);
                setOrder(orderRes);
            } catch (error) {
                console.error("Error fetching order data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <h1>Thông tin đơn hàng</h1>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image" style={{ width: "200px" }}>Ảnh</td>
                                    <td className="description">Tên sản phẩm</td>
                                    <td className="price">Đơn giá</td>
                                    <td className="quantity">Số lượng mua</td>
                                    <td className="total">Thành tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {order.orderDetails.map((orderDetail, index) => {
                                    return <tr key={index}>
                                        <td className="cart_product" style={{ width: "200px" }}>
                                            <a ><img src={`https://localhost:7233${orderDetail.product.anhDaiDien}`} alt="" width="120" height="100" /></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a >{orderDetail.product.tenSp}</a></h4>
                                            <p>Web ID: 232</p>
                                        </td>
                                        <td className="cart_price">
                                            <p>{formatCurrency(orderDetail.price)}</p>
                                        </td>
                                        <td className="cart_price">
                                            <p>x{orderDetail.quantity}</p>
                                        </td>
                                        <td className="cart_total" id="cartTotal">
                                            <p className="cart_total_price" id="totalPrice">{formatCurrency(orderDetail.price * orderDetail.quantity)}</p>
                                        </td>
                                        <td>

                                            {order.orderStatus.orderStatusId >= 5 ?
                                                <>
                                                    {orderDetail.isReview != true ?
                                                        <button onClick={() => { }} id="openModalBtn" type="button" className="btn btn-fefault cart">
                                                            Đánh Giá
                                                        </button>
                                                        : null}

                                                    <button type="button" className="btn btn-fefault cart">
                                                        <a
                                                            style={{ color: "white" }}
                                                            onMouseOver={(e) => (e.currentTarget.style.color = "black")}
                                                            onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                                                        >Mua Lại</a>
                                                    </button>
                                                </>

                                                : null}



                                        </td>

                                    </tr>
                                })}




                            </tbody>
                        </table>
                    </div>
                    <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                        <dl className="row">
                            <dt className="col-sm-3">
                                Thời Gian Đặt:
                            </dt>
                            <dd className="col-sm-9">
                                {order.orderDate}
                            </dd>

                            <dt className="col-sm-3">
                                Địa Chỉ Giao Hàng:
                            </dt>
                            <dd className="col-sm-9">
                                {order.shippingAddress}
                            </dd>
                            <dt className="col-sm-3">
                                Ghi Chú:
                            </dt>
                            <dd className="col-sm-9">
                                {order.notes}
                            </dd>
                            <dt className="col-sm-3">
                                Trạng Thái Đơn Hàng:
                            </dt>
                            <dd className="col-sm-9">
                                {order.orderStatus?.tenTrangThai || 'Loading...'}
                            </dd>
                            <dt className="col-sm-3">
                                Phương Thức Thanh Toán:
                            </dt>
                            <dd className="col-sm-9">
                                {order.payment?.tenLoai || 'Loading...'}
                            </dd>
                            <dt className="col-sm-3">
                                Mã Giảm Giá:
                            </dt>


                            <dd className="col-sm-9">
                                {order.voucher?.phanTramGiam === 0 ? (
                                    "Không có"
                                ) : (
                                    <>
                                        {order.voucher?.voucherCode}: giảm {order.voucher?.phanTramGiam}% tổng đơn hàng
                                        {order.voucher?.donToiThieu > 0 && (
                                            <> , đơn tối thiểu {formatCurrency(order.voucher?.donToiThieu || 0)} </>
                                        )}
                                        {order.voucher?.giamToiDa > 0 && (
                                            <> , giảm tối đa {formatCurrency(order.voucher?.giamToiDa || 0)} </>
                                        )}
                                    </>
                                )}
                            </dd>



                            <dt className="col-sm-3">
                                <h3>Tổng Đơn Hàng:</h3>
                            </dt>
                            <dd className="col-sm-9">
                                <h3>{formatCurrency(order.totalPrice)}</h3>
                            </dd>
                        </dl>

                        <form method="post">
                            <input type="submit" value="Hủy Đơn" onClick={() => { }} className="btn btn-danger" />
                        </form>

                        <form method="post">
                            <input type="submit" value="Yêu cầu trả hàng" onClick={() => { }} className="btn btn-danger" />
                        </form>

                    </div>
                </div>

            </section>
        </>
    );
}

export default OrderDetails;