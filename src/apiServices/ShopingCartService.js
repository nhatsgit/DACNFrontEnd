import request from "../utils/request";

export function GetShoppingCart() {
    return request.get('ShoppingCart', {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch((e) => {

        return null;
    })
}