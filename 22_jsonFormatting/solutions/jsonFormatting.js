const booksAuthors = require('../books.json');

const jsonFormatting = (obj) => {
  const booksData = obj.data;
  let authors = {};
  let books = [];

  // Loop through books array for single book info
  booksData.forEach(book => {
    // Push into books array each books info
    books.push({
      id: book.book_id,
      title: book.title,
      description: book.description,
      genre: book.genre,
      cover: book.cover,
    });

    // Set the authors key
    authors[book.book_id] = authors[book.book_id] || [];
    
    // Push into authors
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