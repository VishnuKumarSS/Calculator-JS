let outputScreen = document.getElementById('screen');

// to empty the screen while giving or typing the number or operator
var val = 0
var operator = document.getElementsByClassName('operator');


function display(num){
    if (val==0){
        outputScreen.innerHTML = '';
        val = 1
    }
    outputScreen.innerHTML += num;
}

function clearDisplay(){
    outputScreen.innerHTML = "";
    val = 0;
    console.log('clear clicked')
}
function del(){
    outputScreen.innerHTML = outputScreen.innerHTML.slice(0, -1);
    console.log('delete clicked')
}
function calculate(){
    try{
        if (outputScreen.innerHTML != "") // if we click the EQUAL TO button without giving number it will show error. That's why we are using this.
        {
            outputScreen.innerHTML = parseFloat(eval(outputScreen.innerHTML)).toFixed(2); // to round the value to 2 digit after decimal point
        } 
    }
    // if two operators are given at the same time, it will show the alert
    catch(err){
        alert('Invalid Input.')
    }
}

function customEval(numm){
    console.log(numm)
}













// let numbers = document.getElementsByClassName('number')
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', function(){

//     })
//     console.log(numbers[i])
// }









// // do{
// var displayy = ""

// // var number = document.getElementsByClassName("number").addEventListener('click', display(number.id));

// var equal = document.getElementById('=').addEventListener('click', calculate)
// var modulo = document.getElementById('%').addEventListener('click', display(8))
// var divide = document.getElementById('÷').addEventListener('click', display(7))
// var multiply = document.getElementById('x').addEventListener('click', display(multiply.id))
// var sub = document.getElementById('-').addEventListener('click', display(sub.id))
// var add = document.getElementById('+').addEventListener('click', display(add.id))
// var clear = document.getElementById('clear').addEventListener('click', clear)


// function display(val){
//     document.getElementById('output-value').innerHTML += val;
// }
// function clear(){
//     document.getElementById('output-value').innerHTML = ""
// }
// function calculate(){
//     let x = document.getElementById('output-value').innerHTML;
//     let y = eval(x)
//     document.getElementById('output-value').innerHTML = y
// }
// function getOutput(){
//     return document.getElementById('output-value').innerHTML;
// }

// // value = document.addEventListener('click', )
// // document.addEventListener('click', display(value))





// // if (end == true){
// //     break;
// // }
// // }while(end != true)