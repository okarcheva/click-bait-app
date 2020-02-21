import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableCardContainer from './components/filterable-card-container/FilterableCardContainer';

const CARDS = [{ 
    title: 'OH MY CAT GOD!',
    category: 'video',
    imageLink: 'images/Cat1.jpeg',
    sourceLink: 'https://www.youtube.com/watch?v=tUp9YtT4t68' 
  }, { 
    title: 'TOTAL CAT SHOCK!!!',
    category: 'text',
    imageLink: 'images/Cat2.jpg',
    sourceLink: 'https://www.youtube.com/watch?v=WEkSYw3o5is' 
  }, { 
    title: 'Mister Cat Grumpy odds of becoming the United States president', 
    category: 'image',
    imageLink: 'images/Cat3.jpg',
    sourceLink: 'https://www.youtube.com/watch?v=0Bmhjf0rKe8' 
  }, { 
    title: 'Believe your cat or not, but...',
    category: 'video',
    imageLink: 'images/Cat4.jpg',
    sourceLink: 'https://www.youtube.com/watch?v=JGBxxmkuBlg' 
  }, { 
    title: 'My cat goodness!!!',
    category: 'text',
    imageLink: 'images/Cat5.jpg',
    sourceLink: 'https://www.youtube.com/watch?v=yH2FPSupO6c' 
  }, { 
    title: 'Long long time ago in a cat galaxy far far away',
    category: 'image',
    imageLink: 'images/Cat6.jpeg',
    sourceLink: 'https://www.youtube.com/watch?v=0gN5CgXsjjU' } 
];

const CATEGORIES = ['text', 'image', 'video', 'file'];

ReactDOM.render(<FilterableCardContainer cards={CARDS} categories={CATEGORIES} />, document.getElementById('root'));
