import './Card.css';
import React from 'react';

export default class Card extends React.Component {
  render() { 
    const card = this.props.card;
    return (
      <div className='card'>
        <h1 
          className='card_header truncate'
          title={card.title}
        >{card.title}</h1> 
        <img 
          className='card_image'
          src={card.imageLink} 
          alt='Surprised cat'/>
        <span className='card_category'>{card.category}</span>
      </div>
    );
  }
}