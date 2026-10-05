// Lists every "[PLACEHOLDER ...]" still in the site source. Run: npm run placeholders
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../src/', import.meta.url).pathname;
const found = [];

(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(astro|ts|md)$/.test(name) && !name.endsWith('README.md')) {
      readFileSync(path, 'utf8')
        .split('\n')
        .forEach((line, index) => {
          for (const match of line.matchAll(/\[PLACEHOLDER[^\]]*\]/g)) {
            found.push(`src/${relative(root, path)}:${index + 1}  ${match[0]}`);
          }
        });
    }
  }
})(root);

console.log(found.length ? found.join('\n') : 'No placeholders left.');
console.log(`\n${found.length} placeholder${found.length === 1 ? '' : 's'} found in src/`);
