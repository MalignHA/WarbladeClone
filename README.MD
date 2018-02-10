0.git clone repository(kommt noch)
1. node installieren
2. dependencies downloaden mit(commandline):
npm i 
lädt alles automatisch anhand package.json, wenn nicht dann:
npm i phaser-ce
npm i -g typescript
npm install -g requirejs
npm install uglify-es

3. in typescript coden

4.transpile:
tsc

5.bundlen:
node src/r.js -o src/build.js  optimize=none

6.uglify:
node_modules\.bin\uglifyjs.cmd --compress --mangle --output game/bundle.js -- game/bundle.js

7.per ftp hochladen oder zippen und auf cocoon.io hochladen:
index.html
lib-ordner
assets-ordner
game-ordner