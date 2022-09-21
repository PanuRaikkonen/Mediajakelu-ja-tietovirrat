'use strict';

module.exports = function (nodecg) {
  nodecg.Replicant('speakerReplicant', { defaultValue: 'Panu Räikkönen' });
  nodecg.Replicant('titleReplicant', { defaultValue: 'Köyhä Opiskelija' });
};
