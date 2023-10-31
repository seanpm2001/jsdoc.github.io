const path = require('node:path');

const yamlLoad = require('../../lib/yaml-load');

module.exports = () => yamlLoad(path.join(__dirname, 'redirects.yaml')).redirects;
