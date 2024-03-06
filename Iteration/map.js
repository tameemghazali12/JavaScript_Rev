const map= new Map()
map.set('IN',"India")
map.set('Uk',"United Kingdem")
map.set('US',"United State")

console.log(map)

for (const [key,value] of map) {
    console.log(key ,'->',value);
}
//myObject is not iterable
// const myObject={
//     game1:"NFS",

//     game2:"CRICKET"
// }
// for (const [key,value] of myObject) {
//     console.log(key ,'->',value);
// }