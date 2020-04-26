# Netconv App

![Project Homepage](.github/homescreen.png){:height="400px"}
Aplicativo teste de compra de produtos, utilizado do [Redux](https://github.com/reduxjs/redux) com [Redux thunk](https://github.com/reduxjs/redux-thunk) para armazenar os produtos adicionados, além de utilizar o [React Navigation](https://reactnavigation.org/docs/getting-started) para navegar entre as páginas.

O projeto possui 3 páginas, sendo elas:

- HomeScreen: Lista os produtos mostrando nome, preço e imagem.
- ProductDescriptionList: Mostra uma breve descrição do produto (nome do produto), preço, imagem e possibilita a adição do mesmo no carrinho de compras.
- CartScreen: Lista todos os produtos adicionados ao carrinho podendo aumentar a quantidade de items ou exclui-los do carrinho, mostrando o valor total da compra e podendo finalizar o produto.

## Como rodar

```sh
# Instalar todas as dependencias do package.json
$ yarn install

# Rodar emulando em iPhone
$ yarn ios

# Rodar emulando em Android
$ yarn android

# Rodar utilizando expo
$ yarn web
```

## Testes

Para testar componentes, páginas e store foi utilizado as bibliotecas Jest + Enzyme

```sh
# Rodar testes
$ yarn test
```

## Sobre o projeto

O projeto foi criado com [Create React Native App](https://reactnative.dev/blog/2017/03/13/introducing-create-react-native-app), CLI global utilizado para iniciar novos projetos.