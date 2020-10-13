import React from 'react';
import ReactDom from 'react-dom';

// Import CSS
import './index.css';

// Setup Vars
const books = [
  {
    id: 1,
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg',
    bookTitle: 'Room to the Broom',
    bookAuthor: 'Julia Donaldson'
  },
  {
    id: 2,
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
    bookTitle: 'Dog Man: Grime and Punishment: From the Creator of Captain Underpants (Dog Man #9)',
    bookAuthor: 'Dave Pilkey'
  }
]

// Stateless functional component... Always returns JSX
const BookList = () => {
  return (
  <section className='booklist'>
    {books.map((book) =>{
      return <Book key = {book.id} {... book}></Book>; 
    })}
  </section>);
};

// Javascript in the JSX file should always return a value. It cannot have a statement
const Book = (props) => {
  const {imageSrc, bookTitle, bookAuthor} = props;
  return (
  <article className='book'>
    <img src = {imageSrc}/>
    <h1>{bookTitle}</h1>
    <h4>{bookAuthor}</h4>
  </article>
  );
};

ReactDom.render(<BookList/>, document.getElementById('root'));

// JSX Rules
// 1. Always returns a single element
// 2. HTML semantics... Don't crete a div soup... Return div / section / article or Fragment
// React.Fragment doesn't create a div... Can be used as <> ... </>
// 3. Use camelCase for html attributes. E.g. onClick
// 4. Use className instead of class
// 5. Close every element. E.g. <img/>
// 6. Formatting and parenthesis in return