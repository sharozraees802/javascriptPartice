let array = [];
while (true) {
  let a = prompt("enter a number");
  if (a != "") {
    array.push(a);
  } else {
    break;
  }
}
// for (let i = 0; i < array.length; i++) {}
document.write(`${array},`);
console.log(array);
