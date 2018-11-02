import React, { Component } from "react";
import Product from "./../Product/Product";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        "Dashboard"
        {this.props.inventory}
        <div>{/* {this.props.children} */}</div>
        <Product />
      </div>
    );
  }
}
export default Dashboard;
