import './Category.css';
import React from 'react';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onCategoryClick(this.props.category);
  }

  render() {
    const category = this.props.category;
    let categoryClasses = 'category';
    if (this.props.isSelected) {
      categoryClasses += ' category__selected'
    }

    return (
      <div 
        className={categoryClasses}
        onClick={this.handleClick}
      >{category}</div>
    );
  }
}