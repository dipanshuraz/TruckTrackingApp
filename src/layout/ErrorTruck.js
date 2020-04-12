import React, { Component } from "react";
import { Row, Col } from "antd";
import Map from "../component/Map";
import SideBar from "../component/SideBar";
import RedMarker from "../marker/red.png";
import { connect } from "react-redux";

class ErrorTruck extends Component {
  render() {
    const { errorTruck, selectedTruck, isSelected } = this.props;
    return (
      <div>
        <Row>
          <Col lg={{ span: 5 }}>
            <SideBar data={isSelected ? selectedTruck : errorTruck}></SideBar>
          </Col>
          <Col lg={{ span: 19 }}>
            <Map
              icon={RedMarker}
              data={isSelected ? selectedTruck : errorTruck}
            ></Map>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errorTruck: state.errorTruck,
  isSelected: state.isSelected,
  selectedTruck: state.selectedTruck,
});

export default connect(mapStateToProps, {})(ErrorTruck);
