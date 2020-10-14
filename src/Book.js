// Javascript in the JSX file should always return a value. It cannot have a statement
import React from 'react';
const Book = (props) => {
  const showAuthorName = (bookAuthor) => {
    console.log(bookAuthor);
  };

  const { imageSrc, bookTitle, bookAuthor } = props;
  return (
    <article className='book'>
      <img src={imageSrc} />
      <h1>{bookTitle}</h1>
      <h4>{bookAuthor}</h4>
      <button type='button' onClick={() => showAuthorName(bookAuthor)}>
        Click to show author name
      </button>
    </article>
  );
};

// There can only be one default export per file but can have multiple named exports
export default Book;
