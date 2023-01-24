import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus={true}
            value={this.state.account.username}
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.account.password}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default Login;
