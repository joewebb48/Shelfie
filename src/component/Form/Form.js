import React, { Component } from "react";
import axios from "axios";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {},
      price: 0,
      imgurl: ""
    };
  }
  componenetDidMount() {
    let { id } = this.props.match.params;
    axios.get(`/api/products/${id}`).then(response => {
      let product = response.data[0];
      this.setState({
        product,
        nameInput: product.name,
        priceInput: product.price,
        imgurl: product.imgurl
      });
    });
  }

  handleNameChange = e => {
    this.setState({ nameInput: e.target.value });
  };

  handlePriceChange = e => {
    this.setState({ priceInput: e.target.value });
  };

  handleImgurlChange = e => {
    this.setState({ imgurlInput: e.target.value });
  };

  saveChanges = () => {
    let { nameInput, priceInput, imgurlInput } = this.state;
    let { id } = this.state.product;
    let newProductValue = {
      name: nameInput,
      price: priceInput,
      imgurl: imgurlInput
    };
    axios.put(`/api/products/${id}`, newProductValue).then(response => {
      let product = response.data[0];
    });
  };

  render() {
    return (
      <div className="product-main-form">
        <div className="product-form">
          <input
            value={this.state.nameInput}
            onChange={this.handleNameChange}
          />

          <input
            value={this.state.priceInput}
            onChange={this.handlePriceChange}
          />

          <input
            value={this.state.imgurlInput}
            onChange={this.handleImgurlChange}
          />
          <button>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
export default Form;
