const assert = require('assert');
const { faker } = require('@faker-js/faker');

Feature('login');

Scenario('login com validação de e-mail', async ({ I }) => {
   const fakeEmail = faker.internet.email();

   I.amOnPage('/login');
   I.click('#btnLogin');

   I.see('E-mail inválido.');
   I.fillField('#user', fakeEmail);

   I.click('#btnLogin');
   I.dontSee('E-mail inválido.');

   const title = await I.grabTitle();
   console.log(title);
   assert.equal(title, 'QAZANDO Shop E-Commerce');

   I.seeElement('.container');
});

Scenario('login com sucesso', async ({ I }) => {
   const fakeEmail = faker.internet.email();
   const fakePassword = faker.internet.password(8); 

   I.amOnPage('/login');

   I.fillField('#user', fakeEmail);
   I.fillField('#password', fakePassword);

   I.click('#btnLogin');

   const title = await I.grabTitle();
   console.log(title);
   assert.equal(title, 'QAZANDO Shop E-Commerce');

   I.see('Login realizado');
   I.click('OK');

   I.scrollTo('.theme-btn-one');

   I.see(fakeEmail)
   pause()

});
