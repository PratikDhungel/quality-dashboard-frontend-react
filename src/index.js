import React from 'react';
import ReactDom from 'react-dom';

// Import CSS
import './index.css';
import { books } from './books';
import Book from './Book';

// Stateless functional component... Always returns JSX
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

// JSX Rules
// 1. Always returns a single element
// 2. HTML semantics... Don't crete a div soup... Return div / section / article or Fragment
// React.Fragment doesn't create a div... Can be used as <> ... </>
// 3. Use camelCase for html attributes. E.g. onClick
// 4. Use className instead of class
// 5. Close every element. E.g. <img/>
// 6. Formatting and parenthesis in return
