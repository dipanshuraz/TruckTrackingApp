import React, { Component } from "react";
import { List } from "antd";
import getErrorTrucks from "../utils/getTime";

export default class SideBar extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className="sidebar__list">
                <div>
                  <div>
                    <h4>
                      {item.truckNumber} <i className="fas fa-truck"></i>
                    </h4>
                  </div>
                  <div>
                    <span>Hours</span>
                  </div>
                </div>
                <div>
                  <div>{`${
                    item.lastRunningState.truckRunningState === 1
                      ? "Running Since"
                      : "Stopped Since"
                  } ${getErrorTrucks(item, true)}`}</div>
                  <div>{item.lastWaypoint.speed.toFixed(2)} km/hr</div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
