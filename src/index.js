import React from 'react'
import ReactDom from 'react-dom'

// Import CSS
import './index.css'

// Stateless functional component... Always returns JSX
const BookList = () => {
  return (
  <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>)
}

// Javascript in the JSX file should always return a value. It cannot have a statement
const Book = () => {
  const bookTitle = 'Room on the Broom'
  const bookAuthor = 'Julia Donaldson'
  return (
  <article className='book'>
    <img src = "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"/>
    <h1>{bookTitle}</h1>
    <h4>{bookAuthor.toUpperCase()}</h4>
  </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'))

// JSX Rules
// 1. Always returns a single element
// 2. HTML semantics... Don't crete a div soup... Return div / section / article or Fragment
// React.Fragment doesn't create a div... Can be used as <> ... </>
// 3. Use camelCase for html attributes. E.g. onClick
// 4. Use className instead of class
// 5. Close every element. E.g. <img/>
// 6. Formatting and parenthesis in return