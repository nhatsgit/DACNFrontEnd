import styles from "../Seller.module.css"

function Staff() {
    return (
        <div classNameName={styles.container}>
        <div className={styles.main_content}>
            
        <hr />
        <h1>Nhân viên của shop</h1>
        <table className={styles.table} style={{width:"70%"}}>
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
                    <tr>
                        <td>Nv1</td>
                        <td>Nv1</td>
                        <td>Nv1@gmail.com</td>
                        <td style={{display:"flex",justifyContent:"space-around"}}>
                            <form method="post" action="/Seller/Shops/DeleteStaff?username=Nv1">
                                <button type="submit" onclick="return confirm('Bạn Có Chắc Chắn Muốn Xóa Nhân Viên : Nv1 Khỏi Shop?');" className={` ${styles.btn} ${styles.btn_danger}`}>Xóa nhân viên</button>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAU4JDMf8xrzhORBSaEXKQbPqKDFG-i-u0XmOykoC4av7AsfwslajFUVLru_uQe6Z47v7w4CJmL7LxL7prfEiu0vM7chHUEy75w9PPLQxiIxN_C1PY26mh-8pVB7Mfmw5xpaxgWWQHyWXWNe_vCp0X07OjL59Kcy7vC2XdVyprMR0g" /></form>
                            <form method="post" action="/Seller/Shops/ResetStaffPassword?userId=b5412a8a-f254-4eeb-ac07-88ef8aa9b50c">
                                <button type="submit" onclick="return confirm('Bạn Có Chắc Chắn Muốn Reset Mật Khẩu Của Nhân Viên : Nv1 Khỏi Shop?');" className={`${styles.btn} ${styles.btn_primary}`}>Reset Password</button>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAU4JDMf8xrzhORBSaEXKQbPqKDFG-i-u0XmOykoC4av7AsfwslajFUVLru_uQe6Z47v7w4CJmL7LxL7prfEiu0vM7chHUEy75w9PPLQxiIxN_C1PY26mh-8pVB7Mfmw5xpaxgWWQHyWXWNe_vCp0X07OjL59Kcy7vC2XdVyprMR0g" /></form>
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Nv1</td>
                        <td>Nv1</td>
                        <td>Nv1@gmail.com</td>
                        <td style={{display:"flex",justifyContent:"space-around"}}>
                            <form method="post" action="/Seller/Shops/DeleteStaff?username=Nv1">
                                <button type="submit" onclick="return confirm('Bạn Có Chắc Chắn Muốn Xóa Nhân Viên : Nv1 Khỏi Shop?');" className={` ${styles.btn} ${styles.btn_danger}`}>Xóa nhân viên</button>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAU4JDMf8xrzhORBSaEXKQbPqKDFG-i-u0XmOykoC4av7AsfwslajFUVLru_uQe6Z47v7w4CJmL7LxL7prfEiu0vM7chHUEy75w9PPLQxiIxN_C1PY26mh-8pVB7Mfmw5xpaxgWWQHyWXWNe_vCp0X07OjL59Kcy7vC2XdVyprMR0g" /></form>
                            <form method="post" action="/Seller/Shops/ResetStaffPassword?userId=b5412a8a-f254-4eeb-ac07-88ef8aa9b50c">
                                <button type="submit" onclick="return confirm('Bạn Có Chắc Chắn Muốn Reset Mật Khẩu Của Nhân Viên : Nv1 Khỏi Shop?');" className={`${styles.btn} ${styles.btn_primary}`}>Reset Password</button>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAU4JDMf8xrzhORBSaEXKQbPqKDFG-i-u0XmOykoC4av7AsfwslajFUVLru_uQe6Z47v7w4CJmL7LxL7prfEiu0vM7chHUEy75w9PPLQxiIxN_C1PY26mh-8pVB7Mfmw5xpaxgWWQHyWXWNe_vCp0X07OjL59Kcy7vC2XdVyprMR0g" /></form>
                        
                        </td>
                    </tr>
            </tbody>
        </table>


        </div>
        </div>
        )
};

export default Staff;