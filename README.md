# Email extractor from linkedin profile page

The project has two parts, chrome extension which extract email from linkedin profile page and node api which receives an api request with email in query param and response acknowledgement. The api has implementation to generate personalised linkedin message to connect with the user.

## Table of Contents

- [Extension setup](#extension-setup)
- [API Setup](#api-setup)

---

## Extension setup

- Navigate to chrome browser and hit `chrome://extensions`
- Click on `Load unpacked` button
- Navigate to extension project, in our case `extractor`

## Api setup

- Navigate to `node_api` project
- Run `npm i` command to install necessary libraries
- Run `npm run start` and monitor the log

### Chrome extension limitation

The extension can only check the profile page to extract email. Linkedin user email is placed in contact dialog which reqires to click on the button and open the dialog with a new url. The best way is to receive the contact email from contact dialog is using linkedin api. Another way is using chrome scripting execution api but it opens the dialog in the UI and let the user visit new url. I have explored few popular chrome extensions. Most of them extract email from profile description, few of them connect linkedin api behind the sceen to receive full profile information. To keep it simple with mentioned timeframe I have extracted the email from main profile page. There is no particular DOM or mailTo attribute in profile page. They are placed in contact modal.

### Bonus point implementation

Code implementation to connect with gpt model and generate message is added in the api but it's commented as it requires api key and credit card information. Unfortunately I dont have valid card right now to enable gpt model
