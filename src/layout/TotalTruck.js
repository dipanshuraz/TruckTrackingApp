import React, { Component } from "react";
import { Row, Col } from "antd";
import Map from "../component/Map";
import SideBar from "../component/SideBar";
import { connect } from "react-redux";

class TotalTruck extends Component {
  render() {
    const { totalTruck, isSelected, selectedTruck } = this.props;
    return (
      <div>
        <Row>
          <Col lg={{ span: 5 }}>
            <SideBar data={isSelected ? selectedTruck : totalTruck}></SideBar>
          </Col>
          <Col lg={{ span: 19 }}>
            <Map data={isSelected ? selectedTruck : totalTruck}></Map>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalTruck: [...state.runningTrck, ...state.stoppedTrck, ...state.idleTruck],
  isSelected: state.isSelected,
  selectedTruck: state.selectedTruck,
});

export default connect(mapStateToProps, {})(TotalTruck);
