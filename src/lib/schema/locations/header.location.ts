import { BaseLocation } from './base.location';

export class HeaderLocation extends BaseLocation {
	constructor(fieldName: string) {
		super('header', fieldName);
	}
}
