import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import mapboxgl from "mapbox-gl";

const Map = ({ lng, lat, zoom }) => {
  const longitute = lng || 14.25;
  const latitude = lat || 37.75;
  const zoomScreen = zoom || 9;

  // MapboxGL
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXhwbG9yaWVuY2UiLCJhIjoiY2tvMWpsbGk0MDk0NzJvcTl6dHV3bGw0YyJ9.dBUiDNEml9qrhEHuKnitfA";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitute, latitude],
      zoom: zoomScreen,
      attributionControl: false,
      projection: "globe",
    });

    // Marker map
    const marker = new mapboxgl.Marker({
      color: "brown",
    })
      .setLngLat([longitute, latitude])
      // Set a Popup message into the marker
      // .setPopup(new mapboxgl.Popup().setHTML('<h1>Message_here</h1>'))
      .addTo(map);

    // Map controls (zoom in / out)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
  }, [longitute, latitude, zoomScreen]);

  return (
    <>
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div id="mapContainer" className={styles.map}></div>
    </>
  );
};

export default Map;
