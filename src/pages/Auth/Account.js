import styles from './Account.module.css';

function Account() {
    return (

        <div className={styles.container}>
            <div className={styles.head}><h2 className={styles.title}>Trang Quan Ly Tai Khoan</h2></div>
            <form className={styles.form} >
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>UserName</label>
                        <input type="text" placeholder="Nhập UserName" />
                    </div>
                    <div className={styles.avatar}>
                        <div className={styles.avatarPreview}>
                            <img src="https://picsum.photos/id/237/200/300" alt="anh" />
                        </div>
                        <button type="button" className={styles.avatarButton}>Chọn Ảnh</button>
                    </div>
                </div>
                <div className={styles.field}>
                    <label>Ho Va Ten</label>
                    <input type="text" placeholder="Nhập tên" />
                </div>
                <div className={styles.field}>
                    <label>Dia Chi</label>
                    <input type="text" placeholder="Nhập Dia Chi" />
                </div>
                <div className={styles.field}>
                    <label>Email</label>
                    <input type="email" placeholder="Nhập Email" />
                </div>
                <div className={styles.field}>
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="Nhập số điện thoại" />
                </div>
                <button type="submit" className={styles.submitButton}>Lưu</button>
            </form>
        </div>
    );
}

export default Account;