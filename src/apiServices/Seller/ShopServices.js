import request from "../../utils/request";

export function GetShopDetail() {
    return request.get(`seller/Shops`)
        .then((res) => {
            return res.data;
        }).catch(() => {
            console.log("error")
            return null;
        })
}