
// in operator

let number ={
  first: 10,
  second: 20,
  third:40
};
document.write("first" in number); // note: the output will display by boolean type ,if the key doesnt exists it will return false
document.write("<br>");


// for in operator

let detail ={
  name: "abrar",
  age:50,
  lastName:"hussain"
}
for(let key in detail){
document.write(key);
}