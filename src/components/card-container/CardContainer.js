import './CardContainer.css';
import React from 'react';
import Card from './../card/Card';

export default class CardContainer extends React.Component {
  render() {
    let cards = this.filterCards();

    const mappedCards = cards
      .map(card => {
        return (
          <Card 
            key={card.title}
            className='card-container_card'
            card={card}
          ></Card>
        );
      });

    return (
      <div className='card-container'>{mappedCards}</div>
    );
  }

  filterCards() {
    let cards = this.props.cards;
    const filterText = this.props.filterText.trim().toLowerCase();
    const selectedCategories = this.props.selectedCategories;

    if (filterText.length > 0) {
      cards = cards.filter(card => card.title.toLowerCase().indexOf(filterText) !== -1); 
    }  

    if (selectedCategories.length > 0) {
      cards = cards.filter(card => selectedCategories.includes(card.category));
    }

    return cards;
  }
}