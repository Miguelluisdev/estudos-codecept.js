import { faker } from '@faker-js/faker';
const registerPage = require('../pages/account_page')

Feature('signUp');

Scenario('cadastro com sucesso', async ({ I }) => {

   const userData = {
    username: 'fgearaghrt',
    email: faker.internet.email(),
    password: '123456'
  };
   
   I.amOnPage('/register');
    await registerPage.fillRegistrationForm(I, userData);
});