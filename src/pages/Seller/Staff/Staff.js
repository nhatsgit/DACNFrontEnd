function Staff() {
    return (
        <section style={{fontSize:"large"}}>
        <h1 style={{fontSize:"2.5rem"}}>Nhân viên của Shop</h1>


    <table classNameNameName="table" style={{margin:"auto" ,border:"1px solid #c8bebe",width:"700px"}}>
            <thead>
                <tr>
                    <th style={{paddingLeft:"20px"}}>
                        UserName
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        FullName
                    </th>           
                    <th style={{paddingLeft:"20px"}}>
                        Email
                    </th>
                </tr>
            </thead>
    <tbody>
        <tr>
            <td style={{paddingLeft:"0px"}}>
            Nhan               
            </td>
            <td style={{paddingLeft:"0px"}}>
                Nhan
            </td>
            <td style={{paddingLeft:"0px"}}>
            Nhan@gmail.com
            </td>
            <td style={{display:"flex",justifyContent:"end"}}>
                <form action="DeleteStaff" >
                    <button type="submit" className="btn btn-danger"  style={{padding:"10px", margin:"5px",backgroundColor:"red",border:"none",color:"white"}}>Xóa nhân viên</button>
                </form>
                <form action="ResetStaffPassword">
                    <button type="submit" className="btn btn-primary"  style={{padding:"10px",margin:"5px",backgroundColor:"blue",border:"none",color:"white"}}>Reset Password</button>
                </form>
            </td>
        </tr>
        <tr>
            <td style={{paddingLeft:"0px"}}>
            Nhan               
            </td>
            <td style={{paddingLeft:"0px"}}>
                Nhan
            </td>
            <td style={{paddingLeft:"0px"}}>
            Nhan@gmail.com
            </td>
            <td style={{display:"flex",justifyContent:"end"}}>
                <form action="DeleteStaff" >
                    <button type="submit" className="btn btn-danger"  style={{padding:"10px", margin:"5px",backgroundColor:"red",border:"none",color:"white"}}>Xóa nhân viên</button>
                </form>
                <form action="ResetStaffPassword">
                    <button type="submit" className="btn btn-primary"  style={{padding:"10px",margin:"5px",backgroundColor:"blue",border:"none",color:"white"}}>Reset Password</button>
                </form>
            </td>
        </tr>
    </tbody>
    </table>
</section>
        )
};

export default Staff;