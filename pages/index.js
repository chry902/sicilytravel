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

const items = [];
export default function Home() {
  const [item, setItem] = useState(items);
  const {
    state: { location },
  } = useLocationContext();
  const handleDragStart = (e) => e.preventDefault();
  useEffect(() => {
    location.forEach((element, index) => {
      items.push(
        // <Link href={`/country/${element.city || ""}`}>
        <div>
          <Image
            alt="location images"
            src={element.image[0]}
            onDragStart={handleDragStart}
            role="presentation"
            width={950}
            height={760}
            key={index}
          />
        </div>
        //  </Link>
      );
    });
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
              // layout="fill"
              src={logoruota}
              alt="logo ruota carro"
              width={500}
              height={500}
            />
          </div>
        </div>

        <section className={styles.componentWrapper}>
          <SicilyLogo />
        </section>

        <section className={styles.componentWrapper}>
          <Gallery location={item} />
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
