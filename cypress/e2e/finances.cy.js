

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    })

    //Teste de cadastro de transações, com o valor total final sendo negativo
    it('Cadastrar transações, com valores negativos', () => {

        adicionarTransacao("App de Calculadora", "265.87")
        adicionarTransacao("App de Rotas", "789.49")
        adicionarTransacao("Conserto do PC", "-435")
        adicionarTransacao("Mercado semanal", "-803.65")

    });

    // Teste de cadastro de transações, com o valor total final sendo positivo
    it('Cadastrar transações, com foco em valores positivos', () => {

        adicionarTransacao("Internet", "-239")
        adicionarTransacao("Site da Padaria", "643.53")
        adicionarTransacao("Luz", "-120.66")
        adicionarTransacao("Clone da Pokedéx", "100")

    });

    // Teste para verificar a função de exclusão de uma transação
    it('Excluir transações', () => {
        adicionarTransacao("Internet", "-239")
        adicionarTransacao("Site da Padaria", "643.53")

        cy.contains('.description', 'Internet')
            .parent()
            .find('img')
            .click()

        cy.get('tbody tr').should('not.contain','Internet')
    })
})

// Função de adicionar transação e verificar se foi adicionado ao GRID
function adicionarTransacao(descricao, valor){
    cy.contains("+ Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-02-01")
    cy.contains('button', 'Salvar').click()
    cy.get("tbody tr td.description").should('contain', descricao)
}