import { BaseLocation } from './base.location';

export class HeaderLocation extends BaseLocation {
	constructor(...fieldNames: string[]) {
		super('header', fieldNames);
	}
}
