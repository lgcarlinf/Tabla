function addrow()
{
    let table = document.getElementById("students");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
}

function delrow()
{
    let table = document.getElementById("students");
    table.deleteRow(-1)
}

let buttonAdd = document.querySelector('#insert');
let buttonDel= document.querySelector('#del');

buttonAdd.addEventListener('click', () =>{
    addrow()
})

buttonDel.addEventListener('click', () =>{
    delrow()
})