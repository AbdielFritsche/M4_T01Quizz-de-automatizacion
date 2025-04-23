describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thelab.boozang.com/')

    cy.get('.veggie_burger').click()

    cy.wait(1000)

    cy.contains('Form Fill').click();
    
    cy.wait(1000)
    const correoBuscado = "abdiel@ejemplo.com";

    const usuarios = [
      {
        firstname: 'Abdiel',
        lastname: 'Fritsche',
        email: 'abdiel@ejemplo.com',
        password: 'password123'
      },
      {
        firstname: 'Abdiel',
        lastname: 'Fritsche',
        email: 'abdiel@ejemplo.com',
        password: '12345678'
      }
    ];

    usuarios.forEach((user) => {
      cy.get('input[name="firstname"]').clear().type(user.firstname);
      cy.get('input[name="lastname"]').clear().type(user.lastname);
      cy.get('input[name="email"]').clear().type(user.email);
      cy.get('input[name="password"]').clear().type(user.password);
      
      cy.get('button.form_btn.add').contains('Save to db').click();

      cy.wait(1000); 
    });

    cy.get('button.form_btn.orange')
      .contains('Show users in db')
      .should('be.visible')
      .click();

    cy.wait(1000);

    let encontrado = false;

    cy.get('section.print_form.show table tbody tr').each(($row, index) => {
      cy.wrap($row).within(() => {
        cy.get('td').eq(1).invoke('text').then((emailText) => {
          const correo = emailText.trim();
          if (correo === correoBuscado) {
            encontrado = true;
            cy.log(`Correo encontrado en la fila ${index + 1}`);
          }
        });
      });
    }).then(() => {
      if (!encontrado) {
        cy.log('Correo no encontrado en la tabla');
      }
    });
  })
})