import React from "react";
import PropTypes from "prop-types";
import s from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => (
            <ul className={s.list}>
        {contacts.map(({ id, name, number}) => (
            <li className={s.item} key={id}>
                <h3>{name}</h3>
                <p>{number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
                  
            </li>
          )) }
        </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
}
export default ContactList