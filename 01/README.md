
# Exercício 01 – Evento Tecnológico

## 1. Apresentação do Projeto

Este projeto consiste numa página web sobre um evento tecnológico, desenvolvida utilizando HTML, Bootstrap e JavaScript.

A página apresenta inicialmente informações básicas sobre um evento. Ao clicar no botão "Atualizar informação", os dados são atualizados automaticamente com informações sobre o Web Summit 2026.

## 2. Objetivos

- Criar uma página web utilizando HTML.
- Utilizar componentes do Bootstrap.
- Criar e utilizar objetos em JavaScript.
- Aprender a selecionar elementos HTML através do JavaScript.
- Utilizar eventos de clique (`click`).
- Alterar o conteúdo de uma página dinamicamente.

## 3. Funcionalidades

O projeto possui as seguintes funcionalidades:

- Apresentação do título do evento.
- Apresentação da localização do evento.
- Exibição de uma mensagem de boas-vindas.
- Apresentação do nome do autor.
- Apresentação do cargo do autor.
- Apresentação do tema relacionado com o evento.
- Atualização automática das informações através de um botão.

## 4. Tecnologias Utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da página web. |
| Bootstrap 5.3.3 | Formatação e organização visual dos elementos. |
| JavaScript | Atualização dinâmica das informações. |

## 5. Estrutura dos Ficheiros

```text
Exercicio01/
│
├── index.html
├── script.js
├── tao zhang.png
└── README.md
```

**Descrição dos ficheiros:**

- `index.html` – Contém a estrutura principal da página.
- `script.js` – Contém o objeto com as informações do evento e o código responsável pela atualização dos elementos.
- `tao zhang.png` – Imagem utilizada no cartão do evento.
- `README.md` – Documento com a descrição e informações do projeto.

## 6. Funcionamento do Programa

O programa começa por apresentar informações predefinidas na página, como o título "Evento Tecnológico", o local e uma mensagem informativa.

No JavaScript é criado um objeto chamado `evento`, que guarda os dados do Web Summit 2026.

Quando o utilizador clica no botão "Atualizar informação", é executada uma função que altera o conteúdo dos elementos HTML.

As informações apresentadas passam a ser:

- **Evento:** Web Summit 2026
- **Localização:** Lisboa, Portugal
- **Mensagem:** Bem-vindo ao futuro da tecnologia!
- **Nome:** Tao Zhang
- **Cargo:** Co-founder & CP
- **Tema:** Web summit

## 7. Principais Elementos de JavaScript

### Objeto

É utilizado um objeto chamado `evento` para guardar todas as informações relacionadas com o evento.

### querySelector()

Permite selecionar elementos HTML através dos seus identificadores (`id`).

### addEventListener()

Permite detetar quando o utilizador clica no botão e executar uma ação.

### textContent

Permite alterar o texto apresentado nos elementos HTML.

### Função Arrow

É utilizada uma função arrow (`() =>`) para executar as instruções quando o botão é pressionado.

## 8. Como Executar o Projeto

1. Descarregar os ficheiros do projeto.
2. Colocar todos os ficheiros na mesma pasta.
3. Abrir o ficheiro `index.html`.
4. A página será apresentada no navegador.
5. Clicar no botão "Atualizar informação".
6. Verificar se os dados do evento foram atualizados.

É necessária uma ligação à Internet para carregar o Bootstrap através do CDN.

## 9. Testes Realizados

| Teste | Ação | Resultado esperado |
|---|---|---|
| 1 | Abrir a página | Apresenta as informações iniciais. |
| 2 | Clicar no botão | Atualiza o título do evento. |
| 3 | Verificar a localização | Apresenta Lisboa, Portugal. |
| 4 | Verificar a mensagem | Apresenta a mensagem de boas-vindas. |
| 5 | Verificar o autor | Apresenta Tao Zhang. |
| 6 | Verificar o cargo | Apresenta o cargo definido no objeto. |
| 7 | Verificar o tema | Apresenta Web Summit. |

## 10. Conhecimentos Adquiridos

Com este exercício foi possível aprender e praticar:

- Criação de páginas HTML.
- Utilização do Bootstrap.
- Criação e utilização de objetos em JavaScript.
- Declaração de constantes com `const`.
- Seleção de elementos HTML.
- Manipulação de conteúdos através de `textContent`.
- Utilização de eventos com `addEventListener()`.
- Utilização de funções arrow.
- Interação entre HTML e JavaScript.

## 11. Conclusão

Com a realização deste exercício foi possível compreender como utilizar JavaScript para alterar informações numa página web sem precisar de atualizar ou recarregar a página.

Também foi possível praticar a utilização de objetos, eventos e seletores, juntamente com o Bootstrap para organizar os elementos visuais.

---

**Projeto:** Evento Tecnológico  
**Exercício:** 01  
**Tecnologias:** HTML5, CSS Bootstrap e JavaScript
