import React, { Component } from 'react';
import css from './ContactItem.module.css';

export default class ContactItem extends Component {
  render() {
    return (
      <li className={css.li}>
        <p>
          {this.props.contact.name}:{this.props.contact.number}
        </p>
        <button
          type="button"
          className={css.btn}
          onClick={() => this.props.deleteContact(this.props.contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
