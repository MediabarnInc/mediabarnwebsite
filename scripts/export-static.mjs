// Wireframe review only: copies dist/ to export/ and rewrites root-relative links ("/research/")
// to file-relative ones ("../research/index.html"), so the build works from any host or folder.
import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const src = 'dist', out = 'export';
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const file of walk(out).filter((f) => f.endsWith('.html'))) {
	const fromDir = dirname(relative(out, file)) || '.';
	const html = readFileSync(file, 'utf8').replace(/(href|src)="\/(?!\/)([^"#?]*)([#?][^"]*)?"/g, (_, attr, path, tail = '') => {
		let target = path === '' || path.endsWith('/') ? path + 'index.html' : path;
		let rel = posix.relative(fromDir.split('\\').join('/'), target);
		if (!rel) rel = 'index.html';
		return `${attr}="${rel}${tail}"`;
	});
	writeFileSync(file, html);
}
console.log('exported to', out);
