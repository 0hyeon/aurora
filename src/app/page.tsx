import Image from "next/image";
import styles from "./page.module.css";
import Slide from "./components/slide";
import SlideSmall from "./components/slideSmall";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slide />
      <SlideSmall />
    </main>
  );
}
