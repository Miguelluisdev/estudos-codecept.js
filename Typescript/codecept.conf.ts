import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationpratice.com.br/',
      browser: 'edge',
      smartWait:3000,
      waitForTimeout: 5000,
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          args: ['--start-maximized']
        }
      }
    }
  },
  include: {
    I: './steps_file'
  },
  bootstrap: null,
  teardown: null,
  name: 'codecept'
};
