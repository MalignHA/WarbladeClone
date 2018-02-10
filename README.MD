0. git clone repository  
https://github.com/alaska321/WarbladeClone.git

1. node installieren  
https://nodejs.org/en/download/

2. dependencies downloaden mit(commandline):
npm i -g typescript  
npm i  
lädt alles automatisch anhand package.json, wenn nicht dann:  
npm i phaser-ce  
npm i -g typescript  
npm install -g requirejs  
npm install uglify-es  

3. in typescript coden  

4. Game Builden:  
4.1 npm run build-game   
ALTERNATIVE:  
4.1 transpile:  
tsc  
4.2 bundlen:  
node src/r.js -o src/build.js  optimize=none  
4.3 uglify:  
npx uglifyjs.cmd --compress --mangle --output game/bundle.js -- game/bundle.js
5. per ftp hochladen für web oder für mobile: folgendes zippen und auf cocoon.io hochladen:  
index.html  
lib-ordner  
assets-ordner  
game-ordner  

## Mögliche Fehler
**npx** nicht gefunden ->  
`npm i -g npx`  
 oder  
 `npm i npm@5.2.0`