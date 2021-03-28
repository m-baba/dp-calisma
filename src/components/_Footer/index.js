import styles from './index.module.scss'
import React from "react";

const Footer = () =>{
  return (
      <footer className={styles.footer}>
          <div className={styles.footer_inner}>
              <div className={styles.footer_top}>
                  <h3 className={styles.footer_top_title}>Yararlı bulabileceğiniz konu başlıkları</h3>
                  <h4 className={styles.footer_top_text}>Doping Hafıza Online Eğitim Platformu ile ilgili merak edilen konu başlıklarına aşağıdan ulaşabilirsiniz.</h4>
              </div>
          </div>
      </footer>
  )
}

export default Footer