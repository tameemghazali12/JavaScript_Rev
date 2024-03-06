const coding=["js","java","python","cpp","Ruby"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        language:"javascript",
        langauageFileName:"js"
    },
    {
        language:"cpp",
        langauageFileName:"cpp"
    },
    {
        language:"java",
        langauageFileName:"java"
    }
]
myCoding.forEach((item)=>{
    console.log(item.langauageFileName);
})