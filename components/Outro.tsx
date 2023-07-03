'use client'

import Image from "@/components/Image/Image";
import styles from "@/assets/styles/page.module.css"
export default function Outro () {
    return (
        <div className={`${styles.col}`}>
            <section className={styles.row}>
                <Image className={'cover_image'} src={"img/outro1(1).png"} alt={"outro1(1).png"}></Image>
                <Image className={'cover_image'} src={"img/outro1(2).png"} alt={"outro1(2).png"}></Image>
            </section>
            <section className={styles.row}>
                <Image className={'cover_image'} src={"img/outro2(1).png"} alt={"outro1(1).png"}></Image>
                <Image className={'cover_image'} src={"img/outro2(2).png"} alt={"outro1(2).png"}></Image>
            </section>

            <section className={styles.row}>
                <Image className={'cover_image'} src={"img/outro3(1).png"} alt={"outro1(1).png"}></Image>
                <Image className={'cover_image'} src={"img/outro3(2).png"} alt={"outro1(2).png"}></Image>
            </section>
            <section className={`${styles.col} outro`}>
                <h2>ZIPOUTTHEBAG</h2>
                <p>contact me: <a href="mailto:wooyeon.jee@gmail.com">wooyeon.jee@gmail.com</a></p>
            </section>
        </div>
    )
}