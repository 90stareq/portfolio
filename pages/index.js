import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tareq&apos;s Portfolio</title>
        <meta name="description" content="Tareq | Shopify Devloper Portfolio" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.paper_bg}></div>
        <div className={styles.page__container}>
          <div className={styles.home__intro}>
            <div className={styles.home__name}>
              <span className={styles.intro__name}>Mahedi Hasan</span>
              <h1 className={styles.intro__title}>Tareq</h1>
            </div>
            <p className={styles.intro__desc}>
              A passionate Web Developer.
              <br />
              Experienced in Shopify Theme Development.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
