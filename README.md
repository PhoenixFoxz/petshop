n dev

- `npm run dev`
- `npm run dev -- --host 0.0.0.0 --open` Entrar direto e abre o navegador já com a pagina
  Local: http://localhost:5173/ (computador) ➜ Network: http://10.20.46.47:5173/(celular)
- cls --> limpar pasta
- dir --> para achar pasta
- cd --> acha arquivo um por um
- node espaço +nome da pasta --> ver o resultado que está na pasta com console.log
- cd.. --> volta algumas pastas ou uma pasta
- ctrl +C --> para parar o CMD ou qualquer

# PetShop: projeto Next.js

## Branch 11-usando-json-server-como-fake-api

### Etapas (Faça tudo usando o Node.js Command Prompt)

1. Instalação global do `json-server`: `npm install -g json-server`
2. Colocação do arquivo `db.json` na raiz do projeto (este arquivo funcionará como um banco de dados para a API)
3. Pegar o IP da máquina usando `ipconfig`
4. Criar um script npm no `package.json` com a seguinte configuração:

`"api": "json-server --host IP.DA.SUA.MAQUINA db.json --port NÚMERO"`

5. Executar a API usando `npm run api`

- para instalar o json-server: 

para instalar globalmente para projetos futuros a versão deste projeto 1.0.0 alpha.21 
`npm install -g json-server`

- para executar recomendado o node: 

`json-server --watch nomeDoArquivoDesejado` neste caso db.json 

- para desconfigurar da porta padrão:

use o ipconfig 
`json-server --host ipDaMaquina nomeDoArquivoDesejado  --port numeroDaPorta`

para facilitar a vida no package.json e crie um script novo e coloque o a linha de comando acima 

```json
"scripts": {
    "api": "json-server --host ipDaMaquina nomeDoArquivoDesejado  --port numeroDaPorta"
  }
```

## Recursos utilizados

- Next.js
- API Fake/local
- API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de Formulário
- Publicação na Vercel e na Netlify

### Importante

#### Como fazer a instalação do `styled-components` para usar o CSS sem ser o global

- Para aplicar o styled-components primeiro pare o terminal com ctrl C e digite o de baixo e dar entre
- digite no terminal `npm install styled-components`
- verifica ser apareceu o arquivo package.json
- depois fazer o npm run dev para voltar o arquivo que foi parado
- Após instalar o `styled-components`, ative o suporte à compilação dele pelo Next.js `next.config.js` se não dar erro no CSS
- siga os passo a passo a baixo para não dar o erro:
- 1° --> Vai no arquivo next.config.js
- 2° --> digite isso:
  compiler: {
  styledComponents: true,
  } logo abaixo do reactStrictMode: true,

import {usePa} from "next/navagati"

const pathaname = usePathname
