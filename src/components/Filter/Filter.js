import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Filter = ({ filter, onChange }) => {
  const filterInputId = uuidv4();

  return (
    <div>
      <p>
        <label htmlFor={filterInputId}>Find contacts by name</label>
      </p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        id={filterInputId}
      />
    </div>
  );
};

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
