//1
function sumSalaries(salaries) {
    let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
}
return sum; // 650
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert( sumSalaries(salaries) ); // 650

//2
let user = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = user;
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//3
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
    return maxName;
    }