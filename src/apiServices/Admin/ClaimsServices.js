import request from "../../utils/request";
export function GetAllUsers() {
    return request.get(`admin/UserClaims`).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function GetSystemClaims() {
    return request.get(`admin/UserClaims/GetSystemClaims`).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function GetSystemRoles() {
    return request.get(`Roles`).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function UpdateUserRoles(username, userRoles) {
    const body = userRoles; // Truyền trực tiếp mảng roles

    return request.post(`admin/UserClaims/AssignRoles?username=${username}`, body)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error("Error updating user roles:", error);
            return null;
        });
}
export function GetUserClaimsDetails(username) {
    return request.get(`admin/UserClaims/UserClaimsDetails?username=${username}`, {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function GetRoleClaimsDetails(roleName) {
    return request.get(`RoleClaims/GetClaims?roleName=${roleName}`, {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function GetUserRoles(username) {
    return request.get(`admin/UserClaims/GetUserRoles?username=${username}`, {
        params: {

        }
    }).then((res) => {
        return res.data;
    }).catch(() => {
        console.log("error")
        return null;
    })
}
export function UpdateUserClaims(username, userClaims) {
    const body = userClaims.map((claim) => ({
        type: claim,
        value: "true",
    }));

    return request.post(`admin/UserClaims/AssignClaims?username=${username}`, body)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error("Error updating user claims:", error);
            return null;
        });
}
export function UpdateRoleClaims(roleName, roleClaims) {
    const body = roleClaims.map((claim) => ({
        type: claim,
        value: "true",
    }));

    return request.post(`RoleClaims/AssignClaims?roleName=${roleName}`, body)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error("Error updating user claims:", error);
            return null;
        });
}