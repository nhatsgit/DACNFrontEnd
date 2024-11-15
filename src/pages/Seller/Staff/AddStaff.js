import styles from "../Seller.module.css"

function AddStaff() {
    return(
        <div className={styles.container} style={{textAlign:"left"}}>
        <div className={styles.main_content}>
        <h1>Thêm nhân viên</h1>
        <form method="post" action="/Seller/Shops/AddStaff" novalidate="novalidate">
        <div className={styles.form_group}>
            <label for="UserName">UserName</label>
            <input className={styles.form_control} type="text" id="UserName" name="UserName" />
            <span class="text-danger field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
        </div>
        <div className={styles.form_group}>
            <label for="Password">Password</label>
            <input className={styles.form_control} type="password" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" />
            <span className={styles.text_danger} data-valmsg-for="Password" data-valmsg-replace="true"></span>
        </div>
        <div className={styles.form_group}>
            <label for="PhoneNumber">PhoneNumber</label>
            <input className={styles.form_control} type="tel" data-val="true" data-val-phone="The PhoneNumber field is not a valid phone number." data-val-required="The PhoneNumber field is required." id="PhoneNumber" name="PhoneNumber" />
            <span className={styles.text_danger} data-valmsg-for="PhoneNumber" data-valmsg-replace="true"></span>
        </div>
        <div className={styles.form_group}>
            <label for="Email">Email</label>
            <input className={styles.form_control} type="email" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." id="Email" name="Email" />
            <span className={styles.text_danger} data-valmsg-for="Email" data-valmsg-replace="true"></span>
        </div>
        <div className={styles.form_group}>
            <label for="FullName">FullName</label>
            <input className={styles.form_control} type="text" data-val="true" data-val-required="The FullName field is required." id="FullName" name="FullName"  />
            <span className={styles.text_danger} data-valmsg-for="FullName" data-valmsg-replace="true"></span>
        </div>
    
        <div className={styles.form_group}>
            <label for="Address">Address</label>
            <input className={styles.form_control} type="text" data-val="true" data-val-required="The Address field is required." id="Address" name="Address"  />
            <span className={styles.text_danger} data-valmsg-for="Address" data-valmsg-replace="true"></span>
        </div>
    
        <button type="submit" className={`${styles.btn} ${styles.btn_primary}`}>Register</button>
    <input name="__RequestVerificationToken" type="hidden" value="CfDJ8PK6azw9Ww9JrPlpzOopvAVTtNPjiY1ZFGge6Zq6rzOaqyRPdXQmrjztsvu-TitKsUkhSyYRFNFBAIr-3WAZa3m0mhfoyPOSaq4gZ938S-96o2VMqaU9ZrdE4PvGtDXTzCsP9JIfKWuZeGHEPvGPhQSdQc59gVbwgSd9ytrWTBBDjfFFJXFnow9pZXnItGAlDQ" />
    
    </form>
        </div>
    </div>
    )
};
export default AddStaff;