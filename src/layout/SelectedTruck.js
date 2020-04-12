import React, { Component } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { selectTruck } from "../redux/action";

const { Option } = Select;
class SelectedTruck extends Component {
  handleChange = (value) => {
    const { selectTruck } = this.props;
    selectTruck(value);
  };
  render() {
    const { data } = this.props;
    return (
      <div className="input__flex">
        <Select
          mode="multiple"
          style={{ minWidth: "300px" }}
          placeholder="Select Truck"
          onChange={this.handleChange}
        >
          {data.map((item) => (
            <Option key={item.truckNumber} value={item.truckNumber}>
              {item.truckNumber}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default connect(null, { selectTruck })(SelectedTruck);
