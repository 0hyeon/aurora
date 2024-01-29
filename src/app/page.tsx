import Image from "next/image";
import styles from "./page.module.css";
import Slide from "./components/slide";
import SlideSmall from "./components/slideSmall";
import Best from "./components/best";
import HashTag from "./components/hashtag";
import Tabs from "./components/tabs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slide />
      <div className={styles.middleBox}>
        <SlideSmall />
        <Best />
        <HashTag />
        <Tabs />
      </div>
    </main>
  );
}
