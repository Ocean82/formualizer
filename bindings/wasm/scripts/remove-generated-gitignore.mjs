import { unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = join(__dirname, '..', 'pkg', '.gitignore');

try {
  await unlink(target);
} catch (e) {
  if (e.code !== 'ENOENT') throw e;
}
