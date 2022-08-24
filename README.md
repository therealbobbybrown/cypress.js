### Как запустить?

1. Установить node.js: https://nodejs.org/en/download/
2. Скачать проект из github и открыть в IDE (я использую sublime): 
3. Запустить команду в гитбаше (в папке cypress): `npm install`
4. Установить cypress (в гитбаше): `npm install cypress --save-dev`
6. Запускать автотесты командой `npm run test` 
7. Все новые тесты нужно писать в папке /integration

### etc
* В package.json версия Cypress немного занижена
* Кастомайзить Cypress можно в cypress.json
* Запускать Cypress в git bash командой `node_modules/.bin/cypress open` из папки cypress.js-main
* Некоторые тесты могут падать (это нормально) - со временем сайты прочухивают и прикрывают лавочку, либо капчу мудрёную ставят
