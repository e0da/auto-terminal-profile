import {config} from '../config.js';

/*
 Matches:        on,  yes, Y, true,  T, enable,  ENABLED,  etc.
 Does not match: off, no,  N, false, F, disable, DISABLED, etc.
*/
const ON = /y|t|on|enable/i;

export function setSyncDefault(value) {
	config.syncDefault = String(value).match(ON);

	console.log(`sync-default set to '${value}'`);
}
