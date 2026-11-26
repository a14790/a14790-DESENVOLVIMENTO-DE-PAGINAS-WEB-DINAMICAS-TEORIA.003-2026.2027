
# Contador de Participantes

## 1. Apresentação do Projeto

O projeto **Contador de Participantes** consiste numa página web simples que permite contabilizar o número de participantes através de dois botões: um para adicionar participantes e outro para remover participantes.

O contador começa com o valor 0 e é atualizado automaticamente sempre que o utilizador carrega num dos botões.

Este exercício foi desenvolvido para praticar os conhecimentos de HTML e JavaScript, principalmente a manipulação de elementos HTML e a utilização de eventos.

## 2. Objetivos

- Desenvolver uma página web utilizando HTML.
- Aplicar conceitos básicos de JavaScript.
- Aprender a manipular elementos HTML através do JavaScript.
- Utilizar eventos para executar ações através de botões.
- Atualizar valores apresentados na página dinamicamente.
- Compreender a interação entre HTML e JavaScript.

## 3. Funcionalidades

O projeto apresenta as seguintes funcionalidades:

### Adicionar participante
Permite aumentar o número de participantes em uma unidade sempre que o utilizador carrega no botão **Adicionar participante**.

### Remover participante
Permite diminuir o número de participantes em uma unidade sempre que o utilizador carrega no botão **Remover participante**.

### Contador automático
Apresenta o número atual de participantes e atualiza o valor automaticamente após cada operação.

### Valor inicial
Quando a página é aberta, o contador começa sempre no valor 0.

### Impedir valores negativos
O contador não deve permitir que o número de participantes seja inferior a zero.

## 4. Tecnologias Utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Criar a estrutura da página. |
| JavaScript | Desenvolver a lógica do contador. |
| CSS | Personalizar o aspeto visual da página (opcional). |

## 5. Estrutura dos Ficheiros

A organização do projeto é a seguinte:

```text
Exercicio02/
│
├── index.html
├── script.js
└── README.md
```

**Descrição dos ficheiros:**

- `index.html` – Contém a estrutura principal da página, o título, o contador e os botões.
- `script.js` – Contém o código JavaScript responsável por adicionar, remover e atualizar os participantes.
- `README.md` – Contém a documentação e as informações sobre o projeto.

## 6. Funcionamento do Programa

O funcionamento do programa é simples:

1. O utilizador abre a página no navegador.
2. O contador apresenta inicialmente o valor 0.
3. Ao carregar em "Adicionar participante", o valor aumenta em uma unidade.
4. Ao carregar em "Remover participante", o valor diminui em uma unidade.
5. O número apresentado é atualizado automaticamente.
6. Caso o contador esteja a zero, não é possível remover mais participantes.

## 7. Como Executar o Projeto

Para executar o projeto, devem ser seguidos os seguintes passos:

1. Descarregar os ficheiros do projeto.
2. Guardar todos os ficheiros na mesma pasta.
3. Abrir a pasta do projeto.
4. Executar o ficheiro `index.html`.
5. A página será aberta no navegador.
6. Utilizar os botões para testar o funcionamento do contador.

Não é necessário instalar qualquer programa adicional para executar o projeto.

## 8. Testes Realizados

Foram definidos os seguintes testes para verificar o funcionamento do contador:

| Teste | Ação | Resultado esperado |
|---|---|---|
| 1 | Abrir a página | O contador apresenta 0. |
| 2 | Adicionar participante | O contador passa para 1. |
| 3 | Adicionar novamente | O contador passa para 2. |
| 4 | Remover participante | O contador diminui para 1. |
| 5 | Remover até chegar a 0 | O contador apresenta 0. |
| 6 | Tentar remover com valor 0 | O contador permanece em 0. |

## 9. Conhecimentos Adquiridos

Com a realização deste exercício foi possível desenvolver conhecimentos sobre:

- Estruturação de páginas com HTML.
- Utilização de identificadores (`id`) nos elementos HTML.
- Ligação de ficheiros JavaScript a páginas HTML.
- Declaração e alteração de variáveis.
- Utilização de funções.
- Manipulação do conteúdo de elementos através de `textContent`.
- Utilização de eventos `click`.
- Aplicação de condições `if` para controlar o funcionamento do programa.

## 10. Conclusão

Com este exercício foi possível compreender melhor a ligação entre HTML e JavaScript e perceber como é possível criar páginas web interativas.

O contador permite adicionar e remover participantes de forma simples, aplicando conceitos fundamentais de programação e manipulação de elementos HTML.

---

**Projeto:** Contador de Participantes  
**Exercício:** 02  
**Linguagens:** HTML5 e JavaScript  
**Área:** Programação
