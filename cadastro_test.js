Feature('cadastro');

Scenario('cadastro com sucesso',  ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Cadastro')
  I.fillField('#user' , 'Daris sir')
  I.fillField('#email' , 'darius@gmail.com')
  I.fillField('#password' , 'Qwerty1234')
  I.click('#btnRegister')
  I.waitForText('Cadastro realizado' , 3)
  I.click('button.swal2-confirm')

}).tag('@sucesso-cadastro');

Scenario('cadastro com nome inválido', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Cadastro');
  I.fillField('#user', ''); // Nome em branco
  I.fillField('#email', 'darius@gmail.com');
  I.fillField('#password', 'Qwerty1234');
  I.click('#btnRegister');
  I.see('O campo nome deve ser prenchido');

}).tag('@nome-invalido');

Scenario('cadastro com e-mail inválido', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Cadastro');
  I.fillField('#user', 'Daris Sir');
  I.fillField('#email', 'dariusgmail.com'); // faltando o @
  I.fillField('#password', 'Qwerty1234');
  I.click('#btnRegister');
  I.see('E-mail inválido.');

}).tag('@email-invalido');

Scenario('cadastro com senha inválida', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Cadastro');
  I.fillField('#user', 'Daris Sir');
  I.fillField('#email', 'darius@gmail.com');
  I.fillField('#password', '123'); // muito curta
  I.click('#btnRegister');
  I.see('Senha inválida.');

}).tag('@senha-invalida');

Scenario('cadastro com todos os campos vazios', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/');
  I.click('Cadastro');
  I.fillField('#user', '');
  I.fillField('#email', '');
  I.fillField('#password', '');
  I.click('#btnRegister');
  I.see('Nome inválido.');

}).tag('@campos-vazios');
