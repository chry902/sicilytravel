// import "react-alice-carousel/lib/scss/alice-carousel.scss";
import styles from "../styles/Home.module.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import Head from "next/head";

import SicilyLogo from "../components/SicilyImg";
import Carousel from "../components/Carousel";
import LogoCitta from "../components/Cards/CardLogoCitta";
import Map from "../components/BoxMap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gira vota e furria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <h1 className={styles.title}>Gira vota e furria</h1>
      </header>
      <main>
        <section className={styles.componentWrapper}>
          <SicilyLogo />
        </section>

        <section className={styles.componentWrapper}>
          <Carousel />
        </section>

        <section className={styles.componentWrapper}>
          <LogoCitta />
          <LogoCitta />
          <LogoCitta />
          <LogoCitta />
          <LogoCitta />
        </section>

        <section className={styles.componentWrapper}>
          <Map lng={14.262851} lat={37.5099321} zoom={7.2} />
        </section>
      </main>
    </div>
  );
}
