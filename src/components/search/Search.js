import './Search.css';
import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  render() {
    const filterText = this.props.filterText;
    return (
      <form className='search'>
        <input 
          className='search_input' 
          type='text' 
          placeholder='Search...'
          value={filterText}
          onChange={this.handleFilterTextChange} />
      </form>
    );
  }
}