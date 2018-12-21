describe('Login validation', () => {
    it('Invalid user', function() {
        cy.visit('http://localhost:8888/Summary-constractor/login.php')
        cy.get('[type="text"]').type('invalid') 
        cy.get('.login_btn').click()
        cy.contains('User not found')
      })

      it('Empty login', function() {
        cy.visit('http://localhost:8888/Summary-constractor/login.php')
        cy.get('.login_btn').click()
        cy.contains('User not found')
      })

      it('Empty password', function() {
        cy.visit('http://localhost:8888/Summary-constractor/login.php')
        cy.get('[type="text"]').type('test') 
        cy.get('.login_btn').click()
        cy.contains('Incorrect password')
      })

      it('Invalid password', function() {
        cy.visit('http://localhost:8888/Summary-constractor/login.php')
        cy.get('[type="text"]').type('test') 
        cy.get('[type="password"]').type('1234')
        cy.get('.login_btn').click()
        cy.contains('Incorrect password')
      })

      
})