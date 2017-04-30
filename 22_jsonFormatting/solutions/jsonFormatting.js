const booksAuthors = require('../books.json');

const jsonFormatting = (obj) => {
  const booksArr = obj.data;
  let book = {};
      author = {};
      books = [];

  while (booksArr) {

    

    booksArr.shift();

  }

  return { books }

};

console.log(jsonFormatting(booksAuthors));