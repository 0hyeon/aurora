"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { cls } from "@/app/libs/client/utils";
import Best from "../best";
import { slideData } from "@/app/static/data";

type TabValue = "드시모네" | "또박케어LAB";
const Tabs = () => {
  const [method, setMethod] = useState<TabValue>("또박케어LAB");
  const onClickOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.innerText);
    setMethod(e.currentTarget.innerText as TabValue);
  };
  return (
    <>
      <div className={styles.tabs}>
        <div className={styles.tabButton}>
          <div
            className={cls(
              styles.tab,
              method === "드시모네" ? styles.tab_on : ""
            )}
            onClick={onClickOpen}
          >
            드시모네
          </div>
          <div
            className={cls(
              styles.tab,
              method === "또박케어LAB" ? styles.tab_on : ""
            )}
            onClick={onClickOpen}
          >
            또박케어LAB
          </div>
        </div>
      </div>
      {method && (
        <Best data={slideData.filter((el) => el.category === method)} />
      )}
    </>
  );
};

export default Tabs;
