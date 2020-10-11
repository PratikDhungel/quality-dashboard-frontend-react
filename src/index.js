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

const Book = () => {
  return (
  <article className='book'>
    <BookImage/>
    <BookTitle/>
    <BookAuthor/>
  </article>
  )
}

const BookImage = () => {
  return (
    <img src = "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"/>
  )
}

const BookTitle = () => {
  return (
    <h1>
      Room on the Broom
    </h1>
  )
}

const BookAuthor = () => {
  return (
    <h4>
      Julia Donaldson
    </h4>
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