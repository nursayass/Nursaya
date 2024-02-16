//1
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

//2
let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);
alert( arr1 );

//3
function copySorted(arr) {
  return arr.slice().sort();
}
let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr2);
alert( sorted );
alert( arr2 );