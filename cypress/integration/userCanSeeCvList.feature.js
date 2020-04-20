describe('User can see CV items', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#cv-tab').click();
    })

    it('displays CV item', () => {
        cy.get('#cvItem-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.cv.header').should('contain', 'Education');
        })
    })


    it('displays CV item', () => {
        cy.get('#cvItem-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.cv.header').should('contain', 'Work History');
        })
    });
    it('displays CV item', () => {
        cy.get('#cvItem-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.cv.header').should('contain', 'Skills');
        })
    });
});