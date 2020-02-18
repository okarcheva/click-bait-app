import './CategoryList.css';
import React from 'react';
import Category from './../category/Category';

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick(category) {
    this.props.onCategoryClick(category);
  }

  render() {
    const categories = this.props.categories;
    const selectedCategories = this.props.selectedCategories;

    const mappedCategories = categories.map(category => {
      return (
      <Category 
        key={category}
        category={category}
        isSelected={selectedCategories.includes(category)}
        onCategoryClick={this.handleCategoryClick}
        className='category-list_category'
      ></Category>
      )
    });

    return (
      <div className='category-list'>{mappedCategories}</div>
    );
  }
}