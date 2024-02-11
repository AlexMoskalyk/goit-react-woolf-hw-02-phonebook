import React, { Component } from 'react';
import ContactItem from './ContactItem';

export default class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={this.props.deleteContact}
          />
        ))}
      </ul>
    );
  }
}
