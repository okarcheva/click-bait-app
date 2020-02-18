import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableCardContainer from './components/filterable-card-container/FilterableCardContainer';

const CARDS = [
  { title: 'Каскадер выполнил что-то невообразимое!', category: 'video' },
  { title: 'Test 2', category: 'text' },
  { title: 'Test 3', category: 'image' },
  { title: 'Test 4', category: 'video' },
  { title: 'Test 5', category: 'text' },
  { title: 'Test 6', category: 'image'} 
];

const CATEGORIES = ['text', 'image', 'video', 'file'];

ReactDOM.render(<FilterableCardContainer cards={CARDS} categories={CATEGORIES} />, document.getElementById('root'));
