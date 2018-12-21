describe('Positive log in', () => {
    it('Open SV-constructor registration page', function() {
        cy.visit('http://localhost:8888/Summary-constractor/signUp.php')
      })

      it('Enter valid login', function() {
        cy.get('[type="name"]').type('NewTestUser') 
      })

      it('Enter valid email', function() {
        cy.get('[type="email"]').type('test@mail.com')       
      })

      it('Enter password', function() {
        cy.get('[placeholder="Пароль"]').type('123')     
      })

      it('Repeat password', function() {
        cy.get('[placeholder="Повторите"]').type('123')     
      })

      it('Submit form', function() {
        cy.get('.signUp_btn').click()     
      })

      it('Check constructor opening', function() {
        cy.contains('Выберите шаблон Вашего резюме')     
      })



      
})