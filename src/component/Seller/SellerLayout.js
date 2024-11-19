import { Link } from "react-router-dom";
function SellerLayout({ children }) {
    return (
        <>
            <h1>SellerLayout</h1>
            <Link to={'/'}>Về trang chủ</Link>
            <hr></hr>
            {children}

        </>
    );
}

export default SellerLayout;