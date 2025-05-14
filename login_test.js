Feature('login');

Scenario('login com success',  ({ I }) => {
 
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login')
  I.fillField('#user' , 'darius@gmail.com')
  I.fillField('#password' , 'Qwerty1234')
  I.click('#btnLogin')
  I.waitForText('Login realizado' , 3)

}).tag('@sucesso')

Scenario('login com erro na senha',  ({ I }) => {
 
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login')
  I.fillField('#user' , 'darius@gmail.com')
  I.fillField('#password' , 'Qwe')
  I.click('#btnLogin')
  I.waitForText('Senha inválida.' , 3)
}).tag('@password-error')

Scenario('login com erro no email',  ({ I }) => {
 
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login')
  I.fillField('#user' , 'dariusgmail.com')
  I.fillField('#password' , 'Qwerty1234')
  I.click('#btnLogin')
  I.waitForText('E-mail inválido.' , 3)
}).tag('@email-error')

Scenario('login com erro campos vazios',  ({ I }) => {
 
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login')
  I.fillField('#user' , '')
  I.fillField('#password' , '')
  I.click('#btnLogin')
  I.see('E-mail inválido.')
  I.see('Senha inválida.')
}).tag('@empty-fields')
