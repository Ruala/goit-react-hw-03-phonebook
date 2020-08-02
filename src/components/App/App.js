import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../Container';
import ContactForm from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => {
      const isName =
        prevState.contacts.find(item => item.name === name) !== undefined;

      isName && alert(`${name} is already in contacts.`);

      return isName
        ? prevState
        : {
            contacts: [
              ...prevState.contacts,
              { id: uuidv4(), name: name, number: number },
            ],
          };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const contacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
