import React from "react";

class BookSearch extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      author: "",
      title: "",
      country: "",
      language: "",
      year: 0
    }
  }
  
  render() {

// INCOMPLETE/FAILED ATTEMPT -MARIO
  
    const handleChange = (e) => {
      const value = e.target.value
        this.setState({
          [e.target.className]: value})
//         console.log(this.state.authorInput)
    }    
          
     const showBooks = () => {
       //print states
       console.log("states: ",this.state.author, this.state.title, this.state.country, this.state.language, this.state.year)
       
//      const multiFilter = () => {
//   const filterKeys = Object.keys(this.state);
//   return this.props.books.filter((eachObj) => {
//     return filterKeys.every(eachKey => {
//       if (!this.state[eachKey].length) {
//         return true; // passing an empty filter means that filter is ignored.
//       }
//       return (this.state[eachKey].toString()).toLowerCase().includes((eachObj[eachKey].toString()).toLowerCase());
//     });
//   });
// }  
       
// const filteredResult = this.props.books.filter(book => Object.values(book).some(val => typeof val === "string" && val.includes(this.state.author) || val === "number" && val.includes(this.state.year)));
       
let filteredResult = this.props.books.filter((book) => {
  this.state.some(filterEl => book[this.state.author] === this.state.author)
});
       
      return filteredResult.map((book) => {  
        return (         
        <div className="book">
            author: {book.author} <br/>
            country: {book.country} <br/>
            language: {book.language} <br/>
            pages: {book.pages} <br/>
            title: {book.title} <br/>
            year: {book.year} <br/>
            <br/>
          </div>
        )
      })
       
       
    }
    
//     const showBooks = () => {
//       return this.props.books.map((book) => {
//         return (
         
//         <div className="book">
//             author: {book.author} <br/>
//             country: {book.country} <br/>
//             language: {book.language} <br/>
//             pages: {book.pages} <br/>
//             title: {book.title} <br/>
//             year: {book.year} <br/>
//             <br/>
//           </div>
//         )
//       })
//     }
    
    const showInputs = () => {
      return(
              <div>
          author <input className="author" onChange={handleChange}/> <br/>
          title <input className="title" onChange={handleChange}/> <br/>
          country <input className="country" onChange={handleChange}/> <br/>
          language <input className="language" onChange={handleChange}/> <br/>
          year <input className="year" onChange={handleChange}/> <br/>
          <br/>
        </div>
      )
    }
    
    //console.log(this.props.books)
    return (
      <>
        {showInputs()}
        {showBooks()} 
      </>
      
    );
  }
}

export default BookSearch;
