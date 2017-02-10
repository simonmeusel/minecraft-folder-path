const os = require('os');

let folder = "";

switch (os.type()) {
    case 'Darwin':
    folder = os.homedir() + "/Library/Application Support/minecraft";
    break;

    case 'win32':
    case 'Windows_NT':
    folder = require('user-settings-dir')() + ".minecraft";
    break;

    default:
    folder = os.homedir() + "/.minecraft";
    break;
}

module.exports = folder;
