import React, { Component } from "react";
import { Row, Col } from "antd";
import Map from "../component/Map";
import SideBar from "../component/SideBar";
import { connect } from "react-redux";

class Idletruck extends Component {
  render() {
    const { idleTruck, isSelected, selectedTruck } = this.props;
    return (
      <div>
        <Row>
          <Col lg={{ span: 5 }}>
            <SideBar data={isSelected ? selectedTruck : idleTruck}></SideBar>
          </Col>
          <Col lg={{ span: 19 }}>
            <Map data={isSelected ? selectedTruck : idleTruck}></Map>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  idleTruck: state.idleTruck,
  isSelected: state.isSelected,
  selectedTruck: state.selectedTruck,
});

export default connect(mapStateToProps, {})(Idletruck);
