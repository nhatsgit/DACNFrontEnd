function AddStaff() {
    return(
        <section style={{textAlign:"left"}}>
        <h1 style={{fontSize:"2.5rem"}}>Thêm nhân viên</h1>
        <form id="form1">
            <div className="form-group" style={{height:"100px"}}>
                <label for="UserName" className="control-label" style={{fontSize:"large"}}>UserName</label>
                <input  className="form-control" style={{display:"block", padding:"10px",width:"50%",margin:"5px 0"}}/>
            </div>
            <div className="form-group" style={{height:"100px"}}>
                <label for="Password" className="control-label" style={{fontSize:"large"}}>Password</label>
                <input className="form-control" style={{display:"block", padding:"10px",width:"50%",margin:"5px 0"}}/>
            </div>
            <div className="form-group" style={{height:"100px"}}>
                <label for="PhoneNumber" className="control-label" style={{fontSize:"large"}}>PhoneNumber</label>
                <input lass="form-control" style={{display:"block", padding:"10px",width:"50%",margin:"5px 0"}}/>
            </div>
            <div className="form-group" style={{height:"100px"}}>
                <label for="Email" className="control-label" style={{fontSize:"large"}}>Email</label>
                <input className="form-control" style={{display:"block", padding:"10px",width:"50%",margin:"5px 0"}}/>
            </div>
            <div className="form-group" style={{height:"100px"}}>
                <label for="FullName" className="control-label" style={{fontSize:"large"}}>FullName</label>
                <input className="form-control" style={{display:"block", padding:"10px",width:"50%",margin:"5px 0"}}/>
            </div>
            <div className="form-group" style={{height:"100px"}}>
                <label for="Address" className="control-label" style={{fontSize:"large"}}>Address</label>
                <input className="form-control" style={{display:"block", padding:"10px",width:"50%",margin:"5px 0"}}/>
            </div>

            <button type="submit" className="btn btn-primary" style={{padding:"10px",backgroundColor:"#0d6efd",border:"none", width:"100px"}}><a href="" style={{color:"white"}}>Register</a></button>
        </form>
    </section>
    )
};
export default AddStaff;