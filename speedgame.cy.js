describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.contains('Speed Game').click();

    cy.get('[data-testid="startBtn"]').click();

    cy.get('button.form_btn.delete',{ timeout: 100000 })
      .contains('End Game')
      .should('be.visible') 
      .click();

  })
})