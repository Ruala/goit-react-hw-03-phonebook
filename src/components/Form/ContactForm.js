import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    showAlert: false,
  };

  nameInputId = uuidv4();
  phoneInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) {
      this.setState({ showAlert: true });
      return;
    }

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', showAlert: false });
  };

  render() {
    const { showAlert } = this.state;
    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <div className="ContactForm__item">
          <label className="ContactForm__label" htmlFor={this.nameInputId}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </div>
        <div className="ContactForm__item">
          <label className="ContactForm__label" htmlFor={this.phoneInputId}>
            Number
          </label>
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.phoneInputId}
          />
        </div>
        {showAlert && (
          <div className="ContactForm__alert">Please fill the form.</div>
        )}
        <button className="ContactForm__submit" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
