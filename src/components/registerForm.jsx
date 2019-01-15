import React from "react";
import Joi from "joi-browser";
import From from "./common/form";

class RegisterForm extends From {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} />
        {this.renderInput("username", "Username")}
        {this.renderInput("Password", "Password", "password")}
        {this.renderInput("name", "name")}
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegisterForm;
