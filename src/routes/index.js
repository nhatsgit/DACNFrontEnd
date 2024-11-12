import Home from '../pages/User/Home/Home';
import ProductDetails from '../pages/User/Product/ProductDetails';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Search from '../pages/User/Product/Search';
import MyCarts from '../pages/User/Cart/MyCarts';
import MyOrders from '../pages/User/Orders/MyOrders';
import Shop from '../pages/User/Shop/Shop';
import OrderDetails from '../pages/User/Orders/OrderDetails';
import CheckOut from '../pages/User/Cart/CheckOut';
import Products from '../pages/Seller/Product';
import Staff from '../pages/Seller/Staff';
import Orders from '../pages/Seller/Orders';
import Test from '../pages/Seller/Test';
import Analyze from '../pages/Seller/Analyze';
import AuthLayout from '../component/Auth/AuthLayout';
import SellerLayout from '../component/Seller/SellerLayout';
const routePaths = {
    home: '/',
    productDetails: '/productDetails',
    register: '/register',
    login: '/login',
    search: '/search',
    mycarts: '/mycarts',
    myorders: '/myorders',
    shop: '/shop',
    orderdetails: '/orderdetails',

    checkout: '/checkout',
    // seller
    orders: '/seller/orders',
    products: '/seller/products',
    staff: '/seller/staff',
    test: '/seller/test',
    analyze: '/seller/analyze',
}
const publicRoutes = [
    { path: routePaths.home, component: Home },
    { path: routePaths.productDetails, component: ProductDetails },
    { path: routePaths.register, component: Register, layout: null },
    { path: routePaths.login, component: Login, layout: AuthLayout },
    { path: routePaths.search, component: Search },
    { path: routePaths.mycarts, component: MyCarts },
    { path: routePaths.myorders, component: MyOrders },
    { path: routePaths.shop, component: Shop },
    { path: routePaths.orderdetails, component: OrderDetails },
    { path: routePaths.checkout, component: CheckOut },
    { path: routePaths.orders, component: Orders, layout: null },
    { path: routePaths.products, component: Products, layout: null },
    { path: routePaths.staff, component: Staff, layout: null },
    { path: routePaths.test, component: Test, layout: null },
    { path: routePaths.analyze, component: Analyze, layout: null },

]
const privateRoutes = [

]

export { publicRoutes, privateRoutes, routePaths }