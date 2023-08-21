let hellobtn= document.querySelectorAll('button');
hellobtn[0].addEventListener('click',showMsg);
//let rollbtn=document.querySelector("#button2");
hellobtn[1].addEventListener('click',inputMsg);

function showMsg(){
    alert("Hello World!");
}
function inputMsg(){
    let name=prompt('Enter the name of student:');
    hellobtn[1].textContent='Roll No.1 :'+ name;
}
