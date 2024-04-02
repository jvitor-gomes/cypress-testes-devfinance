# Cypress: Testes DevFinance

## Visão Geral

O código apresentado é uma série de testes para o Cypress, uma ferramenta de teste end-to-end. Os testes verificam um aplicativo financeiro para desenvolvedores.

## Detalhes

O código inclui duas suítes de testes, cada uma com vários casos. Cada caso adiciona uma transação ao aplicativo financeiro.

Optei por adicionar os valores em string para testar a conversão.

### Suíte: Transações

Esta suíte contém três conjuntos de testes:

- **Transações com valores negativos:** Adiciona quatro transações, com valores diversos, no qual o valor total será negativo.
- **Transações com valores positivos:** Adiciona quatro transações, com valores diversos, no qual o valor total será positivo.
- **Exclusão de transações:** Verifica a funcionalidade de exclusão.

Antes de cada teste, a página do aplicativo é visitada.

#### Função: `adicionarTransacao`

Usada para adicionar uma nova transação. Aceita dois argumentos: `descricao` e `valor`. Realiza as seguintes ações:

1. Clica em **"+ Nova Transação"**.
2. Insere a descrição da transação.
3. Insere o valor da transação.
4. Define a data da transação como **"2024-02-01"**.
5. Clica em **"Salvar"**.
6. Verifica se a descrição aparece na tabela de transações.
