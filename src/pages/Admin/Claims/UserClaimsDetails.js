import { useLocation } from "react-router-dom";
import { GetSystemClaims, GetSystemRoles, GetUserClaimsDetails, GetUserRoles, UpdateUserClaims, UpdateUserRoles } from "../../../apiServices/Admin/ClaimsServices";
import { useEffect, useState } from "react";

function UserClaimsDetails() {
    const query = new URLSearchParams(useLocation().search);
    const username = query.get('username');
    const [user, setUser] = useState({});
    const [claims, setClaims] = useState([]);
    const [roles, setRoles] = useState([]);
    const [userClaims, setUserClaims] = useState([]);
    const [userRoles, setUserRoles] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resUserClaims = await GetUserClaimsDetails(username);
                const resUserRoles = await GetUserRoles(username);
                const resSystemClaims = await GetSystemClaims();
                const resSystemRoles = await GetSystemRoles();
                setClaims(resSystemClaims);
                setRoles(resSystemRoles);
                setUserClaims(resUserClaims.map(claim => claim.type));
                setUserRoles(resUserRoles);
                setUser(resUserClaims);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchApi();
    }, [username]);

    const handleClaimChange = (claimType) => {
        setUserClaims((prevClaims) =>
            prevClaims.includes(claimType)
                ? prevClaims.filter((type) => type !== claimType)
                : [...prevClaims, claimType]
        );
    };

    const handleRoleChange = (roleName) => {
        setUserRoles((prevRoles) =>
            prevRoles.includes(roleName)
                ? prevRoles.filter((role) => role !== roleName)
                : [...prevRoles, roleName]
        );
    };

    const handleUpdateClaims = async () => {
        try {
            await UpdateUserClaims(username, userClaims);
            alert("Claims updated successfully!");
        } catch (error) {
            console.error("Error updating claims:", error);
            alert("Failed to update claims.");
        }
    };

    const handleUpdateRoles = async () => {
        if (userRoles.length === 0) {
            alert("Vui lòng chọn ít nhất một vai trò trước khi cập nhật!");
            return;
        }

        try {
            await UpdateUserRoles(username, userRoles);
            alert("Roles updated successfully!");
        } catch (error) {
            console.error("Error updating roles:", error);
            alert("Failed to update roles.");
        }
    };

    if (!username) {
        return <div>Đang tải thông tin cửa hàng...</div>;
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8" style={{ textAlign: "left" }}>
                        <h1 className="mb-4">Quản lý role và quyền cho user</h1>

                        <div className="card shadow-sm p-4">
                            <hr />
                            <dl className="row">
                                <dt className="col-sm-3 mb-3 fw-bold">Tên đăng nhập:</dt>
                                <dd className="col-sm-9 mb-3">{username}</dd>
                            </dl>

                            <h5 className="mt-4">Danh sách quyền:</h5>
                            <ul className="list-group">
                                {claims.map((claim) => (
                                    <li key={claim.type} className="list-group-item">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={userClaims.includes(claim.type)}
                                                onChange={() => handleClaimChange(claim.type)}
                                            />
                                            {" "}{claim.description}
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="btn btn-primary mt-3"
                                onClick={handleUpdateClaims}
                            >
                                Cập nhật quyền
                            </button>

                            <h5 className="mt-4">Danh sách vai trò:</h5>
                            <ul className="list-group">
                                {roles.map((role) => (
                                    <li key={role.id} className="list-group-item">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={userRoles.includes(role.name)}
                                                onChange={() => handleRoleChange(role.name)}
                                            />
                                            {" "}{role.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="btn btn-primary mt-3"
                                onClick={handleUpdateRoles}
                            >
                                Cập nhật vai trò
                            </button>
                        </div>

                        <div className="mt-4">
                            <a href="/Admin" style={{ textDecoration: "underline", color: "blue" }}>Back to List</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserClaimsDetails;