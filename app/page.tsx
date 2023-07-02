import Head from "next/head";
import Cover from "@/components/Cover";
import Intro from "@/components/Intro";
import Outro from "@/components/Outro";
import Chapters from "@/components/Chapters/Chapters";
import styles from '../assets/styles/page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Cover/>
            <Intro/>
            <Chapters />
            <Outro/>
        </main>
    );
}
