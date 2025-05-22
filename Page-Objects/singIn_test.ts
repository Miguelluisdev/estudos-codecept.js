
const loginPage = require('../pages/account_page')



Feature('singIn');

Scenario('login com sucesso', async ({ I }) => {
   
   const userData = {
    password: '123456'
  };
 
  I.amOnPage('/login');
  await loginPage.fillLoginForm(I,userData)
  // pause()
}).tag('@loginSucess');
