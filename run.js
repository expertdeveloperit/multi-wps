/* eslint-disable no-console */
var shell = require('shelljs');
process.on('unhandledRejection', (error) => {
  throw error;
});

const program = require('commander');


program
  .command('deploy')
  .description('start the frontend server')
  .action(() => {
    shell.echo('Started Mobile Build');
    shell.exec('cd ./mobile/wpc/ && npm run build');
    shell.echo('Mobile Build Finished');
    shell.echo('Started Desktop Build');
    shell.exec('cd ./desktop/wpc/ && npm run build');
    shell.echo('Desktop Build Finished');
    shell.echo('Placing Build');
    shell.exec('gulp');
    shell.echo('Build Placed');
    shell.echo('Start Server');
    shell.exec('node server');
  });

program
  .command('install')
  .description('installing dependencies')
  .action(() => {
    shell.echo('Instaling mobile dependencies');
    shell.exec('cd ./mobile/wpc/ && npm install');
    shell.echo('Instaling desktop dependencies');
    shell.exec('cd ./desktop/wpc/ && npm install');
    shell.echo('Installation complete!');
  });

program.parse(process.argv);
