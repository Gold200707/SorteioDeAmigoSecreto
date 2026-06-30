# 🎁 Sorteador de Amigo Secreto

---

## 🎯 Sobre o Desafio

Este repositório foi construído para entregar o desafio prático **Alura Challenge**, focado no desenvolvimento de lógica de programação estruturada. A aplicação resolve o clássico problema de organizar um "Amigo Secreto", automatizando o processo de inserção, validação e o sorteio aleatório de forma limpa e interativa.

---

## 💻 Estrutura do Projeto

A aplicação está dividida de forma modular nos seguintes arquivos principais:

* **`index.html`**: Estrutura a interface do usuário, contendo o formulário de entrada, botões de ação e os contêineres onde os resultados são renderizados dinamicamente.
* **`style.css`**: Define a identidade visual moderna e estilizada em tons escuros com contrastes em azul elétrico e verde neon.
* **`app.js`**: Concentra toda a lógica do motor de sorteio, validações de segurança e controle de estado dos participantes.

---

## ✨ Funcionalidades Computacionais

* **Validação de Nomes (Case Insensitive):** O script em `app.js` valida se o campo está vazio e converte os nomes para letras maiúsculas via `.toUpperCase()` antes de checar duplicatas com `.includes()`, impedindo cadastros repetidos.
* **Gerenciamento Dinâmico do DOM:** Adiciona participantes dinamicamente à tela manipulando elementos do tipo parágrafo e inserindo escutadores de eventos em tempo real.
* **Exclusão por Clique:** Ao clicar em qualquer nome listado na seção do arquivo `index.html`, a função `excluirAmigo()` remove o elemento do array utilizando `.splice()` e atualiza a interface automaticamente.
* **Algoritmo de Embaralhamento:** Executa um loop de trás para frente que troca os índices do array aleatoriamente usando `Math.random()`, garantindo um sorteio sem vias e altamente randômico.
* **Ciclo de Reset Unificado:** A função `reiniciar()` limpa toda a memória volátil da aplicação e remove os textos gerados na tela com uma única ação.

---

## 🎨 Identidade Visual (UI/UX)

O estilo contido em `style.css` aposta em uma estética cyberpunk/dark elegante:

* **Fundo e Profundidade:** Utiliza uma base preta (`#000`) combinada com um efeito de sombreamento `drop-shadow` azul brilhante na caixa central.
* **Cores de Destaque:** Uso cirúrgico do Verde Neon (`#00f4bf`) e Azul Elétrico (`#1875e8`) para criar uma hierarquia visual clara entre os blocos de amigos incluídos e o resultado final do sorteio.

---

## 🚀 Como Executar a Aplicação

1. Baixe ou clone este repositório em sua máquina.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `app.js` estão no mesmo diretório ou referenciados corretamente.
3. Abra o arquivo `index.html` diretamente em qualquer navegador moderno.
4. Insira os nomes desejados, gerencie sua lista e clique em **Sortear**!
