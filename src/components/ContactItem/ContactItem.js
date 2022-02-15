import React from 'react';
import s from './ContactItem.module.css'

const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <div className={s.item} >
    <h3>{name}</h3>
    <p>{number}</p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </div>
);

export default ContactItem;
