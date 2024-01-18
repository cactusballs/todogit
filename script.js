document.getElementById("taskIn").addEventListener("keydown", newElement);
document.getElementById("saveBtn").addEventListener("click", newElement); //event listeners for enter and save for adding the tasks 

//create a new list item when clicking the save button or the enter buttong
function newElement(event){ 
 if (event.key === 'Enter' || event.type === 'click') { //enter key or save
  var inputValue = document.getElementById("taskIn").value;
  if (inputValue === ""){
    alert("Hey! Wait! It's dangerous in the long grass, write a to do list and stay safe!")//alert for if no data input
  } else {
    var li = document.createElement("li");//create a list item
    var t = document.createTextNode(inputValue);//adding the text that user has inputted
    li.appendChild(t);//add it to the list 
    list.insertBefore(li, list.firstChild);//add the new li to the end
   
    //clear the task bar after 
    document.getElementById('taskIn').value = '';
 
 
    //appending the tasks with the poke ball close button
    var span = document.createElement("SPAN");
    var img = document.createElement("img"); //setting the close to the pokeball image
    img.src = "images/close.png"
    img.width = "20"; //img in JS are just numbers no need for px etc
    img.height = "20";
    span.className = "close";
    span.appendChild(img);
    li.appendChild(span);

 span.onclick = function(){
    var div= this.parentElement;
    div.style.display = "none";
   }
  }
 }
}
//create a close button that goes on the end of each task
var myNodelist = document.getElementsByTagName("LI");  //getting all elements with the tag of 'li' document. represent our html 
//sheet, after getting all elemets with li we can then iterate through them using a for loop
var i;
for (i = 0; i < myNodelist.length; i++) { //the for loop for iterating through each list item and appending it with a close button
  var span = document.createElement("SPAN");//creating a span element that contains the close button
  var img = document.createElement("img"); //setting the text to \u26AB which represents a pokeball symbol (to close out)
  img.src = "images/close.png"
  span.className = "close";
  img.width = "20";
  img.height = "20";
  span.appendChild(img); 
  myNodelist[i].appendChild(span) // 
}

//click the close button to hide the task
var close = document.getElementsByClassName("close"); 
for ( i = 0; i < close.length; i++){ //for loop that ends when the close is clicked
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none"; //hiding the parent element (the task) of the close element
  }
};

//add a check symbol when clicking on the item 
var list = document.querySelector("ul"); //select the first UL element on a broswer
list.addEventListener("click", function(ev) { //check if the clicked element is a li
  if (ev.target.tagName === "LI") {
    var isChecked = ev.target.classList.toggle("checked");
    if (isChecked){
    alert("Congratulations, Trainer! You've completed a task with unwavering determination and resilience. Remember, just like in the world of Pokémon, true strength comes from consistent effort and overcoming obstacles. Now, go forth with the wisdom you've gained and continue evolving into the best version of yourself!");//check the item to show it's completed 
    } 
  
  const lastItem = list.children[list.children.length -1];
  list.append(lastItem, ev.target);//add the item to the end of the list 
  }
}, false);// doesn't show alert when you uncheck


