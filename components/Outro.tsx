'use client'

import styles from "@/assets/styles/page.module.css"
import Image from "@/components/Image/Image";
export default function Outro () {
    return (
        <div>
            <section className={styles.outro}>
                <Image className={'cover_image'} src={"./img/outro1(1).png"} alt={"outro1(1).png"}></Image>
                <Image className={'cover_image'} src={"./img/outro1(2).png"} alt={"outro1(2).png"}></Image>
            </section>
            <section className={styles.outro}>
                <Image className={'cover_image'} src={"./img/outro2(1).png"} alt={"outro1(1).png"}></Image>
                <Image className={'cover_image'} src={"./img/outro2(2).png"} alt={"outro1(2).png"}></Image>
            </section>

            <section className={styles.outro}>
                <Image className={'cover_image'} src={"./img/outro3(1).png"} alt={"outro1(1).png"}></Image>
                <Image className={'cover_image'} src={"./img/outro3(2).png"} alt={"outro1(2).png"}></Image>
            </section>
            <section className="outro cover">
                <h2>ZIPOUTTHEBAG</h2>
                <p>contact me: <a href="mailto:wooyeon.jee@gmail.com">jeewooyeon@gmail.com</a></p>
            </section>

        </div>
    )
}