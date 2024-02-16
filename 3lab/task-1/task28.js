function sortByAge(arr0) {
    arr0.sort((a, b) => a.age - b.age);
}
  
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
  
let arr0 = [ pete, john, mary ];
  
sortByAge(arr0);
  
// now sorted is: [john, mary, pete]
alert(arr0[0].name); // John
alert(arr0[1].name); // Mary
alert(arr0[2].name); // Pete

//2
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
  
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);