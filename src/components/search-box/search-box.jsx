import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHandle }) => {
  return (
    <input className="search"  type="search" placeholder={placeholder} onChange={onChangeHandle} />
  );
};

export default SearchBox;
