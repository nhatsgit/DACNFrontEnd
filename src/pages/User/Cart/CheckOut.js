import { useEffect, useState } from "react";
import * as ShopingCartService from "../../../apiServices/ShopingCartService";
import { useLocation } from "react-router-dom";
import { FormatCurrency } from "../../../utils/FormatCurrency";
import { CaculateDiscountPrice } from "../../../utils/CaculateDiscountPrice";
function CheckOut() {
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');
    const [cart, setCart] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const res = await ShopingCartService.GetShoppingCartById(id);
                const totalAmount = res.cartItems.reduce((acc, item) => {
                    return acc + item.quantity * CaculateDiscountPrice(item.product.giaBan, item.product.phanTramGiam)
                }, 0);
                setCart({ ...res, totalAmount });
            } catch (error) {
                console.error("Error fetching order data:", error);
            } finally {
                setLoading(false);
            }
        }
        FetchProduct()
    }, []);
    if (loading) {
        return <div>Đang tải...</div>;
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 padding-right" style={{ textAlign: "left" }}>
                            <form method="post">

                                <h2>Điền thông tin đơn hàng{cart.shoppingCartId}</h2>
                                <div style={{ paddingLeft: "1em" }}>
                                    <div className="form-group">
                                        <label className="control-label"><strong>Địa chỉ</strong></label><br />
                                        <input className="form-control" name="address" id="address" type="text" style={{ width: "500px", display: "none" }} />
                                        <textarea id="currentAddress" className="form-control" value="myaddress" readOnly></textarea>
                                        <div id="popup" style={{ display: "none" }} className="form-group">
                                            <div style={{ display: "inline-block" }}>
                                                <select id="province" name="province"  >
                                                </select>
                                            </div>
                                            <div style={{ display: "inline-block" }}>
                                                <select id="district" name="district"  >
                                                    <option value="">Chọn quận/huyện</option>
                                                </select>
                                            </div>
                                            <div style={{ display: "inline-block" }}>
                                                <select id="ward" name="ward"  >
                                                    <option value="">Chọn xã/phường</option>
                                                </select>
                                            </div>
                                            <input id="specificAddress" name="specificAddress" placeholder="Địa chỉ cụ thể" />
                                            <button type="button" id="btnclose" onClick="closepopup()">Hủy</button>

                                        </div>
                                        <button type="button" id="btnpopup" onClick="openpopup()">Chọn địa chỉ khác</button>
                                    </div>


                                    <div className="form-group">
                                        <label >Ghi Chú</label>
                                        <input className="form-control" value="Đặt hàng" />
                                    </div>
                                </div>

                                <section id="cart_items">
                                    <label style={{ paddingLeft: "1em" }}>Chi tiết đơn hàng</label>

                                    <div className="container">
                                        <div className="breadcrumbs">
                                        </div>

                                        <div className="table-responsive cart_info">
                                            <table className="table table-condensed">
                                                <thead>
                                                    <tr className="cart_menu">
                                                        <td className="image" style={{ width: "200px" }}>Ảnh</td>
                                                        <td className="description">Tên sản phẩm</td>
                                                        <td className="price">Đơn Giá</td>
                                                        <td className="quantity">Số Lượng</td>
                                                        <td className="total">Thành Tiền</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        cart.cartItems.map((cartItem, index) => {
                                                            return <tr key={index}>
                                                                <td className="cart_product" style={{ width: "200px" }}>
                                                                    <a ><img src={`https://localhost:7233${cartItem.product.anhDaiDien}`} alt="" width={120} height={100} /></a>
                                                                </td>
                                                                <td className="cart_description">
                                                                    <h4><a >{cartItem.product.tenSp}</a></h4>
                                                                    <p>Web ID: {cartItem.product.productId}</p>
                                                                </td>
                                                                <td className="cart_price">
                                                                    <p>{FormatCurrency(CaculateDiscountPrice(cartItem.product.giaBan, cartItem.product.phanTramGiam))}</p>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <div className="form-group">
                                                                            <input id="txtQuantity_@item.ProductId" onChange={() => { }} type="number" min="1" name="txtQuantity" value={cartItem.quantity} style={{ width: "100px" }} onInput={() => { }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="cart_total" id="cartTotal">
                                                                    <p className="cart_total_price" id="totalPrice">{FormatCurrency(cartItem.quantity * CaculateDiscountPrice(cartItem.product.giaBan, cartItem.product.phanTramGiam))}</p>
                                                                </td>

                                                            </tr>
                                                        })
                                                    }

                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </section>
                                <div style={{ paddingLeft: "1em" }}>
                                    <label>Chi tiết thanh toán</label>
                                    <p>Tổng đơn hàng: {FormatCurrency(cart.totalAmount)}</p>
                                    <p id="percentDiscount">Giảm giá đơn hàng: 0 ₫</p>
                                    <h3 style={{ color: "red" }} id="totalOrderPrice">Tổng thanh toán: 99999</h3>
                                    <div className="form-group">
                                        <label className="control-label">Chọn phương thức thanh toán</label>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" value="@item.Value" id="payment_@item.Value" required />
                                            <label className="form-check-label" >online</label>
                                            <input className="form-check-input" type="radio" value="@item.Value" id="payment_@item.Value" required />
                                            <label className="form-check-label" >cod</label>
                                        </div>


                                    </div>
                                    <input type="submit" value="Đặt Hàng" className="btn btn-primary" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default CheckOut;