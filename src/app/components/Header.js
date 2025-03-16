import styles from "./Header.module.css"
import Image from "next/image"
export default function Header( isTransparent ){
    return(
        <header className={styles.header}>
        <div className={styles.logo}>
        <Image 
        src="/icon/logo.png"
        width={150}
        height={50}
        layout="intrinsic"
        alt="Gusto"
        />
        </div>
        <div className={styles.ssilki}>
        <a className={styles.a} href="/">Главная</a>        
        <a className={styles.a} href="/admin">День</a>
        <a className={styles.a} href="/admin">Неделя</a>
        <a className={styles.a} href="/admin">Месяц</a>
        </div>
      </header>
    )
}