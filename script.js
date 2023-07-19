let hellobtn= document.querySelector('button');
hellobtn.addEventListener('click',showMsg);
hellobtn.addEventListener('click',inputMsg);

function showMsg(){
    alert("Hello World!");
}
function inputMsg(){
    let name=prompt('Enter the name of student:');
    hellobtn.textContent='Roll No.1 :'+ name;
}
