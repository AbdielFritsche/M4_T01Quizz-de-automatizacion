describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/');

    cy.get('.veggie_burger').click();
    cy.contains('Concat strings').click();

    cy.contains('button', 'Generate strings').click();

    cy.get('p.string1').should('be.visible');
    cy.get('p.string2').should('be.visible');

    cy.get('p.string1').invoke('text').then((str1) => {
      cy.get('p.string2').invoke('text').then((str2) => {
        const resultado = `${str1.trim()}${str2.trim()}`;

        cy.get('input[name="strings"]').clear().type(resultado);

        cy.contains('button', 'Submit string').click();

        cy.get('[data-testid="message"]').should('contain', 'Success!');
      });
    });
  })
})