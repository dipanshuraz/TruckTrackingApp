import React, { Component } from "react";
import { Row, Col } from "antd";
import Map from "../component/Map";
import SideBar from "../component/SideBar";
import { connect } from "react-redux";

class StoppedTruck extends Component {
  render() {
    const { stoppedTruck, isSelected, selectedTruck } = this.props;
    return (
      <div>
        <Row>
          <Col lg={{ span: 5 }}>
            <SideBar data={isSelected ? selectedTruck : stoppedTruck}></SideBar>
          </Col>
          <Col lg={{ span: 19 }}>
            <Map data={isSelected ? selectedTruck : stoppedTruck}></Map>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stoppedTruck: state.stoppedTrck,
  isSelected: state.isSelected,
  selectedTruck: state.selectedTruck,
});

export default connect(mapStateToProps, {})(StoppedTruck);
