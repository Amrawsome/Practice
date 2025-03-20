//returns HTML elements to be manipulated
const passNumb = document.getElementById("passNum");
const passLeng = document.getElementById("passLen");
const submit = document.getElementById("sub");
//Headers for table
const arrayHead =["ID","Pasword,","Keep"]

//when submit element it clicked dont reload page and run generatePass();
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    generatePass();
});

//creates a random number between set numbers
function randomNumb(max , min){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//create random strings using chars from ASCII numbers
//they are added to an array with and ID and the random string is reset
//array is passed to create table method
function generatePass(){
    let i=0;
    let j=0;
    let array = [];
    
    for(i=0; i<passNumb.value;i++){
        var pass ="";
        var g;
        for(j=0;j<passLeng.value;j++){
             g = String.fromCharCode(randomNumb(123,33));
            pass +=g;
        }
        array.push({ID:i+1, Password: pass});
        pass="";    
    }
         createTable(array, arrayHead);   
}

function createTable(array, head){
let tableHTML = '';//concatonate strings

    if(head.length > 0){//make sure head array isn't empty
        //Create tags for table head
        tableHTML += '<thead><tr>'
        for(const header of head){//loop through values in head array
            tableHTML += `<th>${header}</th>`;//add values to table header
        }
        tableHTML += '</tr></thead>'//add tags to close table head
    }

    tableHTML +='<tbody>'//add table body tag
    for(const item of array){//run through values of array []
        tableHTML +='<tr>';//create table row
        tableHTML += `<td>${item.ID}</td>`; //add ID to table
        tableHTML += `<td>${item.Password}</td>`;//add password string to table
        tableHTML += `<td><button type ="button">Store Password</button></td>`
        tableHTML += '</tr>';//close table row
    }

    tableHTML += '</tbody></table>';//close table body
    const container = document.getElementById('t1');//retrieve table element
    if(container){//if container exists
        container.innerHTML = tableHTML;//append tableHTML string to t1
    }
    else{//error if anything else
        console.error("Not Found");
    }

}


