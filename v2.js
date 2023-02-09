let Name = prompt("Name")
let Surname = prompt("Surname")
let Age = prompt("Age")

let demo1 = document.getElementById("demo1")
let demo2 = document.getElementById("demo2")
let demo3 = document.getElementById("demo3")

demo1.innerHTML = `My name is ${Name}`
demo2.innerHTML = `My surname is ${Surname}`
demo3.innerHTML = `I am ${Age}`
