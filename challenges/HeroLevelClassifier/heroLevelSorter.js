// Challenge: Classificador de nivel de heroi

//----------- script to test the code
/*
let count = 1
while(count <= 11000){
    if(count === 1)
        console.log("Initializing test")
    console.log("input: " + count + ", Output: " + classifyLevel(count) )
    count += 1000
    if(count > 11000)
        console.log("Finishing test")
}
*/

//----------- Input
let nameHero = "Superman"
let amountXP = 2001

//----------- Output
console.log("O Herói de nome " + nameHero + " está no nível " + classifyLevel(amountXP))

//----------- Process
function classifyLevel(amountXP, level){

    if(amountXP <= 1000)
        return level = "Ferro"
    else if (amountXP > 1000 && amountXP <= 2000)
        return level = "Bronze"
    else if (amountXP > 2000 && amountXP <= 5000)
        return level = "Prata"
    else if (amountXP > 5000 && amountXP <= 7000)
        return level = "Ouro"
    else if (amountXP > 7000 && amountXP <= 8000)
        return level = "Platina Diamante"
    else if (amountXP > 8000 && amountXP <= 9000)
        return level = "Ascendente"
    else if (amountXP > 9000 && amountXP <= 10000)
        return level = "Imortal"
    else if (amountXP > 10000)
        return level = "Radiante"
    else
        return level = "Oops! Something went wrong."
}

//----------- Execution in the terminal
// cd src
// node index.js