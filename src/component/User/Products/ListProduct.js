import { useEffect, useState } from 'react';
import { formatCurrency } from '../../../utils/FormatCurrency';
import { Link } from 'react-router-dom';
import { routePaths } from '../../../routes';
function ListProduct({ size, uiSize }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // Đường dẫn API giả lập
            if (!response.ok) {
                throw new Error('Lỗi khi tải sản phẩm');
            }
            const data = await response.json();
            setProducts(data.slice(0, size));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    });

    if (loading) {
        return <p>Đang tải sản phẩm...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }
    return (
        <>
            {products.map(product => (
                <div key={product.id} className={`col-sm-${uiSize}`}>
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={product.thumbnailUrl} height={200} width={200} alt="" />
                                <p style={{
                                    textAlign: 'right',
                                    color: 'red',
                                    backgroundColor: 'yellow',
                                    display: 'inline'
                                }}>-{product.id * 7}%</p>
                                <h2>{formatCurrency(product.id * 7000)}</h2>
                                <p>{product.title}</p>
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