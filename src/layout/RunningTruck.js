import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import Map from "../component/Map";
import SideBar from "../component/SideBar";

class RunningTruck extends Component {
  render() {
    const { runningTrck, selectedTruck, isSelected } = this.props;
    return (
      <div>
        <Row>
          <Col lg={{ span: 5 }}>
            <SideBar data={isSelected ? selectedTruck : runningTrck}></SideBar>
          </Col>
          <Col lg={{ span: 19 }}>
            <Map data={isSelected ? selectedTruck : runningTrck}></Map>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  runningTrck: state.runningTrck,
  isSelected: state.isSelected,
  selectedTruck: state.selectedTruck,
});

export default connect(mapStateToProps, {})(RunningTruck);
