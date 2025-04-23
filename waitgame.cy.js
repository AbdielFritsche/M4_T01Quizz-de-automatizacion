describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.contains('Wait Game').click();

    cy.get('[data-testid="startBtn"]').click();

    cy.wait(5000)

    cy.get('button.form_btn.delete')
      .contains('End Game')
      .should('be.visible') 
      .click();
  })
})