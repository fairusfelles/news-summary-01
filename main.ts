// Read summary.txt and write it to entry.txt in the output directory
import { readFileSync, writeFileSync } from 'node:fs';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const summaryPath = new URL('summary.txt', import.meta.url);
const summaryText = readFileSync(summaryPath, 'utf8');
writeFileSync(`${outputDir}/entry.txt`, summaryText);
