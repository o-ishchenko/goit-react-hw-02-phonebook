import React, { Component } from 'react';
import s from './App.module.css';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Olga Ishchenko', number: '459-12-56' },
      { id: 'id-2', name: 'Roman Lysenko', number: '443-89-12' },
      { id: 'id-3', name: 'Natasha Belodedenko', number: '645-17-79' },
      { id: 'id-4', name: 'Igor Napolov', number: '227-91-26' },
      { id: 'id-5', name: 'Vitaliy Gapontsev', number: '827-91-23' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
