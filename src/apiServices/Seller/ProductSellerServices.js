import request from "../../utils/request";

export function QueryProductCurrentShop({
    keyword = null,
    categoryId = null,
    brandId = null,
    minPrice = null,
    maxPrice = null,
    daAn = null,
    daHet = null,
    pageNumber = 1,
    pageSize = 10 }) {
    return request.get('seller/Products/query', {
        params: {
            keyword: keyword,
            categoryId: categoryId,
            brandId: brandId,
            minPrice: minPrice,
            maxPrice: maxPrice,
            daAn: daAn,
            daHet: daHet,
            pageNumber: pageNumber,
            pageSize: pageSize,
        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function CreateProduct(product, mainImage, additionalImages) {
    const formData = new FormData();
    for (const key in product) {
        if (product[key] !== null && product[key] !== undefined) {
            formData.append(key, product[key]);
        }
    }
    if (mainImage) {
        formData.append("AnhDaiDien", mainImage);
    }
    if (additionalImages && additionalImages.length > 0) {
        additionalImages.forEach((image, index) => {
            formData.append(`listImages`, image);
        });
    }
    return request.post(`seller/Products`, formData)
        .then((res) => {
            return res.data;
        }).catch(() => {
            console.log("error")
            return null;
        })
}
export function HideProduct(productId) {

    return request.delete(`seller/Products/${productId}`)
        .then((res) => {
            return res.data;
        }).catch(() => {
            console.log("error")
            return null;
        })
}

