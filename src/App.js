import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          name: "hat",
          price: 4.99,
          imgurl: "image link"
        }
      ]
    };
  }

  // i dont think i am doing any of this right...

  componenetDidMount() {
    axios.get(`/api/inventory/${id}`).then(response => {
      this.setState({ inventory: results.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
