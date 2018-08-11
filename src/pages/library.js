// import React, { Component } from 'react'
// import { Container, Row, Col6Medium4, Thumbnail, TitleWrapper, MainTextWrapper } from '../components/General'
// import Footer from '../components/Footer'
// import books from '../utils/books-data'
// import SearchBox from '../components/SearchBox'


// const BookItem = ({ link, img, title, author }) => {
//   return (
//     <Col6Medium4>
//       <Thumbnail>
//         <a href={`${link}`} target="_blank" rel="noopener noreferrer">
//           <img src={img} alt='pic' />
//           <h6>
//             <span>{title}</span>
//           </h6>
//           <p>
//             <small>{author}</small>
//           </p>
//         </a>
//       </Thumbnail>
//     </Col6Medium4>
//   )
// }

// export default class Library extends Component {
//   state = {
//     books,
//     searchField: ''
//   }
//   onSearchChange = (event) => {
// 		this.setState({ searchField: event.target.value })
// 	}

//   render() {
//     const { searchField, books } = this.state
// 		const filteredBooks = books.filter( book => {
// 			return (
// 				book.title.toLowerCase().includes(searchField.toLowerCase())
// 				|| book.author.toLowerCase().includes(searchField.toLowerCase())
// 			)
//     })
    
//     return (
//       <div>
//         <Container>
//           <TitleWrapper>
//             <h1>Library</h1>
//           </TitleWrapper>

//           <MainTextWrapper>
//             <p>
//               The reading list below contains the books (at least the ones
//               it is worth mentioning) I've read over the years.
//             </p>
//             <p>
//               Some of these taught me important life lessons and
//               completely changed the way I think and live my life today.
//               Check it out and maybe you will find your next book!
//             </p>

//             <SearchBox searchChange={this.onSearchChange}/>

//             <Row>
//               {
//                 filteredBooks.map((book, i) => (
//                   <BookItem
//                     key={i}
//                     link={books[i].link}
//                     img={books[i].img}
//                     title={books[i].title}
//                     author={books[i].author}
//                   />
//                 ))
//               }
//             </Row>
//           </MainTextWrapper>
//         </Container>

//         <Footer />
//       </div>
//     )
//   }
// }



















import React, { Component } from 'react'
import { Container, Row, Col6Medium4, Thumbnail, TitleWrapper, MainTextWrapper } from '../components/General'
import Footer from '../components/Footer'
import books from '../utils/books-data'
import SearchBox from '../components/SearchBox'


const BookItem = ({ link, img, title, author }) => {
  return (
    <Col6Medium4>
      <Thumbnail>
        <a href={`${link}`} target="_blank" rel="noopener noreferrer">
          <img src={img} alt='pic' />
          <h6>
            <span>{title}</span>
          </h6>
          <p>
            <small>{author}</small>
          </p>
        </a>
      </Thumbnail>
    </Col6Medium4>
  )
}

const BookList = ({ books }) => {
	return (
    <div>
      {
        books.map((book, i) => (
          <BookItem
            key={i}
            link={books[i].link}
            img={books[i].img}
            title={books[i].title}
            author={books[i].author}
          />
        ))
      }
		</div>
	);
}

export default class Library extends Component {
  state = {
    books,
    searchField: ''
  }
  onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

  render() {
    const { searchField, books } = this.state
		const filteredBooks = books.filter( book => {
			return (
				book.title.toLowerCase().includes(searchField.toLowerCase())
				|| book.author.toLowerCase().includes(searchField.toLowerCase())
			)
    })
    
    return (
      <div>
        <Container>
          <TitleWrapper>
            <h1>Library</h1>
          </TitleWrapper>

          <MainTextWrapper>
            <p>
              The reading list below contains the books (at least the ones
              it is worth mentioning) I've read over the years.
            </p>
            <p>
              Some of these taught me important life lessons and
              completely changed the way I think and live my life today.
              Check it out and maybe you will find your next book!
            </p>

            <SearchBox searchChange={this.onSearchChange}/>

            <Row>
              <BookList books={filteredBooks} />
            </Row>
          </MainTextWrapper>
        </Container>

        <Footer />
      </div>
    )
  }
}




