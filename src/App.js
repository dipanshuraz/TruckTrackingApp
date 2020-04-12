import React from "react";
import Home from "./layout/Home";
import "./App.css";
import "antd/dist/antd.css";
import { LoadScript } from "@react-google-maps/api";

function App() {
  return (
    <div className="App">
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAiile4w2sV-hOBtFdAgwKvVN1b4HOwH08"
        libraries={["places"]}
      >
        <Home></Home>
      </LoadScript>
    </div>
  );
}

export default App;
