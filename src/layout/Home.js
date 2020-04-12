import React, { Component } from "react";
import { Tabs, Typography } from "antd";
import { connect } from "react-redux";
import { fetchData } from "../redux/action";
import { Row } from "antd";
import RunningTruck from "./RunningTruck";
import TotalTruck from "./TotalTruck";
import StoppedTruck from "./StoppedTruck";
import Idletruck from "./Idletruck";
import ErrorTruck from "./ErrorTruck";
import SelectedTruck from "./SelectedTruck";

const { TabPane } = Tabs;
const { Title } = Typography;

class Home extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    // fetch Data on Component Loaded;
    fetchData();
  }

  render() {
    const {
      totalCount,
      runningTrucks,
      stoppedTruck,
      idleTruck,
      errorTruck,
      allTrucks,
    } = this.props;

    return (
      <Row>
        <Tabs
          defaultActiveKey="1"
          type="card"
          tabBarExtraContent={<SelectedTruck data={allTrucks}></SelectedTruck>}
        >
          <TabPane
            tab={
              <span className="tab__align">
                Total Trucks
                <Title level={3}>{totalCount || 0}</Title>
              </span>
            }
            key="1"
          >
            <TotalTruck></TotalTruck>
          </TabPane>
          <TabPane
            tab={
              <span className="tab__align">
                Running trucks
                <Title level={3}>{runningTrucks || 0}</Title>
              </span>
            }
            key="2"
          >
            <RunningTruck></RunningTruck>
          </TabPane>
          <TabPane
            tab={
              <span className="tab__align">
                Stopped trucks
                <Title level={3}>{stoppedTruck || 0}</Title>
              </span>
            }
            key="3"
          >
            <StoppedTruck></StoppedTruck>
          </TabPane>
          <TabPane
            tab={
              <span className="tab__align">
                Idle trucks
                <Title level={3}>{idleTruck || 0}</Title>
              </span>
            }
            key="4"
          >
            <Idletruck></Idletruck>
          </TabPane>
          <TabPane
            tab={
              <span className="tab__align">
                Error trucks
                <Title level={3}>{errorTruck || 0}</Title>
              </span>
            }
            key="5"
          >
            <ErrorTruck></ErrorTruck>
          </TabPane>
        </Tabs>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  totalCount: state.totalCount,
  runningTrucks: state.runningCount,
  stoppedTruck: state.stoppedCount,
  idleTruck: state.idleCount,
  errorTruck: state.errorCount,
  allTrucks: state.trckDetails,
});

export default connect(mapStateToProps, { fetchData })(Home);
