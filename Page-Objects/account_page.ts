import { faker } from '@faker-js/faker';
const { I } = inject();

export = {
  fields: {
    username: '#user',
    email: '#email',
    password: '#password'
  },
  buttons: {
    register: '#btnRegister',
    login: '#btnLogin'
  },

  async fillRegistrationForm(I: CodeceptJS.I, userData: { username: string; email: string; password: string }) {
    I.fillField(this.fields.username, userData.username);
    I.fillField(this.fields.email, userData.email);
    I.fillField(this.fields.password, userData.password);
    I.click(this.buttons.register);
  },

 async fillLoginForm(I: CodeceptJS.I, userData: { password: string }){
    I.fillField('#user' , faker.internet.email());
    I.fillField(this.fields.password, userData.password);
    I.checkOption("#materialUnchecked")
    I.click(this.buttons.login);

 }

};
