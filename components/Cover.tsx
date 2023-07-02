'use client'

import Image from "@/components/Image/Image";
import styles from "@/assets/styles/page.module.css"

export default function Cover() {
    return (
        <section className={styles.cover}>
            <Image className={'cover_image'} src="./img/cover.png" alt="cover"/>
            <Image className={'cover_image'}  src="./img/back.png" alt="back"/>
        </section>

    )
}
