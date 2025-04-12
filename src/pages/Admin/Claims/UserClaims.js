import { useEffect, useState } from "react";
import { GetAllUsers } from "../../../apiServices/Admin/ClaimsServices";
import { routePaths } from "../../../routes";
import { Link } from "react-router-dom";


function UserClaims() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await GetAllUsers();
                setUsers(res);
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
                    <h1 style={{ fontSize: "40px" }}>Danh sách user</h1>
                    <Link to={routePaths.createBrands} style={{ color: "blue", textDecoration: "underline" }}>Create New</Link>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th >UserName</th>
                                <th >Email</th>
                                <th >Roles</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return <tr key={index}>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.roles.map((role, index) => `${role} `)}</td>
                                        <td className="text-center">
                                            <Link to={`${routePaths.UserClaimsDetails}?username=${user.userName}`} style={{ color: "blue", textDecoration: "underline" }}>
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

export default UserClaims;
