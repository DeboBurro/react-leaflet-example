import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import "./styles.css";

class App extends Component {
  state = {
    latlong: this.get_position()
  };

  componentDidMount() {}

  get_position() {
    return [
      Number((Math.random() * 180 - 90).toFixed(8)),
      Number((Math.random() * 360 - 180).toFixed(8))
    ];
  }

  render() {
    return (
      <div>
        <MapContainer center={[51.505, -0.091]} zoom={1}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.latlong}>
            <Popup>Burro lives here.</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
