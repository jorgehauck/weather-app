# Aplicativo de Clima

## Visão Geral

Este é um aplicativo simples em Angular que exibe a temperatura atual de uma cidade. A aplicação consome dados meteorológicos da [API OpenWeatherMap](https://openweathermap.org/api) com base no nome da cidade fornecido pelo usuário.

## Funcionalidades

- **Busca de Clima por Cidade**: Usuários podem inserir o nome de uma cidade para obter a temperatura atual.
- **Integração com API**: Obtém dados meteorológicos em tempo real da API OpenWeatherMap.
- **Design Responsivo**: O aplicativo é totalmente responsivo e funciona bem tanto em dispositivos desktop quanto móveis.

## Demonstração

![Captura de Tela do Aplicativo](https://github.com/jorgehauck/assets/blob/main/weather-app/weather-home.png)

## Começando

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).
- **Angular CLI**: Instale o Angular CLI globalmente, se ainda não o fez:

```bash
npm install -g @angular/cli
```
# Instalação

### 1. Clone o Repositório:

```bash
git clone https://github.com/jorgehauck/weather-app.git
cd weather-app
```

### 2. Instale as Dependências: 
```bash
npm install
```

### 3. Configuração da Chave da API: 
 * Obtenha sua chave de API no [API OpenWeatherMap](https://openweathermap.org/api).
 * Modifique no projeto o arquivo environment.ts na propriedade `weatherApiKey` a sua chave gerada pelo OpenWeatherMap

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.openweathermap.org/data/2.5/',
  apiKey: 'SUA_CHAVE_API_AQUI',
};
```

# Executando a Aplicação 
### Para executar a aplicação localmente:

```bash
ng serve --open
```

# Autor 
 José Jorge Hauck Júnior
 
https://www.linkedin.com/in/jorgehauck/

