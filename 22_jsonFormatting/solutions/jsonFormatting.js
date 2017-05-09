const booksAuthors = require('../books.json');

const jsonFormatting = (obj) => {
  const booksData = obj.data;
  let authors = {};
  let books = [];

  booksData.forEach(book => {

    books.push({
      id: book.book_id,
      title: book.title,
      description: book.description,
      genre: book.genre,
      cover: book.cover,
    });

    authors[book.book_id] = authors[book.book_id] || [];
  
    authors[book.book_id].push({
      first_name: book.first_name,
      last_name: book.last_name,
      biography: book.biography,
      portrait: book.portrait
    });

  });

  books = books.reduce((final, cVal, cIdx, arr) => {
    if (arr[cIdx + 1] && cVal.id !== arr[cIdx + 1].id) {
      cVal.authors = authors[cVal.id];
      final.push(cVal);
    } 

    return final;

  }, []);

  return books;

};

console.log(jsonFormatting(booksAuthors));