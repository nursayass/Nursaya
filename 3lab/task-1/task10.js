//1
let i = 3;
while (i) {
  alert( i-- );
}
/*
alert(i--); // shows 3, decreases i to 2
alert(i--) // shows 2, decreases i to 1
alert(i--) // shows 1, decreases i to 0
// done, while(i) check stops the loop */

//2
let i1 = 0;
while (++i1 < 5) alert( i1 );

//3
for (let i = 0; i < 5; ++i) alert( i );

//4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

//5
let i2 = 0;
while (i2 < 3) {
  alert( `number ${i2}!` );
  i2++;
}

//6
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


