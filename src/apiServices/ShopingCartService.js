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