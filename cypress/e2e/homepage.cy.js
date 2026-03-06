describe('Homepage', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should load the homepage', () => {
        cy.get('body').should('be.visible')
    })

    it('should contain main heading', () => {
        cy.get('h1').should('contain.text', 'Hacker Escape Rooms')
    })

})
