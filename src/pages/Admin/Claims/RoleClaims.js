import { useEffect, useState } from "react";
import { GetAllUsers, GetSystemRoles } from "../../../apiServices/Admin/ClaimsServices";
import { routePaths } from "../../../routes";
import { Link } from "react-router-dom";


function RolesClaims() {

    const [roles, setRoles] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await GetSystemRoles();
                setRoles(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchApi();
    }, []);
    return (
        <>
            <div className="container mt-4" style={{ textAlign: "left" }}>
                <div className=" mb-4 text-start">
                    <h1 style={{ fontSize: "40px" }}>Danh sách role:</h1>
                    <Link to={routePaths.createBrands} style={{ color: "blue", textDecoration: "underline" }}>Create New</Link>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th >RoleName</th>

                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roles.map((role, index) => {
                                    return <tr key={index}>
                                        <td>{role.name}</td>
                                        <td className="text-center">
                                            <Link to={`${routePaths.RoleClaimsDetails}?rolename=${role.name}`} style={{ color: "blue", textDecoration: "underline" }}>
                                                <i className="bi bi-pencil"></i> Edit
                                            </Link> |


                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default RolesClaims;
