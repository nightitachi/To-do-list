const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
//identifying the consts
function addtask(){
  if(inputBox.value === ''){
    alert("you must write something !")
    //if u didn't write anything this alert will be show
  }else{
    let li = document.createElement("li");
    //to input an element 
    li.innerHTML = inputBox.value ; 
    //this element was created in the input box 
    listContainer.appendChild(li);
    //and then it will be showed in the list appendchiled is concerning the created element
    let span = document.createElement("span");
    //another new element
    span.innerHTML = "\u00d7";
    //this is thr shape of this new element
    li.appendChild(span)
    //append child thid element

  }
  inputBox.value  ="";
  //when you reepat it the input box will be showed empty
  saveData();
}
listContainer.addEventListener("click" , function(e){
  if(e.target.tagName === "LI"){
    //if u click in the created element li  we use tagname for the created element 
    e.target.classList.toggle("checked");
    //then it will be showed the li checked 
    saveData();
  }else if (e.target.tagName ==="SPAN"){
    //new created element SPAN which make u remove thr parenyelement 
    e.target.parentElement.remove();
    saveData();
  }
} , false);
function saveData(){
  localStorage.setItem("data" , listContainer.innerHTML);
}//to save the data 
function showtaskdata(){
  listContainer.innerHTML = localStorage.getItem("data");
}//when you refresh the page
showtaskdata();