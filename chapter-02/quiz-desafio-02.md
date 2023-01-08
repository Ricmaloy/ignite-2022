### 01 - Qual das seguintes alternativas é uma sintaxe válida de um componente criado com o Styled Components:

- [ ] - export const ButtonContainer = styled(’button’, {})
- [ ] - export const Container = styled.div()
- [x] - const Container = styled.div``
- [ ] - export const Container = div``

<br/>

### 02 - Dentre as seguintes, assinale o código válido que acessa a propriedade green-300 do tema do Styled-components:

- [ ] - `color: ${props => props.theme.green-300};`
- [ ] - `color: ${props => theme.green-300};`
- [x] - `color: ${props => props.theme[’green-300’]};`
- [ ] - `color: ${props => props.theme[green-300]};`

<br/>

### 03 - Assim como o `<BrowserRouter />` do react-router-dom e o `<ThemeProvider />` do styled-components, é correto afirmar que::

- [x] - Eles são Context Providers e servem para compartilhar informações entre os componentes que estão dentro deles e não produzem nada em tela.
- [ ] - Eles são componentes necessários para o funcionamento dos componentes que estão dentro dele e produzem conteúdo próprio em tela.
- [ ] - Eles são Context Providers e servem apenas para renderizar os componentes dentro deles.
- [ ] - Eles não são Context Providers e servem apenas para compartilhar estilos e rotas com os componentes dentro deles.

<br/>

### 04 - No styled-components, como podemos utilizar outros componentes estilizados como base para novos componentes?

- [ ] - `styled['baseComponent']`
- [ ] - `styled.baseComponent`
- [ ] - `styled.use(baseComponent)`
- [x] - `styled(baseComponent)`

<br/>

### 05 - Quando estamos utilizando inputs controlados (controlled) em um formulário?

- [ ] - Quando manipulamos as informações dos inputs somente quando necessário, otimizando, assim, a performance
- [x] - Quando mantemos em tempo real as informações dos inputs do usuário guardadas no estado da nossa aplicação
- [ ] - Quando guardamos as informações dos inputs dentro de um estado, mas somente quando utilizamos o evento de onSubmit

<br/>

### 06 - Na biblioteca React Hook Form, o que precisamos fazer para começar a manipular/lidar com os inputs através dela?

- [ ] - Utilizar a função "addInput" vinda do hook useForm nos inputs
- [ ] - Utilizar a função "registerInput" vinda do hook useForm nos inputs
- [x] - Utilizar a função "register" vinda do hook useForm nos inputs
- [ ] - Utilizar a função "watch" vinda do hook useForm nos inputs

<br/>

### 07 - Sobre o hook useEffect, é correto afirmar que:

- [x] - O useEffect, quando possui um array de dependências, executará na montagem do componente e sempre que uma variável no array de dependências mudar
- [ ] - O useEffect executará somente quando uma variável no array de dependências mudar
- [ ] - O useEffect, quando possui um array de dependências, executará em todas as renderizações de um componente

<br/>

### 08 - Com relação a Context API, é correto afirmar que para manipularmos às informações do contexto, nós:

- [ ] - Podemos manipular as informações a qualquer momento sem a necessidade de um Provider
- [x] - Precisamos de um Provider no nível mais acima possível por volta dos componentes que dependerão das informações da Context
- [ ] - Precisamos de um Provider, mas o nível em que ele se encontrará não fará diferença

<br/>

### 09 - Qual a utilidade de utilizar um enum para criar o nome das Actions do Reducer?

- [ ] - Diminuir o número de código escrito
- [x] - Facilitar a reutilização dos nomes das actions, definindo todos os possíveis valores dentro de uma variável que pode ser utilizada em todas as partes do código
- [ ] - Pois é a única forma de se definir os nomes das actions no useReducer sem gerar erros

<br/>

### 10 - Qual o benefício de separar as actions em um arquivo diferente dos reducers?

- [x] - Permite que a lógica seja reaproveitada e torna mais fácil ter a tipagem do payload que será enviado na action
- [ ] - Nenhum, apenas cria mais código duplicado desnecessariamente.
- [ ] - Essa é uma organização obrigatória estabelecida pelos paradigmas do uso do useReducer
