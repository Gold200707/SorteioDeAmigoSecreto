let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    let validandoNomes = amigos.map(validandoNomes => validandoNomes.toUpperCase());
    // console.log(validandoNomes);

    if (nomeAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (validandoNomes.includes((nomeAmigo.value).toUpperCase())) {
        alert('Nome já adicionado!');
        return;
    }

    let listaAmigo = document.getElementById('lista-amigos');
    
    amigos.push(nomeAmigo.value);

    if (listaAmigo.textContent == '') {
        listaAmigo.textContent = nomeAmigo.value;
    } else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br/>'; 
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br/>'; 
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//Atividade 1
/////////////////////////////////////////////////////////////////////////
function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        //Criando um elemento tipo parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        //Adiciona um evento de clique para excluir o amigo selecionado
        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        })

        //Adiciona o parágrafo criado à lista
        lista.appendChild(paragrafo);
    }
}
/////////////////////////////////////////////////////////////////////////

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

//Atividade 2
/////////////////////////////////////////////////////////////////////////
// Declarando uma variável do tipo array
// let minhaLista = [];

// Adicionando elementos com push
// minhaLista.push(1, 2, 3);
// console.log("Adicionando elementos:", minhaLista);

// Criando uma nova variável
// let outrosNumeros = [4, 5, 6];

// Concatenando arrays
// let novaLista = minhaLista.concat(outrosNumeros);
// console.log("Juntando Arrays:", novaLista);
/////////////////////////////////////////////////////////////////////////

//Atividade 3
/////////////////////////////////////////////////////////////////////////
// Removendo o último elemento
// novaLista.pop();
// console.log("Desafio 4:", novaLista);
/////////////////////////////////////////////////////////////////////////

//Atividade 4
/////////////////////////////////////////////////////////////////////////
// function embaralharArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// Embaralhando novaLista
// novaLista = embaralharArray(novaLista);
// console.log("Embaralhando a Lista:", novaLista);
/////////////////////////////////////////////////////////////////////////

//Atividade 5
/////////////////////////////////////////////////////////////////////////
// Função para remover duplicatas de um array
// function removerDuplicatas(array) {
//   return [...new Set(array)];
// }

// Testando a função com novaLista
// let novaListaSemDuplicatas = removerDuplicatas(novaLista);
// console.log("Remover duplicatas:", novaListaSemDuplicatas);
/////////////////////////////////////////////////////////////////////////

//Atividade 1
/////////////////////////////////////////////////////////////////////////
// function validarNumero(num) {
//     if (num > 0) {
//         return 'Positivo';
//     } else if (num < 0) {
//         return 'Negativo';
//     } else {
//         return 'Zero';
//     }
// }

// console.log(validarNumero(-1));
/////////////////////////////////////////////////////////////////////////

//Atividade 2
/////////////////////////////////////////////////////////////////////////
// function verificarIdade(idade) {
//     return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
// }

// console.log(verificarIdade(18));
/////////////////////////////////////////////////////////////////////////

//Atividade 3
/////////////////////////////////////////////////////////////////////////
// function verificarString(text) {
//     return text === '' ? 'String vazia' : 'String não vazia';
// }

// console.log(verificarString('Aqui tem um texto!'));
// console.log(verificarString(''));
/////////////////////////////////////////////////////////////////////////

//Atividade 4
/////////////////////////////////////////////////////////////////////////
// function verificarAnoBissexto(ano) {
//     if (ano % 4 === 0 && ano % 100 === 0 || ano % 400 === 0) {
//         return 'Ano bissexto';
//     } else {
//         return 'Não é um ano bissexto';
//     }
// }

// console.log(verificarAnoBissexto(2026));
/////////////////////////////////////////////////////////////////////////

//Atividade 5
/////////////////////////////////////////////////////////////////////////
// function calcularMedia(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return 'Um dos números ou os dois números não são válidos';
//     }
//     return (num1 + num2) / 2;
// }

// console.log(calcularMedia(8, 5));
/////////////////////////////////////////////////////////////////////////

//Atividade 6
/////////////////////////////////////////////////////////////////////////
// function tamanhoDaLista(lista) {
//     return lista.length;
// }

// const lista = [1,2,3,4,5,6,7,8,9,10];

// console.log(tamanhoDaLista(lista));
/////////////////////////////////////////////////////////////////////////

//Atividade 7
/////////////////////////////////////////////////////////////////////////
// const listaVerificarElemento = [10,20,30,40,50];

// console.log('Este array possui o número 30?',listaVerificarElemento.includes(30));
/////////////////////////////////////////////////////////////////////////

//Atividade 8
/////////////////////////////////////////////////////////////////////////
// function verificarElementoEmLista(listaParaVerificar, elementoProcurado) {
//     return listaParaVerificar.includes(elementoProcurado);
// }

// const listaParaVerificar = [10,20,30,40,50];
// const elementoProcurado = 30;

// const elementoContemNoArray = verificarElementoEmLista(listaParaVerificar, elementoProcurado);

// if (elementoContemNoArray) {
//     console.log(`O elemento ${elementoProcurado} está presente no array.`);
// } else {
//     console.log(`O elemento ${elementoProcurado} não está presente no array.`);
// }
/////////////////////////////////////////////////////////////////////////

//Atividade 9
/////////////////////////////////////////////////////////////////////////
// const listaDePalavras = ['maçã', 'banana', 'laranja', 'uva'];

// console.log('A palavra "banana" está contida no array?', listaDePalavras.includes('banana'));
/////////////////////////////////////////////////////////////////////////

//Atividade 10
/////////////////////////////////////////////////////////////////////////
// function verificarObjetoNoArray(listaDeObjetos, objetoProcurado) {
//     return listaDeObjetos.some(item => JSON.stringify(item) === JSON.stringify(objetoProcurado));
// }

// const alunos = [
//     { id: 1, nome: 'João', idade: 20},
//     { id: 2, nome: 'Maria', idade: 22 },
//     { id: 3, nome: 'Pedro', idade: 21 },
//     { id: 4, nome: 'Ana', idade: 19 }
// ];

// const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// if (objetoEstaPresente) {
//     console.log('O aluno está presente no array.');
// } else {
//     console.log('o aluno não está presente no array.');
// }
/////////////////////////////////////////////////////////////////////////

//Atividade 11
/////////////////////////////////////////////////////////////////////////
// function calcularSomaproduto(listaSomaProduto) {
//     let somaPares = 0;
//     let produtoImpares = 1;

//     for (let numero of listaSomaProduto) {
//         if (numero % 2 === 0) {
//             somaPares += numero;
//         } else {
//             produtoImpares *= numero;
//         }
//     }

//     return {
//         somaPares,
//         produtoImpares
//     };
// }

// const numeros = [1, 2, 3, 4, 5];
// const resultado = calcularSomaproduto(numeros);

// console.log('Soma dos pares:', resultado.somaPares);
// console.log('Produto dos ímpares:', resultado.produtoImpares);
/////////////////////////////////////////////////////////////////////////