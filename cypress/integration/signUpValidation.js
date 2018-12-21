describe('Sign Up Validations', () => {
    it('Empty fields', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
        cy.get('.signUp_btn').click()   
        cy.contains('Enter login')    
      })

    it('Empty fields(besides login)', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
        cy.get('[type="name"]').type('some text') 
        cy.get('.signUp_btn').click()   
        cy.contains('Enter email')    
      }) 
    it('Empty fields(besides login)', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
        cy.get('[type="name"]').type('some text') 
        cy.get('.signUp_btn').click()   
        cy.contains('Enter email')    
      })   
    it('Empty fields(besides login and email)', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
        cy.get('[type="name"]').type('some text') 
        cy.get('[type="email"]').type('test@mail.com')   
        cy.get('.signUp_btn').click()   
        cy.contains('Enter password')    
      })   
      it('Empty second password', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
        cy.get('[type="name"]').type('some text') 
        cy.get('[type="email"]').type('test@mail.com') 
        cy.get('[placeholder="Пароль"]').type('123')    
        cy.get('.signUp_btn').click()   
        cy.contains('Passwords does not match')    
      })   
      it('Different passwords', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
        cy.get('[type="name"]').type('some text') 
        cy.get('[type="email"]').type('test@mail.com') 
        cy.get('[placeholder="Пароль"]').type('123')
        cy.get('[placeholder="Повторите"]').type('1234')     
        cy.get('.signUp_btn').click()   
        cy.contains('Passwords does not match')    
      })   
 



      

      
})