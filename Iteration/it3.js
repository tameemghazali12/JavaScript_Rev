// const coding=["js","java","cpp","c"]


//foreach does't return any values

// coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);

//const arr=[1,3,4,5,6,7,8]
// const newArr=arr.filter((num)=>num>4);

// const newArr=arr.filter((num)=>{
//     return num>4
// });
// console.log(newArr);

const bookList = [
    { title: "The Catcher in the Rye", genre: "Fiction", publish: "1951", edition: "First Edition" },
  { title: "To Kill a Mockingbird", genre: "Classics", publish: "1960", edition: "Reprint" },
  { title: "1984", genre: "Dystopian", publish: "1949", edition: "Modern Classics" },
  { title: "The Great Gatsby", genre: "Classics", publish: "1925", edition: "Vintage" },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: "1997", edition: "First Edition" },
  { title: "The Hobbit", genre: "Fantasy", publish: "1937", edition: "Anniversary Edition" },
  { title: "Pride and Prejudice", genre: "Romance", publish: "1813", edition: "Collector's Edition" },
    
  ];
  let userBooks=bookList.filter((bl)=>bl.genre==="Classics")
  userBooks=bookList.filter((bk)=>{
    return bk.publish>=1900 && bk.genre==="Classics"
})
  console.log(userBooks);