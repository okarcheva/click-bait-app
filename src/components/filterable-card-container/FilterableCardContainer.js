import './FilterableCardContainer.css';
import React from 'react';
import Search from './../search/Search';
import CategoryList from './../category-list/CategoryList';
import CardContainer from './../card-container/CardContainer';

export default class FilterableCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedCategories: []
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText
    });
  }

  handleCategoryClick(category) {
    this.setState((state, props) => {
      if (state.selectedCategories.includes(category)) {
        const newSelectedCategories = state.selectedCategories.filter(selectedCategory => selectedCategory !== category);
        return { selectedCategories:  newSelectedCategories }
      }
      return { selectedCategories: state.selectedCategories.concat([category]) }
  });
  }

  render() {
    return (
      <div className='filterable-card-container'>
        <Search 
          filterText={this.state.filterText} 
          onFilterTextChange={this.handleFilterTextChange}/>
        <CategoryList 
          selectedCategories={this.state.selectedCategories} 
          onCategoryClick={this.handleCategoryClick}
          categories={this.props.categories} />
        <CardContainer 
          filterText={this.state.filterText} 
          selectedCategories={this.state.selectedCategories}
          cards={this.props.cards} />
      </div>
    )
  }
}