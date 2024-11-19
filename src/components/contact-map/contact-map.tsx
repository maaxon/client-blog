"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { markerData, markerIcon } from "./contact-map.config";
import styles from "./contact-map.module.scss";

export const ContactMap = () => (
  <div className={styles.mapContainer}>
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerData.map(({ position, label }) => (
        <Marker key={label} position={position} icon={markerIcon}>
          <Popup>{label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);
