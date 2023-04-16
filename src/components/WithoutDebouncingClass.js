import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "../index.css";

export default class WithoutDebouncingClass extends React.Component {
  state = {
    input: "",
    result: [],
    errorMsg: "",
    isLoading: false,
  };

  handleInputChange = (event) => {
    const input = event.target.value;

    this.setState({ input, isLoading: true });

    axios
      .get(`https://www.reddit.com/search.json?q=${input}`)
      .then((result) => {
        this.setState({
          result: result.data.data.children,
          errorMsg: "",
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          errorMsg: "Something went wrong. Try again later.",
          isLoading: false,
        });
      });
  };

  render() {
    const { input, result, errorMsg, isLoading } = this.state;
    return (
      <div className="container">
        <div className="search-section">
          <h1>Debouncing Demo</h1>
          <Form>
            <Form.Group controlId="search">
              <Form.Control
                type="search"
                placeholder="Enter text to search"
                onChange={this.handleInputChange}
                value={input}
                autoComplete="off"
              />
            </Form.Group>
            {errorMsg && <p>{errorMsg}</p>}
            {isLoading && <p className="loading">Loading...</p>}
            <ul className="search-result">
              {result.map((item, index) => (
                <li key={index}>{item.data.title}</li>
              ))}
            </ul>
          </Form>
        </div>
      </div>
    );
  }
}
