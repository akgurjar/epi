import { BaseLocation } from './base.location';

export class CookieLocation extends BaseLocation {
	constructor(...fieldNames: string[]) {
		super('cookie', fieldNames);
	}
}
