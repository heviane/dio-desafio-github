/*========= Desáfio - Calculadora de partidas rankeadas
    - Objetivo:
    Crie uma função que recebe como parametro a quantidade de vitórias e derrotas de um jogador.
    Retorne o saldo (deve ser feita através do cálculo) para uma variável: (vitorias - derrotas).
    A partir do saldo, determine o nivel ou ranking do heroi.
    Imprima na tela os resultados: saldo e nivel/ranking.
*/

let nameHero  = 'Superman'
let victories = 200
let defeats   = 2
let balance   = calcBalance(victories, defeats)
let level     = calcLevel(balance)

console.log('O herói tem de saldo de vitórias ' + balance + ' e está no nivel ' + level)

function calcBalance(victories, defeats, balance){
    return balance = (victories - defeats)
}

function calcLevel(balance, level){
    level = ''
    if(balance < 10)
        level = 'Ferro'
    else if (balance > 10 && balance <= 20)
        level = 'Bronze';
    else if (balance > 20 && balance <= 50)
        level = 'Prata'
    else if (balance > 50 && balance <= 80)
        level = 'Ouro'
    else if (balance > 80 && balance <= 90)
        level = 'Diamante'
    else if (balance > 90 && balance <= 100)
        level = 'Lendário'
    else if(balance > 100)
        level = 'Imortal'

    return level
}