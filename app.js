let myArray=[]
let input=document.getElementById("addFriend")
let addnew=document.getElementById("addNew")
let output=document.getElementById("output")
addnew.addEventListener("click",Adder)
function Adder() {
    let newfriends=input.value
    myArray.push(newfriends)
    input.value=""
    pageContent()

    
}
function pageContent() {
output.innerHTML=""
myArray.forEach(function (name,index) {
    createTableRow(index + 1, name, 0);
}) }  
function createTableRow(index,name,votecount) {
let tr=document.createElement("tr")
let td=document.createElement("td")
let td1=document.createElement("td")
let td2=document.createElement("td")
tr.appendChild(td)
tr.appendChild(td1)
tr.appendChild(td2)
output.appendChild(tr)
td.textContent=index
td1.textContent=name
td2.textContent=votecount
tr.onclick=function () {
    let val=Number(tr.lastChild.textContent)
    val++
    tr.lastChild.textContent=val;    
}
}
