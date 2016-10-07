#!/usr/bin/env node
const program = require('commander');
const emoji = require('node-emoji');
const colors = require('colors');
const opn = require('opn');
const notifier = require('node-notifier');

const awesomeContent = {
  github: 'https://github.com/cagataycali',
  linkedin : 'https://www.linkedin.com/in/cagataycali',
  npmjs: 'https://www.npmjs.com/~cagataycali'
}

program
.option('-l, --linkedin', 'Show linkedin profile')
.option('-g, --github', 'Show github profile')
.option('-n, --npmjs', 'Show my awesome node packages')
.parse(process.argv);

if (process.argv.length === 2) {
  console.log(colors.gray('Could you please try'), colors.green('cagatay -h'));
  notifier.notify({
    'title': 'It\'s not bug, It\'s feature!',
    'message': 'Could you please try `cagatay -h`'
  });
  process.exit()
}

program.options.forEach((option) => {

  /*
    Handle which option is next?
  */
  var handledOption = option.long.split('--').join('');

  /*
    Check these params handled.
  */
  if (eval('program.'+handledOption)) {
    console.log('Opening', colors.cyan('awesome'), colors.rainbow(handledOption), colors.green('profile!'), emoji.emojify(':zap:'));
    opn(awesomeContent[handledOption])
  } else {
    console.log(colors.green('Also you can look there:'), colors.gray(handledOption), 'profile');
  }
})
process.exit()
