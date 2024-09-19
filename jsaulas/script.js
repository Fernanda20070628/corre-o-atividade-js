
/*
console.log ou alert = saída
var a = prompt('digite algo...') = leitura

1) Crie um programa que leia três notas, seus respectivos pesos e calcule a média ponderada.

2) Crie um programa que receba o peso e a altura de uma pessoa, calcula e classifique o IMC
dessa pessoa. https://www.programasaudefacil.com.br/calculadora-de-imc

3) Faça uma calculadora que dado um valor em reais, imprima os valores correspondentes em doláres e euros.

4) Faça um programa que simule uma calculadora com as 4 operações básicas (soma, subtração, multiplicação e divisão). Após a escolha da operação em um menu, o usuário deve digitar os 2 valores.

5) Faça um programa que leia três valores e imprima na tela o maior valor.

s2 turma
*/

//1
/*let n1, n2, n3, p1, p2, p3, media
n1 = Number(prompt('Digite a primeira nota'))
p1 = Number(prompt('Digite o peso da nota'))
n2 = Number(prompt('Digite a segunda nota'))
p2 = Number(prompt('Digite o peso da nota'))
n3 = Number(prompt('Digite a terceira nota'))
p3 = Number(prompt('Digite o peso da nota'))
media = (n1*p1 + n2*p2 + n3*p3)/(p1+p2+p3) //media ponderada
alert(media)*/

//4
/*let option = prompt('Digite a operação 1-soma, 2-subtracao, 3-multiplicao 4-divisao')
if(option >= 1 && option <=4){
    let num1, num2
    num1 = parseFloat(prompt("Digite o primeiro numero"))
    num2 = parseFloat(prompt("Digite o segundo numero"))

    switch(option){ 
        case '1': 
                alert(num1 + num2)
                break
        case '2': 
                alert(num1 - num2)
                break
        case '3':
                alert(num1*num2)
                break
        case '4':
                if(num2 != 0){
                    alert(num1/num2)
                }
                else{
                    alert("divisão invalida")
                }
                break
    }
    
}else{
    alert("Opção invalida")
}
*/
//5
let a,b,c 
a = parseFloat(prompt('Digite o 1 numero'))
b = parseFloat(prompt('Digite o 2 numero'))
c = parseFloat(prompt('Digite o 3 numero'))

if(a > b && a > c){
   alert("O maior numero é " + a) 
}
if(b > a && b > c){
    alert("O maior numero é " + b)
}
if(c > a && c > b){
    alert("O maior numero é "+ c)
}
