alert('Hallo! Boas vindas ao Jogo do Número Secreto');
let secretNumber = 2;
let divination; 
let attemps = 1;

while(divination != secretNumber){
    divination = prompt('Escolha um número entre 1 e 10');
    if( divination == secretNumber){
        alert(`Parabéns, você acertou" O número secreto é: ${secretNumber} e você precisou de ${attemps} tentativas`);
    }else{
        if(divination > secretNumber){
            alert('Quase! O numero secreto é menor que ' + divination);
        }else{
            alert('O número Secreto é maior do que ' + divination);    
        }
        attemps ++;
    }
}
