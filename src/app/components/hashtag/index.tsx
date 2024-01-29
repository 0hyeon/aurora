import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
const HashTag = () => {
  return (
    <>
      <div className={styles.hashtag_wrap}>
        <ul className={styles.hashtag_list}>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/유산균"}>
              #유산균
            </Link>
          </li>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/멀티팩"}>
              #멀티팩
            </Link>
          </li>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/오메가3"}>
              #오메가3
            </Link>
          </li>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/관절건강"}>
              #관절건강
            </Link>
          </li>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/간건강"}>
              #간건강
            </Link>
          </li>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/눈건강"}>
              #눈건강
            </Link>
          </li>
          <li className={styles.hashtag_list_li}>
            <Link className={styles.hashtag_list_a} href={"/멀티비타민"}>
              #멀티비타민
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HashTag;
