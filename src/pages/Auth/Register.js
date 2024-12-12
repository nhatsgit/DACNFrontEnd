import { useState } from 'react';
import styles from './Register.module.css';

function Register() {
    const [account, setAccount] = useState({
        userName: "username",
        password: "",
        fullName: "",
        address: "",
        avatar: "avatar",
        email: "",
        phoneNumber: "",
    });
    return (

        <div className={styles.registerContainer}>
            <div className={styles.registerWapper}>
                <h2>Đăng Ký</h2>
                <form action="">
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Username" required className={styles.myInput} />
                    </div>
                    <div className={styles.inputBox} >
                        <input type="password" placeholder="Password" required className={styles.myInput} />
                    </div>
                    <div className={styles.inputBox} >
                        <input type="password" placeholder="Xac nhan mat khau" required className={styles.myInput} />
                    </div>
                    <div className={styles.inputBox} >
                        <input className={styles.myInput} type="fullname" placeholder="Ho va Ten" required />
                    </div>
                    <div className={styles.inputBox} >
                        <input className={styles.myInput} type="address" placeholder="Dia Chi" required />
                    </div>
                    <div className={styles.inputBox} >
                        <input type="email" placeholder="Email" required className={styles.myInput} />
                    </div>
                    <div className={styles.inputBox} >
                        <input type="phoneNumber" placeholder="So Dien Thoai" required className={styles.myInput} />
                    </div>

                    <button className={styles.button} type="submit">
                        Đăng Ký
                    </button>
                </form>
                <div className={styles.backHome}>
                    <p>Bạn đã có tài khoản <a href="/Login">Login ? </a><a href="/"> Back Home </a></p>
                </div>
            </div>
        </div>
    );
}

export default Register;