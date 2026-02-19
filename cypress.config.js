const { defineConfig } = require("cypress");
const fs = require('fs')
const yaml = require('js-yaml')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on('task', {
        readYaml(filePath) {
          const file = fs.readFileSync(filePath, 'utf8')
          return yaml.load(file)
        }
      })

      return config
    },
  },
})