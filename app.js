function getNumber(num){
    console.log(num);
    var result = document.getElementById("result");
    //+= for catenation 
    result.value +=  num;
}

function clr(){
    
    var result = document.getElementById("result"); 
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
    console.log(result.value);
}
