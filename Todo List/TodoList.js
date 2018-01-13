"use strict"

function todoList() {
    let value = document.getElementById('input_value').value  //to get value

    if(value=="") {alert("Write anything");}
    else{
    console.log(value);
    let text = document.createTextNode(value) 
    let newItem = document.createElement("li")
    newItem.appendChild(text)
  
   document.getElementById("list").appendChild(newItem).style.color="white";
   }
  } 