describe('template spec', () => {
  it('passes', () => {
    const gatos = [
      {
        Name: 'Gato_1',
        Description: 'Gato de Abdiel',
      },
      {
        Name: 'Gato_2',
        Description: 'Gato de Abdiel',
      }
    ];

    cy.visit('https://thelab.boozang.com/');
    cy.get('.veggie_burger').click();
    cy.contains('Cat Shelter').click();

    gatos.forEach((gato) => {
      cy.contains('Add Cat').click();

      cy.get('input[name="name"]').clear().type(gato.Name);
      cy.get('textarea[name="description"]').clear().type(gato.Description);
      cy.get('input[type="radio"][value="outside"]').check();
      cy.contains('button', 'Add Cat').click();
    });

    cy.wait(2000);

    cy.get('li.collection_item').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('span').invoke('text').then((nombre) => {
          const nombreLimpio = nombre.trim();
          if (gatos.some((g) => g.Name === nombreLimpio)) {
            cy.get('button.new_home').click();
          }
        });
      });
    });
  })
})