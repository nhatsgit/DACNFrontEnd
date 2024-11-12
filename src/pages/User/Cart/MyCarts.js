import { useEffect, useState } from "react";
import * as ShopingCartService from "../../../apiServices/ShopingCartService";
import { FormatCurrency } from "../../../utils/FormatCurrency";
import { routePaths } from "../../../routes";
import { CaculateDiscountPrice } from "../../../utils/CaculateDiscountPrice";
import { Link } from "react-router-dom";
function MyCarts() {
    const [myCarts, setMyCarts] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchApi = async () => {

            try {
                const cartData = await ShopingCartService.GetShoppingCarts();
                const cartsWithTotal = cartData.map(cart => {
                    const totalAmount = cart.cartItems.reduce((acc, item) => {
                        return acc + item.quantity * CaculateDiscountPrice(item.product.giaBan, item.product.phanTramGiam)
                    }, 0);
                    return { ...cart, totalAmount };
                });

                setMyCarts(cartsWithTotal);


            } catch (e) {

            } finally {
                setLoading(false)
            }
        }
        FetchApi();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="breadcrumbs">
                <ol className="breadcrumb">
                    <h1>Giỏ Hàng Của Tôi</h1>
                </ol>
            </div>

            <section id="cart_items" >
                {
                    myCarts.map((cart, index) => {
                        return <div className="container" key={index}>
                            <div style={{ textAlign: "left" }}>
                                <strong style={{ paddingLeft: "20px", color: "red" }}>{cart.shop.tenCuaHang}</strong>
                                <button type="button" style={{ backgroundColor: "transparent", border: "2px solid red" }}><a style={{ color: "orangered" }}>Xem Shop</a></button>
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
                                                    <td className="cart_delete">
                                                        <a className="cart_quantity_delete" ><i className="fa fa-times"></i></a>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>

                            <h1 style={{ textAlign: "right", color: "red" }}>Tổng đơn hàng: {FormatCurrency(cart.totalAmount)}</h1>


                            <div style={{ textAlign: "right" }}>
                                <p>
                                    <button type="button" className="btn btn-fefault cart">
                                        <Link to={`${routePaths.checkout}?id=${cart.shoppingCartId}`} style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = 'black'}
                                            onMouseOut={(e) => e.target.style.color = 'white'}>Đặt hàng</Link>
                                    </button>
                                </p>
                            </div>
                        </div>
                    })
                }

            </section>
        </>
    );
}

export default MyCarts;