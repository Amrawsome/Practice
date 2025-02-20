const passNumb = document.getElementById("passNum");
const passLeng = document.getElementById("passLen");

const submit = document.getElementById("sub");

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    generatePass();
    //console.log(randomNumb(123,33));
});

function generatePass(){
    let i=0;
    let j=0;
    let array = [passNumb.value];
    for(i=0; i<passNumb.value;i++){
        var pass ="";
        var g;
        // console.log(String.fromCharCode(Math.floor(Math.random() * 123)+33));
        for(j=0;j<passLeng.value;j++){
             g = String.fromCharCode(randomNumb(123,33));
            pass +=g;
        }
        array[i] = pass;
        pass="";
         
    }
    let k=0;
        for(k=0; k<array.length;k++){
             console.log(array[k]);
         }
    
}

function randomNumb(max , min){
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

