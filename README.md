# minecraft-folder-path
NPM package for retrieving the minecraft folder path

## Get the path of minecraft

```javascript
console.log(require('minecraft-folder-path'));
```

## Output

### On Linux
 > ~/.minecraft

### On Mac
 > ~/Library/Application Support/minecraft

### On Windows
 > %appdata%/.minecraft

#### Note that the path will be absolute, so `~` will be replaced with the actual user dir and `%appdata%` with the actual path
