import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estate App</title>
        <meta
          name="description"
          content="Checkout quality and affordable housing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.sideNote}>
          <span>Vertically integrated</span>
          <br />
          <span>Chicago based real</span>
          <br />
          <span>estate company.</span>
        </div>
        <div className={styles.hero}>
          <span>You&rsquo;re</span>
          <br />
          <span>closer to</span>
          <br />
          <span>home</span>
        </div>
      </main>
      <video className={styles.homeVideo} autoPlay muted loop>
        <source src="/estate.mp4" />
      </video>
    </div>
  );
}
