# Apresentação de perfil do GitHub 

> Este projeto tem o intuito/objetivo de apresentar o perfil do GitHub contendo imagem do perfil, descrição e uma listagem com os repositórios público do usuário

<img src="https://user-images.githubusercontent.com/59144771/89068190-254a8180-d347-11ea-8c37-45c385803ba1.PNG" style="width: 100px;">

## Dependências

- Webpack: ```npm install webpack webpack-cli --save-dev```
- Babel: ```npm install @babel/core @babel/cli @babel/preset-env @babel-polyfill --save-dev```
- Babel-loader: ```npm install babel-loader --save-dev```
- Axios: ```npm install axios```

### Configurando o Webpack

1. Crie um arquivo ```webpack.config.js``` no diretório raiz do projeto

2. Insira esse código substituindo os caminhos:

```js
module.exports = {
    entry: ['@babel/polyfill', 'entrada'] // Caminho do código que o babel irá compilar,
    output: {
        path: __dirname + 'saída' // Caminho onde ficará o código compilado,
        filename: 'arquivo-compilado.js' // Arquivo para compilação
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Arquivos que serão desconsiderados da compilação
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'development'
}
```

Para exemplos, olhe a configuração do arquivo [webpack.config.js](https://github.com/arturbruno17/apresentacao-perfil-github/blob/master/webpack.config.js) ou visite a documentação da página oficial do [Webpack](https://webpack.js.org/concepts/)

### Configurando o Babel

1. Crie um arquivo ```.babelrc``` no diretório raiz do projeto

2. Insira esse código:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Para saber mais, visite a documentação oficial do [Babel](https://babeljs.io/docs/en/)

## Contribuição 💪🏻

1. Para contribuir, basta fazer um fork: 
<https://github.com/arturbruno17/apresentacao-perfil-github/fork>

2. Crie uma branch para sua modificação:
`git checkout -b feature/fooBar`

3. Faça o commit:
`git commit -am "Add some fooBar"`

4. Push:
`git push origin feature/fooBar`

5. Crie um novo *Pull Request*
