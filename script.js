function solveSum(){
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    res = x+y

    document.getElementById('resultbox').innerHTML = res
    
}function solveSub(){
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    res = x-y

    document.getElementById('resultbox').value = res
    
}function solveSMul(){
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    res = x*y

    document.getElementById('resultbox').value = res
    
}function solveDiv(){
    let x = parseInt(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    res = x/y

    document.getElementById('resultbox').value = res
    
}


function display(val){
    document.getElementById('screen').value += val
}
function clrscr(){
    document.getElementById('screen').value = ''
}
function solve(){
    let equation = document.getElementById('screen').value
    let result = eval(equation)
    document.getElementById('screen').value = result
}