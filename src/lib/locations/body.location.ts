import { BaseLocation } from './base.location';

export class BodyLocation extends BaseLocation {
	constructor(...fieldNames: string[]) {
		super('body', fieldNames);
	}
}
