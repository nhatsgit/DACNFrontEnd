import request from "../utils/request"

export function GetMyOrders(currentPage) {
    return request.get('Orders', {
        params: {
            pageNumber: currentPage,
            pageSize: 5
        }
    }).then((res) => {

        return res.data;
    }).catch((e) => {

        return null;
    })
}
export function GetOrderById(id) {
    return request.get(`Orders/${id}`)
        .then((res) => {
            return res.data;
        }).catch((e) => {
            return null;
        })
}
