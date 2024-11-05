import request from "../utils/request"

export function GetRandomProduct() {
    return request.get('Products/suggestionsToday', {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function GetRandom3Product() {
    return request.get('Products/sliderBar', {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
// export function QuerryProduct({
//     keyword = null,
//     categoryId = null,
//     brandId = null,
//     shopId = null,
//     minPrice = null,
//     maxPrice = null,
//     pageNumber = 1,
//     pageSize = 10 }) {
//     return  request.get('Products/query', {
//         params: {
//             keyword: keyword,
//             categoryId: categoryId,
//             brandId: brandId,
//             shopId: shopId,
//             minPrice: minPrice,
//             maxPrice: maxPrice,
//             pageNumber: pageNumber,
//             pageSize: pageSize,
//         }
//     }).then((res) => {
//         return res.data;
//     }).catch(() => {
//         console.log("error")
//         return null;
//     })
// }

