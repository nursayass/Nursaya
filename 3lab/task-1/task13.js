//1
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

//2
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

//3
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//4
function min(a, b) {
    return a < b ? a : b;
  }

//5
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

//6
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );