describe('Positive log in', () => {
    it('Open SV-constructor', function() {
        cy.visit('http://localhost:8888/Summary-constractor/login.php')
    
       
      })

      it('Enter valid login', function() {
        cy.get('[type="text"]').type('test') 
      })

      it('Enter valid password', function() {
        cy.get('[type="password"]').type('123')       
      })

      it('Submit form', function() {
        cy.get('.login_btn').click()     
      })

      it('Submit form', function() {
        cy.contains('Выберите шаблон Вашего резюме')     
      })
})