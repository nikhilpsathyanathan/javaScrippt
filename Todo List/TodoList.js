"use strict"

function todoList() {
    let value = document.getElementById('input_value').value  //to get value

    if(value=="") {alert("Write anything");}
    else{
    console.log(value);
    let text = document.createTextNode(value) ;
    let newItem = document.createElement("li");
    newItem.appendChild(text)
  
   document.getElementById("list").appendChild(newItem).style.color="#FDAD2D";
   }
   document.getElementById('input_value').value="";
  } 


  function runScript(event) {
    if (event.which == 13 || event.keyCode == 13) {
       todoList();
        return false;
    }
    return true;
}

function mOver(obj) {
  obj.innerHTML = "Click to add"
}

function mOut(obj) {
  obj.innerHTML = "Add Item"
}