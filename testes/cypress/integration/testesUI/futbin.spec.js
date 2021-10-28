/// <reference types="cypress"/>

describe('Cenário de teste: Testar os filtros de busca dos jogadores do site Futbin', () => {

    it ('Caso de teste: Buscar por um jogador de nome inexistente no site', () => {

        cy.visit('https://www.futbin.com/22/players?page=1');
        cy.get('#players_search').type('gdsfgdsf').type('{enter}');
        cy.get('[data-url="/22/player/62/pele"] > .table-row-text > .pt-2 > :nth-child(1) > .player_name_players_table').should('not.contain.text', 'gdsfgdsf');

    })

    it ('Caso de teste: Buscar por um jogador de nome existente no site (Neymar)', () => {

        cy.visit('https://www.futbin.com/22/players?page=1');
        cy.get('#players_search').type('Neymar').type('{enter}');
        cy.get('.player_name_players_table').should('contain.text', 'Neymar');

    })

    it ('Caso de teste: Buscar por um goleiro com 3 estrelas de skills', () => {

        cy.visit('https://www.futbin.com/22/players?page=1');
        cy.get(':nth-child(4) > [data-toggle="dropdown"]').click();
        cy.get('.dropdown.show > .dropdown-menu2 > :nth-child(1) > .dropdown-item').click();
        cy.get('.list-inline > :nth-child(8) > .dropdown-toggle').click();
        cy.get(':nth-child(1) > .btn-group-vertical > [data-value="3"]').click();
        cy.get('.player_tr_1 > :nth-child(3)').should('have.text','GK');
        cy.get('.player_tr_1 > :nth-child(6)').should('contain.text', '3');

    })

    it ('Caso de teste: Buscar por um goleiro com 5 estrelas de skills (Não existe) ', () => {

        cy.visit('https://www.futbin.com/22/players?page=1');
        cy.get(':nth-child(4) > [data-toggle="dropdown"]').click();
        cy.get('.dropdown.show > .dropdown-menu2 > :nth-child(1) > .dropdown-item').click();
        cy.get('.list-inline > :nth-child(8) > .dropdown-toggle').click();
        cy.get(':nth-child(1) > .btn-group-vertical > [data-value="5"]').click();
        cy.get('.no_results').should('contain.text', 'No Results');
        
    })

    it ('Caso de teste: Buscar por um jogador chamado Bruno natural de Angola (Existe apenas um jogador com essas características: Bruno Ecuélé Manga)', () => {

        cy.visit('https://www.futbin.com/22/players?page=1');
        cy.get('#players_search').type('Bruno').type('{enter}');
        cy.get('.list-inline > :nth-child(5) > .dropdown-toggle').click();
        cy.get('#Nation').type('Ga');
        cy.get('#resultNation > :nth-child(4) > a').click();
        cy.get('.player_name_players_table').should('contain.text', 'Ecuélé Manga')

      
              
    })

    it ('Caso de teste: Buscar por um zagueiro de natural de Togo que jogue na La Liga (Liga espanhola) (Existe apenas um jogador com essas características: Djené) ', () => {

        cy.visit('https://www.futbin.com/22/players?page=1');
        cy.get(':nth-child(4) > [data-toggle="dropdown"]').click();
        cy.get('.dropdown.show > .dropdown-menu2 > :nth-child(4) > .dropdown-item').click();
        cy.get('.list-inline > :nth-child(6) > .dropdown-toggle').click();
        cy.get('#League').type('La');
        cy.get('#resultLeague > :nth-child(1) > a').click();
        cy.get('.list-inline > :nth-child(5) > .dropdown-toggle').click();
        cy.get('#Nation').type('To');
        cy.get('#resultNation > :nth-child(5) > a').click();
        cy.get('.player_name_players_table').should('contain.text', 'Djené');
              
    })
    
})