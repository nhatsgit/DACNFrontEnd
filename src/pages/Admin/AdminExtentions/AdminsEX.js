import { Link } from "react-router-dom";
import { routePaths } from "../../../routes";

function CreateStore() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8" style={{ textAlign: "left" }}>
                    <h1 className="mb-4" style={{ fontSize: "40px" }}>Tạo tài khoản chủ shop</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                className="form-control"
                                style={{ width: "100%" }}
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                style={{ width: "100%" }}
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                style={{ width: "100%" }}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                style={{ width: "100%" }}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-control"
                                style={{ width: "100%" }}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-control"
                                style={{ width: "100%" }}
                                placeholder="Enter your address"
                            />
                        </div>
                        <Link to={routePaths.Admin} className="btn btn-primary w-100">Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}



function DetailStore() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8" style={{textAlign:"left"}}>
                    <h1 className="mb-4">Shop Details</h1>
                    
                    <div className="card shadow-sm p-4">
                        <h4 className="mb-3">Shops</h4>
                        <hr />
                        <dl className="row">
                            <dt className="col-sm-3 mb-3 fw-bold">Shop Name:</dt>
                            <dd className="col-sm-9 mb-3">TenCuaHang</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Address:</dt>
                            <dd className="col-sm-9 mb-3">DiaChi</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Contact:</dt>
                            <dd className="col-sm-9 mb-3">LienHe</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Email:</dt>
                            <dd className="col-sm-9 mb-3">Email</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Phone Number:</dt>
                            <dd className="col-sm-9 mb-3">PhoneNumber</dd>

                            <dt className="col-sm-3 mb-3 fw-bold">Profile Image:</dt>
                            <dd className="col-sm-9 mb-3">
                                <img
                                    width="100"
                                    height="100"
                                    className="rounded-circle border"
                                    src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
                                    alt="Profile"
                                />
                        </dd>

    <dt className="col-sm-3 mb-3 fw-bold">Cover Image:</dt>
    <dd className="col-sm-9 mb-3">
        <img
            width="300"
            height="100"
            className="rounded border"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s"
            alt="Cover"
        />
    </dd>

    <dt className="col-sm-3 mb-3 fw-bold">Creation Date:</dt>
    <dd className="col-sm-9 mb-3">NgayTao</dd>

    <dt className="col-sm-3 mb-3 fw-bold">Description:</dt>
    <dd className="col-sm-9 mb-3">MoTa</dd>

    <dt className="col-sm-3 mb-3 fw-bold">Category:</dt>
    <dd className="col-sm-9 mb-3">TenLoai</dd>
</dl>

                    </div>

                    <div className=" mt-4">
                        <a href="/Admin" style={{textDecoration:"underline",color:"blue"}}>Back to List</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { CreateStore, DetailStore };