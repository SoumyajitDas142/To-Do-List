let inputBox = document.getElementById("ibox");
let tditem = document.getElementById("tditem");
let add = document.getElementById("add");

add.addEventListener("click", function addTodo(){
    if(inputBox.value === ''){
        alert("You Have To Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tditem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
});

tditem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", tditem.innerHTML);
}

function showTask(){
    tditem.innerHTML = localStorage.getItem("data"); 
}
showTask();