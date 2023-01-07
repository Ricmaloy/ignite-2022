01 - Assinale a alternativa incorreta sobre React:

[] - React é uma biblioteca Javascript para criar interfaces de usuário.
[x] - O React pode ser utilizado apenas interfaces Web, ou seja, não é possível utilizá-lo em outros ambientes como Mobile por exemplo.
[] - Next.js e Remix são exemplos de Frameworks que utilizam React.
[] - React é uma das bibliotecas mais utilizadas no mercado de trabalho atualmente.

02 - Sobre a estrutura do projeto React gerado pelo Vite, assinale a alternativa incorreta:

[] - O arquivo index.html é gerado na raiz do projeto e ele é o primeiro arquivo carregado pela nossa aplicação Web.
[] - O Vite utiliza a linha  <script type="module" src="/src/main.jsx"></script>  para importar o nosso primeiro arquivo Javascript (main.jsx) utilizando o ECMAScript Modules, ou seja, sem precisar utilizar um Bundler como o Webpack.
[] - O React em conjunto com o React DOM renderiza dentro da div id="root" o conteúdo gerado pelo Javascript. Ou seja, o JS tem total controle da interface que é apresentada na tela.
[x] - Por trabalhar com SSR, ao desabilitar o Javascript no exemplo apresentado em aula a aplicação continua funcionando sem apresentar nenhum problema.

03 - Sobre componentes e propriedades no React, é incorreto dizer que:

[] - Normalmente utilizamos componentes para reaproveitar trechos de código em diferentes locais da aplicação, por exemplo a estrutura de um Avatar no Instagram (repetido nos stories, feed, comentários, etc.).
[] - As propriedades são uma forma de customizar o conteúdo de cada componente, por exemplo informar o nome e avatar do autor em um componente Post.
[x] - Para renderizar os componentes na nossa aplicação, basta seguir a mesma estrutura do HTML, sempre escrevendo o nome do componente em minúsculo, por exemplo: <post />.
[] - Para repassar as propriedades para um componente, basta escrever como se fossem atributos do HTML, por exemplo: <Post author="Diego Fernandes" />.

04 - Qual a forma recomendada de se utilizar classes css dentro do React?

[] - Através do atributo class.
[] - Através do atributo classHtml.
[x] - Através do atributo className.

05 - Qual das opções é a forma correta de nomeação de um componente?

[x] - Header (com a primeira letra maiúscula).
[] - header (com todas as letras minúsculas).
[] - HEADER (com todas as letras maiúsculas).

06 - Das seguintes alternativas, assinale a alternativa que não representa uma característica do hook useState do React:

[] - Ele tem como retorno um array de duas posições, a primeira representa o valor atual do estado e a segunda representa uma função utilizada para alterar o valor do estado.
[x] - Ele automaticamente compartilha o estado entre todos os componentes da nossa aplicação.
[] - A função para alterar o valor do estado pode receber um callback que tem como seu parâmetro o valor mais atualizado da fila de atualizações do React.

07 - Sobre a propriedade key no React, qual das seguintes alternativas contém uma informação incorreta sobre seu funcionamento?

[] - Ao passar uma key para um elemento, ela deve possuir um valor único que não tenha sido utilizado em outro elemento da mesma iteração.
[x] - Nós devemos sempre passar um valor aleatório ou utilizar o index da iteração como a key do elemento.
[] - A key é uma propriedade que ajuda o React a entender o que foi alterado numa iteração, e deve ser utilizada sempre que temos uma iteração em nosso código.

08 - Das seguintes alternativas, qual é a maneira correta de se usar o map para iterar um array e exibir o valor do item em tela? Considere o array sendo um array de strings, como [’item1’, ‘item2’, ‘item3’].

[] - array.map(item ⇒ { <p>item</p> })
[] - array.map(item ⇒ <p>item</p>)
[x] - array.map(item ⇒ <p>{item}</p>)

09 - Qual a forma correta de se adicionar um valor que existe na variável novoItem ao final de um array em um estado chamado items no React?

[] - items.push(novoItem)
[] - setItems(novoItem)
[x] - setItems(state ⇒ [...state, novoItem])

10 - O que é o TypeScript?

[] - É uma linguagem de programação com tipagem dinâmica.
[x] - É uma linguagem de programação construída em cima do JavaScript, que traz tipagem e novas funcionalidades.
[] - É um superset que introduz tipos na linguagem Java.