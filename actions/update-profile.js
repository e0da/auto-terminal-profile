import darkMode from 'dark-mode';
import {setTerminalDefaultProfile, setTerminalProfile} from 'terminal-profile';
import {config} from '../config.js';

export async function updateProfile() {
	if (!config.darkProfile) {
		throw new Error('Dark profile not set');
	}

	if (!config.lightProfile) {
		throw new Error('Light profile not set');
	}

	const mode = (await darkMode.isEnabled()) ? 'dark' : 'light';

	const deps = [];
	deps.push(setTerminalProfile(config[`${mode}Profile`]));

	if (config.syncDefault) {
		deps.push(setTerminalDefaultProfile(config[`${mode}Profile`]));
	}

	return Promise.all(deps);
}
