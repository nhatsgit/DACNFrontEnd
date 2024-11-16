import request from "../utils/request";

export function GetShoppingCarts() {
    return request.get('ShoppingCart', {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch((e) => {

        return null;
    })
}
export function GetShoppingCartById(id) {
    return request.get(`ShoppingCart/${id}`, {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function addToCart(productId, quantity) {
    const requestBody = { productId, quantity }
    return request.post(`ShoppingCart/addToCart`, requestBody)
        .then((res) => {
            return res.data;
        }).catch(() => {
            console.log("error")
            return null;
        })
}
export function updateCartItem(productId, quantity) {
    const requestBody = { productId, quantity }
    return request.post(`ShoppingCart/updateCartItem`, requestBody)
        .then((res) => {
            return res.data;
        }).catch((e) => {
            console.log(e)
            return null;
        })
}
export function deleteCartItem(cartItemId) {
    return request.post(`ShoppingCart/deleteItem`, null, {
        params: {
            cartItemId: cartItemId
        }
    })
        .then((res) => {
            return res.data;
        }).catch((e) => {
            console.log(e)
            return null;
        })
}