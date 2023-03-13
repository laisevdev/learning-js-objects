// Retorne um número aleatório
// entre 1000 e 1100

const numAleatorio = Math.floor(Math.random() * (1100 - 1000 + 1) + 1000); 
console.log(numAleatorio);



// Retorne o maior número da lista abaixo
const numeros = '4, 35, 20, 8, 9';
const arrayNum = numeros.split(',');
const numMax = Math.max(...arrayNum);
console.log(numMax)




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

