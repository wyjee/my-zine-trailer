'use client'

import Image from "@/components/Image/Image";

export default function Intro() {
    return (
        <div>
            <section className="intro">
                <Image className={'cover_image'} src={"./img/intro1.jpg"} alt={"intro1.jpg"} />
            </section>
            <section className="intro">
                <Image className={'cover_image'} src={"./img/intro2(1).png"} alt={"intro2(1).png"} />
                <Image className={'cover_image'} src={"./img/intro2(2).png"} alt={"intro2(2).png"} />
            </section>
            <section className="intro">
                <Image className={'cover_image'} src={"./img/intro3.png"} alt={"intro3.png"} />
            </section>
        </div>
    )
}
