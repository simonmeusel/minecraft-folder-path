const path = require('path');
const os = require('os');

function locate() {
  switch (os.type()) {
      case 'Darwin':
      return path.join(os.homedir(), "Library/Application Support/minecraft");

      case 'win32':
      case 'Windows_NT':
      return path.join(require('user-settings-dir')(), ".minecraft");

      default:
      return path.join(os.homedir(), ".minecraft");
  }
}

module.exports = locate();
