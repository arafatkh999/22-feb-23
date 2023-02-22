let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

const result1 = instructor.additionalData.books[1];
console.log(result1);

const result2 = instructor.additionalData.moreDetails.hometown.state;
console.log(result2);

const result3 = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(result3);
