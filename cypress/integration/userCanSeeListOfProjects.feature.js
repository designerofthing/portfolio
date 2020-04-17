describe('User can see a list of projects', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#projects-tab').click();
    })

    it('displays first project', () => {
        cy.get('#project-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'My First Website');
        cy.get('.description').should('contain', 'This was my first website made with HTML and CSS');    
        })
    });

    it('displays second project', () => {
        cy.get('#project-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'BMI Calculator');
        cy.get('.description').should('contain', 'Simple BMI Calculator page with functionality in Javascript');    
        })
    });

    it('displays third project', () => {
        cy.get('#project-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Address Book');
        cy.get('.description').should('contain', "An address book to manage contacts with functionality in Javascript.");    
        })
    });
});