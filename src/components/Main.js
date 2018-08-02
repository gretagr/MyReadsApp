// import React, { Component } from 'react';
// import PageTitle from './PageTitle'
// import { Link } from 'react-router-dom'
// import BookShelf from './BookShelf'
//
// export default class Main extends Component {
//   render () {
//     /* ================  shelves array of shelf objects for bookShelf rendering ==================*/
//     const shelves = [
//       {name: 'currentlyReading', title: 'Currenty Reading'},
//       {name: 'wantToRead', title: 'Want To Read'},
//       {name: 'read', title: 'Read'}
//     ]
//     const { allBooks, title, handleChange } = this.props
//
//     return (
//       <React.Fragment>
//
//         {/* ================  page title component ==================*/}
//
//         <PageTitle
//           title={title}
//         />
//
//         {/* ================  link to search page ==================*/}
//         <div className="open-search">
//           <Link to='/Search'>Add a book</Link>
//         </div>
//
//         {/* ================  Display Shelves:
//         /* for every object in shelves array, add BookShelf component
//         /* and send props to this component.
//         /* ==================*/}
//
//         <div className="list-books-content">
//
//           {shelves.map( shelve => (
//             <BookShelf
//               key={shelve.title}
//               shelfName={shelve.title}
//               shelfKey={shelve.name}
//               allBooks={allBooks}
//               handleChange={handleChange}
//             />
//           ))}
//
//         </div>
//       </React.Fragment>
//     )
//   }
// }
