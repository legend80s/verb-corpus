const fs = require('fs');
const path = require('path');

const verbsGerunds = require('english-verbs-gerunds');
const verbsIrregular = require('english-verbs-irregular');
const extra = require('./resources/extra');
const blacklist = require('./resources/blacklist');

const verbsFromNpm = Object.keys(verbsGerunds).concat(Object.keys(verbsIrregular));

const rejected = [];

const complete = [
    ...new Set(verbsFromNpm.concat(extra)
      .map(v => v.trim())
      .filter(Boolean)
      .filter(verb => {
        if (/[\-\s]/.test(verb) || blacklist.includes(verb)) {
          rejected.push(verb);

          return false;
        }

        return true;
      })
    )
  ]
  .sort();

console.log(rejected.length, 'words includes space or "-" or in the blacklist will be rejected:');
console.log(rejected);

console.log('extra length:', extra.length);
console.log('verbs from npm package length:', verbsFromNpm.length);
console.log('complete verbs length:', complete.length);

fs.writeFileSync(path.join(__dirname, './resources/complete.json'), JSON.stringify(complete, null, 2))
