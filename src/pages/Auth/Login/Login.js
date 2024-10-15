function Login() {
    return (
        <>

            <div className="row justify-content-center">
                <div className="col-md-4">
                    <section>
                        <form id="account" method="post">
                            <h2>ĐĂNG NHẬP</h2>
                            <hr />
                            <div asp-validation-summary="ModelOnly" className="text-danger" role="alert"></div>
                            <div className="form-floating mb-3">
                                <input asp-for="Input.UserName" className="form-control" autocomplete="username" aria-required="true" placeholder="name@example.com" />
                                <label asp-for="Input.UserName" className="form-label">Tên đăng nhập</label>
                                <span asp-validation-for="Input.UserName" className="text-danger"></span>
                            </div>
                            <div className="form-floating mb-3">
                                <input asp-for="Input.Password" className="form-control" autocomplete="current-password" aria-required="true" placeholder="password" />
                                <label asp-for="Input.Password" className="form-label">Mật Khẩu</label>
                                <span asp-validation-for="Input.Password" className="text-danger"></span>
                            </div>
                            <div className="checkbox mb-3">
                                <label asp-for="Input.RememberMe" className="form-label">
                                    <input className="form-check-input" asp-for="Input.RememberMe" />
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            <div>
                                <button id="login-submit" type="submit" className="w-100 btn btn-lg btn-danger">Đăng nhập</button>
                            </div>
                            <div>
                                <p>
                                    <a id="forgot-password" asp-page="./ForgotPassword" style={{ color: 'red' }}>Quên mật khẩu?</a>
                                </p>
                                <p>
                                    <a asp-page="./Register" asp-route-returnUrl="@Model.ReturnUrl" style={{ color: 'red' }}>Đăng ký tài khoản mới</a>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login;