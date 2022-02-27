const completeVerbs = require('./generated/complete.json');
const programmingVerbs = require('./generated/programming.json');
const lexiconVerbs = require('./generated/lexicon.json');

module.exports.complete = completeVerbs;
module.exports.programming = programmingVerbs;

/**
 * Javascript version of Eric Brill's English lexicon.
 */
module.exports.lexicon = lexiconVerbs;
