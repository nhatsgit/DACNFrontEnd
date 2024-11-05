
import { formatCurrency } from '../../../utils/FormatCurrency';
import { Link } from 'react-router-dom';
import { routePaths } from '../../../routes';
function ListProduct({ listProduct, uiSize }) {
    return (
        <>
            {listProduct.map((product, index) => (
                <div key={index} className={`col-sm-${uiSize}`}>
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={`https://localhost:7233${product.anhDaiDien}`} height={200} width={200} alt="" />
                                <p style={{
                                    textAlign: 'right',
                                    color: 'red',
                                    backgroundColor: 'yellow',
                                    display: 'inline'
                                }}>-{product.phanTramGiam}%</p>
                                <h2>{formatCurrency(product.giaBan)}</h2>
                                <p>{product.tenSp}</p>
                                <a href='/' className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Bỏ Vào Giỏ</a>
                                <Link to={routePaths.productDetails} className="btn btn-default add-to-cart"><i className="fa fa-info-circle"></i>Xem Chi Tiết</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListProduct;