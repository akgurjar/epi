import { BaseLocation } from './base.location';

export class CookieLocation extends BaseLocation {
	constructor(fieldName: string) {
		super('cookie', fieldName);
	}
}
