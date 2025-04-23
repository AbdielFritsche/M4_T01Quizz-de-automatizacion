describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.wait(1000)

    cy.contains('Yellow or Blue').click();
    
    cy.wait(1000)

    cy.get('button.form_btn.add')
      .contains('Generate Color')
      .should('be.visible') 
      .click();

      cy.wait(1000)

      cy.get('h5.color')
      .should('be.visible')
      .invoke('text')
      .then((colorText) => {
          
        if (colorText === "blue"){
          cy.get('button.form_btn.blue')
          .click();
         } else{
          cy.get('button.form_btn.yellow')
          .click();
         }
      }) 
  })
})