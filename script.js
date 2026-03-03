function somar(){
    let num
    let num1
    num = parseInt(document.getElementById('1').value)
    num1 = parseInt(document.getElementById('2').value)
    document.getElementById("resultado1").innertext = num + num1
    console.log(num + num1)
}

function subtrair(){
    let num
    let num1
    num = parseInt(document.getElementById('3').value)
    num1 = parseInt(document.getElementById('4').value)
    document.getElementById("resultado2").innertext = num - num1
    console.log(num - num1)
}

function multiplicar(){
    let num
    let num1
    num = parseInt(document.getElementById('5').value)
    num1 = parseInt(document.getElementById('6').value)
    document.getElementById("resultado3").innertext = num * num1
    console.log(num * num1)
}


