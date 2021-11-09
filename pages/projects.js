import React from "react";
import AllProjects from "../src/components/AllProjects";
import Nav from "../src/components/Nav";
import styles from "../styles/SingleItem.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_nav}>
          <Nav />
        </div>
        <AllProjects />;
      </div>
    </>
  );
}
