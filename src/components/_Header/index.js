import styles from './index.module.scss'

const Header = () =>{
  return (
    <header className={styles.header}>
            <div className={styles.header_top}>
                <div className={styles.header_top_inner}>
                    <ul className={styles.header_top_left_items}>
                        <li><span className={styles.header_top_telegram + " " + styles.header_top_font_icon}></span></li>
                        <li><span className={styles.header_top_whatsapp + " " + styles.header_top_font_icon}>0 533 236 20 05</span></li>
                        <li><span className={styles.header_top_tel + " " + styles.header_top_font_icon}>0 212 236 74 41</span></li>
                        <li><span className={styles.header_top_mail + " " + styles.header_top_font_icon}>info@dopinghafiza.com</span></li>
                    </ul>
                    <ul className={styles.header_top_right_items}>
                        <li><span className={styles.header_top_facebook + " " + styles.header_top_font_icon}></span></li>
                        <li><span className={styles.header_top_instagram + " " + styles.header_top_font_icon}></span></li>
                        <li><span className={styles.header_top_twitter + " " + styles.header_top_font_icon}></span></li>
                        <li><span className={styles.header_top_youtube + " " + styles.header_top_font_icon}></span></li>
                    </ul>
                </div>
            </div>
            <div className={styles.header_bottom}>
                <div className={styles.header_bottom_inner}>
                    <a href={"/"} className={styles.header_logo}>
                        <img src={"/images/logo.svg"} />
                    </a>
                    <nav>
                        <ul className={styles.header_bottom_right_items}>
                            <li><a>Eğitim Paketlerimiz</a></li>
                            <li><a>Örnek Videolar</a></li>
                            <li><a>Yorumlar & Başarılarımız</a></li>
                            <li><a>Yardım</a></li>
                            <li><a>Biz Kimiz</a></li>
                            <li><a>Bize Ulaşın</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </header>
  )
}

export default Header