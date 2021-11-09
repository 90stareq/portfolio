import React from "react";
import Image from "next/image";
import styles from "../../styles/SingleItem.module.css";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

export default function SingleProject({
  img,
  overviewText,
  sitename,
  sitelink,
}) {
  return (
    <>
      <div className={styles.project__item}>
        <div className={styles.project__item__img}>
          <Image
            className={styles.project__item__img_item}
            src={img}
            alt="Picture of the project"
            layout="responsive"
            objectFit="cover"
            width={6}
            height={4}
          />
          {/* <img className={styles.project__item__img_item} src={img} alt="" /> */}
        </div>
        {/* <div style={{ background: `url(${img})` }} className={styles.item__img}>
        </div> */}
        <div className={styles.item__info}>
          <div className={styles.item__text}>{overviewText}</div>
          <div className={styles.item__link}>
            <a href={sitelink}>{sitename}</a>
          </div>
          <div className={styles.item__languages}>
            <div className={styles.item__languages__text}>Tech Stack: </div>
            <div className={styles.item__languages__items}>
              <span className={styles.language}>Liquid</span>
              <span className={styles.language}>Javascript</span>
              <span className={styles.language}>CSS</span>
              <span className={styles.language}>HTML</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
