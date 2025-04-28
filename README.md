# Pastelada Flag - Controle de Vendas

Este é um sistema simples feito em **React** com integração ao **Google Sheets** para ajudar no controle da venda de _tickets_ da nossa Pastelada voltada para arrecadação de fundos, organizada pelo time de futebol _Flag_.

## Funcionalidades

- Controle de quantidade de tickets vendidos
- Atualização em tempo real em uma planilha do Google Sheets
- Visualização de resumo de vendas

## Tecnologias Utilizadas

- React
- React Query
- Google Sheets API

## Como Rodar o Projeto

1. Clone o repositório

2. Instale as dependências com seu gerenciador de pacotes preferido

3. Configure a integração com o Google Sheets:

   - Abra **Extension → Apps Script**
   - Copie e cole o script localizado em `src/sheet_script.txt`

4. Defina as variáveis de ambiente:

   VITE_API_URL=<sua_url_pública>  
   VITE_NUMBERS_OF_TICKET=<quantidade_máxima_de_tickets>

## Contribuição

Sinta-se à vontade para abrir e enviar _pull requests_!

## Licença

Este projeto é de uso interno do time. 💙🏈
