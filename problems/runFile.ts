import * as tsNode from 'ts-node';
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error(
    'Correct Script: yarn run-problem <targeting TypeScript file relative path under problems folder>',
  );
  process.exit(1);
}

const tsFilePath = args[0];

tsNode.register();
import(tsFilePath).catch((error) => {
  console.error('Error:', error.message);
});
