const fs = require('fs');
const path = require('path');
const { uniq, isValidVerb } = require('../utils/lite-lodash');

function main() {
  buildProgrammingVerbs();
  buildLexiconVerbs();
  buildCompleteVerbs();
}

main()

function buildProgrammingVerbs() {
  const rawVerbs = require('../resources/programming');

  const verbs = uniq(rawVerbs).filter(isValidVerb).sort();

  console.info(verbs.length, 'programming verbs');

  writeJSON('programming', verbs);
}

/**
 * Javascript version of Eric Brill's English lexicon.
 * Extract and normalize verbs which are tagged exactly by "VB" from github/dariusk/pos-js
 */
function buildLexiconVerbs() {
  const lexicon = require('pos/lexicon');

  // only extract verb base ("VB")
  // VB - https://web.stanford.edu/~jurafsky/slp3/8.pdf or https://github.com/dariusk/pos-js
  const rawVerbs = Object.keys(lexicon).filter((key) => lexicon[key].indexOf('VB') !== -1);

  const verbs = uniq(rawVerbs).filter(isValidVerb).sort();

  console.info(verbs.length, 'lexicon verbs');

  writeJSON('lexicon', verbs);
}

function buildCompleteVerbs() {
  const verbsGerunds = require('english-verbs-gerunds');
  const verbsIrregular = require('english-verbs-irregular');

  const programmingVerbs = require('../generated/programming.json');
  const lexiconVerbs = require('../generated/lexicon.json');

  const blacklist = require('../resources/blacklist');

  const verbsFromNpm = Object.keys(verbsGerunds).concat(Object.keys(verbsIrregular));

  const rejected = [];

  const rawVerbList = verbsFromNpm
    .concat(programmingVerbs)
    .concat(lexiconVerbs)
  ;

  const complete = uniq(
    rawVerbList
      .map(v => v.trim())
      .filter(Boolean)
      .filter(verb => {
        if (!isValidVerb(verb) || blacklist.includes(verb)) {
          rejected.push(verb);

          return false;
        }

        return true;
      })
  )
  .sort();

  console.log(rejected.length, 'words includes space or "-" or in the blacklist will be rejected:');
  console.log(rejected);

  console.log(programmingVerbs.length, 'programming verbs.');
  console.log(lexiconVerbs.length, 'lexicon verbs.');
  console.log(verbsFromNpm.length, 'npm package verbs.');
  console.log(complete.length, 'complete verbs.');

  writeJSON('complete', complete)
}

/**
 * @param {'programming' | 'lexicon' | 'complete'} category
 * @param {any} json
 */
function writeJSON(category, json) {
  const fp = `../generated/${category}.json`;

  fs.writeFileSync(path.join(__dirname, fp), JSON.stringify(json, null, 2))
}


