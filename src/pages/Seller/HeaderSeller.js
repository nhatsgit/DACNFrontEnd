function HeaderSeller(){
    return(
        <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container-fluid">
                <a class="navbar_brand">Trang bán hàng</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between" id="myPartialViewContainer"><ul class="navbar-nav flex-grow-1">
    <div class="overlay"></div>
    <div class="rectangle" style={{backgroundImage: "url('https://th.bing.com/th/id/OIP.SgaDrScw4lJWtYLBQfD61gHaFw?rs=1&pid=ImgDetMain')"}}>
        <img class="circle" src="/images/device (35).png" alt="Avatar" />
        <div class="content">
            <h4>Shop:joUSkNCprH1</h4>
        </div>
    </div>
</ul>



<ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link text-dark">Chủ shop: User2@gmail.com!</a>
        </li>
        <li class="nav-item">
            <a id="manage" class="nav-link text-dark" title="Manage" href="/Identity/Account/Manage">Quản lý tài khoản</a>
        </li>
        <li class="nav-item">
            <form id="logoutForm" class="form-inline" action="/Identity/Account/Logout?returnUrl=%2F" method="post">
                <button id="logout" type="submit" class="nav-link btn btn-link text-dark border-0">Dang Xuat</button>
            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAVoWb8Gy-OlC864vhXvvPj0rJowmGDAOFHhIgrCitNqHoVuaBP-swGGJdK_ItZdGdUmYYL5FKvIST8XP1wNXu8RGkY0jemWG_iFlRC06LO0RaQO03B3_41YlexI0oW3kcKdLtNOlGajH8RVHCz-cy0PS-NXd8IKgnnDtr6Ou2zIow" /></form>
        </li>
</ul>
</div>
            </div>
        </nav>
    </header>
    )
}