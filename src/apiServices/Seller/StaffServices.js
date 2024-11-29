import request from "../../utils/request";

export function GetStaff() {
    return request.get('seller/Staff')
        .then((res) => {

            return res.data;
        }).catch((e) => {

            return null;
        })
}
export function CreateStaff(staff) {
    return request.post('seller/Staff', staff)
        .then((res) => {

            return res.data;
        }).catch((e) => {

            return null;
        })
}