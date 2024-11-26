"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { CENTER, markerData, markerIcon, titleLayerConfig, ZOOM } from "./config";
import styles from "./style.module.scss";

export const ContactMap = () => (
  <div className={styles.mapContainer}>
    <MapContainer
      center={CENTER}
      zoom={ZOOM}
      scrollWheelZoom
      className={styles.map}
    >
      <TileLayer
        {...titleLayerConfig}
      />
      {markerData.map(({ position, label }) => (
        <Marker key={label} position={position} icon={markerIcon}>
          <Popup>{label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);
