import React from "react";
import "./styles.css";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
//import L from "leaflet";
import "leaflet/dist/leaflet.css";

// const locationIcon = L.icon({
//   iconUrl: "leaf-green.png",
//   shadowUrl: "leaf-shadow.png",

//   iconSize: [38, 95], // size of the icon
//   shadowSize: [50, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
const MyMap = props => {
  return (
    <Map center={props.position} zoom={props.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MyMap;
