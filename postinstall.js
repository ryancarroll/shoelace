const chalk = require('chalk');
const copy = require('recursive-copy');
const del = require('del');

(async () => {
  try {
    // Copy Feather Icons and license to src/components/icon/icons since local assets can't be linked from node_modules
    console.log(chalk.cyan('Copying icons 📦\n'));
    await del('./src/components/icon/icons');
    await Promise.all([
      copy('./node_modules/feather-icons/dist/icons', './src/components/icon/icons', { overwrite: true }),
      copy('./node_modules/feather-icons/LICENSE', './src/components/icon/icons/LICENSE', { overwrite: true })
    ]);
  } catch (err) {
    console.error(err);
  }
})();
