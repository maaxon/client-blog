import "leaflet/dist/leaflet.css";

import L, { LatLngTuple } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

export const markerIcon = new L.Icon({
  iconUrl: icon.src,
  shadowUrl: shadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

export const CENTER: LatLngTuple = [51.505, -0.09];
export const ZOOM = 2;

export const titleLayerConfig = {
  attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

export const markerData: { position: LatLngTuple; label: string }[] = [
  { position: [25.265, 55.292], label: "Дубай, ОАЭ" },
  { position: [52.510, 13.398], label: "Берлин, Германия" },
  { position: [35.6762, 139.6503], label: "Токио, Япония" },
];
