const booksAuthors = {
  "books": [
    {
      "id": 1,
      "name": "You don't know JS",
      "author_id": 1,
      "author_name": "Bonnie"
    },
    {
      "id": 1,
      "name": "You don't know JS",
      "author_id": 2,
      "author_name": "Eiseman"
    },
    {
      "id": 2,
      "name": "You know some JS",
      "author_id": 1,
      "author_name": "Bonnie"
    }
  ]
};

const jsonFormatting = (obj) => {

};

console.log(jsonFormatting(booksAuthors));

/*
  Should Return

  {
      "books": [
        {
          "id": 1,
          "name": "You don't know JS",
          "author": [
              {
                  "id": 1,
                  "name": "Bonnie"
              },
              {
                  "id": 2,
                  "name": "Eiseman"
              }
          ]
        },
        {
          "id": 2,
          "name": "You know some JS",
          "author": [
              {
                  "id": 1,
                  "name": "Bonnie"
              },
          ]
        },
      ]
  }

 */