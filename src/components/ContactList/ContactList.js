import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactList__item" key={id}>
          <div className="ContactList__inner">
            <span>
              {name}: {number}
            </span>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
