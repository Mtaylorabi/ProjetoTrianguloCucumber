Given('I am on the Calcular Triangulo homepage', () => {
  cy.visit('http://localhost:8080');
});

When('I enter {string} in the first side', (value) => {
  cy.get('input[name="Lado 1"]').type(value);
});

When('I enter {string} in the second side', (value) => {
  cy.get('input[name="Lado 2"]').type(value);
});

When('I enter {string} in the third side', (value) => {
  cy.get('input[name="Lado 3"]').type(value);
});

When('I do not enter a value in the first side', () => {
  cy.get('input[name="Lado 1"]').clear();
});

When('I do not enter a value in the second side', () => {
  cy.get('input[name="Lado 2"]').clear();
});

When('I do not enter a value in the third side', () => {
  cy.get('input[name="Lado 3"]').clear();
});

When('I try to enter {string} in a side', (value) => {
  cy.get('input[name="Lado 1"]').type(value);
});

When('I try to enter a value less than or equal to zero in a side', () => {
  cy.get('input[name="Lado 1"]').type('0');
});

When('I try to change the content of a side by letters', () => {
  cy.get('input[name="Lado 1"]').clear().type('A');
});

When('I try to change the content of a side by a value less than or equal to zero', () => {
  cy.get('input[name="Lado 1"]').clear().type('0');
});

Then('the message {string} should be displayed', (message) => {
  cy.get("button").click();
  cy.get('p').should('have.text', message);
});

Then('the text {string} should be displayed in green', (text) => {
  cy.get('h').should('have.css', 'color', 'rgb(255, 165, 0)');
});

Then('the text {string} should be displayed in blue', (text) => {
  cy.get('h').should('have.css', 'color', 'rgb(0, 0, 255)');
});

Then('the text {string} should be displayed in orange', (text) => {
  cy.get('h').should('have.css', 'color', 'rgb(144, 238, 144)');
});

Then('the calculate button is disabled until the correct values are entered', () => {
  cy.get('button').should('be.disabled');
});

Then('typing is not allowed', () => {
  cy.get('input[name="Lado 1"]').should('have.value', '');
});

Then('typing a value less than or equal to zero is not allowed', () => {
  cy.get('input[name="Lado 1"]').should('have.value', '');
});

When('the three sides are correctly entered', () => {
  cy.get('input[name="Lado 1"]').type('3');
  cy.get('input[name="Lado 2"]').type('3');
  cy.get('input[name="Lado 3"]').type('3');
});

Then('changing the content by letters is not allowed', () => {
  cy.get('input[name="Lado 1"]').should('have.value', '');
});

Then('changing the content by a value less than or equal to zero is not allowed', () => {
  cy.get('input[name="Lado 1"]').should('have.value', '');
  });