import { useEffect, useState } from "react";
import styles from "../Seller.module.css"
import { GetStaff } from "../../../apiServices/Seller/StaffServices";

function Staff() {
    const [staffs, setStaffs] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resStaffs = await GetStaff()
                console.log(resStaffs);
                setStaffs(resStaffs)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
            }
        }
        fetchApi();
    }, []);
    return (
        <div classNameName={styles.container}>
            <div className={styles.main_content}>

                {/* <hr /> */}
                <h1>Nhân viên của shop</h1>
                <table className={styles.table} style={{ width: "70%" }}>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffs.map((staff, index) => {
                                return <tr>
                                    <td>{staff.userName}</td>
                                    <td>{staff.fullName}</td>
                                    <td>{staff.email}</td>
                                    <td style={{ display: "flex", justifyContent: "space-around" }}>
                                        <form method="post" action="/Seller/Shops/DeleteStaff?username=Nv1">
                                            <button type="submit" onclick="return confirm('Bạn Có Chắc Chắn Muốn Xóa Nhân Viên : Nv1 Khỏi Shop?');" className={` ${styles.btn} ${styles.btn_danger}`}>Xóa nhân viên</button>
                                            <input name="__RequestVerificationToken" type="hidden" value="" /></form>
                                        <form method="post" action="/Seller/Shops/ResetStaffPassword?userId=b5412a8a-f254-4eeb-ac07-88ef8aa9b50c">
                                            <button type="submit" onclick="return confirm('Bạn Có Chắc Chắn Muốn Reset Mật Khẩu Của Nhân Viên : Nv1 Khỏi Shop?');" className={`${styles.btn} ${styles.btn_primary}`}>Reset Password</button>
                                            <input name="__RequestVerificationToken" type="hidden" value="" /></form>

                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>


            </div>
        </div>
    )
};

export default Staff;