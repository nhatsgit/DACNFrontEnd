import request from "../utils/request"

export function LoginRequest(userName, password) {
    const requestBody = { userName, password }
    return request.post('Account/login', requestBody)
        .then((res) => {
            return res.data;
        }).catch((e) => {
            console.log(e)
            return null;
        })
}
export function GetMyInfo() {
    return request.get(`Account/me`)
        .then((res) => {
            return res.data;
        }).catch(() => {
            console.log("error")
            return null;
        })
}
