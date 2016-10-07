#!/usr/bin/env node
const program = require('commander');
const emoji = require('node-emoji');
const colors = require('colors');
const opn = require('opn');
const notifier = require('node-notifier');
const FeedSub = require('feedsub');
//
// const awesomeContent = {
//   github: 'https://github.com/cagataycali',
//   linkedin : 'https://www.linkedin.com/in/cagataycali',
//   npmjs: 'https://www.npmjs.com/~cagataycali'
// }
//
// program
// .option('-l, --linkedin', 'Show linkedin profile')
// .option('-g, --github', 'Show github profile')
// .option('-n, --npmjs', 'Show my awesome node packages')
// .parse(process.argv);
//
// program.options.forEach((option) => {
//
//   /*
//     Handle which option is next?
//   */
//   var handledOption = option.long.split('--').join('');
//
//   /*
//     Check these params handled.
//   */
//   if (eval('program.'+handledOption)) {
//     console.log(colors.cyan(awesomeContent[handledOption]));
//   } else {
//     console.log(colors.green('Also you can look there:'), colors.gray(handledOption));
//   }
// })
//

var reader = new FeedSub('https://github.com/cagataycali.atom', {
  interval: 1 // check feed every 10 minutes
});

reader.on('item', function(item) {
  console.log('Got item!');
  console.dir(item);
});

reader.start();
