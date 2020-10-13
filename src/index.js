import React from 'react';
import ReactDom from 'react-dom';

// Import CSS
import './index.css';

// Setup Vars
const firstBook = {
  imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg',
  bookTitle: 'Room to the Broom',
  bookAuthor: 'Julia Donaldson'
};

const secondBook = {
  imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
  bookTitle: 'Dog Man: Grime and Punishment: From the Creator of Captain Underpants (Dog Man #9)',
  bookAuthor: 'Dave Pilkey'
};

// Stateless functional component... Always returns JSX
const BookList = () => {
  return (
  <section className='booklist'>
    <Book imageSrc = {firstBook.imageSrc} bookTitle = {firstBook.bookTitle} bookAuthor = {firstBook.bookAuthor}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt facere commodi ipsam ullam, voluptate aliquam nam eius error necessitatibus.</p>
    </Book>
    <Book imageSrc = {secondBook.imageSrc} bookTitle = {secondBook.bookTitle} bookAuthor = {secondBook.bookAuthor}/>
    {/* <Book/> */}
    {/* <Book/> */}
  </section>);
};

// Javascript in the JSX file should always return a value. It cannot have a statement
const Book = (props) => {
  const {imageSrc, bookTitle, bookAuthor, children} = props
  return (
  <article className='book'>
    <img src = {imageSrc}/>
    <h1>{bookTitle}</h1>
    <h4>{bookAuthor}</h4>
    {children}
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