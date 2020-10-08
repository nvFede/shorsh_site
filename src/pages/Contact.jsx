import React, { Component, Fragment } from "react";

import "../assets/styles/components/contact.scss";

const initialState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: "",
};

export default class Contact extends Component {
  state = initialState;

  validEmail = (mail) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail.toLowerCase());
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "name cannot be empty.";
    }
    if (!this.validEmail(this.state.email)) {
      emailError = "Please insert a valid email.";
    }

    if (!this.state.message) {
      messageError = "Please write the message.";
    }

    if (nameError || emailError || messageError) {
      this.setState({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <Fragment>
        <main className="main">
          <h1 className="main__title">Contact</h1>

          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form__input"
                name="name"
                placeholder="name"
                type="text"
              />
              <small className="form__error">{this.state.nameError}</small>
              <input
                className="form__input"
                name="email"
                placeholder="email"
                type="email"
              />
              <small className="form__error">{this.state.emailError}</small>
              <textarea
                className="form__message"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <small className="form__error">{this.state.messageError}</small>
              <input className="form__button" type="submit" value="Send" />
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}
