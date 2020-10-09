import React, { Component, Fragment } from "react";

import "../assets/styles/components/contact.scss";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      success: "",
    };
  }

  validEmail = (mail) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail.toLowerCase());
  };

  validate() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    console.log(fields["name"]);

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Please insert your name";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Please insert an email";
    }

    //Email
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Message cannot be empty";
    }

    this.setState({ errors: errors });

    return formIsValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.fields["name"]);
    if (this.validate()) {
      this.state.success = "Your message was sent.";
    } else {
      alert("Form has errors.");
    }
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <Fragment>
        <main className="main">
          <h1 className="main__title">Contact</h1>
          <h3>HTML5 and Javascript validation</h3>
          <div className="form">
            <form name="contactForm" onSubmit={this.handleSubmit.bind(this)}>
              <input
                className="form__input"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="name"
                type="text"
                value={this.state.fields["name"]}
              />
              <small className="form__error">{this.state.errors["name"]}</small>
              <input
                className="form__input"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="email"
                type="email"
                value={this.state.fields["email"]}
              />
              <small className="form__error">
                {this.state.errors["email"]}
              </small>
              <textarea
                className="form__message"
                id="message"
                onChange={this.handleChange.bind(this, "message")}
                cols="30"
                rows="10"
                value={this.state.fields["message"]}
              ></textarea>
              <small className="form__error">
                {this.state.errors["message"]}

                <input className="form__button" type="submit" value="Send" />
              </small>{" "}
              <small className="form__success">{this.state.success}</small>
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}
