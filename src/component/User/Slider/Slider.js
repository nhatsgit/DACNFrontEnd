import React, { useEffect, useState } from 'react';
function Slider() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // Đường dẫn API giả lập
                if (!response.ok) {
                    throw new Error('Lỗi khi tải sản phẩm');
                }
                const data = await response.json();
                setProducts(data.slice(0, 3));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Đang tải sản phẩm...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }
    return (
        <>
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className=""></li>
                                    <li data-target="#slider-carousel" data-slide-to="1" className=""></li>
                                    <li data-target="#slider-carousel" data-slide-to="2" className="active"></li>
                                </ol>

                                <div className="carousel-inner">
                                    {products.map((product, index) => (
                                        <div key={product.id} className={index === products.length - 1 ? 'item active' : 'item'}>
                                            <div className="col-sm-6">
                                                <h1><span>R</span>-EACTJS</h1>
                                                <h2>nAmE</h2>
                                                <p>{product.title}</p>
                                                <button type="button" className="btn btn-default get">Get it now</button>
                                            </div>
                                            <div className="col-sm-6">
                                                <img src={product.thumbnailUrl} width={441} className="girl img-responsive" alt="" />
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <a href="a.com" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="a.com" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;