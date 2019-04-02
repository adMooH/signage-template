# adMooH Signage Template

[![N|Solid](//v.fastcdn.co/t/19d828a0/7be5dd4b/1553632330-39975901-182x69x182x91x0x11-logo-admooh-preto.png)](https://home.admooh.com/)

adMooH Signage template é uma ferramenta para a construções de templates que serão usados nos canais de conteúdo dentro da plataforma adMooH.
Os templates são construídos em javascript utilizando [React.js](https://reactjs.org/), com essa ferramenta você pode

  - Visualizar items do feed RSS.
  - Visualizar o template com base no feed.

## Utilização

É preferível que os templates fiquem na sub-pasta **templates**, e sigam a seguinte estrutura de pastas:
```
.seu-template
_./images
___*.png, *jpeg
_ *.css
_ index.js
_ template.jsx
```
O arquivo **index.js** não precisa ser alterado, o arquivo **template.jsx** pode ser alterado mas é necessário que o componente principal seja a exportação padrão.

```javascript
import React from 'react';
export default class UolNews extends React.Component {
...
```

### Utilizando Styles

Os styles nos componentes de template serão convertidos para in-line, e existe duas forma de você adicionar esses styles em seu componente:

- Utlizando um objeto de style.

```javascript
const customStyle = {
    color: "blue",
    font-family: "verdana",
    font-size: "300%"
}
```
- Ou uma classe normal dentro de um arquivo .css

```css
.customCss {
    color: blue;
    font-family: verdana;
    font-size: 300%;
}
```
Caso você escolha utilizar um arquivo .css e necessário fazer a importação do arquivo no arquivo do componente.

```javascript
import * as layout from './template.css';
```

Para utilizar um style no componente é so usar a propiedade **style** do componente:

```javascript
import React from 'react';
import * as layout from './template.css';

const customStyle = {
    color: "blue",
    font-family: "verdana",
    font-size: "300%"
};

export default class SampleTemplate extends React.Component {
	render() {		
        return(
			<div>
			    <h1 style={customStyle}>Style1</h1>
			     <h1 style={layout.customCss}>Style1</h1>
			</div>
		);
    }
}
```

### Comandos

Para iniciar a visualização de um template você precisa executar o comando **start** e passar no argumento **-t** o caminho do arquivo **index.js** do seu template.

```sh
$ yarn start -t ./template/seu-template/index.js
```

Para buildar o template para produção você só precisar alterar o comando start para **build**.

```sh
$ yarn build -t ./template/seu-template/index.js
```

O arquivo final do template estará disponivel na pasta .build na raiz do projeto.

### Visualização

Para visualizar o seu template, após executar o comando **start** entre no endereço.

```sh
127.0.0.1:8080
```

License
----
ISC

# **May the force be with you!**