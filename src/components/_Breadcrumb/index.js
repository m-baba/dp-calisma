import styles from './index.module.scss'

const Breadcrumb = () =>{
  return (
      <div className={styles.breadcrumb}>
          <div className={styles.breadcrumb_inner}>
              <ul className={styles.breadcrumb_items}>
                  <li className={styles.breadcrumb_item + " " + styles.breadcrumb_item_home}><a href={"/"}></a></li>
                  <li className={styles.breadcrumb_item}><a href={"/"}>Yardım</a></li>
              </ul>
          </div>
      </div>
  )
}

export default Breadcrumb