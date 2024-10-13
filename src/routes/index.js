import Home from '../pages/User/Home/Home';
import ProductDetails from '../pages/User/ProductDetails/ProductDetails';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

import AuthLayout from '../component/Layout/Auth/AuthLayout';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/productdetails', component: ProductDetails },
    { path: '/register', component: Register, layout: null },
    { path: '/login', component: Login, layout: AuthLayout }
]
const privateRoutes = {

}
export { publicRoutes, privateRoutes }