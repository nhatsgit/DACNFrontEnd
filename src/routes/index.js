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
import Products from '../pages/Seller/Products/Product';
import Staff from '../pages/Seller/Staff/Staff';
import Orders from '../pages/Seller/Orders/Orders';
// import Test from '../pages/Seller/Test';
import Analyze from '../pages/Seller/Analyze/Analyze';
import ProductByCategory from '../pages/User/Product/ProductByCategory';
import AuthLayout from '../component/Auth/AuthLayout';
import Account from '../pages/Auth/Account';
import SellerLayout from '../component/Seller/SellerLayout';

import{CanceledOrder,DeliveredOrder,OrderNotConfirm,RequestReturnedOrder,
    AddProduct,HiddenProduct,SoldOutProduct,ReturnedOrder,
    AddStaff}from '../pages/Seller/index';
const routePaths = {
    home: '/',
    productDetails: '/productDetails',
    register: '/register',
    login: '/login',
    account: '/account',
    search: '/search',
    mycarts: '/mycarts',
    myorders: '/myorders',
    shop: '/shop',
    category: '/category',
    orderdetails: '/orderdetails',
    checkout: '/checkout',
    /////// Seller ////////
    //Product
    products: '/seller/products',
    hidden:'/seller/hidden',
    out_of_stock:'/seller/out_of_stock',
    add:'/seller/add',

    //Order
    orders: '/seller/orders',
    all:'/seller/orders/all',
    pending:'/seller/orders/pending',
    delivered:'/seller/orders/delivered',
    cancalled:'/seller/orders/cancalled',
    return_requested:'/seller/orders/return_requested',
    returned:'/seller/orders/returned',
    
    //Staff
    staff: '/seller/staff',
    addstaff: '/seller/addstaff',

    analyze: '/seller/analyze',
    // test: '/seller/test',
}
const publicRoutes = [
    { path: routePaths.home, component: Home },
    { path: routePaths.productDetails, component: ProductDetails },
    { path: routePaths.register, component: Register, layout: AuthLayout },
    { path: routePaths.login, component: Login, layout: AuthLayout },
    { path: routePaths.account, component: Account, layout: AuthLayout },
    { path: routePaths.search, component: Search },
    { path: routePaths.mycarts, component: MyCarts },
    { path: routePaths.myorders, component: MyOrders },
    { path: routePaths.shop, component: Shop },
    { path: routePaths.orderdetails, component: OrderDetails },
    { path: routePaths.checkout, component: CheckOut },
    // { path: routePaths.test, component: Test, layout: SellerLayout },
    //Product
    { path: routePaths.products, component: Products, layout: SellerLayout },
    { path: routePaths.hidden, component: HiddenProduct, layout: SellerLayout },
    { path: routePaths.out_of_stock, component:SoldOutProduct , layout: SellerLayout },
    { path: routePaths.add, component: AddProduct, layout: SellerLayout },

    //Order
    { path: routePaths.orders, component: Orders, layout: SellerLayout },
    { path: routePaths.pending, component: OrderNotConfirm, layout: SellerLayout },
    { path: routePaths.cancalled, component: CanceledOrder, layout: SellerLayout },
    { path: routePaths.delivered, component: DeliveredOrder, layout: SellerLayout },
    { path: routePaths.return_requested, component: RequestReturnedOrder, layout: SellerLayout },
    { path: routePaths.returned, component: ReturnedOrder, layout: SellerLayout },

    { path: routePaths.staff, component: Staff, layout: SellerLayout },
    { path: routePaths.addstaff, component: AddStaff, layout: SellerLayout },
    { path: routePaths.analyze, component: Analyze, layout: SellerLayout },
    { path: routePaths.category, component: ProductByCategory },

]
const privateRoutes = [

]

export { publicRoutes, privateRoutes, routePaths }