'use client'

import Image from "@/components/Image/Image";

export default function Chapters (){
    return (
        <div>
            <section>
                <Image className={'cover_image'} src={"img/chapter1(1).png"} alt={"chapter1(1).png"} />
                <Image className={'cover_image'} src={"img/chapter1(2).png"} alt={"chapter1(2).png"} />
            </section>
            <section>
                <span>
                <h2>ZIP OUT</h2>
                </span>
                <span>
                    <ul className="content-list">
                    <li><b>01</b>나는 아직도 내가 마음에 듭니다</li>
                    <li><b>04</b>인서울을 할 수 있다고 생각해요</li>
                    <li><b>10</b>WAS HAST DU GESCHAFT</li>
                    <li><b>22</b>싸울수록 선명해진다</li>
                    <li><b>30</b>엄마는 왜 역사공부를 시켰을까</li>
                    <li><b>34</b>역사가 될 일인데 아무한테나 맡길 수 없지</li>
                    <li><b>36</b>계속해보겠습니다</li>
                    </ul>
                </span>
            </section>
            <section>
                <Image className={'cover_image'} src={"img/chapter2(1).png"} alt={"chapter2(1).png"} />
                <Image className={'cover_image'} src={"img/chapter2(2).png"} alt={"chapter2(2).png"} />
            </section>
            <section>
                <Image className={'cover_image'} src={"img/chapter4(1).png"} alt={"chapter4(1).png"} />
                <Image className={'cover_image'} src={"img/chapter4(2).png"} alt={"chapter4(2).png"} />
            </section>
        </div>
    )
}