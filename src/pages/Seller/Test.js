import styles from "./Test.module.css" 
function Test() {
    return (
        <ul class= {`${styles.navbar_nav}flex-grow-1`}>
            <div class={styles.overlay}></div>
            <div class={styles.rectangle} style={styles.myStyles}>
                <img class={styles.circle} src="https://www.bhphotovideo.com/images/images2500x2500/asus_x200ca_db01t_multi_touch_11_6_notebook_983640.jpg" alt="Avatar" />
                <div class={styles.content}>
                    <h4>Ten cua hang</h4>
                </div>
            </div>
            <li class="nav-item">
            <a class="nav-link text-dark">Nhân viên: Kiet123(User)!</a>
            </li>
            <li class="nav-item">
                <a id="manage" class="nav-link text-dark" asp-area="Identity" asp-page="/Account/Manage/Index" title="Manage">Quản lý tài khoản</a>
            </li>

            <li class="nav-item">
                <form id="logoutForm" class="form-inline" asp-area="Identity" asp-page="/Account/Logout">
                    <button id="logout" type="submit" class="nav-link btn btn-link text-dark border-0">Dang Xuat</button>
                </form>
            </li>
        </ul>
        
    )
};


export default Test;