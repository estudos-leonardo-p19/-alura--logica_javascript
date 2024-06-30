alert('Hallo! Boas vindas ao Jogo do Número Secreto');
let secretNumber = 2;
let attemps = prompt('Escolha um número entre 1 e 10') 

if( attemps == secretNumber){
    alert(`Parabéns, você acertou" O n[umero secreto é: ${secretNumber}`)
}else{
    alert('Você errou')
}