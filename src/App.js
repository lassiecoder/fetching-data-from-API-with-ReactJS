import React, { Component } from "react";
import app from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div id="loading">Loading....</div>;
    } else {
      return (
        <div className="App">
          <h1 id="topic"> Fetching data from API with ReactJS </h1>
          <div className="container">
            {items.map((item) => (
              <div key={item.id} className="childContainer">
                <h1>{item.name}</h1>
                <h5>Email: {item.email}</h5>
                <h5>
                  Address: <br></br>
                  <div className="details">
                    Street: {item.address.street}
                    <br></br>
                    <br></br>
                    City: {item.address.city}
                    <br></br>
                    <br></br>
                    Zipcode: {item.address.zipcode}
                  </div>
                </h5>
                <h5>Contact no: {item.phone}</h5>
                <h5>Website: {item.website}</h5>
                <h5>
                  Company: <br></br>
                  <div className="details">
                    Name: {item.company.name}
                    <br></br>
                    <br></br>
                    Business: {item.company.bs}
                  </div>
                </h5>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
