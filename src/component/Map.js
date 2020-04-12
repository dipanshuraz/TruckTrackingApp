import React, { Component } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyles.json";

const defaultMapOptions = {
  styles: mapStyles,
};

class MapContainer extends Component {
  state = {
    lat: 30.3819,
    lng: 75.546,
  };

  componentDidMount() {
    const { data } = this.props;
    let item = data[0];
    let lat = 30.3819;
    let lng = 75.546;

    if (item) {
      lat = item.lastWaypoint.lat;
      lng = item.lastWaypoint.lng;
    }

    this.setState({
      lat,
      lng,
    });
  }

  render() {
    const { data } = this.props;
    return (
      <GoogleMap
        id="example-map"
        mapContainerStyle={{ height: "90vh", width: "100%" }}
        zoom={8}
        center={this.state}
        options={defaultMapOptions}
      >
        {data.map((location, i) => (
          <Marker
            clickable={true}
            onClick={() => { }}
            key={i}
            position={{
              lat: location.lastWaypoint.lat,
              lng: location.lastWaypoint.lng,
            }}
            icon={location.mapMarker}
          />
        ))}
      </GoogleMap>
    );
  }
}

export default MapContainer;
