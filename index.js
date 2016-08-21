const os = require('os');

let folder = "";

switch (os.type()) {
    case 'Linux':
    folder = os.homedir() + "/.minecraft";
    break;

    case 'Darwin':
    folder = os.homedir() + "/Library/Application Support/minecraft";
    break;
    
    case 'Windows_NT':
    folder = require('user-settings-dir')() + ".minecraft";
    break;
}

module.exports = folder;
