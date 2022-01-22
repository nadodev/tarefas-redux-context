## dependencias

- npm i redux react-redux

###Criar Pasta Store

- Cria uma index dentro da pasta store, e importar o createStore, do redux
- No arquivo App, importar Provider, do react-redux e envolver todos os componentes, e passar variavel store para prover os estados.
- Para acessar o estado do redux, basta importar o useSelector, do react redux, o useSelector, retorna uma função, que retorna o estado. useSelector(state => state) .

##criar uma pasta modules

- Dentro da pasta modules, fica os modulo do reducers.
- criar uma pasta cart dentro de modules, e um arquivo reducer, dentro de cart, nesse arquivo criar uma funcao e retornar um array vazio.
- criar um arquivo rootReducer, dentro de modules, e importar o combineReducers, esse combineReducers, vai juntar todos os reducers, apos feito isso, dentro da index da pasta store, colocar como parametro o rootReducer.

##Acima alguns passos para configurar o redux, é os passos iniciais...

espero ter ajudado de alguma forma.
