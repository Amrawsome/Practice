const passNumb = document.getElementById("passNum");
const passLeng = document.getElementById("passLen");
const submit = document.getElementById("sub");
const arrayHead =["ID","Pasword"]


submit.addEventListener('click', (e) =>{
    e.preventDefault();
    generatePass();
    //console.log(randomNumb(123,33));
});

function generatePass(){
    let i=0;
    let j=0;
    let array = [];
    
    for(i=0; i<passNumb.value;i++){
        var pass ="";
        var g;
        // console.log(String.fromCharCode(Math.floor(Math.random() * 123)+33));
        for(j=0;j<passLeng.value;j++){
             g = String.fromCharCode(randomNumb(123,33));
            pass +=g;
        }
        array.push({ID:i+1, Password: pass});
        
        pass="";
         
    }
    let k=0;
        // for(k=0; k<array.length;k++){
        //      console.log(array[k]);
        //  }

         createTable(array, arrayHead);
    
}

function randomNumb(max , min){
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function createTable(array, head){
    
let tableHTML = '';

if(head.length > 0){
    tableHTML += '<thead><tr>'
     for(const header of head){
        tableHTML += `<th>${header}</th>`;
     }
     tableHTML += '</tr></thead>'
}

tableHTML +='<tbody>'
for(const item of array){
    tableHTML +='<tr>';
    tableHTML += `<td>${item.ID}</td>`; 
    tableHTML += `<td>${item.Password}</td>`;
    tableHTML += '</tr>';
    console.log(item);
}

tableHTML += '</tbody></table>';
const container = document.getElementById('t1');
if(container){
    container.innerHTML = tableHTML;
}
else{
    console.error("Not Found");
}

}


