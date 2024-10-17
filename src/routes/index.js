import Home from '../pages/User/Home/Home';
import ProductDetails from '../pages/User/ProductDetails/ProductDetails';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import Search from '../pages/User/Search/Search';

import AuthLayout from '../component/Auth/AuthLayout';
const routePaths = {
    home: '/',
    productDetails: '/productDetails',
    register: '/register',
    login: '/login',
    search: '/search',
}
const publicRoutes = [
    { path: routePaths.home, component: Home },
    { path: routePaths.productDetails, component: ProductDetails },
    { path: routePaths.register, component: Register, layout: null },
    { path: routePaths.login, component: Login, layout: AuthLayout },
    { path: routePaths.search, component: Search },
]
const privateRoutes = [

]

export { publicRoutes, privateRoutes, routePaths }