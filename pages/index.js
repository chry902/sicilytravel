import styles from "../styles/Home.module.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import Head from "next/head";
import Image from "next/image";
import SicilyLogo from "../components/SicilyImg";

import LogoCitta from "../components/Cards/CardLogoCitta";
import Map from "../components/BoxMap";
import logoruota from "../components/Images/ruota.png";

import { useLocationContext } from "../components/context/Context";
import { useEffect, useState } from "react";
import Gallery from "../components/Carousel";

export default function Home() {
  const {
    state: { location },
  } = useLocationContext();
  const [state, setState] = useState([]);

  useEffect(() => {
    let arrImg = [];
    arrImg = [
      ...arrImg,
      ...location[0].image,
      ...location[1].image,
      ...location[2].image,
    ];
    setState(arrImg);
  }, [location]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gira, vota e furria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
        />
      </Head>

      <main>
        <div className={styles.header}>
          <div className={styles.titleContanere}>
            <h1 className={styles.title}>Gira, vota e furria</h1>
          </div>
          <div className={styles.logoContain}>
            <Image
              className={styles.logoRuota}
              src={logoruota}
              alt="logo ruota carro"
              width={500}
              height={500}
            />
          </div>
        </div>
        <section className={styles.componentWrapper}>
          <Gallery state={state} />
        </section>

        <section className={styles.componentWrapper}>
          <SicilyLogo />
        </section>

        <section className={styles.componentWrapper}>
          <LogoCitta location={location} />
        </section>

        <section className={styles.componentWrapper}>
          <Map lng={14.262851} lat={37.5099321} zoom={6.6} />
        </section>
      </main>
    </div>
  );
}
