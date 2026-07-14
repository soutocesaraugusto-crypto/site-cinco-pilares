const fs = require('fs');
const path = require('path');

const dir = __dirname;
const template = fs.readFileSync(path.join(dir, 'template.html'), 'utf8');
const fontFaces = fs.readFileSync(path.join(dir, 'fonts', 'fonts_inline_var.css'), 'utf8');

const coversDir = path.join(dir, 'capas');
function imgDataUri(file, mime) {
  const b64 = fs.readFileSync(path.join(coversDir, file)).toString('base64');
  return `data:${mime};base64,${b64}`;
}

let out = template
  .replace('{{FONT_FACES}}', fontFaces)
  .replace('{{COVER1}}', imgDataUri('livro1.jpg', 'image/jpeg'))
  .replace('{{COVER2}}', imgDataUri('livro2.jpg', 'image/jpeg'))
  .replace('{{COVER3}}', imgDataUri('livro3.jpg', 'image/jpeg'))
  .split('{{HERO_BOY}}').join(imgDataUri('menino_hero.png', 'image/png'))
  .split('{{LOGO_METODO_ISAN}}').join(imgDataUri('logo-metodo-isan.png', 'image/png'))
  .split('{{AUTOR}}').join(imgDataUri('autor-cesar.jpg', 'image/jpeg'));

const outPath = path.join(dir, '..', 'index.html');
fs.writeFileSync(outPath, out);
console.log('Written', outPath, out.length, 'bytes');
