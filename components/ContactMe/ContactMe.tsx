import styles from "@/assets/styles/page.module.css";

export default function ReadMe() {
    return (
        <div className={`${styles.col}`}>
            <section className={`${styles.col} content`}>
                <h3 className={`${styles.content_title} highlight`}>ReadMe. more?</h3>
                <b className={'highlight'}>2022.12. ~ current.</b>
                <b>NSPACE, remote.</b>
                <p>쿠폰 결제 기능 개발</p>
                <p>서비스 메인화면 UI/UX 개편 반영</p>
                <br/>
                <b className={'highlight'}>2021.12. ~ 2022.07.</b>
                <b>Studiomate, Seoul.</b>
                <p>문자메세지 템플릿 기능 개발</p>
                <p>자동 결제 화면 기능 개발</p>
                <p>React, Redux 프로젝트를 Next.js SWR 서비스로 개편: 게시판 기능 개발</p>
                <br/>
                <b className={'highlight'}>2020.03. ~ 2021.12.</b>
                <b>NSPACE, Seoul.</b>
                <p>서비스 UI/UX 개편 반영</p>
                <p>정기결제 화면 기능 개발</p>
                <p>스페이스클라우드 커버위크</p>
                <p>스페이스클라우드 임명장</p>
                <p>스페이스클라우드 핵심역량테스트</p>
            </section>
        </div>
    )
}