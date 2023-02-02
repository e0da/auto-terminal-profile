import Conf from 'conf';
import {readPackageUp} from 'read-pkg-up';

const {packageJson} = await readPackageUp({cwd: new URL('.', import.meta.url)});

const conf = new Conf({projectName: packageJson.name});

class Config {
	keys = {
		darkProfile: 'darkProfile',
		lightProfile: 'lightProfile',
		syncDefault: 'syncDefault',
	};

	/**
	 * @return {string}
	 */
	get darkProfile() {
		return conf.get(this.keys.darkProfile);
	}

	/**
	 * @param {string} profile
	 */
	set darkProfile(profile) {
		conf.set(this.keys.darkProfile, profile);
	}

	/**
	 * @return {string}
	 */
	get lightProfile() {
		return conf.get(this.keys.lightProfile);
	}

	/**
	 * @param {string} profile
	 */
	set lightProfile(profile) {
		conf.set(this.keys.lightProfile, profile);
	}

	/**
	 * @return {boolean}
	 */
	get syncDefault() {
		return conf.get(this.keys.syncDefault);
	}

	/**
	 * @param {boolean} value
	 */
	set syncDefault(value) {
		conf.set(this.keys.syncDefault, value);
	}
}

export const config = new Config();
