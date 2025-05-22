import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './test/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationpratice.com.br',
      show: true,
      chromium: {
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
      }
    }
  },
  plugins: {
  auth: {
    require: 'codeceptjs/plugins/auth',
    users: {
      admin: {
        login: async (I: CodeceptJS.I) => {
          I.amOnPage('/login');
          I.fillField('E-mail', 'admin@email.com');
          I.fillField('Senha', 'admin123');
          I.click('#btnLogin');
          I.see('Login realizado'); 
        }
      }
    }
  }
},
  include: {
    I: './steps_file',
    account_page: "./pages/account_page.ts",
  },
  name: 'codecept2'
}