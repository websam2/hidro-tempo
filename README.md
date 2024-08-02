# hidro-tempo

## Descrição

hidro-tempo é um dashboard de Sistema de Monitoramento Fluvial que utiliza a API da Agência Nacional de Águas e Saneamento Básico (ANA) para exibir todos os postos instalados no Vale do Ribeira. O objetivo deste projeto é facilitar o acesso às informações sobre os níveis dos rios no Vale do Ribeira, uma região que sofre com enchentes em alguns locais.

Com o dashboard, é possível visualizar:
- Nomes dos locais
- Medições em milímetros
- Datas e horários dos últimos registros
- Alertas do nível em tempo real
- Temperatura e clima atual (usando dados do Open Weather Map)

## Instalação

Siga estes passos para configurar o projeto em sua máquina local:

1. Clone o repositório:
git clone https://github.com/websam2/hidro-tempo.git

2. Navegue até o diretório do projeto:
cd hidro-tempo

3. Instale as dependências:
npm install

4. Instale o Tailwind CSS:
npm install -D tailwindcss

5. Instale o Axios:
npm install axios

6. Instale o DaisyUI:
npm install daisyui

## Uso

Para iniciar o servidor de desenvolvimento, execute:
npm run dev

Isso iniciará o aplicativo em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

## Funcionalidades

O hidro-tempo oferece as seguintes funcionalidades principais:

1. **Visualização de Dados da ANA**: Exibe informações dos postos de monitoramento no Vale do Ribeira.

2. **Informações Detalhadas**: Mostra nomes dos locais, medições em milímetros, datas e horários dos últimos registros.

3. **Sistema de Alerta**: Apresenta alertas em tempo real sobre o nível dos rios.

4. **Dados Meteorológicos**: Exibe temperatura e condições climáticas atuais usando a API do OpenWeather.

5. **Interface Responsiva**: Design adaptável para diferentes dispositivos, graças ao Tailwind CSS e DaisyUI.
