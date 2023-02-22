const roupa = "Vestido"
const preçoRoupa = 900
const desconto = 20
const descontoRoupa = true
let preçoFinal = 0



if (descontoRoupa) {

    preçoFinal = preçoRoupa - desconto
   

} else {

    preçoFinal = preçoRoupa
   
}

if (preçoFinal > 1000) {

    preçoFinal = preçoFinal - 50
    console.log(`O preço da compra foi ${preçoFinal}`)

} else {

    console.log(`O preço da compra  foi ${preçoFinal}`)

} 

let quantidades = [10, 2, 1, 30, 5] //Array original 


function multiplicaNumero(numero) {
mult = numero * preçoFinal  
return mult

// Função para multiplicar cada valor do array pelo preço final e retornar isso. numero = quantidades.map
}



let total = quantidades.map(multiplicaNumero) //retornando pra função multiplicaNumero o quantidades.map (irá ser numero)

for (let pos=0; pos < total.length; pos++) {

// Usar o for para os valores aparecerem separados 

    console.log(`O cliente  ${pos+1} deverá pagar  ${total[pos]}`)
}

let sum = 0


for(let i =0; i<total.length;i++){
    sum= sum + total[i];

    //Enquanto a contagem for menor que a quantidade de números do arrays, ele irá somar o let sum com total[i] (total [0], total [1], total [2], etc)
 }

 console.log(`O total de lucro é de R$${sum}`)