# Prerequisites
 - Node.js (v16 or later recommended)

 -  npm or yarn package manager

# Installation

 - npm install

# Running Tests

Chrome/Firefox/Webkit (Headless Mode) - npx bddgen && npx playwright test

## Run in Chrome 

- (Headed Mode) --> npx bddgen && npx playwright test --project 'Chromium' --headed
- (Headless Mode) --> npx bddgen && npx playwright test --project 'Chromium'

## Run in Firefox 

-  (Headed Mode) --> npx bddgen && npx playwright test --project 'firefox' --headed
-  (Headless Mode) --> npx bddgen && npx playwright test --project 'firefox'

## Run in Webkit 

- (Headed Mode) --> npx bddgen && npx playwright test --project 'webkit' --headed
- (Headless Mode) --> npx bddgen && npx playwright test --project 'webkit'

# View Report

- npx playwright show-report
Note - Test Execution Video is available in report and can be configured via playwright config

# Debug tests

Debug example of Chrome in Headed mode
- npx bddgen && npx playwright test --project 'Chromium' --headed --debug