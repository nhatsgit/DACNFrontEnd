import styles from "../Seller.module.css"
function Orders() {
    return (
    <section style={{width: "70%",margin: "auto",}}>
        <h1 style={{textAlign:"center"}}>Đơn hàng của shop</h1>
        <section>
        <div className={styles.container}>
        <strong>Ngày đặt: 04/11/2024 11:57</strong>
        <div className={`${styles.row} ${styles.product} ${styles.py_2}`} >
            <div className={`${styles.col_md_6} ${styles.d_flex}`}>
                        <div class="images">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7&pid=Api&P=0&h=180" alt="" width={100} height={100}/>
                        </div>
                        <div class={`${styles.context} ${styles.ml3}`}>
                            <p>007wAe41Uj180</p>
                            x 1
                        </div>
                    </div>
            <div className={`${styles.col_md_6} ${styles.text_right}`}>
                <h4 className={`${styles.text_dark}`}>182.000 ₫</h4>
            </div>
        </div>
        <div class={`${styles.row} ${styles.third} ${styles.py_3}`} style={{borderTop:"1px solid grey",width:"99%"}}>
            <div class={`${styles.col_md_6}`}>
                <h4 style={{color:"red"}}>Chờ Xác Nhận Đơn Hàng<p></p>
            </h4></div>
            <div class={`${styles.col_md_6} ${styles.text_right}`}>
                <h3 style={{color:"red"}}><span>Thành tiền:</span>3.358.000 ₫</h3>
                    <button class={`${styles.btn} ${styles.btn_primary}`}><a className={styles.link} href="/Seller/Orders/OrderDetails?ma=5">Xem chi tiết</a></button>
            </div>
        </div>
        </div>
        </section>
        

        <div class={styles.center}>
        <div class="pagination-container">
            <ul class={`${styles.pagination} ${styles.ul}`}><li class={styles.active}><span>1</span></li></ul>
            </div>
        </div>
    </section>);
}

export default Orders;