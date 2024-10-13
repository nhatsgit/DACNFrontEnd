function Header() {
    return (<header id="header">
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="contactinfo">
                            <ul className="nav nav-pills">
                                <li><a href="#">  </a></li>
                                <li> <a href="#"><i className="fa fa-envelope"></i> nhatanh.nuis@gmail.com</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="social-icons pull-right">
                            <ul className="nav navbar-nav">
                                {/* <li style="margin-right: 20px;"><a href="https://www.facebook.com/profile.php?id=100048851781129"><img src="../myLayout/images/home/logofacebook.png" width={35} /></a></li>
                                <li style="margin-right: 20px;"><a href="https://zalo.me/0394778814"><img src="../myLayout/images/home/logozalo.png" width={35} /></a></li>
                                <li style="margin-right: 20px;"><a href="https://www.facebook.com/messages/t/100048851781129"><img src="../myLayout/images/home/logomessenger.png" width={35} /></a></li>  */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="logo pull-left">
                        <a ><img src="images/home/react.png" alt="" width={90} /></a>
                    </div>
                    <div className="col-sm-8">
                        <form id="search-form" method="post" className="dropdown" >
                            <input type="text" name="query" id="searchInput" style={{ width: '600px', height: '50px' }} placeholder="Tìm kiếm sản phẩm trong hệ thống..." />
                            <div id="suggestions" style={{ display: 'block' }}>
                                {/* <li>cccc</li> */}
                            </div>
                            <button
                                style={{
                                    width: '100px',
                                    height: '50px',
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    border: 'none',
                                    marginRight: '10px'
                                }}
                                type="submit"
                                value="search"
                                onMouseOver={(e) => e.target.style.color = 'black'}
                                onMouseOut={(e) => e.target.style.color = 'white'}
                            >
                                Tìm Kiếm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="mainmenu pull-left">
                        <ul className="nav navbar-nav collapse navbar-collapse">
                            <li><a onClick="activateLink(this)" ><i className="fa fa-home"></i>Trang Chủ</a></li>
                            <li><a onClick="activateLink(this)" ><i className="fa fa-list-alt"></i>Đơn Hàng</a></li>
                            <li><a onClick="activateLink(this)" ><i className="fa fa-shopping-cart" z></i> Giỏ Hàng</a></li>
                            <li><a ><i className="fa fa-user"></i> Tài Khoản</a></li>
                        </ul>

                    </div>
                    <div className="mainmenu pull-right">

                        <ul className="nav navbar-nav collapse navbar-collapse">
                            <li class="nav-item">
                                <a class="nav-link text-dark" id="register" >Đăng Ký</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" id="login" > Đăng Nhập</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </header>
    );
}

export default Header;