describe('User can navigate the app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('to About tab', () => {
        cy.get('#about-tab').click();

        cy.get('#about-header').should('contain', 'About Me');

        cy.get('"projects-header').should('not.exist');
        cy.get('#hello').should('not.exist');
    })

    it('to My Projects tab',() => {
        cy.get('#projects-tab').click();

        cy.get('#projects-header').should('contain', 'My Projects');

        cy.get('#about-header').should('not.exist');
        cy.get('#hello').should('not.exist');
    })

    it('back to My Portfolio/Hello tab', () => {
        cy.get('#about-tab').click();
        cy.get('#header').click();

        cy.get('#hello').should('contain', 'Hello');

        cy.get('#projects-header').should('not.exist');
        cy.get('about-header').should('not.exist');
    })
})