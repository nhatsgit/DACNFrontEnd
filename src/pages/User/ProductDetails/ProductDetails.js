import { useParams } from "react-router-dom";
function ProductDetails() {
    const { query } = useParams();
    return (
        <>
            <div class="product-details">

                <div class="col-sm-5">
                    <div class="view-product">
                        <img src="images/home/react.png" alt="" />
                    </div>
                    <div id="similar-product" class="carousel slide" data-ride="carousel">


                        <div class="carousel-inner">
                            {/* @for (int j = 0; j < ViewBag.productImages.Count; j += 3)
                            {
                                @if (first == true)
                            {
                                <div class="item active">
                                    @for (int i = 0; i < ViewBag.productImages.Count; i++)
                                    {
                                if (i != (j + 3))
                                    {
                                        <a href=""><img src="@ViewBag.productImages[i].Url" width="125" height="125" alt=""></a>
                                    }
                                    else
                                    {
                                        first = false;
                                    break;
                                }
                            }
                                </div>
                            }
                            else
                            {
                                <div class="item">
                                    @for (int i = j; i < ViewBag.productImages.Count; i++)
                                    {
                                if (i != (j + 3))
                                    {
                                        <a href=""><img src="@ViewBag.productImages[i].Url" width="125" height="125" alt=""></a>
                                    }
                                    else
                                    {
                                        first = false;
                                    break;
                                }
                            }
                                </div>
                            }
                } */}
                        </div>

                        <a class="left item-control" href="#similar-product" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="right item-control" href="#similar-product" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>

                </div>
                <div class="col-sm-7">
                    <div class="product-information">

                        <h2>TenSp</h2>
                        <p>Web ID:ProductId</p>
                        <p style={{ textDecoration: "line-through" }}>Giá Gốc</p>
                        <span>
                            <span> Giá:77777</span>
                            {
                                () => {
                                    if (true) {
                                        <form asp-controller="ShoppingCart" asp-action="AddToCart" asp-route-productId="ProductId">
                                            <input id="txtQuantity" onchange="updateCount()" type="number" min="1" value="@count" oninput="removeNegative()" name="quantity" />
                                            <button type="submit" class="btn btn-fefault cart">
                                                <a style={{ color: "white" }} onmouseover="this.style.color='black'" onmouseout="this.style.color='white'"><i class="fa fa-shopping-cart"></i>Bỏ vào giỏ</a>
                                            </button>
                                        </form>
                                    }
                                }
                            }
                        </span>
                        {
                            () => {
                                if (true) {
                                    <p><b>Số lượng còn:</b> SoLuongCon</p>
                                }
                                else {
                                    <p><b style={{ color: "red" }}>------------Đã hết hàng-----------</b></p>
                                }
                            }
                        }
                        <p><b>Mô tả:</b> Mota</p>
                        <p><b>Thông số:</b> ThongSo</p>
                        <p><b>Hãng:</b> TenNhanHieu</p>
                        <p><b>Loại:</b> TenLoai</p>
                        <a href=""><img src="../myLayout/images/product-details/share.png" class="share img-responsive" alt="" /></a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ProductDetails;