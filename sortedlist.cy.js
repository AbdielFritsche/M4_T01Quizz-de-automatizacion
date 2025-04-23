describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.wait(1000)

    cy.contains('Sorted list').click();
    
    cy.wait(1000) 

    cy.get('button[title="delete"]').each(($btn) => {
      cy.wrap($btn).click();
    });

    cy.wait(1000)

    cy.get('input[type="text"]').clear().type('Elemento 1');

    cy.wait(500);

    cy.get('button.form_btn.add')
      .contains('Add todo')
      .should('be.visible') 
      .click();

    cy.wait(500);

    cy.get('input[type="text"]').clear().type('Elemento 2');

    cy.wait(500);

    cy.get('button.form_btn.add')
      .contains('Add todo')
      .should('be.visible') 
      .click();
  });
})