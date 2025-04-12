import { useLocation } from "react-router-dom";
import { GetRoleClaimsDetails, GetSystemClaims, GetSystemRoles, GetUserClaimsDetails, GetUserRoles, UpdateRoleClaims, UpdateUserClaims, UpdateUserRoles } from "../../../apiServices/Admin/ClaimsServices";
import { useEffect, useState } from "react";

function RoleClaimsDetails() {
    const query = new URLSearchParams(useLocation().search);
    const rolename = query.get('rolename');
    const [role, setRole] = useState({});
    const [systemClaims, setSystemClaims] = useState([]);
    const [roleClaims, setRoleClaims] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resUserClaims = await GetRoleClaimsDetails(rolename);
                const resSystemClaims = await GetSystemClaims();
                setSystemClaims(resSystemClaims);
                setRoleClaims(resUserClaims.map(claim => claim.type));
                setRole(resUserClaims);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchApi();
    }, [rolename]);

    const handleClaimChange = (claimType) => {
        setRoleClaims((prevClaims) =>
            prevClaims.includes(claimType)
                ? prevClaims.filter((type) => type !== claimType)
                : [...prevClaims, claimType]
        );
    };



    const handleUpdateClaims = async () => {
        try {
            await UpdateRoleClaims(rolename, roleClaims);
            alert("Claims updated successfully!");
        } catch (error) {
            console.error("Error updating claims:", error);
            alert("Failed to update claims.");
        }
    };



    if (!rolename) {
        return <div>Đang tải thông tin cửa hàng...</div>;
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8" style={{ textAlign: "left" }}>
                        <h1 className="mb-4">Quản lý quyền cho role</h1>

                        <div className="card shadow-sm p-4">
                            <hr />
                            <dl className="row">
                                <dt className="col-sm-3 mb-3 fw-bold">Tên role:</dt>
                                <dd className="col-sm-9 mb-3"> {rolename}</dd>
                            </dl>

                            <h5 className="mt-4">Danh sách quyền:</h5>
                            <ul className="list-group">
                                {systemClaims.map((claim) => (
                                    <li key={claim.type} className="list-group-item">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={roleClaims.includes(claim.type)}
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

export default RoleClaimsDetails;